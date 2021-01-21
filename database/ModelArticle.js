const Sequelize = require('sequelize');
const connection = require('./database');

const MCategory = require('./ModelCategory');

const ModelArticle = connection.define('blog_articles', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

MCategory.hasMany(ModelArticle); // Uma categoria tem muitos artigos
ModelArticle.belongsTo(MCategory); // Um Artigo pertence a 1 categoria

// User.belongsToMany(Profile, { through: Grant }); Muitos para Muitos
// Profile.belongsToMany(User, { through: Grant }); Muitos para Muitos
// User.hasMany(Grant);
// Grant.belongsTo(User);
// Profile.hasMany(Grant);
// Grant.belongsTo(Profile);

// ModelArticle.sync({ force: false })
//   .then(() => {
//     console.log('tabela blog_articles criada');
//   })
//   .catch(() => {
//     console.log('erro na criação da tabela blog_articles');
//   });

module.exports = ModelArticle;
