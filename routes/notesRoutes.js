const express = require('express')
const router = express.Router()
const controller = require('../controllers/notesControllers')

router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.post('/', controller.postNote)
router.put('/:id', controller.putNote)
router.delete('/:id', controller.deleteNote)

module.exports = router