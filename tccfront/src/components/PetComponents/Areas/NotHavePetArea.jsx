import React from 'react'

//images

import petIconHand from '../../../assets/img/homePage/pet-icon-hand.svg'
import { Link } from 'react-router-dom'

export default function NotHavePetArea() {
  return (
    <div className='flex flex-col gap-y-8 font-poppins'>
        <div className='flex gap-4 items-center  flex-wrap '>
            <p className='text-white'>Meu Mascote</p>
            <img src={petIconHand} alt="" className='w-[80px]' />
        </div>
        <div className='flex flex-col gap-y-4'>
            <p className='text-white text-lg'>Ops! você ainda não tem nenhum pet</p>
       
            <div className=''>
            <p className='text-sm text-white   '>Conheça os benefícios de ter um pet no seu dia a dia e descubra</p>
            <p className='text-sm text-white  '>como adotar seu novo melhor amigo de forma responsável e</p>
            <p className='text-sm text-white '>consciente</p>
            </div>

        </div>
        <div className='flex mt-2'>
            <Link to={"/Emporium/Stock"}><button className='py-2 px-4 rounded-md outline-none border text-sm border-white text-white'>Ver mais</button></Link>
        </div>
    </div>
  )
}
