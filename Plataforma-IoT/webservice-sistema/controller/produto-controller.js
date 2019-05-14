var db = require('../db_config.js')

exports.list = function(callback){
    db.Produto.find({}, function(error, produtos){
        if(error){
            callback({error: 'Não foi possivel retornar lista de produtos'})
        }
        else{
            callback(produtos)
        }
    })
}

exports.produto = function(id, callback){
    db.Produto.findById(id, function(error, produto){
        if(error){
            callback({error: 'Erro ao tentar buscar produto'})
        }
        else{
            callback(produto)
        }
    })
}

exports.produtoByName = function(nome, callback){
    db.Produto.find({nome: nome}, function(error, produto){
        if(error){
            callback({error: 'Erro ao tentar buscar produto'})
        }
        else{
            callback(produto)
        }
    })
}

exports.save = function(nome, descricao, valor, estado, id_sensor, callback){
    new db.Produto({
        'nome': nome,
        'descricao': descricao,
        'valor': valor,
        'sensor': estado,
        'id_sensor': id_sensor
    }).save(function(error, produto){
        if(error){
            callback({error: 'Erro ao tentar salvar produto'})
        }
        else{
            callback(produto)
        }
    })
}

exports.delete = function(id, callback){
    db.Produto.findById(id, function(error, produto){
        if(error){
            callback({error:'Erro ao tentar deletar produto'})
        }
        else{
            if(produto){
                produto.remove(function(error){
                    if(!error){
                        callback({'resposta': 'produto removido com sucesso'})
                    }
                })
            }
            else{
                callback({'resposta': 'produto não encontrado'})
            }
        }
    })
}
