import { Component, OnInit, Input } from '@angular/core';
import { Informacao } from './informacao'
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';
import { Tipo } from '../inserir-informacao/tipo'

@Component({
  selector: 'app-tabela-informacao',
  templateUrl: './tabela-informacao.component.html',
  styleUrls: ['./tabela-informacao.component.css']
})
export class TabelaInformacaoComponent implements OnInit {

  @Input() informacoes: Informacao[];
  @Input() tabela: string;
  info: Informacao;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  remove(id){
    this.http.get("http://localhost:3000/?delete&"+this.tabela+"&"+id).subscribe(resultado=>{
      this.informacoes.forEach((element,index)=>{
        if(element.id == id){
          for(var i=index; i<this.informacoes.length-1; i++){
            this.informacoes[i] = this.informacoes[i+1]
          }
          this.informacoes.pop()
          return
        }
      })
    })
  }

  edit(id){
    this.informacoes.forEach((data)=>{
      if(data.id == id){
        this.info = data;
      }
    })
  }
  
}
