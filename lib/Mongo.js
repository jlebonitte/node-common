var MongoClient = require('mongodb').MongoClient;
var db;

// TODO: Need to environment property this
MongoClient.connect("mongodb://localhost:27017/integration_test", function(err, database) {
  if(err) throw err;

  db = database;
});

module.exports = db;