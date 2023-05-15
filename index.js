const express = require('express')
const cors = require('cors')
const rotas = require('./rota')

const port = 3333

const app = express()

app.use(express.json())
app.use(cors())
app.use(rotas)


app.listen(port, ()=> console.log('Servidor rodaando'))

console.log(require('./JSON/musicos.json').violao.nome)