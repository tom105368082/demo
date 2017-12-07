import circleSchema.js

const express = require('express');
const app = express();
const http = require('http');
var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;

global.request = require('supertest'); //不必在每個檔案都 require 一次
request = request('http://localhost:3000');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Database Connected.");
});
/*/
var circleSchema = mongoose.Schema({
    name: String,
    position: String,
})
/*/
var Player = mongoose.model('Player', circleSchema)
//---------------------------------------Player-------------------------------//
var James = new Player({ name: 'James' ,position:'Point Gaurd'});
James.save(function (err, James) {
  if (err) return console.error(err);
});

var Eric = new Player({ name: 'Eric' ,position:'Shooting Gaurd'});
Eric.save(function (err, Eric) {
  if (err) return console.error(err);
});

var Phil = new Player({ name: 'Phil' ,position:'Small Forward'});
Phil.save(function (err, Phil) {
  if (err) return console.error(err);
});

var Ray = new Player({ name: 'Ray' ,position:'Small Forward'});
Ray.save(function (err, Ray) {
  if (err) return console.error(err);
});

var Fish = new Player({ name: 'Fish' ,position:'Center'});
Fish.save(function (err, Fish) {
  if (err) return console.error(err);
});
//----------------------------------------------------------------------------//

app.get('/', (req, res) => {
  res.send('Hello World!');
});

http.createServer(app)
.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
