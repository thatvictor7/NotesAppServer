const express = require('express')
const router = express.Router()
const controller = require('../controllers/usersControllers')

router.get('/', controller.getAll)
router.post('/', controller.postUser)

module.exports = router