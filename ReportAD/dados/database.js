const mysql = require('mysql')

/**
 * Configurações do banco
 */
const config = {
    host: 'localhost',
    user: 'teste',
    password: 'senha',
    database: 'sistemafinanceiroadsousa'
}

exports.Query = function (sql) {
    this.sql = sql;
    this.run = (callback)=>{
        // Inicializando a conexão
        var connection = mysql.createConnection(config)
        connection.connect((e) => {
            if (e) {
                console.log("Erro ao tentar conectar-se com o banco de dados\n" + e);
            }
        })

        // Executando operação no banco
        connection.query(this.sql,function(err, results, fields){
            if(err){
                console.log("Erro ao executar consulta no banco\n"+err);
                return;
            }
            callback(results);
        });
        // Finalizando a conexao
        connection.end();
    }
    
}