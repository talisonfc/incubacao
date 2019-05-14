import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PratoPage } from './prato';

@NgModule({
  declarations: [
    PratoPage,
  ],
  imports: [
    IonicPageModule.forChild(PratoPage),
  ],
})
export class PratoPageModule {}
