const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Project = sequelize.define('Project', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
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

Project.belongsTo(User, { foreignKey: 'usuarioId' });
User.hasMany(Project, { foreignKey: 'usuarioId' });

module.exports = Project;
