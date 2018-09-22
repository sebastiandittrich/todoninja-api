const { authenticate } = require('@feathersjs/authentication').hooks;

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

const { timestamps, validate, authorize } = require('app/hooks')

const userConfig = { ownerField: 'id', as: 'id' }

module.exports = {
  before: {
    all: [ timestamps() ],
    find: [ authenticate('jwt'), authorize(userConfig) ],
    get: [ authenticate('jwt'), authorize(userConfig) ],
    create: [ validate(), hashPassword() ],
    update: [ authenticate('jwt'), authorize(userConfig), validate(), hashPassword() ],
    patch: [ authenticate('jwt'), authorize(userConfig), validate(), hashPassword() ],
    remove: [ authenticate('jwt'), authorize(userConfig) ]
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
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
