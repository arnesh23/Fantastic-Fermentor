'use strict';
module.exports = (sequelize, DataTypes) => {
  const projectLog = sequelize.define('projectLog', {
    note: DataTypes.STRING
  }, {});
  projectLog.associate = function(models) {
    // associations can be defined here

    projectLog.belongsTo(models.projects, {
      foreignKey: {
        allowNull: false
      }
    });
    projectLog.belongsTo(models.tasks, {
      foreignKey: {
        allowNull: false
      }
    });
    projectLog.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return projectLog;
};