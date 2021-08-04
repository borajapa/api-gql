"use strict";

module.exports = function (sequelize, DataTypes) {
  var profile = sequelize.define(
    "profile",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      timestamps: true,
      underscored: false,
      freezeTableName: true,
    }
  );

  profile.associate = (models) => {
    profile.belongsTo(models.users, { foreignKey: "user_id" });
  };

  return profile;
};
