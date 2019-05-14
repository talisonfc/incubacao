var produtoController = require('../controller/produto-controller')

exports.services = function(app){
    app.get('/produtos', (req, res)=>{
        produtoController.list(function(resp){
            res.json(resp)
        })
    })


    app.get('/produto/:id', (req, res)=>{
        var id = req.param('id')

        produtoController.produto(id, function(resp){
            res.json(resp);
        })
    })


    app.get('/produtoPorNome/:nome', (req, res)=>{
        var nome = req.param('nome')

        produtoController.produtoByName(nome, function(resp){
            res.json(resp);
        })
    })

    app.post('/produto', (req, res)=>{
        nome = req.param('nome')
        descricao = req.param('descricao')
        valor = req.param('valor')
        sensor = req.param('sensor')
        id_sensor = req.param('id_sensor')

        produtoController.save(nome, descricao, valor, sensor, id_sensor, function(resp){
            res.json(resp)
        })
    })

    app.delete('/produto/:id', (req, res)=>{
        var id = req.param('id')

        produtoController.delete(id,function(resp){
            res.json(resp);
        })
    })
}