var db = require('../db_config.js')

exports.list = function(callback){
	db.Item.find({}, function(err, result){
		if(err){
			callback({error: "ERROR LIST"});
		}
		else{
			callback(result)
		}
	})
}

exports.create = function(nome, callback){
	new db.Item({'nome': nome}).save(function(err, result){
		if(err){
			callback({error: "ERROR CREATE"})
		}
		else{
			callback(result)
		}
	})
}

exports.update = function(id, nome, callback){
	db.Item.findById(id, function(err, result){
		if(err){
			callback({error: "ERROR UPDATE"})
		}
		else{
			console.log(result)
			if(result){
				result.nome = nome;
				result.save(function(err, result){
					if(err){
						callback("ERROR UDATE TWO")
					}
					else{
						callback(result)
					}
				})
			}
			else{
				callback({res: "Item não encontrado"})
			}
		}
	})
}

exports.delete = function(id, callback){
	db.Item.findById(id, function(err, result){
		if(err){
			callback({error: "ERROR DELETE"})
		}
		else{
			if(result){
				result.remove(function(err){
					if(!err){
						callback({res: "Item removido com sucesso"})
					}
				})
			}
			else{
				callback({res: "Item não encontrado"})
			}
		}
	})
}

exports.getById = function(id, callback){
	db.Item.findById(id, function(err, result){
		if(err){
			callback({error: "ERROR GETBYID"})
		}
		else{
			callback(result)
		}
	})
}