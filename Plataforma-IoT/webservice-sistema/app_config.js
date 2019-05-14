// Pacote para cricar um servidor node
var express = require('express')

var app = module.exports = express();

// Pacote que permite trabalhar com json dentro do servidor
var bodyParser = require('body-parser')

// Confirurações de acesso
var allowCors = function(req, res, next){

    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE')
    res.header('Access-Control-Allow-Headers','Content-Type')
    res.header('Access-Control-Allow-Credentials', 'true')

    next();
}

app.use(allowCors);

// Iniciando o servidor
/*
var http = app.listen(5000,'127.0.0.1',()=>{
    console.log('Servidor iniciado!')
})
*/

// Configurando o app para usar o body-parser
app.use(bodyParser.json()) // Configurando o uso do json
app.use(bodyParser.urlencoded({
    extended: true
}))
