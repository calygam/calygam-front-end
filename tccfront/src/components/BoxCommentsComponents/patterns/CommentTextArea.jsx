import React, { useEffect } from 'react'
import { useMessageReducer } from '../../../utils/FormsReducers/MessageReducerUtil/useMessageReducer'

export default function CommentTextArea({setMessageBody,targetValue}) {

 
  return (
   <div className='border w-full font-poppins border-gray-600 rounded-md p-1'>
      <textarea className='border-0 w-full outline-none custom-scrollbar rounded-md text-sm p-2 max-h-[150px] ' type="text" name=""placeholder='Digite um comentário' id="" value={targetValue} onChange={(e)=>setMessageBody("messageActivityDescription",e.target.value)} />
    </div>
  )
}
