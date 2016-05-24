'use strict';
module.exports = function(sequelize, DataTypes) {
  var subtopic = sequelize.define('subtopic', {
    topicId: DataTypes.INTEGER,
    subtopic: DataTypes.STRING,
    response: DataTypes.TEXT,
    source: DataTypes.STRING,
    url: DataTypes.STRING,
    image: DataTypes.STRING
  },
  {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.subtopic.belongsTo(models.topic);
        
      }
    }
  });
  return subtopic;
};