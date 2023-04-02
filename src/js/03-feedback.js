import throttle from 'lodash.throttle';

const formElement = document.querySelector('.feedback-form');
export const STORAGE_KEY = 'feedback-form-state';	

export let formData = {};

formElement.addEventListener(
	'input',
	throttle(event => handleAddSubmitLocalStorage(event), 500)
);

formElement.addEventListener('submit', event => {
	event.preventDefault();
	  if (formElement.email.value !== '' && formElement.message.value != '')
	    console.log(formData);
	  localStorage.removeItem(STORAGE_KEY);
	formElement.reset();
	formElement.removeEventListener('input', handleAddSubmitLocalStorage);
});
	
function verifyStorage() {
	const storText = JSON.parse(localStorage.getItem(STORAGE_KEY));	

	if (storText) {
	  formElement.email.value = storText.email;
	  formElement.message.value = storText.message;
	}
}
	
verifyStorage();
