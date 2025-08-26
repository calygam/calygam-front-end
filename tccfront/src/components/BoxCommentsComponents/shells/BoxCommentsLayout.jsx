import React from 'react'

//comps
//primitives
import { SendMessageButton } from '../primitives/index.js'
//...
//patterns
import { CommentTextArea } from '../patterns/index.js'
import { MessageServices } from '../../../services/MessageServices.js'

import { useMessageReducer } from '../../../utils/FormsReducers/MessageReducerUtil/useMessageReducer.js'


export default function BoxCommentsLayout({msgState,setMessageBody,setMessageData}) {
  
  const {sendMessage} = MessageServices(msgState)
  const activityId = localStorage.getItem("targetActivityId")
  
  return (
    <div className='flex flex-col  w-full'>
      <div className='w-[75%] flex gap-y-2 flex-col'>
        <CommentTextArea setMessageBody={setMessageBody} targetValue={msgState.bodyMsg.messageActivityDescription}/>
        <div className='self-end'>
          {msgState.bodyMsg.messageActivityDescription.length>0?
          <SendMessageButton actionButton={"Enviar"} stylesPlus={"bg-calygam-purple-tone-2 border-calygam-purple-semi-bold/25"} method={()=>sendMessage(msgState,activityId,0,setMessageData)} />
:<SendMessageButton actionButton={"Enviar"} stylesPlus={"bg-calygam-purple-tone-2/50 text-white/50 cursor-not-allowed border-calygam-purple-semi-bold/25"} disabled={true}  />}
        </div>
      </div>
    </div>
  )
}
