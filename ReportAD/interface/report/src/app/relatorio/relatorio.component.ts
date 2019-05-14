import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataBaseResponse} from '../inserir-informacao/databaseresponse'
import { element } from 'protractor';
import { Informacao } from '../tabela-informacao/informacao'
import { Tipo } from '../inserir-informacao/tipo'

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  relatorio: Relatorio = new Relatorio();
  relatorios: Relatorio[];
  selectedRelatorio: Relatorio;
  informacoes_entrada: Informacao[] = new Array();
  informacoes_saida: Informacao[] = new Array();
  estatisticas_entrada: number[] = new Array();
  estatisticas_saida: number[] = new Array();
  tipos: Tipo[];
  tipoRelatorio: number;

  constructor(private http:HttpClient) {
   }

  ngOnInit() {
    this.http.get<Relatorio[]>("http://localhost:3000/?list&relatorio").subscribe(data=>{
      this.relatorios = data
    })
  }

  salvar(){
    this.relatorio.status = STATUSRELATORIO.ABERTO
    
    console.log(JSON.stringify(this.relatorio))
    this.http.get<DataBaseResponse>("http://localhost:3000/?insert&relatorio&"+this.relatorio.url()).subscribe(data=>{
      let res:DataBaseResponse = data
      this.relatorio.id = res.insertId
      this.relatorios.push(this.relatorio)
      this.relatorio = new Relatorio()
    })
    
  }

  editar(id){

  }

  remover(id){
    console.log(id)
    this.http.get("http://localhost:3000/?delete&relatorio&"+id).subscribe(data=>{
      this.relatorios.forEach((item,index)=>{
        if(item.id == id){
          for(var i = index; i<this.relatorios.length-1; i++){
            this.relatorios[i] = this.relatorios[i+1]
          }
          this.relatorios.pop()
          return
        }
      })
    })
  }

  ver(id){
    this.relatorios.forEach(item=>{
      if(item.id == id){
        this.selectedRelatorio = item
        return
      }
    })
  }

  detalhe(){
    this.tipoRelatorio = 2;

    let inicio = this.selectedRelatorio.data_inicio.split('T')[0]
    let fim = this.selectedRelatorio.data_fim.split('T')[0]
    this.http.get<Informacao[]>("http://localhost:3000/?selectInterval&informacao_entrada&"+inicio+"&"+fim+"").subscribe(data=>{
      this.informacoes_entrada = data
    })

    this.http.get<Informacao[]>("http://localhost:3000/?selectInterval&informacao_saida&"+inicio+"&"+fim+"").subscribe(data=>{
      this.informacoes_saida = data
    })
  }

  resumo(){
    this.tipoRelatorio = 1

    let inicio = this.selectedRelatorio.data_inicio.split('T')[0]
    let fim = this.selectedRelatorio.data_fim.split('T')[0]
    
    /** Soma dos valores por tipo */
    this.http.get<Tipo[]>('http://localhost:3000/?list&tipo').subscribe(data=>{
      this.tipos = data
      for(var i=0; i<3; i++){
        this.estatisticas_entrada.push(0)
      }
      
      for(var i=3; i<this.tipos.length; i++){
        this.estatisticas_saida.push(0)
      }

      /** Resumo de entradas */
      this.http.get<Informacao[]>("http://localhost:3000/?selectInterval&informacao_entrada&"+inicio+"&"+fim+"").subscribe(data=>{
        data.forEach(item=>{
          this.tipos.forEach((element,index)=>{
            if(item.tipo === element.id){
              this.estatisticas_entrada[index] += item.valor
              return
            }
          })
        })
      })


      /** Resumo de saidas */
      this.http.get<Informacao[]>("http://localhost:3000/?selectInterval&informacao_saida&"+inicio+"&"+fim+"").subscribe(data=>{
        data.forEach(item=>{
          this.tipos.forEach((element,index)=>{
            if(item.tipo === element.id){
              this.estatisticas_saida[index-3] += item.valor
            }
          })
        })
      })

    })
    
    
  }
}

enum STATUSRELATORIO{
  ABERTO = 'ABERTO',
  FECHADO = 'FECHADO'
}

enum TIPORELATORIO{
  RESUMIDO = 1,
  DETALHADO
}

class Relatorio{
  id: number;
  data_inicio: string;
  data_fim: string;
  descricao: string
  status: string

  url(){
    return String(this.id)+"&"+this.data_inicio+"&"+this.data_fim+"&"+this.descricao+"&"+this.status
  }

}