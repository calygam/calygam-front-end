import React, { useEffect, useState } from 'react'
import { UseReadAllTrailsHook } from '../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook';
import { UseDataActivitiesPerTrailIdHook } from '../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook';
import { useLocation } from 'react-router-dom';

//component
import SendActivityArea from '../../components/SendActivityArea/SendActivityArea.jsx'
import { UseProgressHook } from '../../hooks/UseProgressHook/UseProgressHook.js';

export default function CalygamActivityDetail() {
  const { targetTrail, searchtrailsById } = UseReadAllTrailsHook();
    const [viewSubmissions, setViewSubmissions] = useState(false)
  const location = useLocation()
  const { submissionBaggage, ListenerOfDowloadableArchivesSubmited } = UseProgressHook()
 

  const { targetActivity } = UseDataActivitiesPerTrailIdHook()
  const trailData = {
    trailId: targetTrail.trailId,
    trailName: targetTrail.trailName,
    trailImage: targetTrail.trailImage
  }
  return (
    <div className=' flex lg:w-[600px] md:w-[300px] w-full  font-poppins  '>
      <div className='flex gap-x-2 flex-wrap items-center'>
        <h4 className='font-bold'>{targetTrail.trailName ? targetTrail.trailName : "Carregando... "}:</h4>
        <h2 className='font-semibold text-black/75'>{targetActivity?.activityName}</h2>
        <div className='w-full my-4'>
          <p>{targetActivity?.activityDescription}</p>
        </div>
        <div className='flex flex-col w-full'>
          <p className='text-lg text-calygam-purple-semi-strong'>{viewSubmissions?"Sua Entrega":"Entregar"}</p>
          <div className='flex justify-between rounded-xl flex-wrap bg-green-200/30 my-2 p-2 w-full'>
            <div className='flex '>
              <p className=''>Coloque os arquivos aqui {">"}</p>
            </div>
            <div>
          <SendActivityArea viewSubmissions={viewSubmissions} setViewSubmissions={setViewSubmissions} />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
