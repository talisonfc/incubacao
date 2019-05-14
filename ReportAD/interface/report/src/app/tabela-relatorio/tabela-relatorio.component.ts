import { Component, OnInit, Input } from '@angular/core';
import { Informacao } from '../tabela-informacao/informacao'

@Component({
  selector: 'app-tabela-relatorio',
  templateUrl: './tabela-relatorio.component.html',
  styleUrls: ['./tabela-relatorio.component.css']
})
export class TabelaRelatorioComponent implements OnInit {

  @Input() informacoes: Informacao[];
  
  constructor() { }

  ngOnInit() {
  }

}
