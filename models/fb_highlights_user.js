'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('fb_highlights_user', {
    'facebook_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'first_name': {
      type: DataTypes.STRING,
    },
    'last_name': {
      type: DataTypes.STRING,
    },
    'locale': {
      type: DataTypes.STRING,
    },
    'timezone': {
      type: DataTypes.INTEGER,
    },
    'join_date': {
      type: DataTypes.DATE,
    },
    'message_count': {
      type: DataTypes.INTEGER,
    },
    'context': {
      type: DataTypes.INTEGER,
    },
    'highlights_click_count': {
      type: DataTypes.INTEGER,
    },
    'see_result': {
      type: DataTypes.BOOLEAN,
    },
  }, {
    tableName: 'fb_highlights_user',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

