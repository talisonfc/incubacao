var app = require('./app_config.js')
var db = require('./db_config.js')

const PORT = 8081;
const HOST = '127.0.0.1';

var http = app.listen(PORT,HOST,()=>{
    console.log("Servidor iniciado - "+HOST+":"+PORT)
})

// inicializando o websocket
var io = require('socket.io')(http)

io.on('connection', function(socket){
    console.log('+ websocket iniciado')
})

// Servicos
require('./service/cliente-service.js').services(app)
require('./service/usuario-service.js').services(app)
require('./service/produto-service.js').services(app)
require('./service/venda-service.js').services(app)
require('./service/sensor-service.js').services(app, io)