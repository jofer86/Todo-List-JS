import _ from 'lodash';
import './main.scss';
import Project from './modules/Project.js';
import Todo from './modules/Todo.js';

const projects = [];

let date = new Date();
date.setDate(10);
date.setMonth(8);
date.setFullYear(2019);
const p1 = new Project('start fire', 'default', 'we will burn everithing', date);

let rDate = new Date();
rDate.setDate(29);
rDate.setMonth(6);
rDate.setFullYear(2019);


const t1 = new Todo('Rock the world', 'We gon\' Rock the world', rDate);

p1.addTodo(t1);

console.log(p1.getDescription);

date.setMonth(6)

p1.setDueDate = date





