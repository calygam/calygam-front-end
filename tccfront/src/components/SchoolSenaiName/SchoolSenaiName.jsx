import React from 'react'

export default function SchoolSenaiName() {
  return (
    <div className='flex w-full flex-col pl-5 lg:pl-24 font-poppins gap-2 mt-20'>
        <div className='flex flex-col'>
            <p className='font-extralight text-[10px] md:text-[13px] lg:text-[15px] '>Senai de Santo Amaro - Senai suiço-Brasileira</p>
        
        
            <p className='font-semibold text-xs lg:text-lg md:text-base'>Escola SENAI Suíço-Brasileira<br/> 
            "Paulo Ernesto Tolle"</p>
        </div>
        <div className='flex  gap-7 w-full'>
            <button className='rounded-xl w-fit   text-sm text-center text-white bg-red-500  py-4 px-2'>Ver Cursos</button>
            <button className='border w-fit border-red-500  text-sm rounded-xl text-center text-red-500 bg-white py-4 px-2 '>Falar Conosco</button>
        </div>
      
    </div>
  )
}
