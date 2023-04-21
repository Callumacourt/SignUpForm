import formValidator from './formValidator';
import './style.css';

const email = document.querySelector('#email');
const country = document.querySelector('#country-select');
const zipCode = document.querySelector('#zipCode');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordConfirm');

email.addEventListener('input', () => {
  formValidator.validateEmail(email.value);
});
