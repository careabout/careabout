var express = require('express')

//var db = require('../db')
var onesignal = require('../onesignal')

var router = express.Router()

router.post('/:id', function (req, res) {
  var id = req.params.id
  var topics = req.body.topics
  var locations = req.body.locations
  onesignal.add(id, topics, locations)
  .then(() => {
    //db.save(id, topics)
    res.sendStatus(200)
  })
  .catch((e) => res.send(500, e.message))
})

module.exports = router

