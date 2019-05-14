var database = require('./database')
var preparingSql = require('./preparingSql')

var db = new database.Query();
var values = new preparingSql.PreparingSql()

exports.Informacao = function(){
    this.id;
    this.tipo;
    this.descricao;
    this.valor;
    this.data;
    this.tabela;
    this.inicio;
    this.fim;
    this.sql = function(op,response){
        switch(op){
            case 'insert':{
                values.sql = ''
                values.addNumber(this.tipo)
                values.addString(this.descricao)
                values.addNumber(this.valor)
                values.addString(this.data)
                db.sql = "insert into "+this.tabela+" values (null,"+values.sql+")"
                console.log(db.sql)
                break;
            }
            case 'delete':{
                db.sql = "delete from "+this.tabela+" where id="+String(this.id);
                break;
            }
            case 'update':{
                //db.sql = "update tipo set nome='"+this.nome+"' where id="+this.id;
                break;
            }
            case 'select':{
                db.sql = "select * from "+this.tabela+" where id="+String(this.id);
                break;
            }
            case 'selectInterval':{
                db.sql = "select * from "+this.tabela+" where data>='"+this.inicio+"' and data<='"+this.fim+"'"
                break;
            }
            case 'list':{
                db.sql = "select * from "+this.tabela;
                break;
            }
        }
        // Callback de resposa
        db.run(response)
    }
}