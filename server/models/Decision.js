const mongoose = require('mongoose')

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
  'locations': [String],
  'processed': { type: Boolean, default: false }
}

module.exports = mongoose.model('Decision', decisionSchema)

