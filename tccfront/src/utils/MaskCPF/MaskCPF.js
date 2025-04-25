



export const targetCPF = function maskCPF(cpf) {
    cpf = cpf.replace(/\D/g, ""); 
    cpf = cpf.replace(/^(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
    cpf = cpf.replace(/\.(\d{3})(\d)/, ".$1-$2");
    return cpf;
}