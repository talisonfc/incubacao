export class CategoriaModel{
	nome: String;
	pratos: Array<String>;

	constructor(){
		this.pratos = new Array<String>();
	}
}