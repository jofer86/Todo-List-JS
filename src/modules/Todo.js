class Todo {
  constructor(name, description, dueDate = new Date(), status = false) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.updatePriority();
    this.status = status;
  }

  get getName() {
    return this.name;
  }

  set setName(name) {
    this.name = name;
  }

  get getDescription() {
    return this.description;
  }

  set setDescription(description) {
    this.description = description;
  }

  get getDueDate() {
    return this.dueDate;
  }

  set setDueDate(newDate) {
    this.dueDate = newDate;
    this.updatePriority();
  }

  get getStatus() {
    return this.status;
  }

  set setStatus(bol) {
    this.status = bol;
  }


  static validDate(todoDate, projectDate) {
    return Math.floor((todoDate - projectDate) / 86400000);
  }


  updatePriority() {
    const timeLeft = Math.floor((this.dueDate - new Date()) / 86400000);
    // console.log (timeLeft);
    if (timeLeft <= 1) {
      this.priority = 'Red';
    } else if (timeLeft > 1 && timeLeft <= 3) {
      this.priority = 'Orange';
    } else {
      this.priority = 'Green';
    }
  }

  updateStatus() {
    this.status = !this.status;
  }
}

export default Todo;