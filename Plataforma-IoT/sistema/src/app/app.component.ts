import { Component } from '@angular/core';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario: Usuario;
  autenticacao: boolean = false;

  constructor(){
    this.usuario = new Usuario();
  }
  
  autenticar(estado: any){
    this.autenticacao = estado;
  }

}
