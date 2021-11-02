export function cleanErrors() {
	let errorClasses = document.querySelectorAll('.input-error');
	let errorTexts = document.querySelectorAll('.input-error-text');

	errorClasses.forEach((error) => {
		error.classList.remove('input-error');
	});

	errorTexts.forEach((error) => {
		error.remove();
	});
}

export function checkEmail(data) {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	//trim and delete all break-lines
	data = data.trim();
	data = data.replace(/(\r\n|\n|\r)/gm, '');

	let emails = data.split(',');

	if (!re.test(data) || emails.length > 1 || data === '') {
		const input = document.querySelector('#form-email');
		input.classList.add('input-error');

		let errorMsg = document.createElement('span');
		errorMsg.classList.add('input-error-text');
		errorMsg.innerText = 'Please enter your Email adress in format: \n youremail@example.com';

		input.parentNode.appendChild(errorMsg);
		return false;
	} else return true;
}
export function checkName(data) {
	const re = /[<>()[\]\\.,;:\s@\"\\R\\n\/\=]/gm;

	//trim and delete all break-lines
	data = data.trim();
	data = data.replace(/(\r\n|\n|\r)/gm, '');

	if (re.test(data) || data === '') {
		const input = document.querySelector('#form-name');
		input.classList.add('input-error');

		let errorMsg = document.createElement('span');
		errorMsg.classList.add('input-error-text');
		errorMsg.innerText = 'Please check if this field: \n is not empty \n does not contain spaces and <>[]\\=/;.,:"';

		input.parentNode.appendChild(errorMsg);
		return false;
	} else return true;
}
export function checkMsg(data) {
	const re = /[<>[\]\\;\"\\R\/\=]/gm;

	//trim and delete all break-lines
	data = data.trim();
     data = data.replace(/(\r\n|\n|\r)/gm, '');

	if (re.test(data) || data === '') {
		const input = document.querySelector('#form-msg');
		input.classList.add('input-error');

		let errorMsg = document.createElement('span');
		errorMsg.classList.add('input-error-text');
		errorMsg.innerText = 'Please check if this field: \n is not empty \n does not contain <>[]\\=/;"';

		input.parentNode.appendChild(errorMsg);
	} else return true;
}
