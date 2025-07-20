export const ColorStatusTrail = (nameStatus, haveColor) => {
  /*caio<- Status Ativo */
  return nameStatus.includes('Ativo')      && !haveColor ? 'text-green-800   border-green-600 '  :
         nameStatus.includes('Ativo')      &&  haveColor ? 'bg-green-600'   :
  /*caio<- Status Desativo */
         nameStatus.includes('Desativo')   && !haveColor ? 'text-gray-800 border-gray-600'  :
         nameStatus.includes('Desativo')   &&  haveColor ? 'bg-gray-600'    :
  /*caio<- Status Completa */
         nameStatus.includes('Completa')   && !haveColor ? 'text-blue-800 border-blue-600'  :
         nameStatus.includes('Completa')   &&  haveColor ? 'bg-blue-600'    :
  /*caio<- Status Construindo */
         nameStatus.includes('Postar')&& !haveColor ? 'text-yellow-800 border-yellow-600':
         nameStatus.includes('Postar')&&  haveColor ? 'bg-yellow-600'  :

         '';
};