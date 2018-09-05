'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('auth_user_groups', {
  }, {
    tableName: 'auth_user_groups',
    
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.auth_user, {
      foreignKey: 'user_id',
      
      as: '_user_id',
    });
    
    Model.belongsTo(models.auth_group, {
      foreignKey: 'group_id',
      
      as: '_group_id',
    });
    
  };

  return Model;
};

