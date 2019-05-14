export class Informacao{
    id: number;
    tipo: number;
    descricao: string;
    valor: number;
    data: Date;

    constructor(){
        this.data = new Date();
    }

    isValidate():boolean{
        if(this.tipo === undefined && this.descricao === undefined && this.valor === undefined && this.data === undefined)
            return false
        return true
    }

    getUrl():string{
        if(this.isValidate){
            return ""+this.id+"&"+this.tipo+"&"+this.descricao+"&"+this.valor+"&"+this.data;
        }
        return ''
    }
}