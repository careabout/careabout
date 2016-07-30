const mongoose = require('mongoose')

module.exports = mongoose.model('Decision', decisionSchema)

const decisionSchema = {
  'sourceId': String,
  'title': String,
  'description': String,
  'organisation': String,
  'url': String,
  'start': Date,
  'end': Date,
  'status': String,
  'topics': [String],
  'locations': [String]
}

