const express = require('express')
const router = express.Router()
const ProjectController = require('../controllers/projectController')

// Rotas para projetos
router.post('/projects', ProjectController.createProject)
router.get('/projects', ProjectController.listProjects)
router.delete('/projects/:id', ProjectController.deleteProject)

module.exports = router
