var express = require('express')
var path = require('path')
var router = express.Router()
var consultation = require('../processors/consultation')
var decisionStore = require('../decisionStore')

router.post('/', consultation.process, decisionStore.saveBatch)
router.get('process-error', (req, res) => {
  res.status(400).send('Could not process consultations.')
})

router.get('/:id', (req, res) => {
  decisionStore.getDecision(req.params.id)
    .then(decision => {
      if (decision.length > 0) {
        res.json(decision[0])
        return
      }
      res.status(404).send('Could not find that decision.')
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR')
    })
})

router.get('/', (req, res) => {
  decisionStore.buildViewModel()
    .then(vm => {
      res.json({
        decisions: [{ _id: "1abc",
      title: "consultation 1",
      description: "Far North District Council is consulting on a draft Bylaw for Te Pou Haerenga Tai - Twin Coast Cycle Trail, which runs from the Hokianga Harbour to the Bay of Islands. There is no single regulatory instrument for the management of the use of the Trail, which is",
      organisation: "org",
      url: "http://fakeurl.com",
      start: "01/01/2016",
      end: "31/12/2016",
      status: "current",
      topic: ["topic"],
      location: ["Wellington"]
    },
    { _id: "2cde",
      title: "consultation 2",
      description: "description 2",
      organisation: "org",
      url: "http://fakeurl1.com",
      start: "01/01/2017",
      end: "31/12/2017",
      status: "current",
      topic: ["topic2"],
      location: ["Auckland"]
    }],
        locations: ["Hutt", "Southland", "Wellington", "Far North", "Christchurch", "Invercargill", "Palmerston North", "Tasman", "Tauranga", "Ashburton", "Queenstown", "Gisborne", "Waikato", "Otago", "Hamilton"],
        topics: ["Conservation", "Support", "Land and property", "Biosecurity", "Fisheries", "Education", "Electricity", "Gambling", "Food safety and biosecurity", "Tax", "Transport", "Business", "Food safety", "Environment", "Health", "Customs and excise"]
      })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR')
    })
})

module.exports = router
