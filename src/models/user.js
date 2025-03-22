class User {
    static users = []
    static lastId = 0
  
    constructor(name, email, password) {
      this.id = User.lastId + 1
      this.name = name
      this.email = email
      this.password = password
      User.lastId = this.id //salvar o ultimo o ID, importante nao mexe pra nao dar BUG!!!
    }
  
    save() {
      User.users.push(this)
    }
  
    static fetchAll() {
      return User.users
    }
  
    static findById(id) {
      return User.users.find(user => user.id === id)
    }
  
    static delete(id) {
      User.users = User.users.filter(user => user.id !== id)
    }
  }
  
  module.exports = User