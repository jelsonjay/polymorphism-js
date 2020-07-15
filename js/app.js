(function vanillaJS(win, doc) {
	'use strict';

	let btn = doc.querySelectorAll('.button');
	let myBody = doc.querySelector('body');
	// console.log(btn)

	// change background color
	function backgroundColors(e) {
		console.log(e.target);
		myBody.style.background = e.target.dataset.color;
	}

	for (let i = 0; i < btn.length; i++) {
		btn[i].addEventListener('click', backgroundColors, false);
	}
})(window, document);

localStorage();
