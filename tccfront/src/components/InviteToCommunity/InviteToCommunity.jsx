import React from 'react'

import inviteToCommunity from '../../assets/img/invite-to-community.svg'

export default function InviteToCommunity() {
  return (
    <div className='lg:w-[86%]  md:w-full lg:px-0 md:px-16 text-start   flex mx-auto  font-poppins flex-wrap md:flex-nowrap lg:gap-x-0 md:gap-x-1 md:justify-between justify-center    '>
      
        <div className='flex flex-col py-4 gap-x-4 w-fit  pl-2 md:pl-0 '>
          <h3 className='text-black font-bold  lg:text-xl md:text-base  py-1 '>Já Faz Parte da <span className='text-red-button-send-feedback'>Nossa Comunidade?</span></h3>
          <div className='w-fit my-4'>
          <p className='lg:text-base  text-xs font-light text-wrap'>Só aqui você fica por dentro de tudo! Você pode encontrar pessoas que</p>
          <p className='lg:text-base text-xs font-light text-wrap'>gostam</p>
          <p className='lg:text-base text-xs font-light text-wrap'>da mesma coisa que você, fazer novas amizades</p>
          <p className='lg:text-base text-xs font-light text-wrap'>e tinha duvídas frequentes ou Criar a sua propria Comunidade </p>
          </div>
          <div className='w-full md:w-fit flex lg:pl-6 md:pl-2 md:justify-start justify-center flex-wrap md:flex-nowrap gap-x-2 my-4'>
            <button className='px-4 py-2 text-xs rounded-md text bg-black text-white'>
              Criar Nova
            </button>
            <button className='px-4 py-2 text-xs rounded-md text border border-red-clean-type text-red-clean-type'>
              Ver Comunidade
            </button>
          </div>
        </div>

    

      <div className=''>
        <img src={inviteToCommunity} alt=""  className='lg:w-[350px] md:w-[300px] w-[250px]'/>
      </div>


    </div>
  )
}
