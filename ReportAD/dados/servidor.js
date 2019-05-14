const http = require('http');
const fs = require('fs')

var tipo = require('./tipo')
var usuario = require('./usuario')
var informaca = require('./informacao')
var relatorio = require('./relatorio')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {

    console.log('requisicao ....')
    /*
    if ( request.method === 'GET' ) {
        obj = {
            name: 'talison',
            sobrenome: 'fernandes'
        }
        response.write(JSON.stringify(obj))
        response.end();
		return;
    }
    */
    request.on('error', (err) => {
        console.log(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        //console.log(request.url)
        //console.log(request.url.split('?'))
        //console.log(request.headers.origin) //URL da origem

        var buffer = request.url.split('?');
        var pagina = buffer[0];

        if (pagina === "/" && buffer[1]===undefined) {
            fs.readFile('./index.html', (erro, dados) => {
                if (erro) throw erro;

                response.write(String(dados));
                response.end();
            })
        }
        else if(pagina === "/"){

            // Configuração cebecalho de resposta
            response.setHeader('Access-Control-Allow-Origin', '*');
            response.setHeader( 'content-type', 'application/json')
            response.writeHead(200);

            var b = buffer[1];
            b = b.split('&');
            
            // Decodifica os caracteres especiais da url
            for(var i=0; i<b.length; i++){
                b[i] = decodeURI(b[i]);
            }

            console.log("Parametros: "+b)
            //Processa requisicao em funcão da classe
            if(b[1]==='tipo'){
                var t = new tipo.Tipo();
                t.id = b[2]
                t.nome = b[3]
                
                t.sql(b[0],function(res){
                    response.write(JSON.stringify(res))
                    response.end()
                })
            }
            else if(b[1]==='usuario'){
                var u = new usuario.Usuario();
                u.id = b[2]
                u.tipo = b[3]
                u.nome = b[4]
                u.email = b[5]
                u.senha = b[6]

                //console.log(u.toString())

                u.sql(b[0],function(res){
                    response.write(JSON.stringify(res))
                    response.end();
                })
            }
            else if(b[1]==='informacao_entrada'){
                var info = new informaca.Informacao()
                info.id = b[2]
                info.tipo = b[3]
                info.descricao = b[4]
                info.valor = b[5]
                info.data = b[6]
                info.tabela = 'informacao_entrada'
                info.inicio = b[2]
                info.fim = b[3]

                info.sql(b[0],function(res){
                    response.write(JSON.stringify(res))
                    response.end();
                })
            }
            else if(b[1]==='informacao_saida'){
                var info = new informaca.Informacao()
                info.id = b[2]
                info.tipo = b[3]
                info.descricao = b[4]
                info.valor = b[5]
                info.data = b[6]
                info.tabela = 'informacao_saida'
                info.inicio = b[2]
                info.fim = b[3]
                
                info.sql(b[0],function(res){
                    response.write(JSON.stringify(res))
                    response.end();
                })
            }
            else if(b[1]==='relatorio'){
                var r = new relatorio.Relatorio();
                r.id = b[2]
                r.data_inicio = b[3]
                r.data_fim = b[4]
                r.descricao = b[5]

                r.sql(b[0],function(res){
                    response.write(JSON.stringify(res))
                    response.end();
                })
            }
            
        }
        else {
            fs.exists("." + pagina, (exist) => { // testa se o arquivo existe
                if (exist) {
                    fs.readFile("." + request.url, (erro, dados) => {
                        if (erro) throw erro;

                        response.write(String(dados));
                        response.end();
                    })

                }
                else {
                    fs.readFile('./erro.html', (erro, dados) => {
                        if (erro) throw erro;

                        response.write(String(dados));
                        response.end();
                    })
                }
            })
        }
    })
}).listen(port, hostname, 10, ()=>{
    console.log("Servidor rodando...\nhost: "+hostname+"\nport: "+port)
})