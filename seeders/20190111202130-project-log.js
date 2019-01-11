'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('projectLogs', [
      { note: 'personal note', projectId: 1 ,taskId: 1,UserId: 1, createdAt: new Date(), updatedAt: new Date()}
      
 
  ], {}) ;
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
