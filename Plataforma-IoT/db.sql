
drop database sistema;
create database sistema;
use sistema;

create table cliente(
	cpf_cnpj varchar(20) primary key,
    tipo int,
    nome varchar(100),
    email varchar(100),
    celular varchar(100)
);

create table produto(
	id int primary key auto_increment,
    nome varchar(200),
    valor float
);

create table venda(
	cliente int,
    quantidade int,
    produto int
);
