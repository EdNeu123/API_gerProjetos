const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const JWT_SECRET = process.env.JWT_SECRET;

// POST /api/users
async function createUser(req, res) {
  try {
    const { nome, email, senha } = req.body;
    if (!nome || !email || !senha) {
      return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
    }

    const usuarioExistente = await User.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).json({ erro: 'Usuário já existe' });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);
    const novoUsuario = await User.create({ nome, email, senha: senhaCriptografada });

    res.status(201).json(novoUsuario);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao criar usuário' });
  }
}

// POST /api/login
async function login(req, res) {
  try {
    const { email, senha } = req.body;
    if (!email || !senha) {
      return res.status(400).json({ erro: 'Email e senha são obrigatórios' });
    }

    const usuario = await User.findOne({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ erro: 'Senha incorreta' });
    }

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao efetuar login' });
  }
}

// GET /api/users
async function listUsers(req, res) {
  try {
    const usuarios = await User.findAll({
      attributes: ['id', 'nome', 'email']
    });
    res.json(usuarios);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao listar usuários' });
  }
}

// PUT /api/users/:id
async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    const usuario = await User.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    if (nome)  usuario.nome  = nome;
    if (email) usuario.email = email;
    if (senha) usuario.senha = await bcrypt.hash(senha, 10);

    await usuario.save();
    res.json(usuario);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao atualizar usuário' });
  }
}

// DELETE /api/users/:id
async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    const deletado = await User.destroy({ where: { id } });
    if (deletado) {
      return res.status(204).send();
    }
    res.status(404).json({ erro: 'Usuário não encontrado' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao excluir usuário' });
  }
}

module.exports = {
  createUser,
  login,
  listUsers,
  updateUser,
  deleteUser
};
