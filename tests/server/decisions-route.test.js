const mongoose = require('mongoose')
const test = require('blue-tape')
const decisionStore = require('../../server/decisionStore')

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise

test('getDecision returns an object with property _id', t => {
  const expected = 'New listing of the threatened status of New Zealand vascular plants'
  return decisionStore.getDecision('579d398e297518e81b23e224')
    .then(decision => {
      const actual = decision[0].title
      t.equal(actual, expected)
      mongoose.connection.close()
    })
})
