var obj = require("../controllers/cardapio-controller.js")

var op = ["/menus","/menu","/menu/:id","/menu/:id","/menu"]

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

	app.delete("/menu/categoria/:id/:idcategoria", (req, res)=>{
		id = req.param('id')
		idcategoria = req.param('idcategoria')

		obj.deleteCategoria(id, idcategoria, function(result){
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
		idcategoria = req.param('idcategoria')

		obj.update(id, idcategoria, function(result){
			res.json(result)
		})
	})
}