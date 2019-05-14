import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { CardapioModel } from '../../model/cardapio'
import { CategoriaModel } from '../../model/categoria'
import { PratoModel } from '../../model/prato'
import { ItemModel } from '../../model/item'

import { CardapioProvider } from '../../providers/cardapio/cardapio'
import { CategoriaProvider } from '../../providers/categoria/categoria'
import { PratoProvider } from '../../providers/prato/prato'
import { ItemProvider } from '../../providers/item/item'

import { CategoriaPage } from '../../pages/categoria/categoria';

@IonicPage()
@Component({
  selector: 'page-cardapio',
  templateUrl: 'cardapio.html',
})
export class CardapioPage {

	cardapio: CardapioModel;
	lista: Array<CardapioModel>;
  listaCategoria: Array<CategoriaModel>;
  listaPrato: Array<PratoModel>;
  listaItem: Array<ItemModel>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	private cardapioProvider: CardapioProvider,
    private categoriaProvider: CategoriaProvider,
    private pratoProvider: PratoProvider,
    private alertControll: AlertController,
    private itemProvider: ItemProvider) {
  	this.cardapio = new CardapioModel();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapioPage');
    this.cardapioProvider.list().subscribe(res=>{
    	this.lista = res;
      // Fazer a leitura dos nomes das categorias
      this.lista.forEach(elementCardapio=>{
        elementCardapio.categorias.forEach((elementCategoria)=>{
          this.categoriaProvider.getById(String(elementCategoria)).subscribe(res=>{
            // Fazer leitura do nome dos pratos
            res.pratos.forEach(elementPrato=>{
              this.pratoProvider.getById(String(elementPrato)).subscribe(resp=>{
                resp.itens.forEach(elementItem=>{
                  this.itemProvider.getById(String(elementItem)).subscribe(resItem=>{
                    resp.itens.push(resItem);
                    resp.itens.splice(0,1);
                  })
                })

                res.pratos.push(resp);
                res.pratos.splice(0,1);
              })
            })
            
            //console.log(res);
            elementCardapio.categorias.push(res);
            elementCardapio.categorias.splice(0,1);
            //console.log(res);
          })
        })
      })
    })

    // Carregando todas as categorias cadastradas
    this.categoriaProvider.list().subscribe(res=>{
      this.listaCategoria = res;
    })

    // Carregando todos os pratos cadastrados
    this.pratoProvider.list().subscribe(res=>{
      this.listaPrato = res;
    })

    // Carregando todos os itens
    this.itemProvider.list().subscribe(res=>{
      this.listaItem = res;
    })
  }

  criar(){
  	this.cardapioProvider.save(this.cardapio).subscribe(res=>{
  		this.lista.push(this.cardapio);
      this.cardapio = new CardapioModel();
  	})
  }

  delete(id:string, index: number){
  	this.cardapioProvider.delete(id).subscribe(res=>{
  		this.lista.splice(index,1)
      console.log(index);
  	})
  }

  addCategoria(){
    let alert = this.alertControll.create();
    alert.setTitle("Categorias")

    for(var i=0; i<this.listaCategoria.length; i++){
      let cat = this.listaCategoria[i];
      let label: String = cat.nome;
      alert.addInput({
        type: 'checkbox',
        label: cat.nome,
        value: cat._id,
        checked: false
      })
    }

    alert.addButton({
      text: 'Adcionar',
      handler: data => {
        let id_categorias = data.toString().split(',')
        if(id_categorias[0] !== ""){
          id_categorias.forEach(element => {
            this.cardapioProvider.addCategoria({id: this.lista[0]._id, idcategoria: element}).subscribe(res=>{
              console.log(res)
            })
          })
        }
      }
    })

    alert.present();
  }

  removeCategoria(idCardapio:string, idCategoria:string){
    this.cardapioProvider.removeCategoria(idCardapio, idCategoria).subscribe(res=>{
      console.log(res)
    })
  }

  addPrato(id: string){
    let alert = this.alertControll.create();
    alert.setTitle("Pratos")

    for(var i=0; i<this.listaPrato.length; i++){
      let prat = this.listaPrato[i];
      let label: String = prat.nome;
      alert.addInput({
        type: 'checkbox',
        label: prat.nome,
        value: prat._id,
        checked: false
      })
    }

    alert.addButton({
      text: "Adicionar",
      handler: data=>{
        data.forEach(element=>{
          this.categoriaProvider.addPrato({id: id, idprato: element}).subscribe(res=>{
            console.log(res);
          })
        })
        //console.log(data.length);
      }
    })
    alert.present()
  }

  addItem(id: string){
    let alert = this.alertControll.create();
    alert.setTitle("Itens")

    for(var i=0; i<this.listaItem.length; i++){
      let it = this.listaItem[i];
      alert.addInput({
        type: 'checkbox',
        label: it.nome,
        value: it._id,
        checked: false
      })
    }

    alert.addButton({
      text: "Adicionar",
      handler: data=>{
        data.forEach(element=>{
          this.itemProvider.addItem({id: id, iditem: element}).subscribe(res=>{
            console.log(res);
          })
        })
        //console.log(data.length);
      }
    })
    alert.present()
  }
}
