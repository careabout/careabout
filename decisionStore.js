const mongoose = require('mongoose')
const Decision = require('.models/Decision')

module.exports = {
  saveBatch: saveBatch
}

function saveBatch (decisions) {
  mongoose.connect(process.env.MONGODB_URI)
}
