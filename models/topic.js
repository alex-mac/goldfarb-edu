'use strict';
module.exports = function(sequelize, DataTypes) {
  var topic = sequelize.define('topic', {
    title: DataTypes.STRING
  }, 
  {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.topic.hasMany(models.subtopic);

      }
    }
  });
  return topic;
};