module.exports = {
  addLocations: addLocations,
  captureLocation: captureLocation,
  process: process,
  removeQuery: removeQuery
}

function process (req, res, next) {
  req.body = 'PROCESS'
  next()
}

function removeQuery (rawObject) {
  return {
    consultations: rawObject.consultations
  }
}

function addLocations (decision) {
  const clone = Object.assign({}, decision)
  clone.locations = []
  clone.topics = []

  decision.topics.forEach(topic => {
    const re = /^Local government - ([a-z ]+)$/i
    const loc = re.exec(topic)
    if (loc) {
      return clone.locations.push(loc[1])
    }
    clone.topics.push(topic)
  })
  return clone
}

function captureLocation (topicString) {
  const re = /^Local government - ([a-z ]+)$/i
  const match = re.exec(topicString)
  if (match) {
    return match[1]
  }
  return null
}

function skipLocation (topicString, i) {
  if (clone.locations[i] === null) {
    return topic
  }
  return null
}
