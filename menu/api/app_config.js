var express = require('express');
var bodyParser = require('body-parser');

var app = module.exports = express();


//croos origin resourse service
var allowCors = function(req, res, next){

	res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE')
    res.header('Access-Control-Allow-Headers','Content-Type')
    res.header('Access-Control-Allow-Credentials', 'true')

    next();
}

app.use(allowCors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
