const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const connection = require('./database/database');

//importanto as rotas
const CCategories = require('./Controllers/Categories');
const CArticles = require('./Controllers/Articles');
const CIndex = require('./Controllers/Index');
const CUsers = require('./Controllers/Users');

//view engine  para definir qual a engine (renderedirazdor de html) que vamos usar no projeto
app.set('view engine', 'ejs');

//configurando sessoes
app.use(
  session({
    secret: 'appBlogDZF2020',
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 3,
    },
  })
);

//static  para definir onde estarão os arquivos estaticos (imagens, videos e etc)
app.use(express.static('public'));

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
app.use('/', CCategories);
app.use('/', CArticles);
app.use('/', CIndex);
app.use('/', CUsers);

// app.get('/session', (req, res) => {
//   req.session.name = 'Diego';

//   res.json({ opa: 'opa' });
// });

// app.get('/readsession', (req, res) => {
//   res.json({ req: req.session });
// });

//escutando a porta 3000
app.listen(3000, () => {
  console.log('servidor rodando!');
});
