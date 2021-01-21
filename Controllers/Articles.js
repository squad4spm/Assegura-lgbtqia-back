const express = require('express');
const router = express.Router();

const MArticle = require('../database/ModelArticle');
const MCategory = require('../database/ModelCategory');

const adminAuth = require('../middlewares/adminAuth');

const slugiFy = require('slugify');

router.get('/admin/article', adminAuth, (req, res) => {
  MArticle.findAll({
    include: [{ model: MCategory }],
  }).then(articles => {
    res.render('admin/articles/index', { articles: articles });
  });
});

router.get('/admin/article/new', adminAuth, (req, res) => {
  MCategory.findAll().then(categories => {
    res.render('admin/articles/new', { categories: categories });
  });
});

router.get('/admin/article/edit/:id', adminAuth, (req, res) => {
  var id = req.params.id;

  MArticle.findByPk(id).then(article => {
    if (article != undefined) {
      MCategory.findAll().then(categories => {
        res.render('admin/articles/edit', { article: article, categories: categories });
      });
    } else {
      res.redirect('/');
    }
  });
});

router.post('/admin/article/save', adminAuth, (req, res) => {
  var id = req.body.id;
  var title = req.body.title;
  var content = req.body.content;
  var category = req.body.category;

  if (id) {
    MArticle.update(
      {
        title: title,
        slug: slugiFy(title, { lower: true }),
        content: content,
        blogCategoryId: category,
      },
      {
        where: {
          id: id,
        },
      }
    ).then(() => {
      res.redirect('/admin/article');
    });
  } else {
    MArticle.create({
      title: title,
      slug: slugiFy(title, { lower: true }),
      content: content,
      blogCategoryId: category,
    }).then(() => {
      res.redirect('/admin/article');
    });
  }
});

router.get('/admin/article/delete/:id', adminAuth, (req, res) => {
  var id = req.params.id;

  if (id != undefined) {
    if (!isNaN(id)) {
      MArticle.destroy({
        where: {
          id: id,
        },
      });
      res.redirect('/admin/article');
    } else {
      res.redirect('/admin/article');
    }
  } else {
    res.redirect('/admin/article');
  }
});

module.exports = router;
