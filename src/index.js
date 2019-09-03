import _ from 'lodash';
import './main.scss';
import Project from './modules/Project.js';
import Todo from './modules/Todo.js';
import DOMController from './modules/DOMController';

const projects = [];

DOMController.fillMainView(DOMController.projectViewHTML(projects));

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
	DOMController.updateProjectViewListeners(projects);
};

DOMController.updateProjectAddListeners(projectCreate);

//DOMController.fillMainView(DOMController.projectHTML(p1));