import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/cliente'
import { Produto } from '../../model/produto'
import { Venda } from '../../model/venda'
import { HttpClient } from '@angular/common/http'
import {FormControl} from '@angular/forms'
import {Observable} from 'rxjs/Observable'
import {startWith} from 'rxjs/operators/startWith'
import {map} from 'rxjs/operators/map'
import { element } from 'protractor';
import { Sensor } from '../../model/sensor';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  myControl: FormControl = new FormControl()

  options = Array<Cliente>();
  optionsP = Array<Produto>();

  opcao: string;
  opcaoProduto: string;

  filteredOptions: Observable<string[]>;

  venda: Venda = new Venda();
  vendas: Array<Venda>

  constructor(private http:HttpClient) { 
    this.vendas = new Array();
  }

  searchCliente(event){
    //console.log(this.opcao)
    if(event.keyCode === 13 ){
      this.http.get<Cliente[]>('http://127.0.0.1:5000/clientePorNome/'+this.opcao).subscribe(res=>{
        //console.log(res);
        if(res.length > 0){
          this.options = res;
          /*
          res.forEach(element=>{
            this.options.push(element)
          })
          */
        }
      })
    }
    
  }

  searchProduto(event){
    //console.log(event.keyCode)
    if(event.keyCode === 13){
      this.http.get<Produto[]>('http://127.0.0.1:5000/produtoPorNome/'+this.opcaoProduto).subscribe(res=>{
        //console.log(res);
        if(res.length > 0){
          this.optionsP = res;
          if(res[0].id_sensor !== ""){
            this.http.get<Sensor>('http://127.0.0.1:5000/sensor/'+res[0].id_sensor).subscribe(res=>{
              this.venda.quantidades.push(res.valor);
            })
          }
        }
      })
    }
  }

  selectClient(id:string){
    //console.log("teste element "+id)
    this.venda.id_cliente = id;
  }

  selectProduto(id:string, nome:string){
    this.venda.produtos.push(id);
    this.opcaoProduto = nome;
  }

  ngOnInit() {
    /*
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),map(val=>this.filter(val))
    )
    */
    
    this.http.get<Venda[]>('http://127.0.0.1:5000/vendas').subscribe(res=>{
      this.vendas = res;
    })
  }

  /*
  filter(val: string): string[]{
    return this.options.filter(option => {
      option.toLowerCase().indexOf(val.toLowerCase()) === 0
    })
  }
  */

  finalizar(){
    console.log(this.venda)
    this.http.post<Venda>('http://127.0.0.1:5000/venda', this.venda).subscribe(res => {
      //console.log(res)
      this.vendas.push(res);
    })
  }

  cancelar(){
    this.options = new Array<Cliente>();
    this.venda = new Venda();
  }

}
