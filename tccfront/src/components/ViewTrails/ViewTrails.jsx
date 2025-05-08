import React, { useEffect } from 'react'
import { UseReadAllTrailsHook } from '../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook'
import ItemWithDetails from '../../components/ItemWithDetails/ItemWithDetails.jsx'
export default function ViewTrails() {
    const { trails } = UseReadAllTrailsHook()

  
  return (
    <div className=' w-full flex   font-poppins flex-col gap-y-4'>
        <div className='flex w-full items-center justify-between flex-wrap'>
      <h4 className='font-medium text-xl'>Suas Trilhas</h4>
      <p className='text-red-button-send-feedback text-base'>Ver Tudo</p>
     
      </div>
    <div className='flex flex-col gap-y-6'>
      {trails.map((trail,index)=>(
            //caio<- Destinado a mostrar detalhes de uma trilha
            <div key={trail.trailId} >
            <ItemWithDetails itemImage={trail.trailImage?trail.trailImage:'aaa'} itemName={trail.trailName} itemData={trail.trailCreatedDate} itemVacancies={trail.trailVacancies} />
            </div>
        ))}
        </div>
      
    </div>
  )
}
