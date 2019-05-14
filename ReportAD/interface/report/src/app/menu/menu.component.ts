import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  op: string = '';
  titulo: string = ''
  tabela: string
  add: boolean = false;

  constructor() { 
  }

  ngOnInit() {
  }

  opcao(op){
    this.op = op;
    this.add = false;
    switch(op){
      case '1':{
        this.titulo = 'Entrada'
        this.tabela = 'informacao_entrada'
        break
      }
      case '2':{
        this.titulo = 'Saída'
        this.tabela = 'informacao_saida'
        break
      }
      case '3':{
        this.titulo = 'Relatório'
        this.tabela = 'relatorio'
        break
      }
    }
  }

}
