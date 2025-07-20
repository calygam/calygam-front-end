import React from 'react'

import GamefiedLearningIcon from '../../assets/img/initialPage/brain-explore.svg'


export default function GamefiedLearning() {
  return (
    <div className='w-full bg-calygam-purple-medium-light py-8 flex items-center justify-center'>
    <div className='mx-auto flex flex-wrap lg:justify-between justify-center items-center font-poppins md:w-[80%] w-[90%]'>
        <div className='flex flex-col'>
        <p className='text-white font-bold text-lg md:text-3xl '>Aprendizado Gamificado</p>
        <p className='text-white text-sm'>Nossa plataforma facilita o aprendizado, permitindo que alunos enviem</p>
        <p className='text-white text-sm'>atividades e acompanhem seu progresso.</p>
        </div>
        <div>
            <img src={GamefiedLearningIcon} alt="Aprendizado gameficado" className='w-[250px] h-auto' />
        </div>
      
    </div>
    </div>
  )
}
