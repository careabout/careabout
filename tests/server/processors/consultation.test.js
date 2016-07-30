const test = require('tape')
const consultation = require('../../../server/processors/consultation')

test('removeQuery removes query property', (t) => {
  const expected = {consultations: []}
  const raw = {query: {}, consultations: []}
  const actual = consultation.removeQuery(raw)
  t.deepEqual(actual, expected)
  t.end()
})

test('addLocations adds a locations array', (t) => {
  const expected = { topics: ['Electricity'], locations: [] }
  const raw = { topic: ['Electricity'] }
  const actual = consultation.addLocations(raw)
  t.deepEqual(actual, expected)
  t.end()
})

test('addLocations correctly adds locations', (t) => {
  const expected = { 
    topics: ['Electricity'],
    locations: ['Far North']
  }
  const raw = { 
    topic: ['Electricity', 'Local government - Far North']
  }
  const actual = consultation.addLocations(raw)
  t.deepEqual(actual, expected)
  t.end()
})

test('writeSourceId creates a source id', t => {
  const expected = { sourceId: 1 }
  const raw = { id: 1 }
  const actual = consultation.writeSourceId(raw)
  t.deepEqual(actual, expected)
  t.end()
})

test('createDecision creates a decision', t => {
  const expected = { 'sourceId': 1, 'title': 'Wombat.', 'description': 'Wombats and how cool they are.', 'organisation': [ { id: 1, name: 'Wombats, Inc.' } ], 'url': 'https://wombats.com', 'start': 'Now', 'end': 'Then', 'status': 'current', 'topics': [], 'locations': [] }
  const raw = { 'id': 1, 'title': 'Wombat.', 'description': 'Wombats and how cool they are.', 'organisation': [ { id: 1, name: 'Wombats, Inc.' } ], 'url': 'https://wombats.com', 'start': 'Now', 'end': 'Then', 'status': 'current', 'topic': [] }
  const actual = consultation.createDecision(raw)
  t.deepEqual(actual, expected)
  t.end()
})

test('processAll processes all consultations', t => {
  const expected = [
    { 'sourceId': 1, 'topics': [], 'locations': [] },
    { 'sourceId': 2, 'topics': [], 'locations': [] }
  ]
  const raw = [
    { 'id': 1, 'topic': [] },
    { 'id': 2, 'topic': [] }
  ]
  const actual = consultation.processAll(raw)
  t.deepEqual(actual, expected)
  t.end()
})

test('writeOrganisation gets the name property', t => {
  const expected = { organisation: 'Wombats Inc.' }
  const raw = { organisation: [{ id: 1, name: 'Wombats Inc.' }] }
  const actual = consultation.writeOrganisation(raw)
  t.deepEqual(actual, expected)
  t.end()
})
