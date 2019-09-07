//Import Models
const models = require('../models')
const House = models.house

//CRUD func
exports.index = (req, res) => {
    House.findAll().then(data => res.send(data))
}

exports.show = (req, res) => {
    House.findOne({
        where: { id: req.params.id }
    }).then(data => res.send(data))
}

exports.store = (req, res) => {
    House.create(req.body).then(data => {
        res.send({
            message: "Berhasil",
            data
        })
    })
}

exports.patch = (req, res) => {
    House.update(
        req.body, {
            where: {id: req.params.id}
        }
    ).then(data => {
        res.send({
            message: "Berhasil"
        })
    })
}

exports.delete = (req, res) => {
    House.destroy({ where: {id: req.params.id}}).then(data => {
        res.send({
            message: "Berhasil"
        })
    })
}