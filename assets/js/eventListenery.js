import {
	checkEmail,
	checkMsg,
	checkName,
	cleanErrors,
} from './verification.js';
import { showCard, clearCard} from './statusCardShow.js';
import { clearInputs } from './clearInputs.js';
(() => {
	// hide menu on X or clicling out of menu
	window.addEventListener(
		'click',
		(event) => {
			let btn = document.querySelector('#menu-btn');
			let label = document.querySelector('label[for="menu-btn"]');
			let navlist = document.querySelector('.nav-list');

			if (event.target === document.querySelector('.fa-times')) {
				btn.classList.remove('checked');
			} else if (
				event.target !== btn &&
				event.target !== label &&
				event.target !== navlist
			) {
				btn.classList.remove('checked');
			}
		},
		true
	);

	// show menu
	document
		.querySelector('label[for="menu-btn"]')
		.addEventListener('click', (event) => {
			if (event.target !== document.querySelector('.fa-times')) {
				document
					.querySelector('#menu-btn')
					.classList.add('checked');
			}
		});

	//on scroll fill progress bar
	document
		.querySelector('.container')
		.addEventListener('scroll', (event) => {
			let scrollHeight =
				document.querySelector('.container').scrollHeight;
			let scrollPos =
				document.querySelector('.container').scrollTop;

			let value =
				(
					scrollPos /
					(scrollHeight - window.innerHeight)
				).toFixed(2) * 100;
			let points = document.querySelectorAll('.scroll-point');
			if (value >= 0 && value <= 16) {
				points[0].classList.add('point-active');
				points[1].classList.remove('point-active');
			} else if (value >= 18 && value <= 38) {
				points[1].classList.add('point-active');
				points[2].classList.remove('point-active');
			} else if (value >= 40 && value <= 71) {
				points[2].classList.add('point-active');
				points[3].classList.remove('point-active');
			} else if (value >= 73 && value <= 97) {
				points[3].classList.add('point-active');
				points[4].classList.remove('point-active');
			} else if (value >= 98 && value <= 100) {
				points[4].classList.add('point-active');
			}

			document.documentElement.style.setProperty(
				'--scroll-height',
				value + '%'
			);
		});

	//auto resize
	document.querySelector('#form-msg').addEventListener('keydown', () => {
		document.querySelector('#form-msg').style.height = `${
			document.querySelector('#form-msg').scrollHeight
		}px`;
	});

	// send mail
	document
		.querySelector('#form-submit')
		.addEventListener('click', async (event) => {
			event.preventDefault();
			cleanErrors();

			let honeypot = document.querySelector('#honeypot');
			if (honeypot.value === '') {
				let form = document.querySelector('form');
				let formData = new FormData(form);

				checkEmail(formData.get('email'));
				checkName(formData.get('name'));
				checkMsg(formData.get('msg'));
				if (
					document.querySelectorAll('.input-error')
						.length === 0
				) {
					let data = [];
					data[0] = formData.get('email');
					data[1] = formData.get('name');
					data[2] = formData.get('msg');

					for (let i = 0; i < data.length; i++) {
						data[i] = data[i].trim();
						data[i] = data[i].replace(
							/(\r\n|\n|\r)/gm,
							''
						);
					}
					const json = {
						email: data[0],
						name: data[1],
						msg: data[2],
					};
					await fetch(
						'/portfolio-page/lib/mailservice.php?',
						{
							headers: {
								'Content-Type':
									'application/json',
							},
							method: 'POST',
							body: JSON.stringify(json),
						}
					)
						.then((response) => {
							return response.json();
						})
						.then((data) => {
							return data[0];
						})
						.then((data) => {
							showCard(data.info, data.status);
							clearInputs()
						})	
						.catch((error) => {
							showCard(error, false);
							clearInputs()

						});
				}
			}
		});
	document.querySelector('.send-status-card').addEventListener('click', clearCard)
})();
