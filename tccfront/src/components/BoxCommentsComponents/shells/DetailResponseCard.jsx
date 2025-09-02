import React, { useEffect, useState } from 'react'
import loadingImages from '../../../assets/img/loading-images.svg'
import { MessageServices } from '../../../services/MessageServices';
import { useMessageContext } from '../../../hooks/useMessageContext';
//images
import perfilPageIcon from '../../../assets/img/perfilPageIcon.png'
import viewDrop from '../../../assets/img/view-drop.svg'
import { CommentTextArea } from '../patterns';
export default function DetailResponseCard({ msg }) {
    const [isImageLoading, setIsImageLoading] = useState(true);
    const [isMsgResponse, setIsMsgResponse] = useState(false)
    const [isMsgViewResponse, setIsMsgViewResponse] = useState(false)
    const { msgState, setMessageData, setMessageBody } = useMessageContext()
    const { sendMessage } = MessageServices()
    const activityId = localStorage.getItem("targetActivityId")
    // useEffect(()=>{
    //     console.log("-------------DEBUG MODE -------------------")
    //     console.log(msg)
    // },[msg.userImageUrl])
    return (
        <li key={msg.messageActivityId} className='flex flex-col gap-y-2'>

            <div className='w-full flex items-center relative mb-6 gap-2 rounded-md '>
                {msg.userImageUrl != "" && msg.userImageUrl != null ? isImageLoading &&
                    <span className='absolute flex bg-gradient-to-tr  w-[45px] justify-center items-center from-black via-gray-700 to-gray-700  rounded-full animate-spin'>
                        <img src={loadingImages} alt="" className='w-[45px]' />
                    </span>
                    : <button type='button' className='flex rounded-full outline-none group cursor-pointer overflow-hidden transition-all    bg-black/25 p-1 justify-center items-center'>
                        <img src={perfilPageIcon} alt="ir para perfil" className='w-[25px] transition-all h-[25px]' />
                    </button>}
                {msg.userImageUrl != null ?
                    <img src={msg.userImageUrl} alt="Foto de Perfil" className='  w-[40px] h-[40px]   z-10 object-cover rounded-full' onLoad={() => setIsImageLoading(false)} /> : null}


                <div className='flex flex-col  gap-y-1'>
                    <p className='text-xs font-semibold'>{msg.userName}</p>
                    <p className='text-sm max-w-[350px] text-wrap'>{msg.messageActivityDescription + "."}</p>
                </div>
            </div>
            <div className='flex gap-2 justify-end'>
               
            </div>
            {/* {isMsgResponse && <div className='flex flex-col items-end'>
                <CommentTextArea setMessageBody={setMessageBody} targetValue={msgState.bodyMsg.messageActivityDescriptionReply} modeArea={"messageActivityDescriptionReply"} />

                <button className='py-2 flex px-4 self-end  outline-none hover:bg-black hover:text-white hover:font-medium hover:rounded-md hover:translate-y-1 m-1  transition-all ease-in-out  font-medium text-xs ' onClick={() => {
                    sendMessage(msgState, activityId, msgState.bodyMsg.messageActivityId, setMessageData)
                    setIsMsgResponse(!isMsgResponse)
                }}>Enviar</button>
            </div>} */}
          
         
            
        </li>
    )
}
