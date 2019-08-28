class Project {
	constructor(name, category = 'default', description, dueDate) {
		this.name = name;
		this.category = category;
		this.description = description;
		this.dueDate = dueDate;
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
	}

	set setCategory(newCategory) {
		this.category = newCategory;
	}
}
export default Project;
