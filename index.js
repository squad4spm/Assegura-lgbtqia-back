const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const cors = require("cors");

//importanto as rotas
const CUsers = require('./Rotas/Users');
const CEnderecos = require('./Rotas/Enderecos');

//body parser  para trabalhar com formularios
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//fazendo conexão com banco de dados
connection
  .authenticate()
  .then(() => {
    console.log('conectado com banco');
  })
  .catch(error => {
    console.log('deu erro na conexão' + error);
  });

//Usando as rotas
// 
app.use('/user', CUsers);
app.use('/endereco', CEnderecos);

//escutando a porta 3000
app.listen(3000, () => {
  console.log('servidor rodando!');
});
