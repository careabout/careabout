const mongoose = require('mongoose')
const Decision = require('./models/Decision')


module.exports = {
  buildViewModel: buildViewModel,
  getDecision: getDecision,
  markAsProcessed: markAsProcessed,
  saveBatch: saveBatch,
  updateDecision: updateDecision
}

function buildViewModel (query) {
  const db = mongoose.connection
  let search = {}
  if (query) {
    if (query.hasOwnProperty('processed')) {
      let processed = query.processed === 'true' ? true : false
      if (processed === false) {
        search = { 
          $or: [
            { processed: { $exists: false } },
            { processed: false }
          ]
        }
      } else {
        search = { processed: true }
      }
    }
  }
  return Decision.find(search, (err, decisions) => {
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

function markAsProcessed (id) {
  const db = mongoose.connection
  return Decision
    .findByIdAndUpdate(id, { $set: { processed: true } })
    .exec()
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

function updateDecision (id, body) {
  const db = mongoose.connection
  return Decision.findById(id, (err, decision) => {
    if (err) {
      return Promise.reject(err)
    }
    decision.sourceId = body.sourceId
    decision.title = body.title
    decision.description = body.description
    decision.organisation = body.organisation
    decision.url = body.url
    decision.start = body.start
    decision.end = body.end
    decision.status = body.status
    decision.topics = body.topics
    decision.locations = body.locations
    decision.processed = body.processed
    decision.save((err, saveResult) => {
      return Promise.resolve(saveResult)
    })
  })
}

function saveDecision (decision) {
  const d = new Decision(decision)
  return d.save()
}
