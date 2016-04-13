const React = require("react");
const mongoose = require('mongoose');


const Services = React.createClass({
  getData: function() {
    Data.find({}, function(err, data) {
      
    })

    User.find({}, function(err, users) {
    if (err) res.send(err);
    res.send(users);
  });

  },
  render: function(){
    return (
        <div>
          <h3>HELLO ARE YOU WORKING?!!</h3>
        </div>  
    );
  }
});

module.exports = Services;