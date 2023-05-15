const { Router } = require('express')
const musicos = require('./JSON/musicos.json')
const controller = require('./src/controllers/controllerMusicos')

const rotas = Router()

rotas 
    .get('/', (req, res) => {
        res.send('Inicio')
    })

    .get('/musicos', controller.todos)
    .get('/musicos/teclado', controller.teclado)
    .get('/musicos/violao', controller.violao)

    .get('/musicos/teclado/nome', controller.nome)

    // .get('/musicos/teclado/nome', (req, res) => {
    //     const dado = req.body.nome
    //     if (dado == "Bruno Santos") {
    //         res.json(musicos.teclado.nome.Bruno)
    //     }
        
    //     if (dado == "Rodolfo") {
    //         res.json(musicos.teclado.nome.Robert)
    //     }

    //     else {
    //         res.json({mensagem: "Musico não encontrado"})
    //     }
    // })



module.exports = rotas