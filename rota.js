const { Router } = require('express')
const musicos = require('./JSON/musicos.json')

const rotas = Router()

rotas 
    .get('/', (req, res) => {
        res.send('Inicio')
    })

    .get('/musicos', (req, res) => {
        res.json(musicos)
    })

    .get('/musicos/teclado', (req, res) => {
        res.json(musicos.teclado)
    })
    
    .get('/musicos/violao', (req, res) => {
        res.json(musicos.violao)
    })

    .get('/musicos/teclado/nome', (req, res) => {
        const dado = req.body.nome
        if (dado == "Bruno Santos") {
            res.json(musicos.teclado.nome.Bruno)
        }
        
        if (dado == "Rodolfo") {
            res.json(musicos.teclado.nome.Robert)
        }

        else {
            res.json({mensagem: "Musico não encontrado"})
        }
    })



module.exports = rotas