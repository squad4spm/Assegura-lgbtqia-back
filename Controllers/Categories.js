const express = require('express');
const router = express.Router();
const slugiFy = require('slugify');

const adminAuth = require('../middlewares/adminAuth');

const MCategory = require('../database/ModelCategory');

router.get('/admin/cat', adminAuth, (req, res) => {
  MCategory.findAll().then(cats => {
    res.render('admin/categories/index', { cats: cats });
  });
});

router.post('/admin/cat', adminAuth, (req, res) => {
  var title = req.body.title;

  if (title != undefined) {
    MCategory.create({
      title: title,
      slug: slugiFy(title, { lower: true }),
    }).then(() => {
      res.redirect('/admin/cat');
    });
  }
});

router.get('/admin/cat/:id', adminAuth, (req, res) => {
  var id = req.params.id;

  if (id != undefined && id != 1) {
    if (!isNaN(id)) {
      MCategory.destroy({
        where: {
          id: id,
        },
      });
      res.redirect('/admin/cat');
    } else {
      res.redirect('/admin/cat');
    }
  } else {
    res.redirect('/admin/cat');
  }
});

module.exports = router;
