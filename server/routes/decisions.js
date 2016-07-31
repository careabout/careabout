var express = require('express')
var path = require('path')
var router = express.Router()
var consultation = require('../processors/consultation')
var decisionStore = require('../decisionStore')

router.post('/', consultation.process, decisionStore.saveBatch)

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
        decisions: vm,
        locations: ["Hutt", "Southland", "Wellington", "Far North", "Christchurch", "Invercargill", "Palmerston North", "Tasman", "Tauranga", "Ashburton", "Queenstown", "Gisborne", "Waikato", "Otago", "Hamilton"],
        topics: ["Conservation", "Support", "Land and property", "Biosecurity", "Fisheries", "Education", "Electricity", "Gambling", "Food safety and biosecurity", "Tax", "Transport", "Business", "Food safety", "Environment", "Health", "Customs and excise"]
      })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR')
    })
})

router.put('/:id', (req, res) => {
  decisionStore.updateDecision(req.params.id, req.body)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.status(500).send(`Could not update that decision. Database said: ${err.message}`)
    })
})

router.put('/:id/processed', (req, res) => {
  decisionStore.markAsProcessed(req.params.id)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.status(500).send(`Could not update that decision. Database said: ${err.message}`)
    })
})

module.exports = router
