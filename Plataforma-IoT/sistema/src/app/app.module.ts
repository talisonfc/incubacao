import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { TextMaskModule} from 'angular2-text-mask'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule, MatCard} from '@angular/material/card'
import {MatRadioModule} from '@angular/material/radio'
import {MatMenuModule} from '@angular/material/menu'
import {MatTableModule} from '@angular/material/table'
import {ReactiveFormsModule} from '@angular/forms'
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatCheckboxModule} from "@angular/material/checkbox"

import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { DasheboardComponent } from './dasheboard/dasheboard.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { VendaComponent } from './venda/venda.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { VendaListaComponent } from './venda-lista/venda-lista.component';
import { SensorComponent } from './sensor/sensor.component';
import { SensorListaComponent } from './sensor-lista/sensor-lista.component'
import { MonitorComponent } from './monitor/monitor.component';

import { SocketIoModule, SocketIoConfig} from 'ng-socket-io'
import { MonitorService } from '../providers/monitorService';
import { UsuarioComponent } from './usuario/usuario.component'

const config: SocketIoConfig = {
  url: '8081-dot-3407536-dot-devshell.appspot.com',
  options: {}
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClienteComponent,
    DasheboardComponent,
    ProdutoComponent,
    ProdutoListaComponent,
    VendaComponent,
    ClienteListaComponent,
    VendaListaComponent,
    SensorComponent,
    SensorListaComponent,
    MonitorComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTableModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    FormsModule,
    TextMaskModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [MonitorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
