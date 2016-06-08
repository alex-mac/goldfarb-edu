var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/', function(req, res) { 
  var data = [
   {
    "title": "U2: Zoo TV Live from Sydney",
    "user": {
      "id": 25,
      "email": "hulkhogan@wwe.com"
    }
  },
  {
    "title": "Zoolander",
    "user": {
      "id": 1,
      "email": "stonecold@wwe.com"
    }
  },
  {
    "title": "Zoolander",
    "user": {
      "id": 25,
      "email": "hulkhogan@wwe.com"
    }
  },
  {
    "title": "Zoolander 2",
    "user": {
      "id": 1,
      "email": "stonecold@wwe.com"
    }
  }
]
  
  var tempArr = {};
  for (var i = 0; i < data.length; i++) {
    var title = data[i].title;
    if(tempArr[title] == null){
      tempArr[title] = data[i];
      var placeholderArr = [];
      placeholderArr.push(data[i].user);
      tempArr[title].user = placeholderArr;
    } else {
      console.log(data[i])
      tempArr[title].user.push(data[i].user);
    }

  }
  res.send(tempArr);
})


module.exports = router;
