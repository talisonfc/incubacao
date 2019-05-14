
// URL do banco de dados
var db_string = 'mongodb://127.0.0.1/sistema'
// Pacote para manpulação do banco de dados mongodb
var mongoose = require('mongoose');
// Criando conexão
mongoose.connect(db_string)
// Obtendo a conexão
var db = mongoose.connection;
// Verificar se ocorreu erro com a conexão
db.on('error', console.error.bind(console,'Erro ao conectar no banco'));
// Inicializar configuração do banco
db.once('open',function(){

    // Cliente
    var clienteSchema = mongoose.Schema({
        nome_completo: String,
        tipo_de_pessoa: String,
        cpf_cnpj: String,
        email: String,
        celular: String
    })

    exports.Cliente = mongoose.model('Cliente', clienteSchema);

    // Usuario do sistema
    var usuarioSchema = mongoose.Schema({
        email: String,
        senha: String
    })

    exports.Usuario = mongoose.model('Usuario',usuarioSchema);

    // Produto
    var produtoSchema = mongoose.Schema({
        nome: String,
        descricao: String,
        valor: Number,
        sensor: Boolean,
        id_sensor: String
    })

    exports.Produto = mongoose.model('Produto', produtoSchema);

    // Venda
    var vendaSchema = mongoose.Schema({
        id_cliente: String,
        produtos: [],
        quantidades: []
    })

    exports.Venda = mongoose.model('Venda',vendaSchema);

    // Sensor
    var sensorSchema = mongoose.Schema({
        nome: String,
        descricao: String,
        valor: Number
    })

    exports.Sensor = mongoose.model('Sensor', sensorSchema);

});
