import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PratoModel } from '../../model/prato'

const API_URL = "http://localhost:3000";

@Injectable()
export class PratoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PratoProvider Provider');
  }

  list(){
  	return this.http.get<PratoModel[]>(API_URL+"/pratos")
  }

  save(obj: any){
  	return this.http.post(API_URL+"/prato", obj)	
  }

  delete(id: string){
  	return this.http.delete(API_URL+"/prato/"+id)
  }

  getById(id: string){
  	return this.http.get<PratoModel>(API_URL+"/prato/"+id)
  }

}
