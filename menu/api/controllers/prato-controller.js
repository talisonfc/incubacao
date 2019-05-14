var db = require('../db_config.js')

exports.list = function(callback){
	db.Prato.find({}, function(err, result){
		if(err){
			callback({error: "ERROR LIST"});
		}
		else{
			callback(result)
		}
	})
}

exports.create = function(nome, valor, image, callback){
	new db.Prato({
		'nome': nome,
		'valor': valor,
		'image': image
	}).save(function(err, result){
		if(err){
			callback({error: "ERROR CREATE"})
		}
		else{
			callback(result)
		}
	})
}

exports.update = function(id, id_item, callback){
	db.Prato.findById(id, function(err, result){
		if(err){
			callback({error: "ERROR PUT"})
		}
		else{
			result.itens.push(id_item)
			result.save(function(err, result){
				if(err){
					callback({error: "ERROR PUT SAVE"})
				}
				else{
					callback(result)
				}
			})
		}
	})
}

exports.delete = function(id, callback){
	db.Prato.findById(id, function(err, result){
		if(err){
			callback({error: "ERROR DELETE"})
		}
		else{
			if(result){
				result.remove(function(err){
					if(!err){
						callback({res: "Prato removido com sucesso"})
					}
				})
			}
			else{
				callback({res: "Prato não encontrado"})
			}
		}
	})
}

exports.deleteItem = function(id, id_item, callback){
	db.Prato.findById(id, function(err, result){
		if(err){
			callback({error: "ERROR DELETE"})
		}
		else{
			if(result){
				result.itens.forEach((e,i)=>{
					if(e===id_item){
						
						result.itens.splice(i,1);
						console.log(result.itens)
						result.save(function(err, result){
							if(!err){
								callback(result)
							}
						})
						return;
					}
				})
			}
			else{
				callback({res: "Prato não encontrado"})
			}
		}
	})
}

exports.getById = function(id, callback){
	db.Prato.findById(id, function(err, result){
		if(err){
			callback({error: "ERROR GETBYID"})
		}
		else{
			callback(result)
		}
	})
}

/*
Retornar todos os dados do objeto buscado, incluindo aqueles que ele armazena apenas o id
*/
exports.getAllById = function(id, callback){
	db.Prato.findById(id, function(err, result){
		if(err){
			callback({error: "ERROR GETBYID"})
		}
		else{
			var buffer = new Array();
			
			for(var i=0; i<result.itens.length; i++){
				db.Item.findById(result.itens[i], (err, resultItem)=>{
					buffer.push(resultItem)
					if(buffer.length === result.itens.length){
						result.itens = buffer
						callback(result)
					}
				})
			}
			
		}
	})
}