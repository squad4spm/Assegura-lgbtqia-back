const express = require('express');
const router = express.Router();

const MUser = require('../database/ModelUser');

router.get('/', (req, res) => {
  res.json({status: "ok"})
});

module.exports = router;
