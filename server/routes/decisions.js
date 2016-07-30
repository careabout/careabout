var express = require('express')
var router = express.Router()
var consultation = require('../processors/consultation')

router.use(consultation.process)
router.get('/', function (req, res) {
  res.send(req.body)
})

module.exports = router
