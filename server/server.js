var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var index = require('./routes/index')

var PORT = process.env.PORT || 3000
var app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'static')))
app.use('/', index)

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
