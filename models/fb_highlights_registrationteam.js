'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('fb_highlights_registrationteam', {
  }, {
    tableName: 'fb_highlights_registrationteam',
    
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.fb_highlights_footballteam, {
      foreignKey: 'team_name',
      targetKey: 'name',
      as: '_team_name',
    });
    
    Model.belongsTo(models.fb_highlights_user, {
      foreignKey: 'user',
      targetKey: 'facebook_id',
      as: '_user',
    });
    
  };

  return Model;
};

