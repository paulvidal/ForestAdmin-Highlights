'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('fb_highlights_scrappingstatus', {
    'site_name': {
      type: DataTypes.STRING,
      primaryKey: true 
    },
    'ok': {
      type: DataTypes.BOOLEAN,
    },
  }, {
    tableName: 'fb_highlights_scrappingstatus',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

