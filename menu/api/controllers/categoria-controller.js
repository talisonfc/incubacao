var db = require('../db_config.js')

exports.list = function(callback){
	db.Categoria.find({}, function(err, result){
		if(err){
			callback({error: "ERROR LIST"});
		}
		else{
			callback(result)
		}
	})
}

exports.create = function(nome, callback){
	new db.Categoria({'nome': nome}).save(function(err, result){
		if(err){
			callback({error: "ERROR CREATE"})
		}
		else{
			callback(result)
		}
	})
}

exports.update = function(id, id_prato, callback){
	db.Categoria.findById(id, function(err, result){
		if(err){
			callback({error: "ERROR UPDATE"})
		}
		else{
			result.pratos.push(id_prato)
			result.save(function(err, result){
				if(err){
					callback({error: "ERROR SAVE"})
				}
				else{
					callback(result)
				}
			})
		}
	})
}

exports.delete = function(id, callback){
	db.Categoria.findById(id, function(err, result){
		if(err){
			callback({error: "ERROR DELETE"})
		}
		else{
			if(result){
				result.remove(function(err){
					if(!err){
						callback({res: "Categoria removido com sucesso"})
					}
				})
			}
			else{
				callback({res: "Categoria não encontrado"})
			}
		}
	})
}

exports.getById = function(id, callback){
	db.Categoria.findById(id, function(err, result){
		if(err){
			callback({error: "ERROR GETBYID"})
		}
		else{
			callback(result)
		}
	})
}