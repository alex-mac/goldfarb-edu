'use strict';
module.exports = function(sequelize, DataTypes) {
  var topic = sequelize.define('topic', {
    topic: DataTypes.STRING,
    subTopic: DataTypes.STRING,
    response: DataTypes.STRING,
    source: DataTypes.STRING,
    url: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return topic;
};