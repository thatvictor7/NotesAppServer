'use strict'

exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('user_id')
        table.string('email').notNullable().defaultTo('')
        table.string('username').notNullable().defaultTo('')
        table.string('password').notNullable().defaultTo('')
        table.string('profile_image').notNullable().defaultTo('')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('users')
}
