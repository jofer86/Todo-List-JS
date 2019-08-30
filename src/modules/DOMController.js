const DOMController = (() => {

	let mainView = document.querySelector('.main-view');
	const projectButton = document.querySelector('.creator-button');
	const addProject = document.querySelector('.add_project');

	const setupEventListener = () => {
		addProject.addEventListener('click', () => fillMainView(projectInpHTML));
		if (projectButton) {
			projectButton.addEventListener('click', projectCreate);
		}
	};

	const updateListener = () => {
		addProject.addEventListener('click', () => {
			setupEventListener();
		});
	};
	


	const projectInput = () => {
		return {
			name: document.querySelector('.project__name').value,
			category: document.querySelector('.project__category').value,
			description: document.querySelector('.project__description').value,
			date: document.querySelector('.project__date').value			
		};
	};
	
	const todoInput = () => {
		return {
			name: document.querySelector('.todo__name').value,
			description: document.querySelector('.todo__description').value,
			date: document.querySelector('.todo__date').value
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
		const todosHtml = project.getTodo.map((item)=>{
			return `
				<li>
				<div class="right">
				<span>${item.getName}</span> <br>
				<span>${item.getDescription}</span> <br>
				<span>${item.getDueDate}</span> <br>
				</div>
				<div class="left">
				<button> Done <span>☑</span></button>
				</div>
				</li>
			`;
		}).join('');
		return `
	<div class="project">
		<div class="project__info">
			<div><h1>Name</h1><br>
			<h2>Category</h2>
			<p>Description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt nam cum harum! Vel libero nulla eius. Est, non tempora?</p><br>
			<p>Due Date!</p>
			</div>
			<button>Done <span>☑</span></button>
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
		<button class="creator-button">Create</button>
		</div>
	</div>`;
	}
	const projectViewHTML = (projects)=>{ 
		let ps = projects.map((project)=>{
			return `
				<li>
					<div class="project-info">
					<div><span>Name:</span> ${project.getName}</div>
					<div><span>category:</span> ${project.getCategory} </div>
					<div><span>description:</span> ${project.getDescription} </div>
					</div>
					<div class="action-date">
						<div><span>Due Date</span> ${project.getDueDate}</div>
						<button class="go-button">Go to project <span>➤</span></button> 
					</div>	
				</li>
			`;
		}).join('');
		if ( ps === '' ){ ps='<li>No Projects added Yet!!</li>'; }
		return `
	<div class="projects-view">
		<ul>
			${ps}
		</ul>
	</div>`;
	};


	const fillMainView = (content) => {
		mainView.innerHTML = '';
		mainView.innerHTML = content;
	};

	return { setupEventListener, projectInput, todoInput, projectHTML, fillMainView, projectInpHTML, projectViewHTML };

})();



export { DOMController as default };
