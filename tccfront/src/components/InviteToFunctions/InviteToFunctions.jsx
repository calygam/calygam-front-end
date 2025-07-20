import React from 'react'

export default function InviteToFunctions() {
  return (
    <div className='w-full flex justify-center gap-y-3 flex-wrap md:justify-between items-center'>
        <div className='flex flex-col w-full md:w-fit  '>
        <p className='text-normal'>Destaques</p>
        <p className='font-bold text-lg md:text-2xl'><span className='text-calygam-strong-pink'>Explore</span>  as funcionalidades</p>
        <p className='font-bold text-lg md:text-2xl'>da nossa <span className='text-calygam-strong-pink'>plataforma</span>!</p>
        </div>
        <div className='flex flex-col text-xs w-full md:w-fit md:self-start'>
            <p>Descubra um mundo de aprendizado gamificado! Com nosso sistema de</p>
            <p>níveis, você pode avançar de bronze a diamante. Aproveite a loja virtual e</p>
            <p>desbloqueie recompensas incríveis enquanto aprende.</p>
        </div>
        
      
    </div>
  )
}
