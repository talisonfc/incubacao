var db = require('../db_config.js')

exports.list = function(callback){
    db.Usuario.find({}, function(error, usuarios){
        if(error){
            callback({error: 'Não foi possivel retornar lista de usuarios'})
        }
        else{
            callback(usuarios)
        }
    })
}

exports.usuario = function(id, callback){
    db.Usuario.findById(id, function(error, usuario){
        if(error){
            callback({error: 'Erro ao tentar buscar usuario'})
        }
        else{
            callback(usuario)
        }
    })
}

exports.autenticar = function(email, senha, callback){
    db.Usuario.findOne({
        email: email,
        senha: senha
    }, function(error, usuario){
        if(error){
            callback({error:'Erro ao tentar autenticar'})
        }
        else{
            callback(usuario)
        }
    })
}

exports.save = function(email, senha, callback){
    new db.Usuario({
        'email': email,
        'senha': senha
    }).save(function(error, usuario){
        if(error){
            callback({error: 'Erro ao tentar salvar usuario'})
        }
        else{
            callback(usuario)
        }
    })
}

exports.delete = function(id, callback){
    db.Usuario.findById(id, function(error, usuario){
        if(error){
            callback({error:'Erro ao tentar deletar usuario'})
        }
        else{
            if(usuario){
                usuario.remove(function(error){
                    if(!error){
                        callback({'resposta': 'usuario removido com sucesso'})
                    }
                })
            }
            else{
                callback({'resposta': 'usuario não encontrado'})
            }
        }
    })
}
