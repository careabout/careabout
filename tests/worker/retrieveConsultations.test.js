var test = require('blue-tape')
var retrieve = require('../../workers/retrieveConsultations')

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
      const actual = consultations.body.hasOwnProperty('consultations')
      t.equal(actual, expected)
    })
    .catch(err => {
      console.error(err)
    })
})

test('postConsultations posts to decisions API', t => {
  const expected = {}
  const raw = {
    "query": { "offset": 0, "count": 20, "total": 81 },
    "consultations": [ 
      { "id": 2286, "topic": [ "Conservation" ] },
      { "id": 2457, "topic": [ "Local government - Far North" ] }
    ]
  }
  return retrieve.postConsultations(raw)
    .then(actual => {
      t.deepEqual(actual.body, expected)
    })
    .catch(err => {
      console.error(err)
    })
})
