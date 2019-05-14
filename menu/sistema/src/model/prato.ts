export class PratoModel{
	nome: string;
	valor: number;
	image: string;
	itens: Array<String>;

	constructor(){
		this.itens = new Array<String>();
	}
}