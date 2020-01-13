const express = require('express')
const router = express.Router()
const controller = require('../controllers/usersControllers')

// router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.post('/', controller.postUser)
router.put('/:id', controller.putUser)
router.delete('/:id', controller.deleteUser)

module.exports = router