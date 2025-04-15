const Project = require('../models/project');

// POST /api/projects
// POST /api/projects
async function createProject(req, res) {
  try {
    const { titulo, descricao } = req.body;
    const usuarioId = req.userId; // <-- ID do usuário autenticado

    const novoProjeto = await Project.create({ titulo, descricao, usuarioId });
    res.status(201).json(novoProjeto);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao criar projeto' });
  }
}


// GET /api/projects
async function listProjects(req, res) {
  try {
    const usuarioId = req.userId;
    const projetos = await Project.findAll({ where: { usuarioId } });
    res.json(projetos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao listar projetos' });
  }
}

// PUT /api/projects/:id
async function updateProject(req, res) {
  try {
    const { id } = req.params;
    const { titulo, descricao } = req.body;
    const usuarioId = req.userId;

    const projeto = await Project.findOne({ where: { id, usuarioId } });

    if (!projeto) {
      return res.status(404).json({ erro: 'Projeto não encontrado ou não autorizado' });
    }

    projeto.titulo = titulo || projeto.titulo;
    projeto.descricao = descricao || projeto.descricao;

    await projeto.save();
    res.json(projeto);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao atualizar projeto' });
  }
}

// DELETE /api/projects/:id
async function deleteProject(req, res) {
  try {
    const { id } = req.params;
    const usuarioId = req.userId;

    const deletado = await Project.destroy({ where: { id, usuarioId } });

    if (!deletado) {
      return res.status(404).json({ erro: 'Projeto não encontrado ou não autorizado' });
    }

    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao excluir projeto' });
  }
}

module.exports = {
  createProject,
  listProjects,
  updateProject,
  deleteProject
};
