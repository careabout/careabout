var sendNotification = function(data) {
  var headers = {
    "Content-Type": "application/json",
    "Authorization": "Basic ZGJhZWNjZGEtZTM3Yi00YjBiLTk4MWItNGUxOTAwM2IwODNk"
  }
  
  var options = {
    host: "onesignal.com",
    port: 443,
    path: "/api/v1/notifications",
    method: "POST",
    headers: headers
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
  
  req.write(JSON.stringify(data))
  req.end()
}

var message = { 
  app_id: "836805c5-f933-40a3-8b0f-ecaa6a7a7b0a",
  contents: {"en": "Yo! How 'bout a notification'"},
  included_segments: ["All"]
}

sendNotification(message)
