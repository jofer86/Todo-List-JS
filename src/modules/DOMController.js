const DOMController = (() => {
  const mainView = () => document.querySelector('.main-view');
  const projectButton = () => document.querySelector('.creator-button');
  const addProjectBtn = () => document.querySelector('.add_project');
  const viewProjectBtns = () => document.querySelectorAll('.go-button');
  const addTodoBtn = () => document.querySelector('.add-todo');
  const homeBtn = () => document.querySelector('.nav-link');
  const projectStatusBtn = () => document.querySelector('.done-project');
  const todoStatusBtn = () => document.querySelectorAll('.done-todo');
  const tododeleteBtns = () => document.querySelectorAll('.close-btn');
  const editTodoBtns = () => document.querySelectorAll('.edit-todo');
  const innerEditdivs = () => document.querySelectorAll('.inner-edit');
  const urgentBtn = () => document.querySelector('.nav-urgent');
  const importantBtn = () => document.querySelector('.nav-important');
  const closeBtn = () => document.querySelector('.nav-close');
  const defaultBtn = () => document.querySelector('.nav-default');

  const todoEditInput = (index) => {
    return {
      name: innerEditdivs()[index].querySelector('[name="name"]').value,
      description: innerEditdivs()[index].querySelector('[name="description"]').value,
      toDate: new Date(innerEditdivs()[index].querySelector('[name="date"]').value),
    };
  };

  const projectInput = () => ({
    name: document.querySelector('.project__name').value,
    category: document.querySelector('.project__category').value,
    description: document.querySelector('.project__description').value,
    date: new Date(`${document.querySelector('.project__date').value}`),
  });

  const todoInput = () => ({
    name: document.querySelector('.todo__name').value,
    description: document.querySelector('.todo__description').value,
    date: new Date(document.querySelector('.todo__date').value),
  });

  const projectInpHTML = `
      <div class="project__creator">
      <h1>Create a Project</h1>
      <input type="text" placeholder="Name" class="project__name">
      <input type="text" placeholder="category" class="project__category">
      <input type="text" placeholder="description" class="project__description">
      <input type="date" class="project__date">
      <button class="creator-button">Create</button>
      </div>`;

  const projectHTML = (project) => {
    const statusBtn = project.getStatus ? '<button class="done-project"> Done <span>☑</span></button>' : '<button class="done-project"> Pending <span>⍻</span></button>';
    let todosHtml = project.getTodo
      .map((item, index) => {
        const statusBtn = item.getStatus ? '<button class="done-todo"> Done <span>☑</span></button>' : '<button class="done-todo"> Pending <span>⍻</span></button>';
        return `
        <li class="${item.priority}">
        <div class="right">
        <span>${item.getName}</span> <br>
        <span>${item.getDescription}</span> <br>
        <span>${item.getDueDate}</span><br>
        </div>
        <div class="left">
        ${statusBtn}
        </div>
        <span class="close-btn">❌</span>
        <input type="checkbox" id="expand-toggle${index}" />
        <div class="inner-edit">
        <input type="text" name="name" placeholder="Name" value="${item.getName}">
        <input type="text" name="description" placeholder="description" value="${item.getDescription}">
        <input type="date" name="date" value="${item.getDueDate.getFullYear()}-${(`0${(item.getDueDate.getMonth() + 1)}`).slice(-2)}-${item.getDueDate.getDate()}">
        <button class="edit-todo">Edit</button>
        </div>
        <label for="expand-toggle${index}" id="expand-btn${index}"> Edit </label>
        </li>
        `;
      })
      .join('');
    todosHtml = todosHtml === '' ? '<li>no todo added yet ☺</li>' : todosHtml;
    return `
    <div class="project ${project.getPriority}">
    <div class="project__info">
    <div><h1>Name: ${project.getName}</h1><br>
    <h2> Category: ${project.getCategory}</h2>
    <p> Description: ${project.getDescription}</p><br>
    <p>Due Date: ${project.getDueDate}</p>
    </div>
    ${statusBtn}
    </div>
    <div class="project__todo">
    <ul>
    ${todosHtml} 
    </ul>
    </div>
    <input id="add-todo" type="checkbox" />
    <label for="add-todo" class="add-label"><span>✚</span>Add a todo</label>
    <div class="todo__creator">
    <input type="text" placeholder="Name" class="todo__name">
    <input type="text" placeholder="description" class="todo__description">
    <input type="date" class="todo__date">
    <button class="add-todo">Create</button>
    </div>
    </div>`;
  };
  const projectViewHTML = (projects) => {
    let ps = projects
      .map((project) => (`
        <li class="${project.priority}">
        <div class="project-info">
        <div><span>Name:</span> ${project.getName}</div>
        <div><span>category:</span> ${project.getCategory} </div>
        <div><span>description:</span> ${project.getDescription} </div>
        <div><span>Status:</span> ${project.getStatus ? 'Done' : 'Pending'} </div>
        </div>
        <div class="action-date">
        <div><span>Due Date</span> ${project.getDueDate}</div>
        <button class="go-button">Go to project <span>➤</span></button
        </div
        </li>
        `)).join('');
    if (ps === '') {
      ps = '<li>No Projects added Yet!!</li>';
    }
    return `
    <div class="projects-view">
    <ul>
    ${ps}
    </ul>
    </div>`;
  };

  const fillMainView = (content) => {
    mainView().innerHTML = '';
    mainView().innerHTML = content;
  };

  const updateProjectAddListeners = (func) => {
    addProjectBtn().addEventListener('click', () => {
      fillMainView(projectInpHTML);
      projectButton().addEventListener('click', func);
    });
  };

  const getListProjectsView = (projects, todoCreate, updateProjectStatus, updateTodoStatus, deleteTodo, editTodo) => {
    fillMainView(projectViewHTML(projects));
    viewProjectBtns().forEach((btn, i) => {
      btn.addEventListener('click', () => {
        getProjectView(projects[i], todoCreate, updateProjectStatus, updateTodoStatus, deleteTodo, editTodo);
      });
    });
    homeBtn().addEventListener('click', () => {
      getListProjectsView(projects, todoCreate, updateProjectStatus, updateTodoStatus, deleteTodo, editTodo);
    });
    urgentBtn().addEventListener('click', () => {
      const urgentPj = projects.filter((e) => e.getPriority === 'Red');
      getListFilteredProject(urgentPj, todoCreate, updateProjectStatus, updateTodoStatus, deleteTodo, editTodo);
    });
    importantBtn().addEventListener('click', () => {
      const importantPj = projects.filter((e) => e.getPriority === 'Orange');
      getListFilteredProject(importantPj, todoCreate, updateProjectStatus, updateTodoStatus, deleteTodo, editTodo);
    });
    closeBtn().addEventListener('click', () => {
      const closePj = projects.filter((e) => e.getPriority === 'Green');
      getListFilteredProject(closePj, todoCreate, updateProjectStatus, updateTodoStatus, deleteTodo, editTodo);
    });
    defaultBtn().addEventListener('click', () => {
      const closePj = projects.filter((e) => e.getCategory === 'default');
      getListFilteredProject(closePj, todoCreate, updateProjectStatus, updateTodoStatus, deleteTodo, editTodo);
    });
  };

  const getListFilteredProject = (projects, todoCreate, updateProjectStatus, updateTodoStatus, deleteTodo, editTodo) => {
    fillMainView(projectViewHTML(projects));
    viewProjectBtns().forEach((btn, i) => {
      btn.addEventListener('click', () => {
        getProjectView(projects[i], todoCreate, updateProjectStatus, updateTodoStatus, deleteTodo, editTodo);
      });
    });
  };

  const getProjectView = (project, addTodo, updateProjectStatus, updateTodoStatus, deleteTodo, editTodo) => {
    fillMainView(projectHTML(project));
    updateProjectListeners(project, addTodo, updateProjectStatus, updateTodoStatus, deleteTodo, editTodo);
  };

  const updateProjectListeners = (project, addTodo, updateProjectStatus, updateTodoStatus, deleteTodo, editTodo) => {
    addTodoBtn().addEventListener('click', () => {
      addTodo(project);
    });
    projectStatusBtn().addEventListener('click', () => updateProjectStatus(project));
    todoStatusBtn().forEach((btn, index) => {
      btn.addEventListener('click', () => {
        updateTodoStatus(project, index);
      });
    });
    tododeleteBtns().forEach((Btn, i) => {
      Btn.addEventListener('click', () => {
        deleteTodo(project, i);
      });
    });
    editTodoBtns().forEach((Btn, ind) => {
      Btn.addEventListener('click', () => {
        editTodo(project, ind);
      });
    });
  };

  return {
    projectInput,
    todoInput,
    todoEditInput,
    updateProjectAddListeners,
    getListProjectsView,
    getProjectView,
  };
})();

export {
  DOMController as
  default,
};