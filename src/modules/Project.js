class Project {
	constructor(name, category = 'default', description, dueDate = new Date()) {
		this.name = name;
		this.category = category;
		this.dueDate = dueDate;
		this.updatePriority();
		this.description = description;
		this.todos = [];
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
	set setTodo(newTodo) {
		this.todo = newTodo;
	}

	set setDueDate(newDate) {
		if (Math.floor(newDate - new Date()) <= 0) {
			console.log('invalid date');
			return false;
		}
		this.date = newDate;
		this.updatePriority();
	}

	set setCategory(newCategory) {
		this.category = newCategory;
	}

	static validDate(date) {
		return Math.floor((date - new Date()) / 86400000);
	}

	updatePriority() {
		const timeLeft = Project.validDate(this.dueDate);
		//console.log (timeLeft);
		if (timeLeft <= 1) {
			this.priority = 'Red';
		} else if (timeLeft > 1 && timeLeft <= 3) {
			this.priority = 'Orange';
		} else {
			this.priority = 'Green';
		}
	}
	addTodo(todo) {
		if ((Math.floor(this.dueDate - todo.dueDate) <= 0) || Math.floor(todo.dueDate - new Date()) <= 0) {
			return false;
		}
		this.todos.push(todo);
	}

	delTodo(index) {
		this.todos.splice(index, 1);
	}

}



export default Project;