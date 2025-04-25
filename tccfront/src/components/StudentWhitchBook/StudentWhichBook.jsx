import React from 'react'
import studentIconOne from '../../assets/img/StudentExample.png'
import smoke from '../../assets/img/fumaca.png'
export default function StudentWhichBook() {
  return (
    <>
      <div className='flex w-full justify-between    mt-20 font-poppins   '>
        <div className='  md:w-[488px]  lg:w-[75%]     '>
          <div className='hidden lg:flex w-[500px]    -translate-x-[330px] h-[107px]  bg-red-500 rounded-r-3xl'></div>
          <div className='   w-[282px] md:w-full lg:w-full      h-fit md:mt-20'>
          
            <p className='flex  gap-2 flex-wrap text-xl pl-5 lg:pl-24   lg:text-[35px] font-bold'>
              <span className='md:text-red-clean-type transition-all lg:text-[35px] font-bold  '>Bem-Vindo</span> 
              <span className='text-red-clean-type '>ao SENAI! </span>
              <span>
              transformando
                </span> </p>
           
  
          
       
            <p className='text-xl font-black pl-5 lg:pl-24 lg:font-bold mt-5 lg:text-[35px]'><span className='text-red-clean-type'>Vidas</span> e <span className='text-red-clean-type'>Carreiras</span></p>

          </div>
          <div className='hidden md:flex flex-col w-[100%] h-fit pl-5 lg:pl-24 mt-9 '>
          <p className='text-[15px] font-[400]'>No SENAI, nossa missão é capacitar profissionais para o</p>
          <p className='text-[15px] font-[400]'>Mercado de Trabalho,<br />Promovendo a Educação Tecnica de qualidade.</p>

          <p className='text-[15px] font-[400]'>Valorizamos a inovação, a ética e o compromisso com o</p>
          <p className='text-[15px] font-[400]'>desenvolvimento sustentável.</p>
          </div>
          <div className='flex  mt-3 mb-3 items-center ' >
        <hr className='w-[75%] h-[2px] bg-gray-600'></hr>
        <span className='w-2 h-2 rounded-full bg-gray-600'></span>
      </div>

        </div>



        <div className='hidden md:flex lg:flex flex-col  lg:w-[582px] mt-40    lg:overflow-x-hidden  lg:items-end'>

          <div className='w-[300px] mr-9   lg:-ml-[30%] lg:absolute   z-10 lg:w-[532px] mt-[-125px]  '>
            <img className='w-full ' src={studentIconOne} alt="" />
            <img className='hidden lg:block w-full  absolute -mt-24 z-30' src={smoke} alt="" />
          </div>

          <div className='hidden lg:flex  translate-x-20   w-[100%] h-[107px]  bg-red-500 rounded-l-3xl'></div>
        </div>

      </div>

    </>
  )
}
