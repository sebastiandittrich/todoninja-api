const { authenticate } = require('@feathersjs/authentication').hooks;
const { traverse } = require('feathers-hooks-common');
const timestamps = require('app/hooks/timestamps')
const validate = require('app/hooks/validate')
const authorize = require('app/hooks/authorize')
const { hasMany } = require('app/hooks/relations')
const { nuller } = require('app/hooks/traversers')

module.exports = {
  before: {
    all: [ authenticate('jwt'), authorize(), timestamps(), validate() ],
    find: [ nuller() ],
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
