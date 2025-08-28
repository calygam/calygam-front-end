import React, { useState } from 'react'
import loadingImages from '../../../assets/img/loading-images.svg'
import { MessageServices } from '../../../services/MessageServices';
import { useMessageContext } from '../../../hooks/useMessageContext';
import { CommentTextArea } from '../patterns';
export default function DetailCommentCard({msg}) {
        const [isImageLoading, setIsImageLoading] = useState(true);
        const [isMsgResponse,setIsMsgResponse] = useState(false)
        const {msgState,setMessageData,setMessageBody} = useMessageContext()
          const {sendMessage} = MessageServices()
          const activityId = localStorage.getItem("targetActivityId")
            return (
        <li key={msg.messageActivityId} className='flex flex-col gap-y-2'>
            <div className='w-full flex items-center relative py-4  gap-2 rounded-md '>
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
            <button className='py-2 flex px-4 self-end  outline-none hover:bg-gray-200 hover:rounded-md hover:translate-y-1 m-1  transition-all ease-in-out  font-medium text-xs ' onClick={()=>{setMessageBody("messageActivityId",msg.messageActivityId)
            setMessageBody(msgState.bodyMsg.messageActivityDescriptionReply,"")
                 setIsMsgResponse(!isMsgResponse)}}>Responder</button>
            {isMsgResponse&&<div className='flex flex-col items-end'>
                 <CommentTextArea setMessageBody={setMessageBody} targetValue={msgState.bodyMsg.messageActivityDescriptionReply} modeArea={"messageActivityDescriptionReply"}/>

                     <button className='py-2 flex px-4 self-end  outline-none hover:bg-black hover:text-white hover:font-medium hover:rounded-md hover:translate-y-1 m-1  transition-all ease-in-out  font-medium text-xs ' onClick={()=>{
                        sendMessage(msgState,activityId,msgState.bodyMsg.messageActivityId,setMessageData)
                        setIsMsgResponse(!isMsgResponse)}}>Enviar</button>
            </div>}

        </li>
    )
}
