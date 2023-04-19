const zipCodeRegexMap = {
  USA: /^\d{5}(-\d{4})?$/,
  Canada: /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/,
};

export const formValidator = {
  validateEmail: email => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  },

  validateZipCode: (country, zipCode) => {
    const regex = zipCodeRegexMap[country];
    if (regex) {
      return regex.test(zipCode);
    }
    return false; // country not found in map
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
