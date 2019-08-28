class Todo {
	constructor(name, description, dueDate = new Date().getDate) {
		this.name = name;
		this.description = description;
		this.dueDate = dueDate;
		this.updatePriority();
	}
	get getName() {
		return this.name;
	}
	get getDescription() {
		return this.description;
	}
	get getDueDate() {
		return this.dueDate;
	}

	set setDueDate(newDate) {
		this.date = newDate;
		this.updatePriority();
	}

	updatePriority() {
		const timeLeft = new Date().getDate - this.dueDate;
		if (timeLeft <= 1){
			this.priority = 'Red';
		} else if (timeLeft > 1 && timeLeft <= 3) {
			this.priority = 'Orange';
		} else {
			this.priority = 'Green';
		}
	}
}

export default Todo;
