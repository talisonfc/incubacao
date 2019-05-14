var obj = require("../controllers/prato-controller.js")

/*
listar de pratos
criar prato
deletar prato
buscar prato por id
adicionar item ao prato
*/
var op = ["/pratos", 
			"/prato", 
			"/prato/:id", 
			"/prato/:id", 
			"/prato", 
			"/prato/all/:id", 
			"/prato/:id/:iditem"]

exports.services = function(app){
	app.get(op[0], (req, res)=>{
		obj.list(function(result){
			res.json(result)
		})
	})

	app.post(op[1], (req, res)=>{

		nome = req.param('nome');
		valor = req.param('valor');
		image = req.param('image');

		obj.create(nome, valor, image, function(result){
			res.json(result)
		})
	})

	app.delete(op[2], (req, res)=>{
		id = req.param('id')

		obj.delete(id, function(result){
			res.json(result)
		})
	})

	app.get(op[3], (req, res)=>{
		id = req.param('id')

		obj.getById(id, function(result){
			res.json(result)
		})
	})

	app.put(op[4], (req, res)=>{
		var id = req.param('id')
		var id_item = req.param('iditem')

		obj.update(id, id_item, function(result){
			res.json(result)
		})
	})

	app.get(op[5], (req, res)=>{
		id = req.param('id')

		obj.getAllById(id, function(result){
			res.json(result)
		})
	})

	app.delete(op[6], (req, res)=>{
		id = req.param('id')
		iditem = req.param('iditem')

		obj.deleteItem(id, iditem, function(result){
			res.json(result)
		})
	})
}