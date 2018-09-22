const users = require('./users/users.service.js');
const tasks = require('./tasks/tasks.service.js');
const workspaces = require('./workspaces/workspaces.service.js');
const tags = require('./tags/tags.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(tasks);
  app.configure(workspaces);
  app.configure(tags);
};
