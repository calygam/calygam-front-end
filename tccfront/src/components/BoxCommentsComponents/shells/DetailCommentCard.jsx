import React, { useEffect, useReducer, useState } from 'react'
import loadingImages from '../../../assets/img/loading-images.svg'
import { MessageServices } from '../../../services/MessageServices';
import { useMessageContext } from '../../../hooks/useMessageContext';
//images
import perfilPageIcon from '../../../assets/img/perfilPageIcon.png'
import viewDrop from '../../../assets/img/view-drop.svg'
import trashIcon from '../../../assets/img/trash-icon.svg'
import { CommentTextArea } from '../patterns';
import DetailResponseCard from './DetailResponseCard';
import { UseDataProfile } from '../../../hooks/UseDataProfile/UseDataProfile';
import { UseModalHook } from '../../../hooks/UseModalHook/UseModalHook';
import DeleteModal from '../../modals/DeleteModal/DeleteModal';
export default function DetailCommentCard({ msg }) {
    const [isImageLoading, setIsImageLoading] = useState(true);
    const [isMsgResponse, setIsMsgResponse] = useState(false)
    const [isMsgViewResponse, setIsMsgViewResponse] = useState(false)
    const [showResponse, setShowResponse] = useState(false)
    const { msgState, setMessageData, setMessageBody } = useMessageContext()
    const { sendMessage, getResponsePageableMessages } = MessageServices()
    const { dataProfile } = UseDataProfile()
    const {openModal,modalIsOpen,contentModal} = UseModalHook()
    const activityId = localStorage.getItem("targetActivityId")



    const detailResponseInitial = {
        responseMsgInfo: {
            messages: [],
            messageHasNext: false,
            messageLastId: 0,
            messageActivityId: 0

        }
    }
    const detailResponseReducer = (detailState, detailAction) => {
        switch (detailAction.type) {
            case "SET_DETAIL_INFO": return {
                ...detailState,
                responseMsgInfo: {
                    ...detailState.responseMsgInfo,
                    [detailAction.payload.key]: detailAction.payload.value
                }
            }

            default:
                break;
        }
    }
    const useDetailResponseReducer = () => {
        const [detailResponseState, detailResponseDispatch] = useReducer(detailResponseReducer, detailResponseInitial)

        const setDetailInfo = (key, value) => {
            detailResponseDispatch({ type: 'SET_DETAIL_INFO', payload: { key, value } })
        }
        return { setDetailInfo, detailResponseState }
    }
    const { detailResponseState, setDetailInfo } = useDetailResponseReducer()

    useEffect(() => {
        setDetailInfo("messageActivityId", msg.messageActivityId)
    }, [])



    return (
        <li key={msg.messageActivityId} className={`flex flex-col w-[350px] gap-y-2 `}>
      {modalIsOpen&& contentModal ==="deleteOneComment"?<DeleteModal id={msg.messageActivityId} setData={setMessageData} data={msgState}/>:null}
            <div className='w-full flex items-center justify-between    rounded-md '>
                <div className='flex items-center relative gap-2'>
                    {msg.userImageUrl != "" && msg.userImageUrl != null ? isImageLoading &&
                        <span className='absolute flex bg-gradient-to-tr  w-[45px] justify-center items-center from-black via-gray-700 to-gray-700  rounded-full animate-spin'>
                            <img src={loadingImages} alt="" className='w-[45px]' />
                        </span>
                        : <button type='button' className='flex rounded-full outline-none group cursor-pointer overflow-hidden transition-all    bg-black/25 p-1 justify-center items-center'>
                            <img src={perfilPageIcon} alt="ir para perfil" className='w-[25px] transition-all h-[25px]' />
                        </button>}
                    {msg.userImageUrl != null ?
                        <img src={msg.userImageUrl} alt="Foto de Perfil" className='  w-[45px] h-[45px]  z-10 object-cover  rounded-full' onLoad={() => setIsImageLoading(false)} /> : null}


                    <div className='flex flex-col gap-y-1 max-w-[150px]'>
                        <p className='text-xs font-semibold'>{msg.userName}</p>
                        <p className='text-sm text-wrap break-words whitespace-normal'>{msg.messageActivityDescription + "."}</p>
                    </div>
                </div>
                {msg.userId === dataProfile.userId&&
                <div className='rounded-md bg-black/15 p-1 flex gap-x-1'>
                    <button type="button" className='outline-none hover:bg-red-500/25 rounded-md p-1' onClick={()=>openModal("deleteOneComment")}>
                    <img src={trashIcon} alt="" className='w-[15px]' />
                    </button>
                </div>}
            </div>
            <div className='flex gap-2 justify-end'>
                {msg.messageResSize > 0 &&
                    <button className='py-2 flex gap-2  items-center px-4 self-end  outline-none bg-black text-white  hover:opacity-80 rounded-full hover:translate-y-1 m-1  transition-all ease-in-out  font-medium text-xs ' onClick={() => {
                        setShowResponse(!showResponse)

                        getResponsePageableMessages(0, setDetailInfo, detailResponseState)
                    }}>
                        <img className={`w-[20px] transition-all ${showResponse ? "rotate-180" : ""}`} src={viewDrop}></img>
                        <p>respostas</p></button>
                }
                <button className='py-2 flex px-4 self-end  outline-none hover:bg-gray-200 hover:rounded-md hover:translate-y-1 m-1  transition-all ease-in-out  font-medium text-xs ' onClick={() => {
                    setMessageBody("messageActivityId", msg.messageActivityId)

                    setMessageBody(msgState.bodyMsg.messageActivityDescriptionReply, "")
                    setIsMsgResponse(!isMsgResponse)

                }}>Responder</button>
            </div>
            {isMsgResponse && <div className='flex flex-col items-end'>
                <CommentTextArea setMessageBody={setMessageBody} targetValue={msgState.bodyMsg.messageActivityDescriptionReply} modeArea={"messageActivityDescriptionReply"} />

                <button className='py-2 flex px-4 self-end  outline-none hover:bg-black hover:text-white hover:font-medium hover:rounded-md hover:translate-y-1 m-1  transition-all ease-in-out  font-medium text-xs ' onClick={() => {
                    sendMessage(msgState, activityId, msgState.bodyMsg.messageActivityId, setMessageData, setDetailInfo, detailResponseState)

                    setIsMsgResponse(!isMsgResponse)

                }}>Enviar</button>
            </div>}
            {showResponse &&
                <ul className='border-l-2 pl-4 ml-4   border-purple-900'>
                    {detailResponseState.responseMsgInfo.messages.map(msg => (
                        <div key={msg.messageActivityId}>
                            <DetailResponseCard msg={msg} />

                        </div>
                    ))}
                    {detailResponseState.responseMsgInfo.messages.length > 0 && detailResponseState.responseMsgInfo.messageHasNext &&
                        <div className='w-full flex mt-6 justify-center'>
                            <button className='text-sm bg-purple-800 border-b-4 h-[35px] border-purple-950 hover:border-none transition-all hover:translate-y-1 rounded-md w-full py-2 px-4 text-white font-medium' onClick={() => getResponsePageableMessages(detailResponseState.responseMsgInfo.messageLastId, setDetailInfo, detailResponseState)}>Mais Respostas...</button>
                        </div>
                    }
                </ul>
            }

        </li>
    )
}
