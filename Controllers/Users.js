const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();
const MUser = require('../database/ModelUser');

const adminAuth = require('../middlewares/adminAuth');

router.get('/admin/users', adminAuth, (req, res) => {
  MUser.findAll().then(users => {
    res.render('admin/users/index', { users: users });
  });
});

router.get('/admin/users/edit/:id', adminAuth, (req, res) => {
  var id = req.params.id;

  MUser.findOne({
    where: { id: id },
  }).then(user => {
    res.render('admin/users/edit', adminAuth, { user: user });
  });
});

router.get('/admin/users/new', adminAuth, (req, res) => {
  res.render('admin/users/new', { msg: '', email: '' });
});

router.post('/admin/users/save', adminAuth, (req, res) => {
  var id = req.body.id;
  var email = req.body.email;
  var password = req.body.password;

  MUser.findOne({ where: { email: email } }).then(user => {
    if (user != undefined) {
      res.render('admin/users/new', { msg: 'Email já cadastrado!', email: email });
    }
  });

  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);
  if (id) {
    MUser.update(
      {
        email: email,
        password: hash,
      },
      {
        where: {
          id: id,
        },
      }
    )
      .then(() => {
        res.redirect('/admin/users');
      })
      .catch(() => {
        console.log('erro ao atualizar usuario');
      });
  } else {
    MUser.create({
      email: email,
      password: hash,
    })
      .then(() => {
        res.redirect('/admin/users');
      })
      .catch(() => {
        console.log('erro ao gravar usuario');
      });
  }
});

router.get('/admin/users/delete/:id', adminAuth, (req, res) => {
  var id = req.params.id;

  if (id != undefined) {
    if (!isNaN(id)) {
      MUser.destroy({
        where: {
          id: id,
        },
      });
      res.redirect('/admin/users');
    } else {
      res.redirect('/admin/users');
    }
  } else {
    res.redirect('/admin/users');
  }
});

router.get('/login', (req, res) => {
  res.render('login', { msg: '' });
});

router.post('/login', (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  MUser.findOne({ where: { email: email } }).then(user => {
    if (user != undefined) {
      var passCorrect = bcrypt.compareSync(password, user.password);

      if (passCorrect) {
        req.session.user = {
          id: user.id,
          email: user.email,
        };
        res.redirect(301, '/admin/article');
      } else {
        res.render('login', { msg: 'Usuario ou Senha Invalidos!' });
      }
    } else {
      res.render('login', { msg: 'Usuario ou Senha Invalidos!' });
    }
  });
});

router.get('/logout-user', (req, res) => {
  req.session.user = undefined;

  res.redirect(301, '/');
});

module.exports = router;
