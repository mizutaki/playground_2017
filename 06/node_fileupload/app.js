const express = require("express");
// const bodyParser = require('body-parser');
// const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/sampledb";
const multer = require('multer');
const fs = require('fs');
var app = express();
app.use(multer( { dest : './tmp'}).single('upName'));
app.post('/upload', (req, res) => {
  console.log(`originalname: ${req.file.originalname}`);
  console.log(`path: ${req.file.path}`);
  res.send(JSON.stringify( { ok: true }));
});

app.get('/image', (req, res) => {
  console.log('image');
  fs.readFile('./tmp/test.jpg', (err, data) => {
    res.send(data, { 'Content-Type' : 'image/jpeg'}, 200);
  });
});

app.get('/download', (req, res) => {
  console.log('donwload');
  var filePath = './tmp/test.jpg';
  res.download(filePath);
});
app.use('/', express.static('.'))
app.listen(8080)
