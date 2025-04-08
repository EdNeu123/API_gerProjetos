const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController')

// Rotas para usuários
router.post('/users', UserController.createUser)
router.get('/users', UserController.listUsers)
router.delete('/users/:id', UserController.deleteUser)
router.post('/login', UserController.login)

module.exports = router
