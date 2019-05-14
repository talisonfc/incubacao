var usuarioController = require('../controller/usuario-controller')

exports.services = function(app){
    app.get('/usuarios', (req, res)=>{
        usuarioController.list(function(resp){
            res.json(resp)
        })
    })

    app.get('/usuario/:id', (req, res)=>{
        var id = req.param('id')

        usuarioController.usuario(id, function(resp){
            res.json(resp);
        })
    })

    app.get('/usuario/:email/:senha', (req, res)=>{
        var email = req.param('email')
        var senha = req.param('senha')

        usuarioController.autenticar(email, senha, function(resp){
            res.json(resp);
        })
    })

    app.post('/usuario', (req, res)=>{
        email = req.param('email')
        senha = req.param('senha')

        usuarioController.save(email, senha, function(resp){
            res.json(resp)
        })
    })

    app.delete('/usuario/:id', (req, res)=>{
        var id = req.param('id')

        usuarioController.delete(id,function(resp){
            res.json(resp);
        })
    })
}