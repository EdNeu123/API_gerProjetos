const express = require('express');
const router = express.Router();
const autenticarToken = require('../middlewares/auth');
const {
  createTask,
  listTasks,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

// Rotas protegidas
router.post('/tasks', autenticarToken, createTask);
router.get('/tasks', autenticarToken, listTasks);
router.put('/tasks/:id', autenticarToken, updateTask);
router.delete('/tasks/:id', autenticarToken, deleteTask);

module.exports = router;
