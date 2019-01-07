'use strict';
module.exports = (sequelize, DataTypes) => {
  const projects = sequelize.define('projects', {
    name: DataTypes.STRING,
    picture: DataTypes.STRING,
    instructions: DataTypes.STRING
  }, {});
  projects.associate = function(models) {
    // associations can be defined here
  };
  return projects;
};