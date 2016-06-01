var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/', function(req, res) { 
  db.topic.findAll({
    include: [db.subtopic]
  }).then(function(data) {
    setTimeout(function(){ console.log("Hello"); }, 3000);


    res.render('goldfarb', {data: data});
    // res.send(data);
  });
});


module.exports = router;