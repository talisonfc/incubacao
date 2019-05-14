import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../model/usuario'

@Component({
  selector: 'app-dasheboard',
  templateUrl: './dasheboard.component.html',
  styleUrls: ['./dasheboard.component.css']
})
export class DasheboardComponent implements OnInit {
  
  @Input()
  usuario: Usuario;

  @Output()
  autenticacao = new EventEmitter<boolean>();

  opcao: String = "app-monitor";

  constructor() { }

  ngOnInit() {

  }

  menu(op:String):void{
    this.opcao = op;
    //console.log(this.opcao)
  }

  sair(){
    this.usuario = null;
    this.autenticacao.emit(false);
  }
}
