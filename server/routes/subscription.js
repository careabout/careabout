var express = require('express')

//var db = require('../db')
var onesignal = require('../onesignal')

var router = express.Router()

router.post('/:id', function (req, res) {
  var id = req.params.id
  var topics = req.body
  onesignal.add(id, topics)
  .then(() => {
    //db.save(id, topics)
  })
})

module.exports = router

