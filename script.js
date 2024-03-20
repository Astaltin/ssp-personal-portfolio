(async function () {
	const contentView = document.body.querySelector('#contentView');

	// Initializes the content view
	if (contentView.childNodes.length === 0) {
		setContentView('home');
	}

	addTabListener('#pills-home-tab', 'home');
	addTabListener('#pills-projects-tab', 'projects');
	addTabListener('#pills-about-tab', 'about');

	function addTabListener(selector, page) {
		document.body
			.querySelector(selector)
			.addEventListener('click', function () {
				setContentView(page);
			});
	}

	async function setContentView(page) {
		const url = location.origin + `/pages/${page}.html`;
		const response = await fetch(url);
		contentView.innerHTML = await response.text();
	}
})();
