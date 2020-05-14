const validateUserName = name => !(name == null || name === "");

const validateEmailID = email => {
    let mailformat = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    return mailformat.test(email);
}

const validatePassword = password => (password.length >= 6 && password.length < 12)


const setError = (field, isValid) => {
    if (isValid) {
        field.parentElement.querySelector('.error-text').style.visibility = "hidden"
    } else { 
        field.parentElement.querySelector('.error-text').style.visibility = "visible"
    }
}


const fromValidation = form => {
    let userName = form.querySelectorAll('input');
    let isNameValid = true, isEmailValid = true, isPasswordValid = true, isConfirmPasswordValid = true;
    userName.forEach(item => {
      switch (item.id) {
          case 'username':
              isNameValid = validateUserName(item.value);
              setError(item, isNameValid);
              break;
          
          case 'email':
              isEmailValid = validateEmailID(item.value);
              setError(item, isEmailValid);
              break;
          
          case 'password':
              isPasswordValid = validatePassword(item.value);
              setError(item, isPasswordValid);
              break;

          case 'cpassword':
              let password = [].filter.call(userName, (item) => item.id === 'password')[0];
              isConfirmPasswordValid = password.value === item.value;
              setError(item, isConfirmPasswordValid);
              break;
  
        default: 
          //do nothing
      }  
    });
    return isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;
}


export {
    fromValidation
};