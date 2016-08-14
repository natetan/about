(function() {
	'use strict';

	window.onload = function() {
		var resume = document.querySelector('#resume');
		resume.onclick = showResume;
	};

	function showResume() {
		showResume(event, '../files/tech-resume.pdf', 'Resume.html');
	}

	function showResume(e, path, redirect) {
		e = e || window.event;
		e.preventDefault();

		window.open(path, 'resume');
		window.location = redirect;
	}
}) ();
