import _ from 'lodash';
import './main.scss';
import Project from './modules/Project.js';
import Todo from './modules/Todo.js';
import DOMController from './modules/DOMController';

const projects = [];

DOMController.fillMainView(DOMController.projectViewHTML(projects));
DOMController.homeBtn().addEventListener('click', () => {
	DOMController.fillMainView(DOMController.projectViewHTML(projects));
});

const projectCreate = () => {
	const {
		name: proName,
		category: proCategory,
		description: proDescription,
		date: proDate
	} = DOMController.projectInput();
	if (Project.validDate(proDate) <= 0) {
		alert('Invalid date');
		return;
	}

	const pro = new Project(proName, proCategory, proDescription, proDate);
	projects.push(pro);
	DOMController.fillMainView(DOMController.projectViewHTML(projects));
	DOMController.updateProjectAddListeners(projectCreate);
	DOMController.updateProjectViewListeners(projects, todoCreate);
};

const todoCreate = (project) => {
	const {
		name: toName,
		description: toDescription,
		date: toDate
	} = DOMController.todoInput();
	if (toName === "" ||
		toDescription === "" ||
		toDate.toDateString() === 'Invalid Date') return;
	if (Todo.validDate(toDate, project.getDueDate) >= 0) {
		alert('invalid date');
		return;
	}
	const tod = new Todo(toName, toDescription, toDate);
	project.addTodo(tod);
	DOMController.fillMainView(DOMController.projectHTML(project));
	DOMController.updateProjectListeners(project, todoCreate);
};

DOMController.updateProjectAddListeners(projectCreate);

//DOMController.fillMainView(DOMController.projectHTML(p1));