'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('fb_highlights_latesthighlight', {
    'link': {
      type: DataTypes.STRING,
      primaryKey: true 
    },
    'time_since_added': {
      type: DataTypes.STRING,
    },
    'source': {
      type: DataTypes.STRING,
    },
    'sent': {
      type: DataTypes.BOOLEAN,
    },
    'img_link': {
      type: DataTypes.STRING,
    },
    'score1': {
      type: DataTypes.INTEGER,
    },
    'score2': {
      type: DataTypes.INTEGER,
    },
    'view_count': {
      type: DataTypes.INTEGER,
    },
    'click_count': {
      type: DataTypes.INTEGER,
    },
    'video_duration': {
      type: DataTypes.INTEGER,
    },
    'video_url': {
      type: DataTypes.STRING,
    },
    'valid': {
      type: DataTypes.BOOLEAN,
    },
    'priority_short': {
      type: DataTypes.INTEGER,
    },
    'goal_data': {
      type: DataTypes.JSONB,
    },
    'priority_extended': {
      type: DataTypes.INTEGER,
    },
    'ready': {
      type: DataTypes.BOOLEAN,
    },
    'type': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'fb_highlights_latesthighlight',
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
    
    Model.belongsTo(models.fb_highlights_footballcompetition, {
      foreignKey: 'category',
      targetKey: 'name',
      as: '_category',
    });
    
  };

  return Model;
};

