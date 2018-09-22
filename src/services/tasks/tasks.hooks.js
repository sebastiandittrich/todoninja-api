const { authenticate } = require('@feathersjs/authentication').hooks;
const timestamps = require('app/hooks/timestamps')
const validate = require('app/hooks/validate')
const authorize = require('app/hooks/authorize')
const { hasMany } = require('app/hooks/relations')

module.exports = {
  before: {
    all: [ authenticate('jwt'), authorize(), timestamps(), validate() ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [ hasMany('Tags') ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
