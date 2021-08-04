'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('profile', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      role: {
        allowNull: true,                
        type: Sequelize.STRING(200)
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('profile');
  }
};
