import React, { useEffect, useState } from 'react'
import { UseReadAllTrailsHook } from '../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook'
import ItemWithDetails from '../../components/ItemWithDetails/ItemWithDetails.jsx'
export default function ViewTrails() {
    const { trails,targetTrailId,setTargetTrailId } = UseReadAllTrailsHook()

    const targetTrail = trails.find((oneTrail)=>oneTrail.trailId === targetTrailId)
    const [filterTrails,setFilterTrails] = useState('')
  return (
    <div className=' w-full flex   font-poppins flex-col gap-y-4'>
        <div className='flex w-full items-center justify-between flex-wrap'>
        
      <h4 className='font-medium text-xl'>Suas Trilhas</h4>
    
    
      <p className='text-red-button-send-feedback text-base'>Ver Tudo</p>
     
      </div>
        <input type="text" value={filterTrails} onChange={(e)=>setFilterTrails(e.target.value)} className='bg-red-clean-type/50 outline-none w-[200px] rounded-md p-2' />
    <div className='flex flex-col gap-y-6'>

      {!targetTrailId? trails.filter((findTrail)=>findTrail.trailName.toUpperCase().includes(filterTrails.toUpperCase())).map((trail,index)=>(
            //caio<- Destinado a mostrar detalhes de uma trilha
            !trail.trailStatus.includes("ENABLE")&&
            <div key={trail.trailId} onClick={()=>setTargetTrailId(trail.trailId)} className='hover:scale-105 cursor-pointer'>
            <ItemWithDetails itemImage={trail.trailImage?trail.trailImage:'aaa'} itemName={trail.trailName} itemData={trail.trailCreatedDate} itemVacancies={trail.trailVacancies} />
            </div>
        )): <div key={targetTrail.trailId} className='flex flex-col items-center border-4 border-yellow-600  rounded-xl p-4 bg-black/95 drop-shadow-calygam-light text-white'>
            <ItemWithDetails itemImage={targetTrail.trailImage?targetTrail.trailImage:'aaa'} itemName={targetTrail.trailName} itemData={targetTrail.trailCreatedDate} itemVacancies={targetTrail.trailVacancies} />
            <div></div>
           
            </div>}
        </div>
      
    </div>
  )
}
