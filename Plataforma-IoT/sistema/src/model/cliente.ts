export enum TIPO_PESSOA{
    FISICA = 1,
    JURIDICA = 2
}

export class Cliente{
    nome: string;
    tipo_pessoa: number;
    cpf_cnpj: string;
    email: string;
    celular: string;

    print(){
        console.log(this);
    }
}