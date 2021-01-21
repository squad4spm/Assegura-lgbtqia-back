const Sequelize = require('sequelize');
const connection = require('./database');

const ModelCategory = connection.define('blog_categories', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// ModelCategory.sync({ force: false })
//   .then(() => {
//     console.log('tabela blog_categories criada');
//   })
//   .catch(() => {
//     console.log('erro na criação da tabela blog_categories');
//   });

module.exports = ModelCategory;
