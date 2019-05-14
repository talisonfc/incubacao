var database = require('./database')
var preparingSql = require('./preparingSql')

var db = new database.Query();
var values = new preparingSql.PreparingSql()

exports.Relatorio = function(){
    this.id;
    this.data_inicio;
    this.data_fim;
    this.descricao;
    this.status
    this.sql = function(op,response){
        switch(op){
            case 'insert':{
                values.sql = ''
                values.addString(this.data_inicio)
                values.addString(this.data_fim)
                values.addString(this.descricao)
                values.addString(this.status)
                db.sql = "insert into relatorio values (null,"+values.sql+")"
                console.log(db.sql)
                break;
            }
            case 'delete':{
                db.sql = "delete from relatorio where id="+String(this.id);
                break;
            }
            case 'update':{
                //db.sql = "update tipo set nome='"+this.nome+"' where id="+this.id;
                break;
            }
            case 'select':{
                db.sql = "select * from relatorio where id="+String(this.id);
                break;
            }
            case 'list':{
                db.sql = 'select * from relatorio'
                break;
            }
        }
        // Callback de resposa
        db.run(response)
    }
}