import React, { useEffect, useState } from 'react'
import { useMessageContext } from '../../../hooks/useMessageContext'

import {DetailCommentCard} from './index'
import { MessageServices } from '../../../services/MessageServices';
import { UseLoading } from '../../../hooks/UseLoading/UseLoading';
import DeleteModal from '../../modals/DeleteModal/DeleteModal';
import { UseModalHook } from '../../../hooks/UseModalHook/UseModalHook';
export default function CommentCard() {
    const { msgState,setMessageData } = useMessageContext()
    const { getPageableMessages } = MessageServices();
    const {loading} = UseLoading()
    const activityId = localStorage.getItem("targetActivityId")
     const { openModal, modalIsOpen, contentModal } = UseModalHook()

    

    // useEffect(() => {
    //     console.log(msgState.dataMsg.messages.content)
    // }, [msgState, msgState.dataMsg])
    return (
        <div className='font-poppins flex  flex-col my-2 '>
                        {modalIsOpen && contentModal === "deleteOneComment" ? <DeleteModal id={msgState.bodyMsg.messageActivityId} setData={setMessageData} data={msgState} /> : null}
            <h2 className='font-semibold my-2 text-lg'>Comentários da turma</h2>
            {!loading&& msgState.dataMsg.messages.length==0?<p className='text-sm text-gray-600'>*Sem comentários no momento</p>:
            <ul className='flex flex-col max-w-[350px] pr-2  gap-y-2  '>
                {msgState.dataMsg.messages.map(msg => (
                    <div className='flex flex-wrap' key={msg.messageActivityId}>
                   <DetailCommentCard msg={msg} messageActivityId={msg.messageActivityId} />
                   
                   
                   </div>
                ))}
         
            </ul>}
            {msgState.dataMsg.messages.length>0&&msgState.dataMsg.messageHasNext&&
            <div className='w-full flex mt-6 justify-center'>
            <button className='text-sm bg-purple-600 border-b-4 h-[35px] border-purple-700 hover:border-none transition-all hover:translate-y-1 rounded-full py-2 px-4 text-white font-medium' onClick={()=>getPageableMessages(activityId,msgState.dataMsg.messageLastId,setMessageData,msgState)}>Carregar Mais...</button>
            </div>
}
        </div>
    )
}
