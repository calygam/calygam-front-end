import React from 'react'
import trailPurpleVisualiser from  '../../assets/img/initialPage/trail-purple-vizualiser.svg'; 
export default function InitialSupportCalygam() {
  return (
    <div className='w-full flex flex-col font-poppins gap-8 items-center justify-center'>
        <div className='flex justify-center gap-2 items-center w-full'>
            <img src={trailPurpleVisualiser} alt="trilha roxa" className='w-[50px]' />
            <p className='text-calygam-purple-medium-light text-sm font-bold'>Calygam</p>
        </div>
        <div className='grid lg:grid-cols-4 place-items-center font-bold text-xs md:grid-cols-2 grid-cols-1 gap-2'>
            <p>Sobre nós</p>
            <p>Contato aqui</p>
            <p>Ajuda rapida</p>
            <p>Sobre trilhas</p>

        </div>
      
    </div>
  )
}
