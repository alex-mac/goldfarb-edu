var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

app.set('view engine', 'ejs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./controllers/start.js'));

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("You're watching kids study by at " + port + " different schools.");
})