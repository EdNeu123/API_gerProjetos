const Task = require('../models/task')

const TaskController = {
  createTask: async (req, res) => {
    try {
      const { titulo, projetoId, usuarioId } = req.body
      if (!titulo || !projetoId || !usuarioId) {
        return res.status(400).json({ erro: 'Todos os campos são obrigatórios' })
      }

      const tarefa = await Task.create({ titulo, projetoId, usuarioId })
      res.status(201).json(tarefa)
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao criar tarefa' })
    }
  },

  listTasks: async (req, res) => {
    try {
      const tarefas = await Task.findAll()
      res.json(tarefas)
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao listar tarefas' })
    }
  },

  deleteTask: async (req, res) => {
    try {
      const { id } = req.params
      const deletado = await Task.destroy({ where: { id } })
      if (deletado) {
        res.status(204).send()
      } else {
        res.status(404).json({ erro: 'Tarefa não encontrada' })
      }
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao excluir tarefa' })
    }
  }
}

module.exports = TaskController
