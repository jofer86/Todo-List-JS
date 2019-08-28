class Project {
	constructor(name, category = 'default', description, dueDate = new Date().getDate) {
		this.name = name;
		this.category = category;
		this.description = description;
		this.dueDate = dueDate;
		updatePriority();
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

	set setDueDate(newDate) {
		this.date = newDate;
		updatePriority();
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
}
export default Project;
