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
  const raw = { 
    'id': 1, 
    'title': 'Wombat.', 
    'description': 'Wombats and how cool they are.', 
    'organisation': [ 
      { id: 1, name: 'Wombats, Inc.' } 
    ], 
    'url': 'https://wombats.com', 
    'start': 'Now', 
    'end': 'Then', 
    'status': 'current', 
    'topic': [] 
  }
  const actual = consultation.createDecision(raw)
  t.deepEqual(actual, expected)
  t.end()
})
