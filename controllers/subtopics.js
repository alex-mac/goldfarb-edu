var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/topics', function(req, res) { 
  db.subtopic.findAll({
    // order: [
    //   ['title', 'ASC'],
    // ]
  }).then(function(subtopicData) {
    res.send(subtopicData); 
  });
});

module.exports = router;