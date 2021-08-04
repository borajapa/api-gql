'use strict';

var bcryptjs = require('bcryptjs');

const salt = bcryptjs.genSaltSync();
const pass = bcryptjs.hashSync("admin123", salt);


module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('users', [{
            name: "superRoot",
            email: "super@root.com.br",            
            password: pass,
            age: 999
        }], {});
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('users', null, [{
            name: "superRoot",
            email: "super@root.com.br",            
            password: pass,
            age: 999           
        }]);
    }
};