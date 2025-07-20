import React from 'react'

export default function InviteToStartLearn() {
    return (
        <div className='w-full bg-calygam-purple-medium-light py-16 flex items-center justify-center'>
            <div className='mx-auto flex flex-wrap lg:justify-between gap-y-4 justify-center items-center font-poppins md:w-[80%] w-[90%]'>
                <div className='flex flex-col justify-center'>
                    <p className='text-white font-bold text-lg md:text-2xl'>Inicie sua jornada de aprendizado</p>
                    <p className='text-white text-sm'>Descubra um mundo de conhecimento e diversão</p>
                </div>
                <div className='flex items-center flex-wrap justify-center gap-x-4'>
                  <button className='outline-none py-2 px-4 rounded-md border-b-4 text-sm hover:border-0 transition-all hover:translate-y-1 border-gray-600/25 h-[40px] bg-white text-black'>Começar</button>
                  <button className='outline-none py-2 px-4 rounded-md bg-transparent border text-white text-sm '>Começar</button>

                </div>

            </div>
        </div>
    )
}
