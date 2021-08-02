'use strict';

import {genSaltSync, hashSync, compareSync} from 'bcryptjs';

module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(320),
            allowNull: false
        },        
        password: {
            type: DataTypes.STRING(250),
            allowNull: true
        }        
    }, {
        timestamps: true,
        underscored: false,
        freezeTableName: true,
        hooks: {
            beforeCreate: (user, options) => {
                if (user.password) {
                    const salt = genSaltSync();
                    user.password = hashSync(user.password, salt);
                }
            },
            beforeUpdate: (user, options) => {
                if (user.changed('password')) {
                    const salt = genSaltSync();
                    user.password = hashSync(user.password, salt);
                }
            }
        }
    });
    return user;
};
