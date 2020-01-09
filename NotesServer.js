var express = require('express')
var app = express()

app.disable('x-powered-by')
app.set('port', process.env.PORT || 8080)

var morgan = require('morgan')
app.use(morgan('short'))

var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.listen(app.get('port'), function() {
    console.log('listening on: ', app.get('port'))
})