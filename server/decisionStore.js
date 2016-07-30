const mongoose = require('mongoose')
const Decision = require('./models/Decision')

module.exports = {
  getDecisions: getDecisions,
  saveBatch: saveBatch
}

function getDecisions () {
  return {
    locations: []
  }
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
