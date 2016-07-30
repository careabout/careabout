var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var mongoose = require('mongoose')
require('dotenv').config()

var index = require('./routes/index')
var decisions = require('./routes/decisions')

var subscriptions = require('./routes/subscription')
var decisions = require('./routes/decisions')

var PORT = process.env.PORT || 3000
var app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'static')))

app.use('/', index)
app.use('/v1/subscriptions', subscriptions)
app.use('/decisions', decisions)
//
//mongoose.connect(process.env.MONGODB_URI)
//mongoose.Promise = global.Promise
//mongoose.connection.on('error', (err) => {
//  //console.error('CONNECTION ERROR')
//  res.status(500).send('COULD NOT CONNECT TO DB')
//})
//mongoose.connection.on('open', () => {
//  console.log('CONNECTED')
//})

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
