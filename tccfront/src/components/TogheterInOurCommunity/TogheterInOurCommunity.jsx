import React from 'react'
import ChatIconMessage from '../../assets/img/chat-icon-message.png'
import ExempleUserChat from '../../assets/img/icon-exemple-user-chat.svg'
import ExemploUserTwo from '../../assets/img/icon-exemple-user-chat-two.svg'

import ButtonsCommunityOnly from '../../components/ButtonsCommunityOnly/ButtonsCommunityOnly.jsx'
import ViewChatExemple from '../../components/ViewChatExemple/ViewChatExemple.jsx'



export default function TogheterInOurCommunity() {
  return (
    <div className='grid grid-cols-1 transition-all delay-100 duration-1000 ease-in-out font-poppins  md:grid-cols-2 w-full lg:space-x-3 md:space-x-9 place-items-center'>

      <div className='flex flex-col w-fit '>
        <p className='lg:text-2xl md:text-lg text-base  font-black '>Já Faz Parte da <span className='text-red-clean-type'>Nossa Comunidade?</span></p>
        <div className='w-full h-[2px] bg-red-clean-type '></div>

        <div className='flex w-full  flex-col'>
          <p className='text-xs font-light  '>Só aqui você fica por dentro de tudo! você pode encontrar pessoas que</p>
          <p className='text-xs font-light'>gostam</p>
          <p className='text-xs font-light'>da mesma coisa que você, fazer novas amizades</p>
          <p className='text-xs font-light'>e tinha duvídas frequentes ou Criar a sua propria Comunidade</p>
        </div>

        <div className='w-full gap-x-5 flex'>
          <ButtonsCommunityOnly viewCommunity={'Ver Comunidade'} />
          <ButtonsCommunityOnly viewCommunity={'Criar Nova'} />
        </div>
        <div className='w-full flex'>
          <ViewChatExemple viewFirstExemple={ExempleUserChat} viewSecondExemple={ExemploUserTwo}/>
        </div>
      </div>




      <div className='flex flex-col lg:w-[450px] md:w-[350px] w-[300px]  justify-center'>
        <div className=' w-full justify-center flex'>
          <img src={ChatIconMessage} alt="" className='lg:w-full h-full' />
        </div>

      </div>
    </div>
  )
}
