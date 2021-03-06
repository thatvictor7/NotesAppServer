'use strict'

exports.up = function(knex) {
    return knex.schema.createTable('notes', (table) => {
        table.increments('note_id')
        table.integer('user_id').notNullable()
        .references('user_id').inTable('users').onDelete('CASCADE').index()
        table.string('title').notNullable().defaultTo('')
        table.string('content').notNullable().defaultTo('')
        table.timestamp('created', true)
        table.timestamp('last_modified', true)
        table.string('color').notNullable().defaultTo('')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('notes')
};
