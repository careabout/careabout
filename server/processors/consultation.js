module.exports = {
  addLocations: addLocations,
  process: process,
  removeQuery: removeQuery,
  writeSourceId: writeSourceId
}

function process (req, res, next) {
  req.body = 'PROCESS'
  next()
}

function createDecision (consultation) {
}

function removeQuery (rawObject) {
  return {
    consultations: rawObject.consultations
  }
}

// NOTE: origin object has `topic`, dest object has `topics`
function addLocations (decision) {
  const clone = Object.assign({}, decision)
  clone.locations = []
  clone.topics = []
  delete clone.topic

  decision.topic.forEach(topic => {
    const re = /^Local government - ([a-z ]+)$/i
    const loc = re.exec(topic)
    if (loc) {
      return clone.locations.push(loc[1])
    }
    clone.topics.push(topic)
  })
  return clone
}

function writeSourceId (consultation) {
  const clone = Object.assign({}, consultation)
  clone.sourceId = consultation.id
  delete clone.id
  return clone
}
