var express = require('express')
var path = require('path')
var router = express.Router()

var mockData = [
  { name: 'decision1'}
]

router.get('/', function (req, res) {
  res.send(mockData)
})

module.exports = router
