import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Produto } from '../../model/produto'

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto;
  produtos: Array<Produto>;
  mensagem: string;

  constructor(private http:HttpClient) { 
    this.produto = new Produto();
    this.produto.sensor = false;
    this.produtos = new Array();
  }

  ngOnInit() {
    this.http.get<Produto[]>('http://127.0.0.1:5000/produtos').subscribe((res)=>{
      this.produtos = res;
    })
  }

  cadastrar(){
    this.produto.print();
    this.http.post<Produto>('http://127.0.0.1:5000/produto', this.produto).subscribe(res=>{
      //console.log(res);
      this.produtos.push(res)
      this.mensagem = "Produto cadastrado com sucesso!"
    })
  }

  limpar(){
    this.produto = new Produto();
  }

  sensor(){
    this.produto.sensor = !this.produto.sensor;
  }
}
