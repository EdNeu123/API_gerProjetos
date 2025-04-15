const express = require('express');
const router = express.Router();
const autenticarToken = require('../middlewares/auth');
const {
  createProject,
  listProjects,
  updateProject,
  deleteProject
} = require('../controllers/projectController');

router.post('/projects', autenticarToken, createProject);
router.get('/projects', autenticarToken, listProjects);
router.put('/projects/:id', autenticarToken, updateProject);
router.delete('/projects/:id', autenticarToken, deleteProject);

module.exports = router;
