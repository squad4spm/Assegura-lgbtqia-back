const Sequelize = require('sequelize');
const connection = require('./database');

const MUser = require('./ModelUser');

const ModelEndereco = connection.define('enderecos', {
  rua: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  numero: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  bairro: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  cidade: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  estado: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  cep: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

ModelEndereco.belongsTo(MUser); // Um endereco pertence a 1 usuario

// ModelEndereco.sync({ force: true })
//   .then(() => {
//     console.log('tabela enderecos criada');
//   })
//   .catch(() => {
//     console.log('erro na criação da tabela enderecos');
//   });

module.exports = ModelEndereco;
