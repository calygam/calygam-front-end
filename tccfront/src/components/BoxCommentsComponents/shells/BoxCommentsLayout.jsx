import React from 'react'

//comps
//primitives
import { SendMessageButton } from '../primitives/index.js'
//...
//patterns
import { CommentTextArea } from '../patterns/index.js'
import { MessageServices } from '../../../services/MessageServices.js'
import { useParams } from 'react-router-dom'
import { useMessageReducer } from '../../../utils/FormsReducers/MessageReducerUtil/useMessageReducer.js'


export default function BoxCommentsLayout() {
  const {msgState,setMessageBody} = useMessageReducer()
  const {sendMessage} = MessageServices(msgState)
  const activityId = localStorage.getItem("targetActivityId")
  const {progressId} = useParams()
  return (
    <div className='flex flex-col  w-full'>
      <div className='w-[75%] flex gap-y-2 flex-col'>
        <CommentTextArea setMessageBody={setMessageBody} targetValue={msgState.bodyMsg.messageActivityDescription}/>
        <div className='self-end'>
          <SendMessageButton actionButton={"Enviar"} stylesPlus={"bg-calygam-purple-tone-2 border-calygam-purple-semi-bold/25"} method={()=>sendMessage(activityId,0)} />
        </div>
      </div>
    </div>
  )
}
