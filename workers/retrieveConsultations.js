var request = require('superagent')

module.exports = {
  getConsultations: getConsultations,
  postConsultations: postConsultations
}

function getConsultations () {
  console.log('WORKER RETRIEVING FROM CONSULTATIONS API...')
  return request('GET', 'https://www.govt.nz/api/v2/consultation/list')
    .query({
      limit: 'all',
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
    .send(consultations)
    .then(res => {
      if (res.statusCode !== 201) {
        return Promise.reject(new Error('Could not create decisions!'))
      }
      return Promise.resolve(res)
    }, err => {
      return Promise.reject(err)
    })
}

getConsultations()
  .then((consultations) => {
    postConsultations(consultations.body)
  })
  .then((result) => {
    console.log('WORKER SUCCESSFULLY POSTED TO /decisions')
  })
  .catch((err) => {
    console.error(`CONSULTATION RETRIEVAL FAILED: ${err.message}.`)
  })
