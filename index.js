const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');

//importanto as rotas
const CUsers = require('./Rotas/Users');

//view engine  para definir qual a engine (renderedirazdor de html) que vamos usar no projeto
app.set('view engine', 'ejs');

//body parser  para trabalhar com formularios
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

//escutando a porta 3000
app.listen(3000, () => {
  console.log('servidor rodando!');
});
