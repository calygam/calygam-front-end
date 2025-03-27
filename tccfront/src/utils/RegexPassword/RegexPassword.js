

export const RegexPassword = function ValidPasswordRegex(password) {

  if (password.length < 8) {
    return "necessário 8 caracteres.";
}
if (!/[a-z]/.test(password)) {
    return  "É necessário pelo menos uma letra minúscula.";
}
if (!/[A-Z]/.test(password)) {
    return "É necessário pelo menos uma  letra maiúscula.";
}
if (!/\d/.test(password)) {
    return "é necessário pelo menos um número.";
}
if (!/[@$!%*?&]/.test(password)) {
    return "é necessário pelo menos um caractere especial (@$!%*?&).";
}

return "";
  
    
  }