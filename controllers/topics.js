var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/', function(req, res) { 
  console.log('i am at last connected');
//   db.topic.findAll({
//     include: [db.subtopic]
//   }).then(function(data){
//     res.render('goldfarb', {data: data});
//     // res.send(data);
//   });
// });

  res.send('break please');
});

module.exports = router;