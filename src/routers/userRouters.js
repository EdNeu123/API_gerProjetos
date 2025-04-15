const express = require('express');
const router = express.Router();
const autenticarToken = require('../middlewares/auth');
const {
  createUser,
  login,
  listUsers,
  updateUser,
  deleteUser
} = require('../controllers/userController');

// Rotas públicas
router.post('/users', createUser);
router.post('/login', login);

// Rotas protegidas
router.get('/users', autenticarToken, listUsers);
router.put('/users/:id', autenticarToken, updateUser);
router.delete('/users/:id', autenticarToken, deleteUser);

module.exports = router;
