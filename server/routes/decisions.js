var express = require('express')
var path = require('path')
var router = express.Router()
var consultation = require('../processors/consultation')
var decisionStore = require('../decisionStore')

router.post('/', consultation.process, decisionStore.saveBatch)
router.get('process-error', (req, res) => {
  res.status(400).send('Could not process consultations.')
})

router.get('/', function (req, res) {
  decisionStore.buildViewModel()
    .then(vm => {
      res.json({
        decisions: vm,
        locations: ["Hutt", "Southland", "Wellington", "Far North", "Christchurch", "Invercargill", "Palmerston North", "Tasman", "Tauranga", "Ashburton", "Queenstown", "Gisborne", "Waikato", "Otago", "Hamilton"],
        topics: ["Conservation", "Support", "Land and property", "Biosecurity", "Fisheries", "Education", "Electricity", "Gambling", "Food safety and biosecurity", "Tax", "Transport", "Business", "Food safety", "Environment", "Health", "Customs and excise"]
      })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR')
    })
})

module.exports = router
