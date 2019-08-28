class Project {
	constructor(name, category = 'default', description, dueDate = new Date()) {
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
		const timeLeft = this.dueDate.getDate() - new Date().getDate();
		console.log (new Date().getDate() ,this.dueDate.getDate());
		if (timeLeft <= 1){
			this.priority = 'Red';
		} else if (timeLeft > 1 && timeLeft <= 3) {
			this.priority = 'Orange';
		} else {
			this.priority = 'Green';
		}
	}
	
	addTodo(todo) {
		this.todos.push(todo);
	}

	delTodo(index) {
		this.todos.splice(index, 1);
	}

}



export default Project;
