-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS api_project;
USE api_project;

-- Tabela de usuários
CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

-- Tabela de projetos
CREATE TABLE Projeto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL
);

-- Tabela de tarefas
CREATE TABLE Tarefa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    status BOOLEAN NOT NULL DEFAULT 0,
    projetoId INT NOT NULL,
    usuarioId INT NOT NULL,
    CONSTRAINT fk_projeto
        FOREIGN KEY (projetoId)
        REFERENCES Projeto(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_usuario
        FOREIGN KEY (usuarioId)
        REFERENCES Usuario(id)
        ON DELETE CASCADE
);
