import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import {CardapioProvider} from '../../providers/cardapio/cardapio'
import {CategoriaProvider} from '../../providers/categoria/categoria'
import {PratoProvider} from '../../providers/prato/prato'
import {ItemProvider} from '../../providers/item/item'

import {CardapioModel} from '../../model/cardapio'
import {CategoriaModel} from '../../model/categoria'
import {PratoModel} from '../../model/prato'
import {ItemModel} from '../../model/item'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

	cardapio: Array<CardapioModel>
	categoria: Array<CategoriaModel>
	prato: Array<PratoModel>
	item: Array<ItemModel>

  constructor(public navCtrl: NavController,
  	private cardapioProvider: CardapioProvider,
  	private categoriaProvider: CategoriaProvider,
  	private pratoProvider: PratoProvider,
  	private itemProvider: ItemProvider) {

  	this.cardapio = new Array();
  	this.categoria = new Array();
  	this.prato = new Array();
  	this.item = new Array();
  }

  ngOnInit(){
  	this.cardapioProvider.list().subscribe(res=>{
  		this.cardapio = res;
  	})

  	this.categoriaProvider.list().subscribe(res=>{
  		this.categoria = res;
  	})

  	this.pratoProvider.list().subscribe(res=>{
  		this.prato = res;
  	})

  	this.itemProvider.list().subscribe(res=>{
  		this.item = res;
  	})
  }

}
