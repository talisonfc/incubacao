export class Usuario{

    usuario: String;
    senha: String;

    constructor(){}

    equal(user: Usuario): boolean{
        if(this.usuario === user.usuario && this.senha === user.senha)
            return true;
        return false;
    }

    toString():void{
        //console.log("Usuario: "+this.usuario);
        //console.log("Senha: "+this.senha);
    }
}