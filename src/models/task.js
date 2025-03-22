class Task {
    static tasks = []
    static lastId = 0
  
    constructor(title, projectId, userId) {
      this.id = Task.lastId + 1
      this.title = title
      this.status = false
      this.projectId = projectId
      this.userId = userId
      Task.lastId = this.id //salvar o ultimo o ID, importante nao mexe pra nao dar BUG!!!
    }
  
    save() {
      Task.tasks.push(this)
    }
  
    static fetchAll() {
      return Task.tasks
    }
  
    static delete(id) {
      Task.tasks = Task.tasks.filter(task => task.id !== id)
    }
  }
  
  module.exports = Task