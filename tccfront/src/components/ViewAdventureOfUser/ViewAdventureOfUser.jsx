import React from 'react'
import TrailExempleAdventure from '../../assets/img/trail-exemple-adventure.png'

export default function ViewAdventureOfUser() {
    return (
        <div className='w-full  min-h-44 pb-28 md:pb-56 h-full font-poppins rounded-lg' style={{
            backgroundImage: `url('${TrailExempleAdventure}')`,
            backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
        }}>
            <div className='w-full flex  mt-12 md:ml-14 px-2 md:px-0 flex-col'>
                <div className='w-full font-semibold md:text-2xl text-xl'>
                    <p><span className='text-red-bold-type'>Explore Trilhas</span>, ganhe</p>
                    <p>recompensas e torne-se</p>
                    <p>um mestre da jornada!</p>
                </div>
                <div className='w-full mt-2 font-light text-xs'>
                    <p>Descubra um jeito inovador de explorar trilhas! Complete desafios interativos,</p>
                    <p>acumule pontos e desbloqueie conquistas enquanto avança por jornadas</p>
                    <p>emocionantes.</p>
                </div>
                <div className='md:w-full w-fit mt-2 flex items-center space-x-2 flex-wrap justify-center md:justify-start'>
                    <div className='w-fit'>
                        <button className='border-2 border-white rounded-md bg-gradient-to-tr from-red-clean-type/80 text-xs text-white to-red-grad-bold-type/80 py-2 px-2'>Veja nossa Loyja!</button>
                    </div>
                    <div className='w-fit'>
                        <button className='border-2 border-white rounded-md bg-black/80 text-xs text-white  py-2 px-4'>Ver Trilhas!</button>
                    </div>
                </div>
            </div>


        </div>
    )
}
