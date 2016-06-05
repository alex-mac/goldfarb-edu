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

router.get('/subTopics/:id', function(req, res) {
  db.subtopic.findById(req.params.id, function(err, garden) {
    if (err) return res.send({message: 'An error occurred when finding that garden'})
    res.send(garden)
  })
})


module.exports = router;

