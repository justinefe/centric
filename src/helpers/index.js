const patterns = {
  firstName: /^[A-Za-z]{3,}$/,
  fullName: /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/,
  lastName: /^[A-Za-z]{3,}$/,
  userName: /^[A-Za-z0-9_.]{3,}$/,
  email: /^(\s*[\w.-]+)@([a-zA-Z\d]{3,})\.([a-z]{3,8}\s*)$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
  confirmPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
  phoneNumber: /^0[7-9][0-1][0-9]{8}$/g,
  cardNumber: /^[0-9]{16}$/,
  amount: /^[0-9]+$/,
  accountNumber: /^[0-9]{10}$/,
  mm: /^(0[1-9]|10|11|12)$/g,
  yy: /^202[0-9]$/g,
  cvv: /^[0-9]{3}$/g,
};

export const validate = (field, Regex) => {
  if (patterns[Regex].test(field)) return true;
  return false;
};

export const validateInput = (event) =>
  validate(event.target.value, event.target.attributes.name.value);
