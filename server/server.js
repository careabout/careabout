var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var mongoose = require('mongoose')

var index = require('./routes/index')
var decisions = require('./routes/decisions')

var PORT = process.env.PORT || 3000
var app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'static')))

app.use('/', index)
app.use('/decisions', decisions)

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
