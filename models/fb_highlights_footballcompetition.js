'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('fb_highlights_footballcompetition', {
    'name': {
      type: DataTypes.STRING,
      primaryKey: true 
    },
  }, {
    tableName: 'fb_highlights_footballcompetition',
    
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

