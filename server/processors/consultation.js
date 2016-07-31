module.exports = {
  addLocations: addLocations,
  createDecision: createDecision,
  process: process,
  processAll: processAll,
  removeQuery: removeQuery,
  writeOrganisation: writeOrganisation,
  writeSourceId: writeSourceId
}

function process (req, res, next) {
  const result = processAll(req.body.consultations)
  if (!result) {
    res.status(400).send('Could not process consultations. Possibly bad data...')
    return 
  }
  req.body = result
  next()
}

function processAll (consultations) {
  if (consultations) {
    return consultations.map(createDecision)
  }
  return null
}

function createDecision (consultation) {
  let decision = addLocations(consultation)
  decision = writeOrganisation(decision)
  return writeSourceId(decision)
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

function writeOrganisation (consultation) {
  const clone = Object.assign({}, consultation)
  clone.organisation = consultation.organisation[0].name
  return clone
}

function writeSourceId (consultation) {
  const clone = Object.assign({}, consultation)
  clone.sourceId = consultation.id
  delete clone.id
  return clone
}
