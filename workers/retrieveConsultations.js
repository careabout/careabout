var request = require('superagent')

module.exports = {
  getConsultations: getConsultations,
  postConsultations: postConsultations
}

function getConsultations () {
  console.log('WORKER RETRIEVING FROM CONSULTATIONS API...')
  return request('GET', 'https://www.govt.nz/api/v2/consultation/list')
    .query({
      status: 'current'
    })
    .then((res) => {
      console.log(`${res.body.query.total} CONSULTATIONS FOUND.`)
      return Promise.resolve(res)
    }, (err) => {
      return Promise.reject(err)
    })
}

function postConsultations (consultations) {
  console.log('WORKER POSTING TO DECISIONS API...')
  return request('POST', 'http://localhost:3000/decisions')
    .then(res => {
      return Promise.resolve(res)
    }, err => {
      return Promise.reject(err)
    })
}

getConsultations()
  .then((consultations) => {
    postConsultations(consultations)
  })
  .then((result) => {
    console.log('WORKER SUCCESSFULLY POSTED TO /decisions')
  })
  .catch((err) => {
    console.error(`CONSULTATION RETRIEVAL FAILED: ${err.message}.`)
  })
