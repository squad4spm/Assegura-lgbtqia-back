const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();
const MUser = require('../database/ModelUser');

router.get('/', (req, res) => {
  MUser.findAll().then(users => {
    res.json({ users });
  });
});

router.post('/', (req, res) => {
  var { body } = req;

  MUser.create({
    nome: body.nome,
    sobreNome: body.sobreNome,
    email: body.email,
    telefone: body.telefone,
    password: body.password,
  })
    .then(() => {
      res.send('foi');
    })
    .catch(() => {
      res.send('nao foi');
    });
});

router.get('/:id', (req, res) => {
  const { params } = req;

  MUser.findOne({
    where: { id: params.id },
  }).then(user => {
    res.json({ user });
  });
});

module.exports = router;
