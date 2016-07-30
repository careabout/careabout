module.exports = {
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
