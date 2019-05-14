import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PratoModel } from '../../model/prato'
import { PratoProvider } from '../../providers/prato/prato'

@IonicPage()
@Component({
  selector: 'page-prato',
  templateUrl: 'prato.html',
})
export class PratoPage {

	prato: PratoModel;
	lista: Array<PratoModel>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	private pratoProvider: PratoProvider) {
  	this.prato = new PratoModel();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PratoPage');
    this.pratoProvider.list().subscribe(res=>{
    	this.lista = res;
    })
  }

  criar(){
  	this.pratoProvider.save(this.prato).subscribe(res=>{
  		this.lista.push(this.prato);
  		this.prato = new PratoModel();
  	})
  }

  delete(id:string, index: number){
  	this.pratoProvider.delete(id).subscribe(res=>{
  		this.lista.splice(index,1)
  	})
  }
}
