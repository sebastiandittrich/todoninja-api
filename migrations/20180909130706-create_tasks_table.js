'use strict';
const { field } = require('app/migrations')

module.exports = {
  up: (Schema, { STRING, DATE, INTEGER }) => {
    return Schema.createTable('tasks', {
      ...field.id(),

      title: field.string(),
      description: field.string({ allowNull: true }),
      state: field.integer({ defaultValue: 0 }),
      deadline: field.timestamp({ allowNull: true }),

      userId: field.foreignKey(),
      workspaceId: field.foreignKey({ allowNull: true }),

      doneAt: field.timestamp({ allowNull: true }),
      ...field.timestamps()
    })
  },

  down: (Schema) => {
    return Schema.dropTable('tasks')
  }
};
