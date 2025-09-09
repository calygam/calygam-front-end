import React from 'react'
import { Link } from 'react-router-dom'

export default function InviteToStartLearn() {
    return (
        <div className='w-full bg-calygam-purple-medium-light py-16 flex items-center justify-center'>
            <div className='mx-auto flex flex-wrap lg:justify-between gap-y-4 justify-center items-center font-poppins md:w-[80%] w-[90%]'>
                <div className='flex flex-col justify-center'>
                    <p className='text-white font-bold text-lg md:text-2xl'>Inicie sua jornada de aprendizado</p>
                    <p className='text-white text-sm'>Descubra um mundo de conhecimento e diversão</p>
                </div>
                <div className='flex items-center flex-wrap justify-center gap-x-4'>
                    <Link to={"/Login"}>
                        <button className='outline-none py-2 px-4 rounded-md border-b-4 text-sm hover:border-0 border-gray-600/25 h-[40px] bg-white text-black'>Começar</button>
                    </Link>
                    <Link to={"/Register"}>
                        <button className='outline-none py-2 px-4 rounded-md border-b-4 text-sm hover:border-b h-[40px] bg-transparent border border-white text-white font-medium'>Desbloquar</button>
                    </Link>


                </div>

            </div>
        </div>
    )
}
