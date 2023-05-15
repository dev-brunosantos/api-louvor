const api = require('../../JSON/musicos.json')

class Musicos {
    async todos(req, res) {
        const todosMusicos = await api
        res.json(todosMusicos)
    }

    async teclado(req, res) {
        const tecladistas = await api.teclado
        res.json(tecladistas)
    }

    async violao(req, res) {
        const violao = await api.violao
        res.json(violao)
    }
}

const controller = new Musicos

module.exports = controller