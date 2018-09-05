'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('auth_user', {
    'password': {
      type: DataTypes.STRING,
    },
    'last_login': {
      type: DataTypes.DATE,
    },
    'is_superuser': {
      type: DataTypes.BOOLEAN,
    },
    'username': {
      type: DataTypes.STRING,
    },
    'first_name': {
      type: DataTypes.STRING,
    },
    'last_name': {
      type: DataTypes.STRING,
    },
    'email': {
      type: DataTypes.STRING,
    },
    'is_staff': {
      type: DataTypes.BOOLEAN,
    },
    'is_active': {
      type: DataTypes.BOOLEAN,
    },
    'date_joined': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'auth_user',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

