'use strict';
const { field } = require('app/migrations')

module.exports = {
  up: (Schema, { STRING, DATE, INTEGER }) => {
    return Schema.createTable('tasks', {
      ...field.id(),

      title: field.string(),
      description: field.string({ allowNull: true }),

      userId: field.foreignKey(),
      workspaceId: field.foreignKey(),

      ...field.timestamps()
    })
  },

  down: (Schema) => {
    return Schema.dropTable('tasks')
  }
};
