import React from 'react'
import PetEquippedCard  from './PetEquippedCard.jsx'
import { usePetContext } from '../../../hooks/usePetContext.js'
import { UseLoading } from '../../../hooks/UseLoading/UseLoading.js'
import { UseModalHook } from '../../../hooks/UseModalHook/UseModalHook.js'

export default function PetEquippedArea() {
    const { details, setDetails } = usePetContext()
    const {loading} = UseLoading()
    const {openModal} = UseModalHook()
  return (
    
    <div className='py-2'>
      {details.dataPetEquipped!=null &&details.dataPetEquipped!=''?
      <PetEquippedCard petEquipped={true}/>
      :!loading&&<p className='text-white font-poppins'>Visite seu <button className='py-2 px-4 outline-none rounded-md transition-all  border-b-4 border-blue-600/50 h-[40px] hover:border-0 hover:translate-y-1 bg-blue-700' onClick={()=> openModal("showInventory")}>inventário</button></p>
}
    </div>
  )
}
