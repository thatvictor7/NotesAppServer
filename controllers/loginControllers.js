const knex = require('../data/db')

const getOne = (req, res, next) => {
    const body = req.body
    return knex('users')
        .where('email', body.email)
        .andWhere('password', body.password)
        .first()
        .then((user) => {
            if (user) {
                return res.json({ 'User': user })
            } else {
                // return res.json({ "Error": "User not found or wrong password" })
                return res.sendStatus(404)
            }
        })
        .catch(err => console.log('ERROR: ', err))
}

module.exports = {
    getOne
}