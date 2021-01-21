const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();
const MUser = require('../database/ModelUser');
const MEndereco = require('../database/ModelEndereco');

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

  MUser.findByPk(params.id).then(user => {
    if (user != undefined) {
      MEndereco.findOne({ where: { userId: user.id } }).then(endereco => {
        const result = {
          id: user.id,
          user: user.name,
          sobreNome: user.sobreNome,
          email: user.email,
          endereco: {
            rua: endereco.rua,
            numero: endereco.numero,
            cidade: endereco.cidade
          }
        }
        res.json({ user: result });
      });
    } else {
      res.json({ erro: 'erro' });
    }
  });

  // MUser.findOne({
  //   where: { id: params.id },
  // }).then(user => {
  //   res.json({ user });
  // });
});

module.exports = router;
