import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CardapioPage } from '../pages/cardapio/cardapio';
import { CategoriaPage } from '../pages/categoria/categoria';
import { PratoPage } from '../pages/prato/prato';
import { ItemPage } from '../pages/item/item';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CardapioProvider } from '../providers/cardapio/cardapio';
import { CategoriaProvider } from '../providers/categoria/categoria';
import { PratoProvider } from '../providers/prato/prato';
import { ItemProvider } from '../providers/item/item';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CardapioPage,
    CategoriaPage,
    PratoPage,
    ItemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CardapioPage,
    CategoriaPage,
    PratoPage,
    ItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CardapioProvider,
    CategoriaProvider,
    PratoProvider,
    ItemProvider
  ]
})
export class AppModule {}
