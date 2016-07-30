var express = require('express')
var path = require('path')
var router = express.Router()

var mockData = {
  decisions: [{ id: 1,
    title: "consultation 1",
    description: "description 1 --- aaa",
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
  topics: ['a', 'b', 'c'],
  locations: ['d', 'e', 'f']
}


router.get('/', function (req, res) {
  res.send(mockData)
})

module.exports = router
