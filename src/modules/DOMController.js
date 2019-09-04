const DOMController = (() => {

	let mainView = () => document.querySelector('.main-view');
	const projectButton = () => document.querySelector('.creator-button');
	const addProjectBtn = () => document.querySelector('.add_project');
	const viewProjectBtns = () => document.querySelectorAll('.go-button');
	const addTodoBtn = () => document.querySelector('.add-todo');
	const homeBtn = () => document.querySelector('.nav-link');
	const pendingTodo = () => document.querySelector('.done-project');




	const projectInput = () => {
		return {
			name: document.querySelector('.project__name').value,
			category: document.querySelector('.project__category').value,
			description: document.querySelector('.project__description').value,
			date: new Date(`${document.querySelector('.project__date').value}`)
		};
	};

	const todoInput = () => {
		return {
			name: document.querySelector('.todo__name').value,
			description: document.querySelector('.todo__description').value,
			date: new Date(document.querySelector('.todo__date').value)
		};
	};

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
		let statusBtn = project.getStatus ? '<button class="done-project"> Done <span>☑</span></button>' : '<button class="done-project"> Pending <span>⍻</span></button>';
		let todosHtml = project.getTodo.map((item) => {
			let statusBtn = item.getStatus ? '<button class="done-todo"> Done <span>☑</span></button>' :
				'<button class="done-todo"> Pending <span>⍻</span></button>';
			return `
				<li>
				<div class="right">
				<span>${item.getName}</span> <br>
				<span>${item.getDescription}</span> <br>
				<span>${item.getDueDate}</span> <br>
				</div>
				<div class="left">
				${statusBtn}
				</div>
				</li>
			`;
		}).join('');
		todosHtml = todosHtml === '' ? '<li>no todo added yet ☺</li>' : todosHtml;
		return `
	<div class="project">
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
		let ps = projects.map((project) => {
			return `
				<li>
					<div class="project-info">
					<div><span>Name:</span> ${project.getName}</div>
					<div><span>category:</span> ${project.getCategory} </div>
					<div><span>description:</span> ${project.getDescription} </div>
					<div><span>Status:</span> ${project.getStatus ? 'Done':'Pending'} </div>
					</div>
					<div class="action-date">
						<div><span>Due Date</span> ${project.getDueDate}</div>
						<button class="go-button">Go to project <span>➤</span></button> 
					</div>	
				</li>
			`;
		}).join('');
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



	/* Update Listeners        */
	const updateProjectAddListeners = (func) => {
		DOMController.addProjectBtn().addEventListener('click', () => {
			DOMController.fillMainView(DOMController.projectInpHTML);
			projectButton().addEventListener('click', func);
		});
	};

	const updateProjectViewListeners = (projects, addTodo, updateProjectStatus) => {
		DOMController.viewProjectBtns().forEach((btn, i) => {
			btn.addEventListener('click', () => {
				DOMController.fillMainView(DOMController.projectHTML(projects[i]));
				addTodoBtn().addEventListener('click', () => {
					addTodo(projects[i]);
				});
				pendingTodo().addEventListener('click', () => updateProjectStatus(projects[i]));
			});
		});
	};

	const updateProjectListeners = (project, addTodo) => {
		addTodoBtn().addEventListener('click', () => {
			addTodo(project);
		});
	};

	const updateHomeLinkListeners = (projects, func) => {
		homeBtn().addEventListener('click', () => {
			fillMainView(projectViewHTML(projects));
			updateProjectViewListeners(projects, func);
		});
	};

	const updateStatusListeners = (func) => {
		pendingTodo().addEventListener('click', func);
	};


	/* Update Listeners        END////////////////////////*/



	return {
		projectInput,
		todoInput,
		projectHTML,
		fillMainView,
		projectInpHTML,
		projectViewHTML,
		addProjectBtn,
		updateProjectAddListeners,
		updateProjectViewListeners,
		updateProjectListeners,
		updateHomeLinkListeners,
		updateStatusListeners,
		projectButton,
		viewProjectBtns,
		homeBtn,
	};

})();



export {
	DOMController as
	default
};