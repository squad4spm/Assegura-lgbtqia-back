const Sequelize = require('sequelize');
const connection = require('./database');

const ModelUser = connection.define('blog_users', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// ModelUser.sync({ force: false })
//   .then(() => {
//     console.log('tabela blog_users criada');
//   })
//   .catch(() => {
//     console.log('erro na criação da tabela blog_users');
//   });

module.exports = ModelUser;
