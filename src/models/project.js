class Project {
    static projects = []
    static lastId = 0
  
    constructor(name, description) {
      this.id = Project.lastId + 1
      this.name = name
      this.description = description
      Project.lastId = this.id //salvar o ultimo o ID, importante nao mexe pra não dar BUG!!!
    }
  
    save() {
      Project.projects.push(this) // This se refere ao novo projeto sendo salvo, por isso o push
    }
  
    static fetchAll() {
      return Project.projects
    }
  
    static findById(id) {
      return Project.projects.find(project => project.id === id)
    }
  
    static delete(id) {
      Project.projects = Project.projects.filter(project => project.id !== id) //sistema de apontamente
    }
  }
  
  module.exports = Project