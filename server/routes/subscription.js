var express = require('express')

var db = require('../db')
var onesignal = require('../onesignal')

var router = express.Router()

router.post('/:id', (req, res) => {
  var id = req.params.id
  var topics = req.body.topics
  var locations = req.body.locations
  onesignal.add(id, topics, locations)
  .then(() => {
    // check id and if exists update, if not create
    db.save(id, topics, locations)
    res.sendStatus(200)
  })
  .catch((e) => res.send(500, e.message))
})

router.get('/:id', (req, res) => {
  var id = req.params.id
  db.get(id)
  .then((doc) => {
    res.send(doc)
  })
  .catch((err) => {
    res.send(500, err.message)
  })
})

module.exports = router
