module.exports = {
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

//^Local government - ([a-z ]+)$
function captureLocation (topicString) {
  const re = /^Local government - ([a-z ]+)$/i
  const match = re.exec(topicString)
  if (match) {
    return match[1]
  }
  return null
}
