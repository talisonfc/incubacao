import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaModel } from '../../model/categoria'

const API_URL = "http://localhost:3000";

@Injectable()
export class CategoriaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CategoriaProvider Provider');
  }

  list(){
  	return this.http.get<CategoriaModel[]>(API_URL+"/categorias")
  }

  save(obj: any){
  	return this.http.post(API_URL+"/categoria", obj)	
  }

  delete(id: string){
  	return this.http.delete(API_URL+"/categoria/"+id)
  }

  getById(id: string){
  	return this.http.get<CategoriaModel>(API_URL+"/categoria/"+id)
  }

  addPrato(obj:any){
  	return this.http.put(API_URL+"/categoria",obj)
  }
}
