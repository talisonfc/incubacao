var database = require('./database')
var preparingSql = require('./preparingSql')

var db = new database.Query();
var values = new preparingSql.PreparingSql()

exports.Usuario = function(){
    this.id;
    this.tipo;
    this.nome = '';
    this.email = '';
    this.senha = '';
    this.sql = function(op, response){
        switch(op){
            case 'insert':{
                values.sql = ''
                values.addNumber(this.tipo)
                values.addString(this.nome)
                values.addString(this.email)
                values.addString(this.senha)
                db.sql = "insert into usuario values (null,"+values.sql+")"
                console.log(db.sql)
                break;
            }
            case 'delete':{
                db.sql = "delete from usuario where id="+String(this.id);
                break;
            }
            case 'update':{
                //db.sql = "update tipo set nome='"+this.nome+"' where id="+this.id;
                break;
            }
            case 'select':{
                db.sql = "select * from usuario where id="+String(this.id);
                break;
            }
            case 'list':{
                db.sql = 'select * from usuario'
                break;
            }
        }
        // Callback de resposa
        db.run(response)
    }
    this.toString = ()=>{
        return {id:this.id,tipo:this.tipo,nome:this.nome,email:this.email,senha:this.senha};
    }
}