import React from 'react'

export default function PersonPerfil() {
    return (
        <div className='w-full flex flex-col'>
            <div className='flex flex-col w-fit  '>
                <p className='lg:text-2xl md:text-lg text-base  font-black pr-4 '><span className='w-full h-[2px] text-red-clean-type '>Personalize</span> seu <span className='w-full h-[2px] text-red-clean-type '>Perfil!</span></p>
                <div className='w-full h-[3px] mt-1 bg-red-clean-type '></div>
            </div>
            <div className='flex w-full text-base flex-col'>
                <p>Com o acumulo de Pontos você</p>
                <p>Poderá personalizar seu perfil</p>
                <p>do seu jeito!</p>
                <p>Você Podera desbloquear esses temas na loyja </p>

            </div>
        </div>
    )
}
