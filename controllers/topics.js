var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/topics', function(req, res) { 
  db.topic.findAll({
    include: [db.subtopic],
    order: [
      ['title', 'ASC'],
    ]
  }).then(function(data) {
    res.send(data); 
  });
});

router.get('/subTopics', function(req, res) { 
  db.subtopic.findAll({

  }).then(function(data) {
    res.send(data); 
  });
});

module.exports = router;