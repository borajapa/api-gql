'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {    
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: DataTypes.STRING
  }, {
    sequelize,
    freezeTableName: true,
    timestamps: true,  
    modelName: 'User',
  });
  return User;
};