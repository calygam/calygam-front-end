import React from 'react'
import PetEquippedCard  from './PetEquippedCard.jsx'
import { usePetContext } from '../../../hooks/usePetContext.js'

export default function PetEquippedArea() {
    const { details, setDetails } = usePetContext()
  return (
    
    <div>
      {details.dataPetEquipped!=null?
      <PetEquippedCard/>
      :null
}
    </div>
  )
}
