export const ColorStatusUser = (nameStatus, haveColor) => {
  /* Status Ativo */
  return nameStatus.includes('Ativo') && !haveColor ? 'text-green-800' :
         nameStatus.includes('Ativo') && haveColor ? 'bg-green-600' :
         /* Status Inativo */
         nameStatus.includes('Inativo') && !haveColor ? 'text-gray-800' :
         nameStatus.includes('Inativo') && haveColor ? 'bg-gray-600' :
         /* Status Bloqueado */
         nameStatus.includes('Bloqueado') && !haveColor ? 'text-red-800' :
         nameStatus.includes('Bloqueado') && haveColor ? 'bg-red-600' :
         /* Status Aguardando */
         nameStatus.includes('Aguardando') && !haveColor ? 'text-yellow-800' :
         nameStatus.includes('Aguardando') && haveColor ? 'bg-yellow-600' :
         /* Status Banido */
         nameStatus.includes('Banido') && !haveColor ? 'text-orange-800' :
         nameStatus.includes('Banido') && haveColor ? 'bg-orange-600' :
         /* Status Pendente */
         nameStatus.includes('Pendente') && !haveColor ? 'text-blue-800' :
         nameStatus.includes('Pendente') && haveColor ? 'bg-blue-600' :

         '';
};