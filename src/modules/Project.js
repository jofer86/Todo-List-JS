class Project {
	constructor(name, category = 'default', description, dueDate = new Date().getDate, todos) {
		this.name = name;
		this.category = category;
		this.description = description;
		this.dueDate = dueDate;
		this.updatePriority();
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
		return this.todo;
	}

	set setDueDate(newDate) {
		this.date = newDate;
		this.updatePriority();
	}

	set setCategory(newCategory) {
		this.category = newCategory;
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
	
	addTodo(todo) {
		this.todo.push(todo);
	}

	delTodo(index) {
		this.todo.splice(index, 1);
	}

}



export default Project;
