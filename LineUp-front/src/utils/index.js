// Here we store functions

export const generatePassword = () => {
  // Length wanted for our password (-1 cause special char)
  const length = 11;
  // Our character kit
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  // Our special characters kit
  const specialCharset = ',;.[()|*=!]?{}<>-';
  // An empty string to put our password
  let retVal = '';
  // Then we loop on the wanted length
  for (let i = 0, n = charset.length; i < length; i += 1) {
    // At every iteration we take a char on our charset then we put it in retVal
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  // Return our password by adding a special character at the end
  return retVal + specialCharset.charAt(Math.floor(Math.random() * specialCharset.length));
};

export const alan = () => {
  const retVal = '';

  return retVal;
};
