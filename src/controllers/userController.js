const User = require('../models/user')

class UserController {
  static createUser(req, res) {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' })
    }

    const user = new User(name, email, password)
    user.save()

    res.status(201).json(user)
  }

  static listUsers(req, res) {
    res.json(User.fetchAll())
  }

  static deleteUser(req, res) {
    const id = parseInt(req.params.id)
    User.delete(id)
    res.status(204).send()
  }
}

module.exports = UserController