const test = require('test')
const decisions = require('../../server/routes/decisions')

test('getDecisions returns an object with locations property', t => {
  const expected = true
  const actual = decisions.getDecisions().hasOwnProperty('locations')
  t.equal(actual, expected)
  t.end() 
} )
