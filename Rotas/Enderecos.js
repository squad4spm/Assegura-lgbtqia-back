const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();
const MEndereco = require('../database/ModelEndereco');

router.get('/', (req, res) => {
  MEndereco.findAll().then(enderecos => {
    res.json({ enderecos });
  });
});

router.post('/', (req, res) => {
  const { body } = req;

  MEndereco.create({
    userId: body.userId,
    rua: body.rua,
    numero: body.numero,
    bairro: body.bairro,
    cidade: body.cidade,
    estado: body.estado,
    cep: body.cep,
  })
    .then(() => {
      res.json({status: "OK"});
    })
    .catch((e) => {
      res.json({status: "ERROR", error: e});
    });
});

router.get('/:id', (req, res) => {
  const { params } = req;

  MEndereco.findOne({
    where: { id: params.id },
  }).then(user => {
    res.json({ user });
  });
});

module.exports = router;
