const knex = require('../data/db')

const getAll = (req, res, next) => {

    return knex('notes')
    .then((notes) => {
        if (notes) {
            return res.json({ note: notes })
        } else {
            return res.json({ error: 'No notes available'})
        }
    })
    .catch(err => console.log('ERROR: ', err))

}

const getOne = (req, res, next) => {

    const id = req.params.id

    return knex('notes')
    .where('note_id', id)
    .first()
    .then((note) => {
        if (note) {
            return res.json({ note: note })
        } else {
            return res.json({ error: 'note does not exist'})
        }
    })
    .catch(err => console.log('ERROR: ', err))

}

const postNote = (req, res, next) => {

    const body = req.body

    return knex('notes')
    // .insert(body)
    .insert({
        user_id: body.user_id,
        title: body.title,
        created: body.created,
        last_modified: body.last_modified,
        color: body.color,
        content: body.content
    })
    .returning('*')
    .then((note) => {
        if (note) {
            return res.json({ note_posted: note })
        } else {
            return res.json({ error: 'Unable to post note' })
        }
    })
}

const putNote = (req, res, next) => {

    const id = req.params.id
    const body = req.body

    return knex('notes')
    .where('note_id', id)
    .update(body)
    .then((note) => {
        if (note) {
            console.log(note)
            return res.json({ updated_note: note})
        } else {
            return res.json({ error: 'Unable to update note'})
        }
    })
}

const deleteNote = (req, res, next) => {
    const id = req.params.id

    return knex('notes')
    .where('note_id', id)
    .del()
    .then((note) => {
        if (note) {
            return res.json({ deleted_note: note })
        } else {
            return res.json({ error: 'Unable to delete note' })
        }
    })
}

module.exports = {
    getAll,
    getOne,
    postNote,
    putNote,
    deleteNote
}