import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CategoriaModel } from '../../model/categoria'
import { CategoriaProvider } from '../../providers/categoria/categoria'
import { PratoProvider } from '../../providers/prato/prato'


@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

	categoria: CategoriaModel;
	lista: Array<CategoriaModel>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	private categoriaProvider: CategoriaProvider,
    private pratoProvider: PratoProvider) {
  	this.categoria = new CategoriaModel();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaPage');
    this.categoriaProvider.list().subscribe(res=>{
      this.lista = res;
      // Fazer leitura do nome dos pratos      
      res.forEach(elementCategoria=>{
        elementCategoria.pratos.forEach(elementPrato=>{
          this.pratoProvider.getById(String(elementPrato)).subscribe(resp=>{
            elementCategoria.pratos.push(resp);
            elementCategoria.pratos.splice(0,1);
          })  
        })
        
      })
      
    })
  }

  criar(){
  	this.categoriaProvider.save(this.categoria).subscribe(res=>{
  		this.lista.push(this.categoria);
  		this.categoria = new CategoriaModel();
  	})
  }

  delete(id:string, index: number){
  	this.categoriaProvider.delete(id).subscribe(res=>{
  		this.lista.splice(index,1)
  	})
  }
}
