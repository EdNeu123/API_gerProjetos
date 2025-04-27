# 📁 API - Gerenciador de Projetos

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=flat&logo=sequelize&logoColor=white)](https://sequelize.org/)
[![MySQL](https://img.shields.io/badge/MySQL-00758F?style=flat&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

API RESTful desenvolvida em **Node.js** para o gerenciamento de projetos, tarefas e usuários, utilizando autenticação com **JWT** e arquitetura **MVC**. Ideal para controle de produtividade e organização de equipes.

---

## ⚙️ Funcionalidades

### 👤 Usuários
- Registro de novos usuários
- Autenticação com **JWT**
- Listagem, edição e exclusão de usuários (rotas protegidas)

### 📁 Projetos
- Criação de projetos vinculados ao usuário autenticado
- Listagem geral ou por usuário
- Atualização e remoção de projetos

### ✅ Tarefas
- Criação de tarefas associadas a projetos
- Atualização de status (concluído/pendente)
- Listagem por projeto
- Exclusão de tarefas

---

## 🧪 Tecnologias e Ferramentas

- **Node.js** – ambiente de execução
- **Express** – framework para rotas e middlewares
- **Sequelize** – ORM para interação com banco MySQL
- **MySQL** – banco de dados relacional
- **JWT** – autenticação segura
- **Nodemon** – recarregamento automático durante o desenvolvimento
- **Dotenv** – variáveis de ambiente
- **Docker (opcional)** – para facilitar o setup do ambiente

## 🚀 Instalação

1. Clone o repositório:  
   ```bash
   git clone https://github.com/EdNeu123/API_gerProjetos.git

2. Acesse o diretório do projeto:  
   ```bash
   cd API_gerProjetos

3. Instale as dependências:  
   ```bash
   npm install

4. Crie (ou ajuste) o arquivo `.env` na raiz, copiando de `.env.example` e definindo:  
   ```env
   PORT=3000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=api_projeto
   JWT_SECRET=uma_chave_bem_secreta

5. Garanta que o banco de dados exista e rode as migrations (ou crie as tabelas manualmente):  
   ```bash
   mysql -u root -p < db.sql

6. Inicie o servidor:  
   ```bash
   npm start
