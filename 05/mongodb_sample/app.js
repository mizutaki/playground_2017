const express = require("express");
const bodyParser = require('body-parser');
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/sampledb";
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extened: true}));
app.use(bodyParser.json());
var server = app.listen(3000, function() {
  console.log("listen server");
  console.log(server.address());
});

app.get("/", function(req, res, next) {
  MongoClient.connect(url, (error, db) => {
    var collection;
    collection = db.collection("pr");
    var docs = null;
    collection.find().toArray((error, documents) => {
      for (var document of documents) {
        console.log(document);
      }
      docs = documents
      res.locals.user = docs;
      res.render("index");
    });
  });
});
app.post('/', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  MongoClient.connect(url, (error, db) => {
    console.log("Connecting to MongoDB...");

    var collection;
    collection = db.collection("pr");
    collection.insertOne(req.body, (error, result) => {
      db.close();
    });
  });
});
app.post('/clear', function(req, res) {
  MongoClient.connect(url, (error, db) => {
    console.log("Connecting to MongoDB...");

    var collection;
    collection = db.collection("pr");
    collection.deleteMany((error, result) => {
      db.close();
    });
  });
});
