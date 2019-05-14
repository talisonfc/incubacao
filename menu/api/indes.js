var app = require('./app_config.js')
var db = require('./db_config.js')

const PORT = 3000;

var http = app.listen(PORT, ()=>{
	console.log("Servidor iniciado - "+PORT);
})

require('./services/cardapio-service.js').services(app);
require('./services/categoria-service.js').services(app);
require('./services/prato-service.js').services(app);
require('./services/item-service.js').services(app);