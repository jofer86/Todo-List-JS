import _ from 'lodash';
import './main.scss';
import Project from './modules/Project';
import Todo from './modules/Todo';

let date = new Date()
date.setDate(30);
date.setMonth(9);
date.setFullYear(2019);
const p1 = new Project('start fire', 'default', 'we will burn everithing',date );

console.log(p1)



