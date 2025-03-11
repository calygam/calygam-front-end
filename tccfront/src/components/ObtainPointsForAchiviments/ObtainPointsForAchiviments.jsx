import React from 'react'

import CoinSimbolObtain from '../../assets/img/coin-simbol-obtain.svg'
import TradeSimbolObtain from '../../assets/img/trade-coin.svg'
import NewCoursesUnlocked from '../../assets/img/new-courses-unlocked.svg'

export default function ObtainPointsForAchiviments() {
  return (
    <div className='w-full flex flex-col'>
      <p className='font-bold text-xs'>Benefícios</p>
      <div className='flex flex-col w-fit md:text-2xl text-lg'>
        <p><span className='text-red-800'>Descubra</span> as <span className='text-red-clean-type'>Vantagens</span> do</p>
        <p><span className='text-red-clean-type'>Play Points</span></p>
        <div className='w-full h-[2px] bg-red-clean-type rounded-full mb-1'></div>
        <p className=' pr-0 md:pr-2 text-xs'>O programa Play Points oferece recompensas exclusivas para seus usuários. Ganhe </p>
        
        <p className='pr-0 md:pr-2 text-xs'>pontos a cada compra e troque por prêmios incríveis!</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 md:gap-x-4 gap-y-4 gap-x-0 w-full place-items-center md:place-items-stretch '>
        <div className='flex flex-col'>
            <p className='text-lg font-black'>Ganhe Pontos Em Cada Trilha!</p>
            <p className='text-xs'>Acumule Pontos e Ganhe Recompensas</p>
            <div className='w-full flex justify-center mt-5 '>
                <img src={CoinSimbolObtain} alt="" className='w-16 h-16' />
            </div>
        </div>
        <div className='flex flex-col'>
            <p className='text-lg font-black'>Troque Pontos por Temas!</p>
            <p className='text-xs'>Com O acumulo De Moedas Você pode Troca pontos 
            por temas no SePerfil!</p>
            <div className='w-full flex justify-center mt-5 '>
                <img src={TradeSimbolObtain} alt="" className='w-16 h-16' />
            </div>
        </div>


        <div className='flex flex-col'>
            <p className='text-lg font-black'>Desbloquei Novos
            Cursos!</p>
            <p className='text-xs'>Com as Moedas Você Pode Desbloquear Novos Curos!</p>
            <div className='w-full flex justify-center mt-5 '>
                <img src={NewCoursesUnlocked} alt="" className='w-16 h-16' />
            </div>
        </div>



      </div>
    </div>
  )
}
