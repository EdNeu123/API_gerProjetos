const Project = require('../models/project')

class ProjectController {
  static createProject(req, res) {
    const { name, description } = req.body

    if (!name || !description) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios o preenchimentp' })
    }

    const project = new Project(name, description)
    project.save()

    res.status(201).json(project)
  }

  static listProjects(req, res) {
    res.json(Project.fetchAll())
  }

  static deleteProject(req, res) {
    const id = parseInt(req.params.id)
    Project.delete(id)
    res.status(204).send()
  }
}

module.exports = ProjectController