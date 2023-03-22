
document.addEventListener('click', (e) => {

		if (e.target.matches('.hero__btn')) {
			const $email1 = document.querySelector('.hero__input');
			const $form = document.querySelector('#form');
			const $email = document.querySelector('.hero__input').value;

			if ($email.length == 0) {
					$form.classList.add('error');
			} else {
					$form.classList.remove('error');
			}
			e.preventDefault();
		}

	if (e.target.matches('.access__btn')) {
				const $email1 = document.querySelector('.access__input');
				const $form = document.querySelector('#form__access');
				const $email = document.querySelector('.access__input').value;

				if ($email.length == 0) {
						$form.classList.add('error');
				} else {
						$form.classList.remove('error');
				}
			e.preventDefault();
		}
})