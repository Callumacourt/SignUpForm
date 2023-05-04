const zipCodes = {
  USA: /^\d{5}(?:[-\s]\d{4})?$/,
  Canada: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
  China: /^[1-9]\d{5}$/,
  India: /^\d{6}$/,
  Japan: /^\d{3}-?\d{4}$/,
  UK: /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i,
};

class FormValidator {
  constructor() {
    this.emailLi = document.querySelector('.emailLi');
    this.passwordConfirmLi = document.querySelector('.passwordConfirmLi');
    this.passwordLi = document.querySelector('.passwordLi');
    this.zipCodeLi = document.querySelector('.zipCodeLi');

    // Creating error container divs for each form element
    this.emailErrorContainer = document.createElement('div');
    this.emailErrorContainer.classList.add('errorContainer');
    this.emailLi.appendChild(this.emailErrorContainer);

    this.passwordErrorContainer = document.createElement('div');
    this.passwordErrorContainer.classList.add('errorContainer');
    this.passwordLi.appendChild(this.passwordErrorContainer);

    this.passwordConfirmErrorContainer = document.createElement('div');
    this.passwordConfirmErrorContainer.classList.add('errorContainer');
    this.passwordConfirmLi.appendChild(this.passwordConfirmErrorContainer);

    this.zipCodeErrorContainer = document.createElement('div');
    this.zipCodeErrorContainer.classList.add('errorContainer');
    this.zipCodeLi.appendChild(this.zipCodeErrorContainer);
  }

  appendError(errorMsg, errorContainer) {
    if (!errorContainer.errorAdded) {
      const errorMessage = document.createElement('div');
      errorMessage.innerText = errorMsg;
      errorMessage.classList.add('errorMsg');
      errorContainer.appendChild(errorMessage);
      errorContainer.errorAdded = true;
    }
  }

  removeError(errorContainer) {
    if (errorContainer.errorAdded) {
      const errorMessage = errorContainer.querySelector('div');
      errorMessage.parentNode.removeChild(errorMessage);
      errorContainer.errorAdded = false;
    }
  }

  handleValidationError(isValid, inputValue, errorMsg, errorContainer) {
    if (!isValid && inputValue.length > 0) {
      this.appendError(errorMsg, errorContainer);
    } else {
      this.removeError(errorContainer);
    }
  }

  validateEmail(emailValue) {
    const regex = /^\S+@\S+\.\S+$/;
    const isValidEmail = regex.test(emailValue);
    this.handleValidationError(
      isValidEmail,
      emailValue,
      'Please enter a valid email address in the format name@example.com',
      this.emailErrorContainer
    );
    return isValidEmail;
  }

  validatePassword(password) {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]{8,}$/i;
    const isValidPassword = regex.test(password);

    this.hasMinLength = password.length >= 8;

    this.hasLowercase = /[a-z]/.test(password);

    this.hasUppercase = /[A-Z]/.test(password);

    this.hasDigit = /\d/.test(password);

    this.hasSpecialChar = /[!@#$%^&*()_+]/.test(password);

    this.handleValidationError(
      isValidPassword,
      password,
      '',
      this.passwordErrorContainer
    );
    return isValidPassword;
  }

  confirmPassword(password, passwordConfirm) {
    const isMatching =
      password === passwordConfirm && passwordConfirm.length !== 0;
    this.handleValidationError(
      isMatching,
      passwordConfirm,
      'Non-matching password',
      this.passwordConfirmErrorContainer
    );
    return isMatching;
  }

  returnZipCodeError(country) {
    const errorMessages = {
      USA: 'Please enter a valid ZIP code in the format 12345 or 12345-6789',
      Canada: 'Please enter a valid postal code in the format A1A 1A1',
      China: 'Please enter a valid postal code in the format 123456',
      India: 'Please enter a valid PIN code in the format 123456',
      Japan: 'Please enter a valid postal code in the format 123-4567',
      UK: 'Please enter a valid postcode in the format SM6 9RY',
    };
    return errorMessages[country];
  }

  validateZipCode(country, zipValue) {
    const regex = zipCodes[country];
    const isValidZipCode = regex.test(zipValue);

    const errorMsg = this.returnZipCodeError(country);
    this.handleValidationError(
      isValidZipCode,
      zipValue,
      errorMsg,
      this.zipCodeErrorContainer
    );

    return isValidZipCode;
  }

  validateForm(email, country, zipCode, password, passwordConfirm) {
    const invalidEmail = !this.validateEmail(email);
    const invalidZipCode = !this.validateZipCode(country, zipCode);
    const nonMatchingPassword = !this.confirmPassword(
      password,
      passwordConfirm
    );

    return {
      invalidEmail,
      invalidZipCode,
      nonMatchingPassword,
    };
  }
}
export default FormValidator;
