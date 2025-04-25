export const RegexEmail = function ValidEmailRegex(email) {

    const emailRegex = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) ? "" : "E-mail inválido";
  
    
  }