const express = require('express')
const router = express.Router()
const controller = require('../controllers/notesControllers')

router.get('/', controller.getAll)
router.get('/:id', controller.getOne)

module.exports = router