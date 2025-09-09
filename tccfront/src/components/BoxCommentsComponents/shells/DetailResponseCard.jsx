import React, { useEffect, useState } from 'react'
import loadingImages from '../../../assets/img/loading-images.svg'
import { MessageServices } from '../../../services/MessageServices';
import { useMessageContext } from '../../../hooks/useMessageContext';
//images
import perfilPageIcon from '../../../assets/img/perfilPageIcon.png'
import viewDrop from '../../../assets/img/view-drop.svg'
import { CommentTextArea } from '../patterns';
import trashIcon from '../../../assets/img/trash-icon.svg'
import { UseDataProfile } from '../../../hooks/UseDataProfile/UseDataProfile';
import editIcon from '../../../assets/img/edit-admin-table.svg'
import { UseModalHook } from '../../../hooks/UseModalHook/UseModalHook';
export default function DetailResponseCard({ msg, onAxios,setReplies }) {
    const [isImageLoading, setIsImageLoading] = useState(true);
    const [isMsgResponse, setIsMsgResponse] = useState(false)
    const { dataProfile } = UseDataProfile()
    const [isMsgViewResponse, setIsMsgViewResponse] = useState(false)
    const { msgState, setMessageData, setMessageBody } = useMessageContext()
    const { sendMessage, editMessage } = MessageServices()
    const [showAllResponse, setShowAllResponse] = useState(false)
    const { openModal, modalIsOpen, contentModal } = UseModalHook()
    const activityId = localStorage.getItem("targetActivityId")
    const [editMode, setEditMode] = useState(false)
    const [editDescriptionMsg,setEditDescriptionMsg] = useState("")


    // useEffect(()=>{
    //     console.log("-------------DEBUG MODE -------------------")
    //     console.log(msg)
    // },[msg.userImageUrl])
    return (
        <li key={msg.messageActivityId} className='flex flex-col gap-y-2  '>

            <div className='w-full flex   mb-6 gap-2 rounded-md '>
                {msg.userImageUrl != "" && msg.userImageUrl != null ? isImageLoading &&
                    <span className=' flex bg-gradient-to-tr self-start   justify-center items-center from-black via-gray-700 to-gray-700  rounded-full animate-spin'>
                        <img src={loadingImages} alt="" className='w-[45px]  max-h-[45px]' />
                    </span>
                    : <button type='button' className='flex rounded-full outline-none group cursor-pointer overflow-hidden transition-all    bg-black/25 p-1 justify-center items-center'>
                        <img src={perfilPageIcon} alt="ir para perfil" className='w-[25px] transition-all h-[25px]' />
                    </button>}
                {msg.userImageUrl != null ?
                    <img src={msg.userImageUrl} alt="Foto de Perfil" className={`  w-[40px] h-[40px]   z-10 object-cover rounded-full ${isImageLoading ? "hidden" : "block"}`} onLoad={() => setIsImageLoading(false)} /> : null}


                <div className='flex flex-col   max-w-[350px] break-words  whitespace-normal'>
                    <p className='text-xs font-semibold'>{msg.userName}</p>
                    <p className={`text-sm max-w-[350px]  ${!showAllResponse ? "line-clamp-3" : ""} `}>{msg.messageActivityDescription + "."}</p>
                     {msg.messageActivityDescription.length > 118 &&
                        <button className='py-2 px-4 hover:pr-6 border-l-2 border-purple-500/20 transition-all flex w-fit text-xs h-[35px]  text-black/75 font-semibold  rounded-full rounded-l-none hover:bg-purple-500/10' onClick={() => setShowAllResponse(!showAllResponse)}>{showAllResponse ? "Ler menos" : "Ler Mais"}</button>}
                    {msg.userId === dataProfile.userId &&
                        <div className='rounded-md  p-1 my-2 flex w-fit gap-x-1'>
                            <button type="button" className='outline-none hover:bg-red-500/25  rounded-md p-2' onClick={() => {

                                openModal("deleteOneCommentResponse")
                                setMessageBody("messageActivityId", msg.messageActivityId)
                            }}>
                                <img src={trashIcon} alt="" className='w-[15px]' />
                            </button>
                            <button type="button" className='outline-none hover:bg-blue-500/25  rounded-md p-1' onClick={() => {

                                // openModal("deleteOneComment")
                                setMessageBody("messageActivityId", msg.messageActivityId)
                                setEditDescriptionMsg(msg.messageActivityDescription)
                           
                                setEditMode(!editMode)
                            }}>
                                <img src={editIcon} alt="" className='w-[25px]' />
                            </button>
                            
                        </div>}
                    {editMode && <>
                        <CommentTextArea setMessageBody={setEditDescriptionMsg} targetValue={editDescriptionMsg} modeArea={"messageActivityDescriptionEdit"} normalMode={true}/>
                        {editDescriptionMsg.length > 0 ?
                            <button className='py-2 flex px-4 self-end  outline-none hover:bg-black hover:text-white hover:font-medium hover:rounded-md hover:translate-y-1 m-1  transition-all ease-in-out  font-medium text-xs ' onClick={() => {
                                // sendMessage(msgState, activityId, msgState.bodyMsg.messageActivityId, setMessageData, setDetailInfo, detailResponseState)
                                editMessage(msgState.bodyMsg.messageActivityId, true, setReplies,editDescriptionMsg)
                                setEditMode(!editMode)

                            }}>Finalizar</button> : <button type='button' disabled={true} className='py-2 flex px-4 self-end  outline-none hover:bg-black/35 hover:text-white/35 cursor-not-allowed hover:font-medium hover:rounded-md hover:translate-y-1 m-1  transition-all ease-in-out  font-medium text-xs ' onClick={() => {
                                // editMessage()
                                // sendMessage(msgState, activityId, msgState.bodyMsg.messageActivityId, setMessageData, setDetailInfo, detailResponseState)

                                // setEditMode(!editMode)

                            }}>Finalizar</button>
                        }</>
                    }
                

                </div>
            </div>
        </li>
    )
}
