var vendaController = require('../controller/venda-controller')

exports.services = function(app){
    app.get('/vendas', (req, res)=>{
        vendaController.list(function(resp){
            res.json(resp)
        })
    })


    app.get('/venda/:id', (req, res)=>{
        var id = req.param('id')

        vendaController.produto(id, function(resp){
            res.json(resp);
        })
    })

    app.post('/venda', (req, res)=>{
        id_cliente = req.param('id_cliente')
        produtos = req.param('produtos')
        quantidades = req.param('quantidades')

        vendaController.save(id_cliente, produtos, quantidades, function(resp){
            res.json(resp)
        })
    })

    app.delete('/venda/:id', (req, res)=>{
        var id = req.param('id')

        vendaController.delete(id,function(resp){
            res.json(resp);
        })
    })
}