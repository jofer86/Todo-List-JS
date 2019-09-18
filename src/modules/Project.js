class Project {
  constructor(name, category, description, dueDate = new Date(), status = false) {
    this.name = name;
    this.category = category;
    this.dueDate = dueDate;
    this.updatePriority();
    this.description = description;
    this.todos = [];
    this.status = status;
  }

  get getName() {
    return this.name;
  }

  get getCategory() {
    return this.category;
  }

  get getDescription() {
    return this.description;
  }

  get getDueDate() {
    return this.dueDate;
  }

  get getTodo() {
    return this.todos;
  }

  get getStatus() {
    return this.status;
  }

  set setTodo(newTodo) {
    this.todo = newTodo;
  }

  set setDueDate(newDate) {
    if (Math.floor(newDate - new Date()) <= 0) {
      return false;
    }
    this.date = newDate;
    this.updatePriority();
    return true;
  }

  set setCategory(newCategory) {
    this.category = newCategory;
  }

  static validDate(date) {
    return Math.floor((date - new Date()) / 86400000);
  }

  get getPriority() {
    return this.priority;
  }

  updatePriority() {
    const timeLeft = Project.validDate(this.dueDate);
    // console.log (timeLeft);
    if (timeLeft <= 1) {
      this.priority = 'Red';
    } else if (timeLeft > 1 && timeLeft <= 3) {
      this.priority = 'Orange';
    } else {
      this.priority = 'Green';
    }
  }

  addTodo(todo) {
    if (Math.floor(this.dueDate - todo.dueDate) <= 0 || Math.floor(todo.dueDate - new Date()) <= 0) {
      return false;
    }
    this.todos.push(todo);
    return true;
  }

  delTodo(index) {
    this.todos.splice(index, 1);
  }

  updateStatus() {
    this.status = !this.status;
    if (this.status) {
      this.todos.forEach((todo) => (todo.setStatus = true));
    } else {
      this.todos.forEach((todo) => (todo.setStatus = false));
    }
  }
}

export default Project;