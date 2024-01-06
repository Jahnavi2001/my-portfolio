export const checkValidEmail = (email) => {
  const isValidEmail =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(email);

  return isValidEmail;
};
