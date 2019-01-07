'use strict';
module.exports = (sequelize, DataTypes) => {
  const projectLog = sequelize.define('projectLog', {
    note: DataTypes.STRING
  }, {});
  projectLog.associate = function(models) {
    // associations can be defined here
  };
  return projectLog;
};