const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Projeto = sequelize.define('Projeto', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  }
  // Se desejar, pode incluir outros campos como usuarioId para associar um usuário ao projeto.
})

module.exports = Projeto
