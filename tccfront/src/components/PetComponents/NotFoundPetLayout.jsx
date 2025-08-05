import React from 'react'
import NotHavePetArea from '../../components/PetComponents/Areas/NotHavePetArea.jsx'
import NotHavePetImageArea from '../../components/PetComponents/Areas/NotHavePetImageArea.jsx'
export default function NotFoundPetLayout() {
    return (
      <div className='
    
      

      w-full h-full min-h-11 flex justify-center
      bg-calygam-purple-semi-strong'>
        <div className='  grid md:grid-cols-2 grid-cols-1  gap-4 w-[85%] p-8 place-items-center '>
          <NotHavePetArea/>
          <NotHavePetImageArea/>
          </div>
      </div>
    )
}
