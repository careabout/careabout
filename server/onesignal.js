modules.exports = add

function add (id, topics) {
  var headers = {
    "Content-Type": "application/json",
    "Authorization": "Basic " + process.env.AUTH_HEADER
  }
  
  var options = {
    host: "onesignal.com",
    port: 443,
    path: "/api/v1/players/" + id,
    method: "POST",
    headers: headers
  }
  
  var message = { 
    id: id,
    app_id: process.env.APP_ID,
    tags: createTags(topics)
  }

  var https = require('https')
  var req = https.request(options, function(res) {  
    res.on('data', function(data) {
      console.log("Response:")
      console.log(JSON.parse(data))
    })
  })
  
  req.on('error', function(e) {
    console.log("ERROR:")
    console.log(e)
  })
  
  req.write(JSON.stringify(message))
  req.end()
}

function createTags (topics) {
 return topics.reduce((acc, topic) => {
    acc[topic] = true
    return acc
  }, {})
}
