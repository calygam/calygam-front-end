import React, { useEffect, useState } from 'react'
import { useMessageContext } from '../../../hooks/useMessageContext'
import loadingImages from '../../../assets/img/loading-images.svg'
export default function CommentCard() {
    const { msgState } = useMessageContext()
    const [isImageLoading, setIsImageLoading] = useState(true);
    useEffect(() => {
        console.log(msgState.dataMsg.messages.content)
    }, [msgState, msgState.dataMsg])
    return (
        <div className='font-poppins flex  flex-col my-2 '>
            <h2 className='font-semibold my-2 text-lg'>Comentários da turma</h2>
            <ul className='flex flex-col pr-2  gap-y-2 max-h-[350px] '>
                {msgState.dataMsg.messages.content?.map(msg => (
                    <li key={msg.messageActivityId} className='flex flex-col'>
                        <div className='w-full flex items-center py-4  gap-2 rounded-md '>
                            {isImageLoading && msg.userImageUrl != "" &&
                                <span className='absolute flex bg-gradient-to-tr  w-[45px] justify-center items-center from-black via-gray-700 to-gray-700  rounded-full animate-spin'>
                                    <img src={loadingImages} alt="" className='w-[45px]' />
                                </span>
                            }
                            <img src={msg.userImageUrl} alt="Foto de Perfil" className=' object-cover w-[45px] z-10  rounded-full' onLoad={() => setIsImageLoading(false)} />


                            <div className='flex flex-col gap-y-1'>
                                <p className='text-xs font-semibold'>{msg.userName}</p>
                                <p className='text-sm'>{msg.messageActivityDescription + "."}</p>
                            </div>
                        </div>
                        <button className='py-2 flex px-4 self-end  outline-none hover:bg-gray-200 hover:rounded-md hover:translate-y-1 transition-all ease-in-out  font-medium text-xs '>Responder</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
