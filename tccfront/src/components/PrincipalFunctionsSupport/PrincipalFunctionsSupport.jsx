import React from 'react'

//imagens

import storeIcon from '../../assets/img/initialPage/store-icon.svg'
import invitePetSystem from '../../assets/img/initialPage/invite-pet-sistem.svg'
import enterSystemRanking from '../../assets/img/initialPage/enter-sistem-ranking.svg'
import { Link } from 'react-router-dom'

export default function PrincipalFunctionsSupport() {
    return (
        <div className='grid lg:grid-cols-3 font-poppins md:grid-cols-2 mx-auto grid-cols-1 items-center justify-center gap-8 '>
            <div className=''>
                <img src={enterSystemRanking} alt="entre para o sistema de ranking" className='w-[25px]' />
                <p className='md:text-xl text-lg font-bold'>Sistema de Níveis e Ranks</p>
                <p className=''>Suba de nível e conquiste novos desafios!</p>
            </div>
            <div className=''>
                <img src={storeIcon} alt="entre para o sistema de ranking" className='w-[25px]' />
                <p className='md:text-xl text-lg font-bold'>Loja Virtual de</p>
                <p className='md:text-xl text-lg font-bold'>Recompensas</p>
                <p className=''>Desbloqueie itens e conquiste prêmios únicos!</p>
            </div>
            <div className=''>
                <img src={invitePetSystem} alt="entre para o sistema de ranking" className='w-[25px]' />
                <p className='md:text-xl text-lg font-bold'>Pets Colecionáveis como Mascotes</p>
                <p className=''>Colecione pets e personalize sua experiência!</p>
            </div>
            <div className='flex w-full'>
                <Link to={"/Register"}>
               <button className='flex border outline-none border-calygam-purple-medium-light text-sm text-purple-500 rounded-md py-2 px-4 '>Começar</button>
                </Link>
            </div>


        </div>
    )
}
