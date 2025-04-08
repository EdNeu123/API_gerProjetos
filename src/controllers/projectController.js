const Project = require('../models/project')

const ProjectController = {
  createProject: async (req, res) => {
    try {
      const { titulo, descricao, usuarioId } = req.body
      if (!titulo || !descricao) {
        return res.status(400).json({ erro: 'Todos os campos são obrigatórios' })
      }

      // Cria o projeto e, se desejar, associa a um usuário (usuarioId opcional)
      const projeto = await Project.create({ titulo, descricao, usuarioId })
      res.status(201).json(projeto)
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao criar projeto' })
    }
  },

  listProjects: async (req, res) => {
    try {
      const projetos = await Project.findAll()
      res.json(projetos)
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao listar projetos' })
    }
  },

  deleteProject: async (req, res) => {
    try {
      const { id } = req.params
      const deletado = await Project.destroy({ where: { id } })
      if (deletado) {
        res.status(204).send()
      } else {
        res.status(404).json({ erro: 'Projeto não encontrado' })
      }
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao excluir projeto' })
    }
  }
}

module.exports = ProjectController
