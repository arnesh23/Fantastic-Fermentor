'use strict';
module.exports = (sequelize, DataTypes) => {
  const tasks = sequelize.define('tasks', {
    taskNumber: DataTypes.INTEGER,
    name: DataTypes.STRING,
    picture: DataTypes.STRING,
    description: DataTypes.STRING,
    timeSinceLastStep: DataTypes.STRING,
    timeUnits: DataTypes.STRING,
    cookingHardware: DataTypes.STRING,
    duration: DataTypes.INTEGER
  }, {});
  tasks.associate = function(models) {
    // associations can be defined here

    tasks.belongsTo(models.projects, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return tasks;
};