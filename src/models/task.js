const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')
const Usuario = require('./user')
const Projeto = require('./project') // Note: O nome exportado de 'project' pode ser ajustado se necessário

const Tarefa = sequelize.define('Tarefa', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})

// Definindo os relacionamentos
Tarefa.belongsTo(Usuario, { foreignKey: 'usuarioId' })
Tarefa.belongsTo(Projeto, { foreignKey: 'projetoId' })
Usuario.hasMany(Tarefa, { foreignKey: 'usuarioId' })
Projeto.hasMany(Tarefa, { foreignKey: 'projetoId' })

module.exports = Tarefa
