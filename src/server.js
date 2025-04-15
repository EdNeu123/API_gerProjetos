const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const express = require('express');
const app = express();
const sequelize = require('./config/database');

app.use(express.json());

// Importa as rotas (já com middleware interno)
const userRoutes    = require('./routers/userRouters');
const projectRoutes = require('./routers/projectRouters');
const taskRoutes    = require('./routers/taskRouters');

// Prefixo comum
app.use('/api', userRoutes);
app.use('/api', projectRoutes);
app.use('/api', taskRoutes);

async function startServer() {
  try {
    await sequelize.sync();
    console.log('Banco de dados sincronizado com Sequelize');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  } catch (err) {
    console.error('Erro ao sincronizar com o banco de dados:', err);
  }
}

startServer();
