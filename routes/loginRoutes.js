const express = require('express')
const router = express.Router()
const controller = require('../controllers/loginControllers')

router.post('/', controller.getOne)

module.exports = router