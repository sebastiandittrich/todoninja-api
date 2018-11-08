// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const field = require('app/migrations/field')

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const tasks = sequelizeClient.define('tasks', {

    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    doneAt: field.timestamp({ allowNull: true }),
    description: field.string({ allowNull: true }),
    state: field.integer(),
    deadline: field.timestamp({ allowNull: true }),
    waiting_for: field.string({ allowNull: true }),
    today: field.date({ allowNull: true }),

    userId: field.integer(),
    workspaceId: field.integer({ allowNull: true }),

  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  tasks.associate = function ({ tags }) {
    this.belongsToMany( tags, { through: 'tags_tasks' })
  };

  return tasks;
};
