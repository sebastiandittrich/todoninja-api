'use strict';

const { field } = require('app/migrations')

module.exports = {
  up: (Schema, { STRING, INTEGER, DATE }) => {
    return Schema.createTable('tags', {
      ...field.id(),

      name: field.string(),

      userId: field.foreignKey(),

      ...field.timestamps()
    })
  },

  down: (Schema) => {
    return Schema.dropTable('tags')
  }
};
