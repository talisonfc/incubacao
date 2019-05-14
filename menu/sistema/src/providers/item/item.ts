import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ItemModel } from '../../model/item'

const API_URL = "http://localhost:3000";

@Injectable()
export class ItemProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ItemProvider Provider');
  }

  list(){
  	return this.http.get<ItemModel[]>(API_URL+"/itens")
  }

  save(obj: any){
  	return this.http.post(API_URL+"/item", obj)	
  }

  delete(id: string){
  	return this.http.delete(API_URL+"/item/"+id)
  }

  getById(id: string){
  	return this.http.get<ItemModel>(API_URL+"/item/"+id)
  }

  addItem(obj: any){
    return this.http.put(API_URL+"/prato", obj)
  }
}
