import React, { useEffect } from 'react'
import { UseReadAllTrailsHook } from '../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook';
import { UseDataActivitiesPerTrailIdHook } from '../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook';
import { useLocation } from 'react-router-dom';

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
    <div className=' flex font-poppins '>
        <div className='flex gap-x-2 items-center'>
      <h2>{targetTrail.trailName}:</h2>
      <h4>{targetActivity?.activityName}</h4>
      </div>
    </div>
  )
}
