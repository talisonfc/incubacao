var sensorController = require('../controller/sensor-controller')

exports.services = function(app, io){
    
    app.get('/sensores', (req, res)=>{
        sensorController.list(function(resp){
            res.json(resp)
        })
    })

    app.get('/sensor/:id',(req,res)=>{
        var id = req.param('id')

        sensorController.sensorById(id,function(resp){
            res.json(resp)
        })
    })

    app.post('/sensor',(req,res)=>{

        var nome = req.param('nome')
        var descricao = req.param('descricao')

        //console.log(nome+" - "+descricao)

        sensorController.save(nome, descricao, function(resp){
            res.json(resp)
        })

    })



    app.put('/sensor/:id', (req, res)=>{

        var nome = req.param('nome')
        var descricao = req.param('descricao')
        var valor = req.param('valor')
        var id = req.param('id')


        io.emit('valor', {id: id, valor: valor})

        sensorController.update(id, nome, descricao, valor, function(resp){
            res.json(resp)
        })
    })


    app.delete('/sensor/:id',(req,res)=>{
        var id = req.param('id')

        sensorController.delete(id,function(resp){
            res.json(resp)
        })
    })
}