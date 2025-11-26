import React, { useEffect, useState } from 'react'
import { UseReadAllTrailsHook } from '../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook';
import { UseDataActivitiesPerTrailIdHook } from '../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook';
import { data, useLocation } from 'react-router-dom';

//component
import SendActivityArea from '../../components/SendActivityArea/SendActivityArea.jsx'
import {BoxCommentsLayout,CommentCard} from '../BoxCommentsComponents/shells/index.js';
import { UseProgressHook } from '../../hooks/UseProgressHook/UseProgressHook.js';
import { useMessageReducer } from '../../utils/FormsReducers/MessageReducerUtil/useMessageReducer.js';
import { useMessageCall } from '../../utils/FormsReducers/MessageReducerUtil/useMessageCall.js';
import { useMessageContext } from '../../hooks/useMessageContext.js';
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile.js';
import { UseLoading } from '../../hooks/UseLoading/UseLoading.js';
import LinkActivityArea from '../../components/LinkActivityArea/LinkActivityArea.jsx' 
import DeliveredActivitiesUsers from '../../components/DeliveredActivitiesUsers/DeliveredActivitiesUsers.jsx'

export default function CalygamActivityDetail() {
  const { targetTrail, searchtrailsById } = UseReadAllTrailsHook();
  
  const [viewSubmissions, setViewSubmissions] = useState(false)
 const {msgState,setMessageBody,setMessageData,setDataMsg} = useMessageContext()
  const { targetActivity } = UseDataActivitiesPerTrailIdHook()
  const {dataProfile} = UseDataProfile()
  const {loading} = UseLoading()
  useMessageCall(setMessageData)

    

  return (
     dataProfile?.userId==null||targetTrail?.user==null?<p className='font-poppins text-black font-bold'>Aguarde...</p>:
    dataProfile?.userId==targetTrail?.user?
    <>
    <div className=' flex flex-col  w-full  font-poppins  '>
                      {targetTrail.trailPassword?
        <h4 className=' w-fit my-2 bg-gray-400 rounded-full p-1 border-2 border-gray-900'>Senha da trilha | <span className='text-black font-bold'> {targetTrail.trailPassword} </span></h4>:<p className=' w-fit my-2 bg-gray-400 rounded-full p-1 border-2 border-gray-900'>Sem senha</p>}

      <div className='flex  gap-x-2 flex-wrap items-center'>
        
        <h4 className='font-bold'>{targetTrail.trailName ? targetTrail.trailName : "Carregando... "}:</h4>

        <h2 className='font-semibold text-black/75'>{targetActivity?.activityName}</h2>

        <div className='w-full my-4'>
          <p>{targetActivity?.activityDescription}</p>
        </div>
        </div>
        </div>
    <div className=' flex flex-col  w-full   font-poppins  '>
    <DeliveredActivitiesUsers/>
      <div className='flex flex-col h-full w-full  '>
          <BoxCommentsLayout msgState={msgState} setMessageBody={setMessageBody} setMessageData={setMessageData}/>
          <CommentCard/>
          
          
        </div>
    </div></>:
    <div className=' flex  w-full  font-poppins  '>
      <div className='flex gap-x-2 flex-wrap items-center'>
        <h4 className='font-bold'>{targetTrail.trailName ? targetTrail.trailName : "Carregando... "}:</h4>
        <h2 className='font-semibold text-black/75'>{targetActivity?.activityName}</h2>
        <div className='w-full my-4'>
          <p>{targetActivity?.activityDescription}</p>
        </div>
        <div className='flex flex-col w-full'>
          <p className='text-lg text-calygam-purple-semi-strong'>{viewSubmissions?"Sua Entrega":"Entregar"}</p>
          <div className='flex  rounded-xl flex-wrap  my-2 p-2 w-full'>
     
          
            <SendActivityArea viewSubmissions={viewSubmissions} setViewSubmissions={setViewSubmissions} />
      
          </div>
        </div>
        <div className='flex flex-col h-full w-full '>
          <BoxCommentsLayout msgState={msgState} setMessageBody={setMessageBody} setMessageData={setMessageData}/>
          <CommentCard/>
          
          
        </div>
      </div>
    </div>
  )
}
