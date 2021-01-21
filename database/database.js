const Sequelize = require('sequelize');

const connection = new Sequelize('questions_answer', 'diegozf', '?E8[H2UalZ+mV', {
  host: 'mysql669.umbler.com',
  port: 41890,
  dialect: 'mysql',
  timezone: '-03:00',
});

module.exports = connection;
