'use strict';

import {genSaltSync, hashSync, compareSync} from 'bcryptjs';

module.exports = function (sequelize, DataTypes) {
    var users = sequelize.define('users', {
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
        },
        age: {
            type: DataTypes.STRING(3),
            allowNull: false
        }     
    }, {
        sequelize,
        paranoid: true,    
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

    users.associate = models => {
        users.hasMany(models.profile, {foreignKey: 'user_id'})
    }
    return users;
};
