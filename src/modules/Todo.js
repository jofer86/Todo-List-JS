class Todo {
	constructor(name, description, dueDate) {
		this.name = name;
		this.description = description;
		this.dueDate = dueDate;
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
	}
}
export default Todo;
