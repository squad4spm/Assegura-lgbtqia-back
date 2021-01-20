use assegura;
/*
SET FOREIGN_KEY_CHECKS=0;

use assegura;
alter table usuario
add foreign key (id)
references parceiros(id);

use assegura;
alter table usuario
add foreign key (id)
references voluntarios(id);

SET FOREIGN_KEY_CHECKS=1;
*/

/*Inserção de dados da tabela usuario em usuariojoin*/
insert into assegura.usuariojoin (id, nome, sobrenome, dataNascimento, email, tipo, senha, endereco, complemento, cidade, estado, cep, imagem)
select id, nome, sobrenome, dataNascimento, email, tipo, senha, endereco, complemento, cidade, estado, cep, imagem from assegura.usuario;

/*Inserção de dados da tabela usuario em voluntarios*/
insert into assegura.voluntarios (id, nome, sobrenome, email, tipo, cidade, estado, cep)
select id, nome, sobrenome, email, tipo, cidade, estado, cep from assegura.usuario where tipo='Voluntário';

/*Join*/
select voluntarios.nome, voluntarios.sobrenome, voluntarios.email, voluntarios.cidade, voluntarios.estado, usuario.endereco from assegura.voluntarios
join usuario on usuario.id = voluntarios.id;

/*Inserção de dados da tabela usuario em voluntarios*/
insert into assegura.parceiros (id, nome, sobrenome, email, tipo, cidade, estado)
select id, nome, sobrenome, email, tipo, cidade, estado from assegura.usuario where tipo='Parceiro';

/*Join*/
select parceiros.nome, parceiros.sobrenome, parceiros.email, parceiros.cidade, parceiros.estado, usuario.endereco from assegura.parceiros
join usuario on usuario.id = parceiros.id;