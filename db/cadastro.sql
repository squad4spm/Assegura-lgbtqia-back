use `assegura`;

create table `usuario`(
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(20) NOT NULL,
  `sobrenome` varchar(20) NOT NULL,
  `dataNascimento` varchar(20) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `tipo` varchar(20) DEFAULT NULL,
  `senha` varchar(32) NOT NULL,
  `endereco` varchar(20) DEFAULT NULL,
  `complemento` varchar(20) DEFAULT NULL,
  `cidade` varchar(20) NOT NULL,
  `estado` varchar(20) NOT NULL,
  `cep` varchar(20) DEFAULT NULL,
  `imagem` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;