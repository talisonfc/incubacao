var clienteController = require('../controller/cliente-controller')

exports.services = function(app){
    app.get('/clientes', (req, res)=>{
        clienteController.list(function(resp){
            res.json(resp)
        })
    })

    app.get('/cliente/:id', (req, res)=>{
        var id = req.param('id')

        clienteController.clienteById(id, function(resp){
            res.json(resp);
        })
    })

    app.get('/clientePorNome/:nome', (req, res)=>{
        var nome = req.param('nome')
        console.log(nome)
        clienteController.clienteByName(nome, function(resp){
            res.json(resp)
        })
    })

    app.post('/cliente', (req, res)=>{
        nome_completo = req.param('nome_completo')
        tipo_de_pessoa = req.param('tipo_de_pessoa')
        cpf_cnpj = req.param('cpf_cnpj')
        email = req.param('email')
        celular = req.param('celular')

        clienteController.save(nome_completo, tipo_de_pessoa, cpf_cnpj, email, celular, function(resp){
            res.json(resp)
        })
    })

    app.delete('/cliente/:id', (req, res)=>{
        var id = req.param('id')

        clienteController.delete(id,function(resp){
            res.json(resp);
        })
    })
}

    