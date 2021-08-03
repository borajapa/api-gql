'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Users',
      'deletedAt',
      Sequelize.DATE
    )},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Users',
      'deletedAt'      
    )
  }
};
