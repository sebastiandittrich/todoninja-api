'use strict';
const { field } = require('app/migrations')

module.exports = {
  up: (Schema, { STRING, INTEGER, DATE }) => {
    return Schema.createTable('users', {
      ...field.id(),

      name: field.string(),
      email: field.string(),
      password: field.string(),

      ...field.timestamps()
    })
  },

  down: (Schema) => {
    return Schema.dropTable('users')
  }
};
