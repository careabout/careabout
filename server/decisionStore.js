const mongoose = require('mongoose')
const ObjectId = require('mongoose').Types.ObjectId
const Decision = require('./models/Decision')


module.exports = {
  buildViewModel: buildViewModel,
  getDecision: getDecision,
  saveBatch: saveBatch
}

function buildViewModel () {
  const db = mongoose.connection
  return Decision.find({}, (err, decisions) => {
    if (err) {
      return Promise.reject(err)
    }
    Promise.resolve(decisions)
  })
}

function getDecision (id) {
  const db = mongoose.connection
  return Decision.find({_id: id}, (err, decision) => {
    if (err) {
      return Promise.reject(err)
    }
    Promise.resolve(decision)
  })
}

function saveBatch (req, res) {
  const db = mongoose.connection
  Promise.all(req.body.map(saveDecision))
    .then(() => {
      res.sendStatus(201)
    })
    .catch(err => {
      console.error(err.message)
      res.status(500).send(err.message)
    })
}

function saveDecision (decision) {
  const d = new Decision(decision)
  return d.save()
}
