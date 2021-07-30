'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin',  
    }], {});
  },
// verificar se o down exclui o banco de dados inteiro
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});    
  }
};
