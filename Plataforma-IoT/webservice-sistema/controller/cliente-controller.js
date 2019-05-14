var db = require('../db_config.js')

exports.list = function(callback){
    db.Cliente.find({}, function(error, clientes){
        if(error){
            callback({error: 'Não foi possivel retornar lista de clientes'})
        }
        else{
            callback(clientes)
        }
    })
}

exports.clienteById = function(id, callback){
    db.Cliente.findById(id, function(error, cliente){
        if(error){
            callback({error: 'Erro ao tentar buscar cliente'})
        }
        else{
            callback(cliente)
        }
    })
}

exports.clienteByName = function(nome, callback){
    db.Cliente.find({nome_completo: nome}, function(error, clientes){
        if(error){
            callback({error: 'Não foi possivel retornar lista de clientes'})
        }
        else{
            callback(clientes)
        }  
    })
}

exports.save = function(nome_completo, tipo_de_pessoa, cpf_cnpj, email, celular, callback){
    new db.Cliente({
        'nome_completo': nome_completo,
        'tipo_de_pessoa': tipo_de_pessoa,
        'cpf_cnpj': cpf_cnpj,
        'email': email,
        'celular': celular
    }).save(function(error, cliente){
        if(error){
            callback({error: 'Erro ao tentar salvar cliente'})
        }
        else{
            callback(cliente)
        }
    })
}

exports.delete = function(id, callback){
    db.Cliente.findById(id, function(error, cliente){
        if(error){
            callback({error:'Erro ao tentar deletar cliente'})
        }
        else{
            if(cliente){
                cliente.remove(function(error){
                    if(!error){
                        callback({'resposta': 'Cliente removido com sucesso'})
                    }
                })
            }
            else{
                callback({'resposta': 'Cliente não encontrado'})
            }
        }
    })
}

// Implementação dos métodos http
