var database = require('./database')

var db = new database.Query();

exports.Tipo = function(){
    this.id = '';
    this.nome = '';
    this.sql = (op,response)=>{// op -> operacao
        switch(op){
            case 'insert':{
                db.sql = "insert into tipo values (null,'"+this.nome+"')"
                break;
            }
            case 'delete':{
                db.sql = "delete from tipo where id="+this.id;
                break;
            }
            case 'update':{
                db.sql = "update tipo set nome='"+this.nome+"' where id="+this.id;
                break;
            }
            case 'select':{
                db.sql = "select * from tipo where id="+this.id;
                break;
            }
            case 'selectTipoSaida':{
                db.sql = "select * from tipo where id>"+this.id;
                break;
            }
            case 'list':{
                db.sql = 'select * from tipo'
                break;
            }
        }
        // Callback de escrita do resultado
        // É possivel implementar o callback de leitura das propriedades de cada campo
        db.run(response)
    };
}

