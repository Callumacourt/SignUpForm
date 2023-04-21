const zipCodeRegexMap = {
  USA: /^\d{5}(-\d{4})?$/,
  Canada: /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/,
};

let errorAdded = false;

export const formValidator = {
  validateEmail: emailValue => {
    const regex = /^\S+@\S+\.\S+$/;
    if (!regex.test(emailValue) && !errorAdded) {
      const errorMessage = document.createElement('div');
      errorMessage.innerText =
        'Please enter a valid email address in the format of name@example.com';
      errorMessage.style.color = 'red';
      const emailField = document.querySelector('.emailLi');
      if (emailField) {
        emailField.appendChild(errorMessage);
        errorAdded = true;
      }
    } else if (regex.test(emailValue) && errorAdded) {
      const errorMessage = document.querySelector('.emailLi div');
      errorMessage.parentNode.removeChild(errorMessage);
      errorAdded = false;
    }
    return regex.test(emailValue);
  },

  confirmPassword: (password, passwordConfirm) => {
    if (password === passwordConfirm) {
      return true;
    }
    return false;
  },

  validateForm: (email, country, zipCode, password, passwordConfirm) => {
    const invalidEmail = !formValidator.validateEmail(email);
    const invalidZipCode = !formValidator.validateZipCode(country, zipCode);
    const nonMatchingPassword = !formValidator.confirmPassword(
      password,
      passwordConfirm
    );

    return {
      invalidEmail,
      invalidZipCode,
      nonMatchingPassword,
    };
  },
};

export default formValidator;
