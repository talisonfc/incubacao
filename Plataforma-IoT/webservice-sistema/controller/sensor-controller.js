var db = require('../db_config.js')

exports.list = function(callback){
    db.Sensor.find({}, function(error, sensores){
        if(error){
            callback({error: 'Não foi possivel retornar lista de sensores'})
        }
        else{
            callback(sensores)
        }
    })
}

exports.sensorById = function(id, callback){
    db.Sensor.findById(id, function(error, sensor){
        if(error){
            callback({error: 'Erro ao tentar buscar sensor'})
        }
        else{
            callback(sensor)
        }
    })
}

exports.save = function(nome, descricao, callback){
    new db.Sensor({
        'nome': nome,
        'descricao': descricao,
        'valor': 0
    }).save(function(error, sensor){
        if(error){
            callback({error: 'Erro ao tentar salvar sensor'})
        }
        else{
            callback(sensor)
        }
    })
}

exports.update = function(id, nome, descricao, valor, callback){
    db.Sensor.findById(id, function(error, sensor){
        if(nome){
            sensor.nome = nome
        }

        if(descricao){
            sensor.descricao = descricao
        }

        if(valor){
            sensor.valor = valor
        }

        sensor.save(function(error, sensor){
            if(error){
                callback({error: "Não foi possivel atualizar sensor"})
            }
            else{
                callback(sensor)
            }
        })
    })
}

exports.delete = function(id, callback){
    db.Sensor.findById(id, function(error, sensor){
        if(error){
            callback({error:'Erro ao tentar deletar sensor'})
        }
        else{
            if(sensor){
                sensor.remove(function(error){
                    if(!error){
                        callback({'resposta': 'Sensor removido com sucesso'})
                    }
                })
            }
            else{
                callback({'resposta': 'Sensor não encontrado'})
            }
        }
    })
}
