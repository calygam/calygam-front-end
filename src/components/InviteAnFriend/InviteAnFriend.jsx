import React from 'react'
import ButtonsCommunityOnly from '../ButtonsCommunityOnly/ButtonsCommunityOnly'

export default function InviteAnFriend({imgExempleShare}) {
    return (
        <div className='flex flex-col w-full'>
            <div className='flex w-full'>
                <div className='flex flex-col w-fit  '>
                    <p className='lg:text-2xl md:text-lg text-base  font-black '><span className='w-full h-[2px] text-red-clean-type '>Convide</span> Um <span className='w-full h-[2px] text-red-clean-type '>Amigo</span> Pra <span className='w-full h-[2px] text-red-clean-type '>Ganha Pontos!</span></p>
                    <div className='w-full h-[3px] mt-1 bg-red-clean-type '>

                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 md:place-items-start place-items-center'>
                <div className='w-fit'>
                    <img src={imgExempleShare} alt="" className='lg:w-[400px] md:w-[350px] w-[300px]'/>
                </div>
                <div className='flex flex-col my-16'>
                    <p className='md:text-base text-xs'>Chama um amigo para se juntar e vocês dois</p>
                    <p className='md:text-base text-xs'>ganham pontos! Vamos aproveitar juntos</p>
                    <ButtonsCommunityOnly viewCommunity={'Convidar'} withSuperX={true} />
                </div>
            </div>

        </div>
    )
}
