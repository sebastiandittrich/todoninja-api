'use strict';
const { field } = require('app/migrations')

module.exports = {
  up: (Schema) => {
    return Schema.createTable('tags_tasks', {
      ...field.id(),

      tagId: field.foreignKey(),
      taskId: field.foreignKey(),

      ...field.timestamps()
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
