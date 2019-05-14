import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CardapioModel } from '../../model/cardapio'

const API_URL = "http://localhost:3000";

@Injectable()
export class CardapioProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MenuProvider Provider');
  }

  list(){
  	return this.http.get<CardapioModel[]>(API_URL+"/menus")
  }

  save(obj: any){
  	return this.http.post(API_URL+"/menu", obj)	
  }

  delete(id: string){
  	return this.http.delete(API_URL+"/menu/"+id)
  }

  getById(id: string){
  	return this.http.get<CardapioModel>(API_URL+"/menu/"+id)
  }

  addCategoria(obj:any){
  	return this.http.put(API_URL+"/menu",obj)
  }

  removeCategoria(id: string, idcategoria: string){
    return this.http.delete(API_URL+"/menu/categoria/"+id+"/"+idcategoria)
  }
}
