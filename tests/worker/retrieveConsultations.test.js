var test = require('blue-tape')
var retrieve = require('../../workers/retrieveConsultations')

test('Working.', (t) => {
  t.pass()
  t.end()
})

test('Worker returns an object', (t) => {
  const expected = 'object'
  return retrieve.getConsultations()
    .then((actual) => {
      t.deepEqual(typeof actual, expected)
    })
})

test('Returned object has query property', (t) => {
  const expected = true
  return retrieve.getConsultations()
    .then((consultations) => {
      const actual = consultations.body.hasOwnProperty('query')
      t.equal(actual, expected)
    })
    .catch(err => {
      console.error(err)
    })
})
