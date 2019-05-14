import { Component, OnInit, Input } from '@angular/core';
import { Informacao } from '../tabela-informacao/informacao'
import {Tipo, TipoEnum} from './tipo'
import { HttpClient } from '@angular/common/http';
import { DataBaseResponse } from './databaseresponse'

@Component({
  selector: 'app-inserir-informacao',
  templateUrl: './inserir-informacao.component.html',
  styleUrls: ['./inserir-informacao.component.css']
})
export class InserirInformacaoComponent implements OnInit {
  informacoes: Informacao[] = new Array();
  tipos: Tipo[] = new Array();
  info: Informacao;
  @Input() tabela: string

  constructor(private http:HttpClient) {
    this.info = new Informacao();
   }

  ngOnInit() {
    this.http.get<Informacao[]>("http://localhost:3000/?list&"+this.tabela, 
    {observe: 'response'}).subscribe(dados=>{
      //console.log(dados.headers)
      //console.log(dados.body)
      this.informacoes = dados.body;
    })

    this.http.get<Tipo[]>("http://localhost:3000/?selectTipoSaida&tipo&3",
    {observe: 'response'}).subscribe((dados)=>{
      this.tipos = dados.body
    })
  }

  salvar(){
    if(this.info.isValidate()){
      this.http.get<DataBaseResponse>("http://localhost:3000/?insert&"+this.tabela+"&"+this.info.getUrl()).subscribe(data=>{
        let dbr = data
        this.info.id = data.insertId
        this.informacoes.push(this.info)
        this.info = new Informacao()
      })
    }
  }

  setTipo(t){
    if(this.tabela == 'informacao_entrada'){
      switch(t){
        case 1:{
          this.info.tipo = TipoEnum.DIZIMO;
          break
        }
        case 2:{
          this.info.tipo = TipoEnum.OFERTA;
          break
        }
        case 3:{
          this.info.tipo = TipoEnum.OFERTA_MISSIONARIA;
          break
        }
      }
    }
    else{
      //console.log(t)
      this.tipos.forEach(element=>{
        if(element.nome == t){
          //console.log(element.id)
          this.info.tipo = element.id;
        }
      })
    }
  }
}
