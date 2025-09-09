import React from 'react'

//images
import trailIsStarting from '../../assets/img/initialPage/trail-is-starting.png'
import { Link } from 'react-router-dom'

export default function LearnHappy() {
  return (
    <div className='mx-auto flex flex-wrap md:flex-nowrap gap-x-6 lg:justify-between gap-y-12 justify-center items-center font-poppins md:w-[80%] w-[90%]'>
      <div className='flex flex-col gap-y-2 '>
        <>
        <p className='text-bold md:text-3xl text-xl text-wrap md:w-[85%]'><span className='text-calygam-strong-pink'>Aprender</span> nunca foi tão divertido!</p>
    
        </>
        <div className='text-sm text-wrap font-normal'>
            <p>Descubra uma nova forma de aprender com diversão e desafios.</p>
            <p>Conquiste conhecimento e transforme suas tarefas em emocionantes</p>
            <p>missões!</p>
        </div>
          <div>
            <Link to={"/login"}>
            <button className='bg-calygam-purple-medium-light outline-none rounded-lg py-2 px-4 flex justify-center items-center text-white h-[35px] border-b-4 hover:border-b-0   border-purple-800'>Desvendar</button>
            </Link>
           
        </div>
      </div>
      <div >
        <img src={trailIsStarting} alt="trilhando um novo caminho" className='lg:w-[350px] md:w-[300px] w-[250px] h-auto' />
      </div>

    </div>
  )
}
