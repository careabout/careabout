const test = require('tape')
const decisionStore = require('../../server/decisionStore')

test('buildViewModel returns an object with locations property', t => {
  const expected = true
  const actual = decisionStore.getDecisions().hasOwnProperty('locations')
  t.equal(actual, expected)
  t.end()
})

test('getDecision returns an object with property _id', t => {
  const expected = true
  const actual = decisionStore.getDecision('').hasOwnProperty('_id')
  t.equal(actual, expected)
  t.end()
})
