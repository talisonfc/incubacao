export class Venda{
    id_cliente: String
    produtos: Array<String>
    quantidades: Array<Number>

    constructor(){
        this.produtos = new Array();
        this.quantidades = new Array();
    }
}