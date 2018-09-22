const { authenticate } = require('@feathersjs/authentication').hooks;
const { timestamps, authorize, validate } = require('app/hooks')

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
    all: [],
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
