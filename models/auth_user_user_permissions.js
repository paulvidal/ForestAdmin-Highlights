'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('auth_user_user_permissions', {
  }, {
    tableName: 'auth_user_user_permissions',
    
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.auth_user, {
      foreignKey: 'user_id',
      
      as: '_user_id',
    });
    
    Model.belongsTo(models.auth_permission, {
      foreignKey: 'permission_id',
      
      as: '_permission_id',
    });
    
  };

  return Model;
};

