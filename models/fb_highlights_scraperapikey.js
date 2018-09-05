'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('fb_highlights_scraperapikey', {
    'code': {
      type: DataTypes.STRING,
      primaryKey: true 
    },
    'last_invalid_try': {
      type: DataTypes.DATE,
    },
    'valid': {
      type: DataTypes.BOOLEAN,
    },
  }, {
    tableName: 'fb_highlights_scraperapikey',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

