var mongoClient = require('mongodb').MongoClient
require('dotenv').config()

module.exports = { save, get }

function save(id, topics, locations) {
  return new Promise ( (resolve, reject) => {
    mongoClient.connect(process.env.SUBSCRIPTION_DB, (err, db) => {
      db.collection('test').insertOne({
        "id": id,
        "topics": topics,
        "locations": locations
      }, (err, result) => {
        db.close()
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })
  })
}

function get (id) {
  return new Promise ((resolve, reject) => {
    mongoClient.connect(process.env.SUBSCRIPTION_DB, (err, db) => {
      db.collection('test').findOne({"id": id}, (err, doc) => {
        db.close()
        if (err) {
          reject(err)
        } else {
          resolve(doc)
        }
      })
    })
  })
}
