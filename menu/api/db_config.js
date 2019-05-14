var mongoose = require('mongoose');

// dados de acesso ao banco
var url = "mongodb://127.0.0.1/menu";

mongoose.connect(url);

var db = mongoose.connection;

// verificar erro na conexão
db.on('error', ()=>{
	console.error("Error ao tentar se conectar ao banco!")
});

db.on('open', ()=>{
	console.log("Conexão com o banco estabelecida com sucesso!")

	// Menu
	var menuSchema = mongoose.Schema({
		nome: String,
		categorias: new Array()
	})

	exports.Menu = mongoose.model("Menu", menuSchema)

	// Categoria
	var categoriaSchema = mongoose.Schema({
		nome: String,
		pratos: new Array()
	})

	exports.Categoria = mongoose.model('Categoria', categoriaSchema);

	// Prato
	var pratoSchema = mongoose.Schema({
		nome: String,
		valor: Number,
		image: String,
		itens: new Array()
	})

	exports.Prato = mongoose.model("Prato", pratoSchema)

	// Item
	var itemSchema = mongoose.Schema({
		nome: String,
		descricao: String
	})

	exports.Item = mongoose.model('Item', itemSchema);

})