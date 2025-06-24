import React, { useEffect } from 'react'
import { UseReadAllTrailsHook } from '../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook';
import { UseDataActivitiesPerTrailIdHook } from '../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook';
import { useLocation } from 'react-router-dom';

//component
import SendActivityArea from '../../components/SendActivityArea/SendActivityArea.jsx'

export default function CalygamActivityDetail() {
    const { targetTrail,searchtrailsById} = UseReadAllTrailsHook();
    const location = useLocation()
    useEffect(()=>{
        searchtrailsById()
    },[])
          
          const { targetActivity} = UseDataActivitiesPerTrailIdHook()
         const trailData={
          trailId:targetTrail.trailId,
          trailName:targetTrail.trailName,
          trailImage:targetTrail.trailImage
         }
  return (
    <div className=' flex lg:w-[600px] md:w-[300px] w-full  font-poppins self-start '>
        <div className='flex gap-x-2 flex-wrap items-center'>
      <h4 className='font-bold'>{targetTrail.trailName}:</h4>
      <h2 className='font-semibold text-black/75'>{targetActivity?.activityName}</h2>
      <div className='w-full my-4'>
        <p>{targetActivity?.activityDescription}</p>
      </div>
      <SendActivityArea/>
      </div>
    </div>
  )
}
