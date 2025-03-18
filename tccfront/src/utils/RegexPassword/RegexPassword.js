

export const RegexPassword = function ValidPasswordRegex(password) {

    const emailRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return emailRegex.test(password) ? "" : "Senha Fraca";
  
    
  }