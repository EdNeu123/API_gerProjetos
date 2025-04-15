// const { Sequelize } = require('sequelize');
// const path = require('path');

// // Carrega variáveis do .env a partir da raiz do projeto
// require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: process.env.DB_DIALECT || 'mysql',
//     logging: false
//   }
// );

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Conexão com o banco de dados foi bem-sucedida!');
//   } catch (error) {
//     console.error('Erro ao conectar ao banco de dados:', error);
//   }
// })();

// module.exports = sequelize;

// require('dotenv').config({ path: require('path').resolve(__dirname, '..', '..', '.env') })
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT
  }
)

module.exports = sequelize
