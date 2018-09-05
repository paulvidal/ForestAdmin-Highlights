'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('fb_highlights_highlightstat', {
    'score1': {
      type: DataTypes.INTEGER,
    },
    'score2': {
      type: DataTypes.INTEGER,
    },
    'link': {
      type: DataTypes.STRING,
    },
    'time': {
      type: DataTypes.DATE,
    },
    'extended': {
      type: DataTypes.BOOLEAN,
    },
    'video_duration': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'fb_highlights_highlightstat',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.fb_highlights_footballteam, {
      foreignKey: 'team1',
      targetKey: 'name',
      as: '_team1',
    });
    
    Model.belongsTo(models.fb_highlights_footballteam, {
      foreignKey: 'team2',
      targetKey: 'name',
      as: '_team2',
    });
    
    Model.belongsTo(models.fb_highlights_user, {
      foreignKey: 'user',
      targetKey: 'facebook_id',
      as: '_user',
    });
    
  };

  return Model;
};

