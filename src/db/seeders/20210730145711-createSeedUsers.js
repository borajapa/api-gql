'use strict';

var bcryptjs = require('bcryptjs');

const salt = bcryptjs.genSaltSync();
const pass = bcryptjs.hashSync("admin123", salt);


module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('user', [{
            name: "superRoot",
            email: "super@root.com.br",            
            password: pass,            
        }], {});
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('user', null, [{
            name: "superRoot",
            email: "super@root.com.br",            
            password: pass,            
        }]);
    }
};
