const Sequelize = require('sequelize');
const connection = require('./database');

const ModelUser = connection.define('users', {
  nome: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  sobreNome: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

// ModelUser.sync({ force: true })
//   .then(() => {
//     console.log('tabela users criada');
//   })
//   .catch(() => {
//     console.log('erro na criação da tabela users');
//   });

module.exports = ModelUser;
