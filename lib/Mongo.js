var MongoClient = require('mongodb').MongoClient;
var db;

// TODO: Need to environment property this and not hardcode database
MongoClient.connect("mongodb://localhost:27017/pointandfigure", function(err, database) {
  if(err) throw err;

  db = database;
});

module.exports = db;