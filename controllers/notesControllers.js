const knex = require('../data/db')

const getAll = (req, res, next) => {
    return knex('notes')
    .then(notes => res.json({ notes }))
}

module.exports = {
    getAll
}