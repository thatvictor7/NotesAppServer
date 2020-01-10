const knex = require('../data/db')

const getAll = (req, res, next) => {
    return knex('users')
    .orderBy('username', 'asc')
    .then(users => res.json({ users }))
}

const postUser = (req, res, next) => {
    const body = req.body
    return knex('users')
    // .insert(body)
    .insert({
        email: body.email,
        username: body.username,
        password: body.password,
        profile_image: body.profile_image
    })
    .returning('*')
    .then((user) => {
        console.log(user) 
        return user
        // knex.destroy();
    })
    .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
    // .insert({

    // })
}

module.exports = {
    getAll,
    postUser
}