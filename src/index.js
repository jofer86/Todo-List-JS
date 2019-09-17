import _ from 'lodash';
import './main.scss';
import Project from './modules/Project';
import Todo from './modules/Todo';
import DOMController from './modules/DOMController';

let projects = [];
if (localStorage.getItem('projects')) {
  projects = JSON.parse(localStorage.getItem('projects')).map((proj) => {
    const project = new Project(
      proj.name,
      proj.category,
      proj.description,
      new Date(Date.parse(proj.dueDate)),
      proj.status,
    );
    proj.todos.forEach((todo) => {
      let tod = new Todo(todo.name, todo.description, new Date(Date.parse(todo.dueDate)), todo.status);
      project.addTodo(tod);
    });
    return project;
  });
}

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

  localStorage.setItem('projects', JSON.stringify(projects));

  // Get the view for the new list of projects
  // update listeners for "go to project" button
  // update listeners for "Home" link on the left panel
  DOMController.getListProjectsView(projects, todoCreate, changeProjectStatus, updateTodoStatus, deleteTodo);
};

const todoCreate = (project) => {
  const { name: toName, description: toDescription, date: toDate } = DOMController.todoInput();
  if (toName === '' || toDescription === '' || toDate.toDateString() === 'Invalid Date') return;
  if (Todo.validDate(toDate, project.getDueDate) >= 0) {
    alert('invalid date');
    return;
  }
  const tod = new Todo(toName, toDescription, toDate);
  project.addTodo(tod);
  localStorage.setItem('projects', JSON.stringify(projects));

  // get view for the modified project
  // update listeners for todo create button
  // update listeners for project status toggler button
  DOMController.getProjectView(project, todoCreate, changeProjectStatus, updateTodoStatus, deleteTodo, editTodo);
};

const changeProjectStatus = (project) => {
  project.updateStatus();

  // get view for the modified project
  // update listeners for todo create button
  // update listeners for project status toggler button
  localStorage.setItem('projects', JSON.stringify(projects));
  DOMController.getProjectView(project, todoCreate, changeProjectStatus, updateTodoStatus, deleteTodo, editTodo);
};

const updateTodoStatus = (project, index) => {
  project.getTodo[index].updateStatus();
  localStorage.setItem('projects', JSON.stringify(projects));
  DOMController.getProjectView(project, todoCreate, changeProjectStatus, updateTodoStatus, deleteTodo, editTodo);
};

const deleteTodo = (project, index) => {
  project.delTodo(index);
  localStorage.setItem('projects', JSON.stringify(projects));
  DOMController.getProjectView(project, todoCreate, changeProjectStatus, updateTodoStatus, deleteTodo, editTodo);
};

const editTodo = (project, index) => {
  const { name, description, toDate } = DOMController.todoEditInput(index);
  if (name === '' || description === '' || toDate.toDateString() === 'Invalid Date') return;
  if (Todo.validDate(toDate, project.getDueDate) >= 0 || Todo.validDate(toDate, new Date()) <= 0) {
    alert('invalid date');
    return;
  }
  project.getTodo[index].setName = name;
  project.getTodo[index].setDescription = description;
  project.getTodo[index].setDueDate = toDate;
  localStorage.setItem('projects', JSON.stringify(projects));
  DOMController.getProjectView(project, todoCreate, changeProjectStatus, updateTodoStatus, deleteTodo, editTodo);
};

// initial view rendering to show the list of the projects (intro)
DOMController.getListProjectsView(projects, todoCreate, changeProjectStatus, updateTodoStatus, deleteTodo, editTodo);

// Add event listener to the "Add a Project" button
DOMController.updateProjectAddListeners(projectCreate);
