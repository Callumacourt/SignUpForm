import FormValidator from './formValidator';
import './style.css';

const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zipCode = document.querySelector('#zipCode');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordConfirm');
const lengthValidator = document.querySelector('.lengthValidator');
const lowerCaseValidator = document.querySelector('.lowercaseValidator');
const upperCaseValidator = document.querySelector('.uppercaseValidator');
const digitValidator = document.querySelector('.digitValidator');
const specialCharValidator = document.querySelector('.specialCharValidator');
const form = document.querySelector('.form');

const validator = new FormValidator();

form.addEventListener('submit', event => {
  const inputs = form.querySelectorAll('input');
  let isValid = true;

  // Check if any inputs are invalid
  inputs.forEach(input => {
    if (!input.checkValidity()) {
      isValid = false;
      // Display error message
      const errorMessage = document.createElement('div');
      errorMessage.textContent = input.validationMessage;
      input.parentNode.insertBefore(errorMessage, input.nextSibling);
    }
  });

  if (!isValid) {
    event.preventDefault(); // Prevent form submission
  }
});

email.addEventListener('input', () => {
  validator.validateEmail(email.value);
});

zipCode.addEventListener('input', () => {
  validator.validateZipCode(country.value, zipCode.value);
});

country.addEventListener('change', () => {
  validator.validateZipCode(country.value, zipCode.value);
});

function handleValidation(variable, element) {
  if (variable) {
    element.classList.add('checked');
  } else if (element.classList.contains('checked')) {
    element.classList.remove('checked');
  }
}

password.addEventListener('input', () => {
  validator.validatePassword(password.value);
  validator.confirmPassword(password.value, passwordConfirm.value);
  handleValidation(validator.hasMinLength, lengthValidator);
  handleValidation(validator.hasLowercase, lowerCaseValidator);
  handleValidation(validator.hasUppercase, upperCaseValidator);
  handleValidation(validator.hasDigit, digitValidator);
  handleValidation(validator.hasSpecialChar, specialCharValidator);
});

passwordConfirm.addEventListener('input', () => {
  validator.confirmPassword(password.value, passwordConfirm.value);
});
