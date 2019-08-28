const DOMController = (() => {

	let header = document.querySelector('header');

	const updateSelectors = () => {
		header = document.querySelector('header');
	};

	const updateListeners = () => {
		header.addEvenlistener('click',);
	};

	return { header, updateListeners, updateSelectors};

})();

export { DOMController as default };
