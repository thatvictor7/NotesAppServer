const knex = require('../data/db')

const getAll = (req, res, next) => {
    return knex('users')
    .orderBy('username', 'asc')
    .then(users => res.json({ users }))
    .catch(err => console.log('ERROR: ', err))
}

const getOne = (req, res, next) => {
    const id = req.params.id
    return knex('users')
    .where('user_id', id)
    .first()
    .then(users => res.json({ users }))
    .catch(err => console.log('ERROR: ', err))
}

const postUser = (req, res, next) => {
    const body = req.body
    return knex('users')
    .insert(body)
    .returning('*')
    .then((user) => {
        return res.json({ user_added: user})
    })
    .catch(err => console.log('ERROR: ', err))
}

const putUser = (req, res, next) => {
    const id = req.params.id
    const body = req.body

    return knex('users')
    .where('user_id', id)
    .update(body)
    .then((response) => {
        console.log(response)
        
        return res.json({ updated_user: response})
    })
    .catch(err => console.log('ERROR: ', err))
}

const deleteUser = (req, res, next) => {
    const id = req.params.id

    return knex('users')
    .where('user_id', id)
    .del()
    .then((result) => {
        return res.json({ deleted_user: result})
    })
}

module.exports = {
    getAll,
    getOne,
    postUser,
    putUser,
    deleteUser
}