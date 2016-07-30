var request = require('superagent')

module.exports = {
  getConsultations: getConsultations
}

function getConsultations () {
  return request('GET', 'https://www.govt.nz/api/v2/consultation/list')
    .query({
      status: 'current'
    })
    .then((res) => {
      return Promise.resolve(res)
    }, (err) => {
      return Promise.reject(err)
    })
}
