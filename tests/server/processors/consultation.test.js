var test = require('tape')
var consultation = require('../../../server/processors/consultation')

test('removeQuery removes query property', (t) => {
  var expected = {consultations: []}
  var raw = {query: {}, consultations: []}
  var actual = consultation.removeQuery(raw)
  t.deepEqual(actual, expected)
  t.end()
})

test('captureLocation gets location from topic string', (t) => {
  var expected = 'Far North'
  var topic = 'Local government - Far North'
  var actual = consultation.captureLocation(topic)
  t.equal(actual, expected)
  t.end()
})

test('captureLocation does not get location if improper format', (t) => {
  const expected = null
  const topic = 'Far North - Local government'
  const actual = consultation.captureLocation(topic)
  t.equal(actual, expected)
  t.end()
})
