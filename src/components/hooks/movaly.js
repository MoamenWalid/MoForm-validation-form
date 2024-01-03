
const movaly = (values) => {

  let errors = {};
  const { nameUser } = values;
  const { emailUser } = values;
  const { passwordUser } = values;

  // Validation Name
  if (!nameUser.trim()) errors.nameUser = 'Required Field';
  else if (nameUser.length < 2) errors.nameUser = 'Too Short!';
  else if (nameUser.length > 25) errors.nameUser = 'Too Long!';

  // Validation Email
  if (!emailUser.trim()) errors.emailUser = 'Required Field';
  else if (!emailUser.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) errors.emailUser = 'Invalid Email!';

  // Validation Password
  if (passwordUser.length < 8) errors.passwordUser = 'Password must be at least 8 characters';
  else if (!passwordUser.match(/[A-Z]/)) errors.passwordUser = 'Password must contain at least 1 uppercase letter';
  else if (!passwordUser.match(/[a-z]/)) errors.passwordUser = 'Password must contain at least 1 lowercase letter';
  else if (!passwordUser.match(/[0-9]/)) errors.passwordUser = 'Password must contain at least 1 number';


  return {
    ...errors,
  }
}

export default movaly;