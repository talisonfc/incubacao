var obj = require("../controllers/item-controller.js")

/*
listar de categorias
criar categoria
deletar categoria
buscar categoria por id
*/
var op = ["/itens", "/item", "/item/:id", "/item/:id", "/item"]

exports.services = function(app){
	app.get(op[0], (req, res)=>{
		obj.list(function(result){
			res.json(result)
		})
	})

	app.post(op[1], (req, res)=>{

		nome = req.param('nome');

		obj.create(nome, function(result){
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
		id = req.param('id')
		nome = req.param('nome')

		obj.update(id, nome, function(result){
			res.json(result)
		})
	})
}