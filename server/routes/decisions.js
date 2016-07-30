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
  var mockData = {
    decisions: [{ id: 1,
      title: "consultation 1",
      description: "Far North District Council is consulting on a draft Bylaw for Te Pou Haerenga Tai - Twin Coast Cycle Trail, which runs from the Hokianga Harbour to the Bay of Islands. There is no single regulatory instrument for the management of the use of the Trail, which is",
      organisation: [{ id: 1, externalId: 2, name: "org 1" }],
      url: "http://fakeurl.com",
      start: "01/01/2016",
      end: "31/12/2016",
      status: "current",
      topic: ["topic"],
      location: ["Wellington"]
    },
    { id: 2,
      title: "consultation 2",
      description: "description 2",
      organisation: [{ id: 2, externalId: 3, name: "org 2" }],
      url: "http://fakeurl1.com",
      start: "01/01/2017",
      end: "31/12/2017",
      status: "current",
      topic: ["topic2"],
      location: ["Auckland"]
    }],
    topics: ['Food safety and biosecurity', 'Fisheries', 'Electricity', 'Telecommunications'],
    locations: ['Wellington', 'Far North', 'Auckland']
  }

  res.send(mockData)
})

module.exports = router
