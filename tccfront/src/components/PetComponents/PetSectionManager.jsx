import React, { useEffect } from 'react'
import { usePetReducer } from '../../utils/ContextReducers/PetReducer/usePetReducer'
import { useCallInfoPet } from '../../hooks/useCallInfoPet'
import PetSectionLayout from '../../components/PetComponents/PetSectionLayout.jsx'
import NotFoundPetLayout from '../../components/PetComponents/NotFoundPetLayout.jsx'
import { usePetContext } from '../../hooks/usePetContext.js'

export default function PetSectionManager() {
   const {details,setPetDetails} = usePetContext()
    useCallInfoPet(setPetDetails)
 

  useEffect(()=>{
    console.log("VINDO DO MANAGER ------")
    console.log(details)
  },[details])


  return (
    <div>
      {details?.foundInventoryItem ?
        <PetSectionLayout />
        : 
        <NotFoundPetLayout />}
    </div>
  )
}
