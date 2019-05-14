import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ItemModel } from '../../model/item'
import { ItemProvider } from '../../providers/item/item'


@IonicPage()
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {

	item: ItemModel;
	lista: Array<ItemModel>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	private itemProvider: ItemProvider) {
  	this.item = new ItemModel();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPage');
    this.itemProvider.list().subscribe(res=>{
    	this.lista = res;
    })
  }

  criar(){
  	this.itemProvider.save(this.item).subscribe(res=>{
  		this.lista.push(this.item);
  		this.item = new ItemModel();
  	})
  }

  delete(id:string, index: number){
  	this.itemProvider.delete(id).subscribe(res=>{
  		this.lista.splice(index,1)
  	})
  }

}
