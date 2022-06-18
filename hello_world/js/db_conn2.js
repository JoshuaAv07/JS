import mongo from 'mongodb'; 

import { MongoClient } from 'mongodb';
var mongo = require('mongodb'); 
var url = "mongodb://localhost:27017/quotations";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});