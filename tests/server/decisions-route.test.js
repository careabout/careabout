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
    })
})

test('updateDecision updates a decision', t => {
  const expected = {"_id":"579d398e297518e81b23e224","title":"CHANGED","description":"<p><span>This is a call for submissions about any changes in status of New Zealand vascular plant taxa, to inform a revision of the lists for these groups in the New Zealand Threat Classification System. </span></p>\n<p><span></span></p>\n<p><span></span></p>\n<p></p>\n<p></p>","organisation":"Department of Conservation","url":"http://doc.govt.nz/get-involved/have-your-say/all-consultations/2016/new-listing-of-the-threatened-status-of-new-zealand-vascular-plants/","start":"2016-02-23T12:00:00.000Z","end":"2016-07-31T05:00:00.000Z","status":"current","sourceId":"2286","__v":0,"locations":[],"topics":["Conservation"]}
  //const raw = {"_id":"579d398e297518e81b23e224","title":"New listing of the threatened status of New Zealand vascular plants","description":"<p><span>This is a call for submissions about any changes in status of New Zealand vascular plant taxa, to inform a revision of the lists for these groups in the New Zealand Threat Classification System. </span></p>\n<p><span></span></p>\n<p><span></span></p>\n<p></p>\n<p></p>","organisation":"Department of Conservation","url":"http://doc.govt.nz/get-involved/have-your-say/all-consultations/2016/new-listing-of-the-threatened-status-of-new-zealand-vascular-plants/","start":"2016-02-23T12:00:00.000Z","end":"2016-07-31T05:00:00.000Z","status":"current","sourceId":"2286","__v":0,"locations":[],"topics":["Conservation"]}
  return decisionStore.updateDecision(expected)
    .then(actual => {
      t.equal(actual[0], expected)
      mongoose.connection.close()
    })

})
