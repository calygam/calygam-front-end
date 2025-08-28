import React, { useEffect, useState } from 'react'
import { useMessageContext } from '../../../hooks/useMessageContext'

import {DetailCommentCard} from './index'
import { MessageServices } from '../../../services/MessageServices';
export default function CommentCard() {
    const { msgState,setMessageData } = useMessageContext()
    const { getPageableMessages } = MessageServices();
    const activityId = localStorage.getItem("targetActivityId")

    useEffect(() => {
        console.log(msgState.dataMsg.messages.content)
    }, [msgState, msgState.dataMsg])
    return (
        <div className='font-poppins flex  flex-col my-2 '>
            <h2 className='font-semibold my-2 text-lg'>Comentários da turma</h2>
            <ul className='flex flex-col pr-2  gap-y-2  '>
                {msgState.dataMsg.messages.content?.map(msg => (
                    <div key={msg.messageActivityId}>
                   <DetailCommentCard msg={msg} /></div>
                ))}
            </ul>
            <div className='w-full flex justify-center'>
            <button className='text-sm bg-purple-600 border-b-4 h-[35px] border-purple-700 hover:border-none transition-all hover:translate-y-1 rounded-full py-2 px-4 text-white font-medium' onClick={()=>getPageableMessages(activityId,msgState.dataMsg.messageLastId,setMessageData,msgState)}>Carregar Mais...</button>
            </div>
        </div>
    )
}
