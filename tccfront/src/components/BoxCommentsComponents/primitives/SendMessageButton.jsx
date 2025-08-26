import React from 'react'

export default function SendMessageButton({actionButton,method,stylesPlus,disabled}) {
  
  return (
    <button type='button' disabled={disabled} className={`flex  py-2 px-4 rounded-md outline-none w-fit font-poppins h-[35px] bg-blue-500 border-b-4 text-white transition-all  hover:border-0 border-blue-600 text-sm hover:translate-y-1 
    ${stylesPlus}`} onClick={method}>
      {actionButton}
    </button>
  )
}
