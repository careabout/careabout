var express = require('express')
var router = express.Router()
var consultation = require('../processors/consultation')

router.post('/', consultation.process)

router.post('/', (req, res) => {
  res.send(req.body)
})

router.get('/', (req, res) => {
  res.send('OK')
})

module.exports = router
