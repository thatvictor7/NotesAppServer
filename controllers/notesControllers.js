const knex = require('../data/db')

const getAll = (req, res, next) => {
    return knex('notes')
    .then(notes => res.json({ notes }))
}

const getOne = (req, res, next) => {
    const id = req.params.id
}

module.exports = {
    getAll,
    getOne
}