var db = require('../db_config.js')

exports.list = function(callback){
    db.Venda.find({}, function(error, vendas){
        if(error){
            callback({error: 'Não foi possivel retornar lista de vendas'})
        }
        else{
            callback(vendas)
        }
    })
}

exports.venda = function(id, callback){
    db.Venda.findById(id, function(error, venda){
        if(error){
            callback({error: 'Erro ao tentar buscar venda'})
        }
        else{
            callback(venda)
        }
    })
}

exports.save = function(usuario, produtos, quantidades, callback){
    new db.Venda({
        'id_cliente': usuario,
        'produtos': produtos,
        'quantidades': quantidades
    }).save(function(error, venda){
        if(error){
            callback({error: 'Erro ao tentar salvar venda'})
        }
        else{
            callback(venda)
        }
    })
}

exports.delete = function(id, callback){
    db.Venda.findById(id, function(error, venda){
        if(error){
            callback({error:'Erro ao tentar deletar venda'})
        }
        else{
            if(venda){
                venda.remove(function(error){
                    if(!error){
                        callback({'resposta': 'venda removido com sucesso'})
                    }
                })
            }
            else{
                callback({'resposta': 'venda não encontrado'})
            }
        }
    })
}
