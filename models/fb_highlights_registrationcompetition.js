'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('fb_highlights_registrationcompetition', {
  }, {
    tableName: 'fb_highlights_registrationcompetition',
    
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.fb_highlights_footballcompetition, {
      foreignKey: 'competition_name',
      targetKey: 'name',
      as: '_competition_name',
    });
    
    Model.belongsTo(models.fb_highlights_user, {
      foreignKey: 'user',
      targetKey: 'facebook_id',
      as: '_user',
    });
    
  };

  return Model;
};

