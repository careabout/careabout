var request = require('superagent')

module.exports = {
  getConsultations: getConsultations
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
      console.error(`CONSULTATION RETRIEVAL FAILED: ${err.message}.`)
      return Promise.reject(err)
    })
}

getConsultations()
