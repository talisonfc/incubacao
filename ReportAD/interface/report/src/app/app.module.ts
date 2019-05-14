import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { TabelaInformacaoComponent } from './tabela-informacao/tabela-informacao.component';
import { InserirInformacaoComponent } from './inserir-informacao/inserir-informacao.component';
import { MenuComponent } from './menu/menu.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { TabelaRelatorioComponent } from './tabela-relatorio/tabela-relatorio.component';


@NgModule({
  declarations: [
    AppComponent,
    TabelaInformacaoComponent,
    InserirInformacaoComponent,
    MenuComponent,
    RelatorioComponent,
    TabelaRelatorioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
