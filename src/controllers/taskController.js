const Task = require('../models/task');

// POST /api/tasks
async function createTask(req, res) {
  try {
    const { titulo, projetoId, usuarioId, status } = req.body;
    const novaTarefa = await Task.create({ titulo, projetoId, usuarioId, status });
    res.status(201).json(novaTarefa);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao criar tarefa' });
  }
}

// GET /api/tasks
async function listTasks(req, res) {
  try {
    const tarefas = await Task.findAll();
    res.json(tarefas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao listar tarefas' });
  }
}

// PUT /api/tasks/:id
async function updateTask(req, res) {
  try {
    const { id } = req.params;
    const { titulo, status } = req.body;

    const tarefa = await Task.findByPk(id);
    if (!tarefa) {
      return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    tarefa.titulo = titulo ?? tarefa.titulo;
    tarefa.status = status ?? tarefa.status;

    await tarefa.save();
    res.json(tarefa);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao atualizar tarefa' });
  }
}

// DELETE /api/tasks/:id
async function deleteTask(req, res) {
  try {
    const { id } = req.params;
    const deletado = await Task.destroy({ where: { id } });
    if (!deletado) {
      return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao excluir tarefa' });
  }
}

module.exports = {
  createTask,
  listTasks,
  updateTask,
  deleteTask
};
