-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database gnr_projeto;
use gnr_projeto;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(80),
	senha VARCHAR(50)
);
alter table usuario add unique (email);


create table album
(idAlbum int primary key auto_increment,
nome varchar(50));


insert into album values
(default, 'appetite_for_destruction'),
(default, 'gnr_lies'),
(default, 'use_your_illusion_1'),
(default, 'use_your_illusion_2'),
(default, 'the_spaghetti_incident'),
(default, 'chinese_democracy');


create table formulario
(idFormulario INT PRIMARY KEY AUTO_INCREMENT,
fk_album INT NOT NULL,
sexo VARCHAR(15) NOT NULL,
FOREIGN KEY (fk_album) REFERENCES album(idAlbum));

ALTER TABLE formulario ADD COLUMN fk_usuario INT;
ALTER TABLE formulario ADD CONSTRAINT usuario_formulario_rel FOREIGN KEY (fk_usuario) REFERENCES usuario(id);