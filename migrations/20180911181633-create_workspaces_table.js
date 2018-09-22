'use strict';

const { field } = require('app/migrations')

module.exports = {
  up: (Schema, { STRING, INTEGER, DATE }) => {
    return Schema.createTable('workspaces', {
      ...field.id(),

      userId: field.foreignKey(),
      name: field.string(),

      ...field.timestamps()
    })
  },

  down: (Schema) => {
    return Schema.dropTable('workspaces')
  }
};
