import React from 'react'
import PetStatisticsArea from './Areas/PetStatisticsArea.jsx'
import PetEquippedArea from './Areas/PetEquippedArea.jsx'
export default function PetSectionLayout() {
  
  return (
    <div className='
    grid md:grid-cols-2 grid-cols-1
    place-items-center gap-4
    w-full h-full
    bg-calygam-purple-semi-strong'>
    
        <PetStatisticsArea/>
        <PetEquippedArea/>
        
    </div>
  )
}
