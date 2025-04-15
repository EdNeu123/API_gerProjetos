const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Project = require('./project');

const Task = sequelize.define('Task', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  projetoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Project,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    },
    onDelete: 'CASCADE'
  }
});

Task.belongsTo(User, { foreignKey: 'usuarioId' });
Task.belongsTo(Project, { foreignKey: 'projetoId' });
User.hasMany(Task, { foreignKey: 'usuarioId' });
Project.hasMany(Task, { foreignKey: 'projetoId' });

module.exports = Task;
