import { Component, OnInit, Input } from '@angular/core';
import {Venda} from '../../model/venda'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-venda-lista',
  templateUrl: './venda-lista.component.html',
  styleUrls: ['./venda-lista.component.css']
})
export class VendaListaComponent implements OnInit {

  @Input()
  vendas: Array<Venda>

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  delete(id: String, index: number) {
    this.http.delete('http://127.0.0.1:5000/venda/' + id).subscribe(res => {
      //console.log(res);
      //console.log(index);
      this.vendas.splice(index,1);
    })
  }

}
