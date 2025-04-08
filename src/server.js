const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') })

const express = require('express')
const app = express()

// Conexão com o banco via Sequelize
const sequelize = require('./config/database')

// Rotas organizadas por arquivo (pasta "Routers")
const userRoutes = require('./Routers/userRouters')
const projectRoutes = require('./Routers/projectRouters')
const taskRoutes = require('./Routers/taskRouters')

app.use(express.json())

// Usa os arquivos de rotas com o prefixo /api
app.use('/api', userRoutes)
app.use('/api', projectRoutes)
app.use('/api', taskRoutes)

// Função async para sincronizar os modelos e iniciar o servidor
async function startServer() {
  try {
    await sequelize.sync()
    console.log('Banco de dados sincronizado com Sequelize')

    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`)
    })
  } catch (error) {
    console.error('Erro ao sincronizar com o banco de dados:', error)
  }
}

startServer()
