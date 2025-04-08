const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/taskController')

// Rotas para tarefas
router.post('/tasks', TaskController.createTask)
router.get('/tasks', TaskController.listTasks)
router.delete('/tasks/:id', TaskController.deleteTask)

module.exports = router
