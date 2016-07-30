const test = require('tape')
const decisionStore = require('../../server/decisionStore')

test('getDecisions returns an object with locations property', t => {
  const expected = true
  const actual = decisionStore.getDecisions().hasOwnProperty('locations')
  t.equal(actual, expected)
  t.end() 
})
