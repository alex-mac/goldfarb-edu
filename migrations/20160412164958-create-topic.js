'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('topics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      topic: {
        type: Sequelize.TEXT
      },
      subTopic: {
        type: Sequelize.TEXT
      },
      response: {
        type: Sequelize.TEXT
      },
      source: {
        type: Sequelize.TEXT
      },
      url: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('topics');
  }
};