module.exports = {
  process: process
}

function process (req, res, next) {
  req.body = 'PROCESS'
  next()
}
