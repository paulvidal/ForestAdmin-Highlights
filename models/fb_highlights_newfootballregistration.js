'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('fb_highlights_newfootballregistration', {
    'name': {
      type: DataTypes.STRING,
    },
    'source': {
      type: DataTypes.STRING,
    },
    'time': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'fb_highlights_newfootballregistration',
    
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

