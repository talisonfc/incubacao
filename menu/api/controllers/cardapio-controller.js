var db = require('../db_config.js')

exports.list = function(callback){
	db.Menu.find({}, function(err, result){
		if(err){
			callback({error: "ERROR LIST"});
		}
		else{
			callback(result)
		}
	})
}

exports.create = function(nome, callback){
	new db.Menu({'nome': nome}).save(function(err, result){
		if(err){
			callback({error: "ERROR CREATE"})
		}
		else{
			callback(result)
		}
	})
}

exports.update = function(id, id_categoria, callback){
	db.Menu.findById(id, function(err, result){
		if(err){
			callback({error: "ERROR UPDATE"})
		}
		else{
			result.categorias.push(id_categoria)
			result.save(function(err, result){
				if(err){
					callback({error: "ERROR UPDATE"})
				}
				else{
					callback(result)
				}
			})
		}
	})
}

exports.delete = function(id, callback){
	db.Menu.findById(id, function(err, result){
		if(err){
			callback({error: "ERROR DELETE"})
		}
		else{
			if(result){
				result.remove(function(err){
					if(!err){
						callback({res: "Menu removido com sucesso"})
					}
				})
			}
			else{
				callback({res: "Menu não encontrado"})
			}
		}
	})
}

exports.getById = function(id, callback){
	db.Menu.findById(id, function(err, result){
		if(err){
			callback({error: "ERROR MENU"})
		}
		else{
			callback(result)
		}
	})
}

exports.deleteCategoria = function(id, id_categoria, callback){
	db.Menu.findById(id, function(err, result){
		if(err){
			callback({error: "ERROR DELETE CATEGORIA"})
		}
		else{
			if(result){
				result.categorias.forEach((element,index)=>{
					if(element === id_categoria){
						result.categorias.splice(index,1);
						result.save(function(err,result){
							if(err){
								callback({error: "ERROR REMOVE CATEGORIA"})
							}
							callback(result)
						})
					}
				})
			}
			else{
				callback({res: "Menu não encontrado"})
			}
		}
	})
}