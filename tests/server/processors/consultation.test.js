var test = require('tape')
var consultation = require('../../../server/processors/consultation')

test('removeQuery removes query property', (t) => {
  var expected = {consultations: []}
  var raw = {query: {}, consultations: []}
  var actual = consultation.removeQuery(raw)
  t.deepEqual(actual, expected)
  t.end()
})
