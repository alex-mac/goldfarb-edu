var express = require('express');
var app = express();

// Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/goldfarb');

app.use(express.static(__dirname + '/public/'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function() {
  console.log('Your power level is over 3000!');
});
