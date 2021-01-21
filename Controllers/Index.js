const express = require('express');
const router = express.Router();

const MCategory = require('../database/ModelCategory');
const MArticle = require('../database/ModelArticle');

router.get('/', (req, res) => {
  MArticle.findAll({ limit: 5, order: [['id', 'DESC']] }).then(articles => {
    MCategory.findAll({}).then(categories => {
      res.render('index', {
        articles: articles,
        categories: categories,
        session: req.session.user,
      });
    });
  });
});

router.get('/article/:slug', (req, res) => {
  var slug = req.params.slug;

  MArticle.findOne({
    where: {
      slug: slug,
    },
  }).then(article => {
    res.render('single', { article: article });
  });
});

router.get('/page/:num', (req, res) => {
  var page = req.params.num;
  var offset = 0;
  var limit = 5;

  if (isNaN(page) || parseInt(page) == 1) {
    offset = 0;
  }

  var offset = (parseInt(page) - 1) * limit;

  MArticle.findAndCountAll({
    limit: limit,
    offset: offset,
    order: [['id', 'DESC']],
  }).then(articles => {
    var next;

    if (offset + 5 >= articles.count) {
      next = false;
    } else {
      next = true;
    }

    var pages = Math.round((articles.count - 5) / limit); //pegando o total de arquivos e divindo pela limitação de pagina definida na linha 100

    var result = {
      page: parseInt(page),
      pages: pages,
      next: next,
      articles: articles,
    };

    if (page > pages) {
      result = { status: 'ERROR' };
    }

    MCategory.findAll().then(categories => {
      //res.json({ result });
      res.render('page', { result: result, categories: categories });
    });
  });
});

router.get('/category/:slug', (req, res) => {
  var slug = req.params.slug;

  MCategory.findOne({
    where: {
      slug: slug,
    },
    include: [{ model: MArticle }],
  })
    .then(category => {
      if (category != undefined) {
        MCategory.findAll().then(categories => {
          res.render('category', {
            articles: category.blog_articles,
            category: category,
            categories: categories,
          });
        });
      } else {
        res.redirect('/');
      }
    })
    .catch(() => {
      res.redirect('/');
    });
});

module.exports = router;
