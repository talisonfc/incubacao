import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/cliente'
import { TIPO_PESSOA } from '../../model/cliente'
import { Element } from '@angular/compiler';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: Cliente;
  clientes: Array<Cliente>;
  cpf_cnpj: string;
  mensagem: string;

  mask_cpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-',/\d/, /\d/]
  mask_cnpj = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  mask_celular = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  constructor(private http: HttpClient) { 
    this.cliente = new Cliente();
    this.clientes = new Array();
    this.cliente.tipo_pessoa = TIPO_PESSOA.FISICA;
    this.setTipoPessoa(this.cliente.tipo_pessoa);
  }

  ngOnInit() {
    this.http.get<Cliente[]>('http://127.0.0.1:5000/clientes').subscribe(res => {
      this.clientes = res;
      //console.log(this.clientes)
    })
  }

  tipo_pessoa(tipo: number){
    //console.log(tipo);
    this.setTipoPessoa(tipo);
  }

  setTipoPessoa(tipo: number):void{
    this.cliente.tipo_pessoa = tipo;
    if(tipo === TIPO_PESSOA.FISICA){
      this.cpf_cnpj = "CPF";
    }
    else if(tipo === TIPO_PESSOA.JURIDICA){
      this.cpf_cnpj = "CNPJ";
    }
  }

  cadastrar(){
    this.cliente.print();
    this.http.post<Cliente>('http://127.0.0.1:5000/cliente',{
      nome_completo: this.cliente.nome,
      tipo_de_pessoa: this.cliente.tipo_pessoa === 1? "FISICA": "JURIDICA",
      cpf_cnpj: this.cliente.cpf_cnpj,
      email: this.cliente.email,
      celular: this.cliente.celular
    }).subscribe(res=>{
      //console.log(res)
      this.mensagem = "Cliente cadastrado com sucesso!"
      this.clientes.push(res);
    })
  }

  limpar(){
    this.cliente = new Cliente();
  }

}
