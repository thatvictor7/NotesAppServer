require('dotenv').config()

const express = require('express')
const app = express()
let port = process.env.PORT || 8080
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const usersRoutes = require('./routes/usersRoutes')
const notesRoutes = require('./routes/notesRoutes')

app.disable('x-powered-by')
app.use(morgan('short'))
app.use(bodyParser.json())
app.use(cors())

// app.get('/', (req, res, next) => {
//     res.json({
//         message: 'test message',
//         users: `http://localhost:${port}/users`
//     })
// })

app.use('/users', usersRoutes)
app.use('/notes', notesRoutes)

app.use(notFound);
app.use(errorHandler);

function notFound(err, req, res, next) {
    res.status(404).send({ error: 'Not found!', status: 404, url: req.originalUrl })
}

function errorHandler(err, req, res, next) {
    console.error('NOPE, LOL', err)
    const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
    res.status(500).send({ error: err.message, stack, url: req.originalUrl })
}

app.listen(port, function() {
    console.log('listening on: ', port)
})