import _ from 'lodash';
import './main.scss';
import Project from './modules/Project.js';
import Todo from './modules/Todo.js';
import DOMController from './modules/DOMController';

const projects = [];

let date = new Date();
date.setDate(10);
date.setMonth(8);
date.setFullYear(2019);
const p1 = new Project('start fire', 'default', 'we will burn everithing', date);

let rDate = new Date();
rDate.setDate(8);
rDate.setMonth(8);
rDate.setFullYear(2019);


const t1 = new Todo('Rock the world', 'We gon\' Rock the world', rDate);

p1.addTodo(t1);

console.log(p1.getTodo);

if (projects.length === 0) {
	DOMController.fillMainView(DOMController.projectInpHTML);
	DOMController.setupEventListener();
}
	{
		name: proName,
		category,
		description: proDescription,
		date: proDate
	} = DOMController.projectInput();

projectCreate = () => {
	const pro = new Project(proName, category, proDescription, proDate);
	projects.push(pro);
}
//DOMController.fillMainView(DOMController.projectHTML(p1));







