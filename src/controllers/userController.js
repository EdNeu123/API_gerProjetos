const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const UserController = {
  createUser: async (req, res) => {
    try {
      const { nome, email, senha } = req.body
      if (!nome || !email || !senha) {
        return res.status(400).json({ erro: 'Todos os campos são obrigatórios' })
      }

      const usuarioExistente = await User.findOne({ where: { email } })
      if (usuarioExistente) {
        return res.status(400).json({ erro: 'Usuário já existe' })
      }

      const senhaCriptografada = await bcrypt.hash(senha, 10)
      const novoUsuario = await User.create({
        nome,
        email,
        senha: senhaCriptografada
      })

      res.status(201).json(novoUsuario)
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao criar usuário' })
    }
  },

  listUsers: async (req, res) => {
    try {
      const usuarios = await User.findAll({
        attributes: ['id', 'nome', 'email'] // evita retornar a senha
      })
      res.json(usuarios)
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao listar usuários' })
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { id } = req.params
      const deletado = await User.destroy({ where: { id } })
      if (deletado) {
        res.status(204).send()
      } else {
        res.status(404).json({ erro: 'Usuário não encontrado' })
      }
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao excluir usuário' })
    }
  },

  login: async (req, res) => {
    try {
      const { email, senha } = req.body
      if (!email || !senha) {
        return res.status(400).json({ erro: 'Email e senha são obrigatórios' })
      }

      const usuario = await User.findOne({ where: { email } })
      if (!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado' })
      }

      const senhaValida = await bcrypt.compare(senha, usuario.senha)
      if (!senhaValida) {
        return res.status(401).json({ erro: 'Senha incorreta' })
      }

      const token = jwt.sign(
        { id: usuario.id, email: usuario.email },
        process.env.JWT_SECRET, // Certifique-se de definir JWT_SECRET no .env
        { expiresIn: '1h' }
      )

      res.json({ token })
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao efetuar login' })
    }
  }
}

module.exports = UserController
