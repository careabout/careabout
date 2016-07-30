var mongoClient = require('mongodb').MongoClient
require('dotenv').config()

module.exports = {
  save
}

function save(id, topics, locations) {
  return new Promise ( (resolve, reject) => {
    mongoClient.connect(process.env.SUBSCRIPTION_DB, function (err, db) {
      db.collection('test').insertOne({
        "id": id,
        "topics": topics,
        "locations": locations
      }, (err, result) => {
        if (err) {
          reject(err)
        } else {
          db.close()
          resolve()
        }
      })
    })
  })
}
