export const validateForm = (values) => {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "username required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "password should 6 or more characters";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "please confirm password";
  } else if (values.confirmedPassword !== values.password) {
    errors.confirmPassword = "password mismatch";
  }
  return errors;
};
export const validationRules = {
  required: (val) => val !== null && val !== undefined && val !== "",
  phone: (phone) => {
    const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return re.test(String(phone));
  },
  email: (email) => {
    const re =
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
    return re.test(String(email).toLowerCase());
  },
};
