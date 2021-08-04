'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('profile', [{     
          role: 'Admin',
          user_id: 1
        }]);
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('profile', null, [{                      
        }]);
    }
};