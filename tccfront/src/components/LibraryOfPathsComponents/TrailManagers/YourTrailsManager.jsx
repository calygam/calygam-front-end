import React, { useEffect } from 'react'
import TrailContainerSmall from '../TrailContainerVariants/TrailContainerSmall'
import { UseReadAllTrailsHook } from '../../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook'
import { Link } from 'react-router-dom';

export default function YourTrailsManager({withRecentlyTrails}) {
  const { trailsWithThisUser,loading } = UseReadAllTrailsHook()
const recentlyInteractIds = JSON.parse(localStorage.getItem("trailsRecentlyAcess")) || [];

   const recentlyViewedTrails = trailsWithThisUser
    .filter(trail => recentlyInteractIds.includes(trail.trailId))
    .sort((a, b) =>
      recentlyInteractIds.indexOf(a.trailId) - recentlyInteractIds.indexOf(b.trailId)
    )
    const existsTrails = !loading? withRecentlyTrails? recentlyViewedTrails && recentlyViewedTrails.length > 0:trailsWithThisUser && trailsWithThisUser.length > 0:true

  useEffect(()=>{
    console.log(trailsWithThisUser)
  },[trailsWithThisUser])

  return (
    <div className='flex flex-col  
                    w-[85%] 
                    mx-auto gap-y-2'>
                      
      {!withRecentlyTrails&&
        <h3 className='font-semibold'>Suas Trilhas</h3>}
      
      <div className={`${existsTrails?"grid md:grid-cols-2  grid-cols-1":"flex justify-center items-center"}
                    max-h-[400px]
                     my-6 gap-x-16 gap-y-8
                    font-poppins
                    custom-scrollbar overflow-y-auto`}>

        
        {withRecentlyTrails? existsTrails ?
          recentlyViewedTrails.filter((filterStats) => filterStats.trailStatus.includes("ENABLE")).map((trail) => (
            <TrailContainerSmall key={trail.trailId} trail={trail??null} />
          )):<p className='text-center'>Explore novas trilhas</p>:null}
       
        {!withRecentlyTrails && trailsWithThisUser && trailsWithThisUser.length > 0 && 
          trailsWithThisUser.filter((filterStats) => filterStats.trailStatus.includes("ENABLE")).map((trail) => (
            <TrailContainerSmall key={trail.trailId} trail={trail} />
          ))
         }

      </div>
     
    </div>
  )
}
