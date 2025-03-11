import React from 'react'
import ChatIconMessage from '../../assets/img/chat-icon-message.png'
export default function TogheterInOurCommunity() {
  return (
    <div className='flex w-full space-x-3 flex-wrap md:flex-nowrap  items-center justify-center '>
     <div className='flex flex-col md:items-start justify-center items-center w-full '>
        <p className='text-lg font-black'>Já Faz Parte da <span className='text-red-clean-type'>Nossa Comunidade?</span></p>
        <p className=''></p>
     </div>
     <div className='flex flex-col    md:items-start '>
        <div className=' w-full justify-center flex'>
        <img src={ChatIconMessage} alt="" className='lg:w-[350px] md:w-[300px] w-[250px] h-[250px]' />
        </div>

     </div>
    </div>
  )
}
