import React from 'react'
import ChatIconMessage from '../../assets/img/chat-icon-message.png'
export default function TogheterInOurCommunity() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-full space-x-3 justify-items-center'>

      <div className='flex flex-col w-full mt-20'>
        <p className='lg:text-2xl md:text-lg  font-black '>Já Faz Parte da <span className='text-red-clean-type'>Nossa Comunidade?</span></p>
        <div className='w-full h-[2px] bg-red-clean-type '></div>

        <div className='flex w-full  flex-col'>
          <p className='text-xs font-light text-nowrap'>Só aqui você fica por dentro de tudo! você pode encontrar pessoas que</p>
          <p className='text-xs font-light'>gostam</p>
          <p className='text-xs font-light'>da mesma coisa que você, fazer novas amizades</p>
          <p className='text-xs font-light'>e tinha duvídas frequentes ou Criar a sua propria Comunidade</p>
        </div>

        <div className='w-full flex'></div>
      </div>




      <div className='flex flex-col w-[95%]   md:items-start '>
        <div className=' w-full justify-center flex'>
          <img src={ChatIconMessage} alt="" className='lg:w-full h-full' />
        </div>

      </div>
    </div>
  )
}
