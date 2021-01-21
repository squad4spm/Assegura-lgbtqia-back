const Sequelize = require('sequelize');

const connection = new Sequelize('recode_site', 'recode_site', 'reCode323##', {
  host: 'mysql741.umbler.com',
  port: 41890,
  dialect: 'mysql',
  timezone: '-03:00',
});

module.exports = connection;
