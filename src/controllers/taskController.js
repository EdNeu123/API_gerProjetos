const Task = require('../models/task')
const Project = require('../models/project')
const User = require('../models/user')

class TaskController {
  static createTask(req, res) {
    const { title, projectId, userId } = req.body

    if (!title || !projectId || !userId) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' })
    }

    // Verifica se projeto e usuário existem
    if (!Project.findById(projectId) || !User.findById(userId)) {
      return res.status(400).json({ error: 'Projeto ou usuário inválido' })
    }

    const task = new Task(title, projectId, userId)
    task.save()

    res.status(201).json(task)
  }

  static listTasks(req, res) {
    res.json(Task.fetchAll())
  }

  static deleteTask(req, res) {
    const id = parseInt(req.params.id)
    Task.delete(id)
    res.status(204).send()
  }
}

module.exports = TaskController