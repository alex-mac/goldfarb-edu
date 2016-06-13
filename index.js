var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(ejsLayouts);

app.use('/api/infobank', require('./controllers/topics.js'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(process.env.PORT || 3000);
