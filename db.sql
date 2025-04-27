-- SQL Script completo para criação do banco api_projeto

CREATE DATABASE IF NOT EXISTS api_projeto;
USE api_projeto;

-- Tabela: usuarios
CREATE TABLE IF NOT EXISTS usuarios (
  id_usuario INT(11) NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabela: projetos
CREATE TABLE IF NOT EXISTS projetos (
  id_projeto INT(11) NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(255) NOT NULL,
  descricao TEXT NOT NULL,
  id_usuario INT(11) NOT NULL,
  PRIMARY KEY (id_projeto),
  KEY fk_projeto_usuario (id_usuario),
  CONSTRAINT fk_projeto_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabela: tarefas
CREATE TABLE IF NOT EXISTS tarefas (
  id_tarefa INT(11) NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(255) NOT NULL,
  status BOOLEAN NOT NULL DEFAULT 0,
  id_projeto INT(11) NOT NULL,
  id_usuario INT(11) NOT NULL,
  PRIMARY KEY (id_tarefa),
  KEY fk_tarefa_projeto (id_projeto),
  KEY fk_tarefa_usuario (id_usuario),
  CONSTRAINT fk_tarefa_projeto FOREIGN KEY (id_projeto) REFERENCES projetos(id_projeto) ON DELETE CASCADE,
  CONSTRAINT fk_tarefa_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;