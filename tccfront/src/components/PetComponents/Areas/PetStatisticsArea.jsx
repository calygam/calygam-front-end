import React, { useEffect } from 'react'
//images

import petIconHand from '../../../assets/img/homePage/pet-icon-hand.svg'
import ProgressBarAdapt from '../../ProgressBarAdapt/ProgressBarAdapt.jsx'
import { usePetReducer } from '../../../utils/ContextReducers/PetReducer/usePetReducer.js'
import { usePetContext } from '../../../hooks/usePetContext.js'
export default function PetStatisticsArea() {
  const { details, setDetails } = usePetContext()
  useEffect(() => {
    console.log(details)
  }, [details])
  return (
    <div className='flex flex-col gap-y-1 p-8 font-poppins'>
      <div className='flex gap-4 items-center  flex-wrap '>
        <p className='text-white'>Meu Mascote</p>
        <img src={petIconHand} alt="" className='w-[80px]' />
      </div>
      {details?.dataPetEquipped != null ?

        <div className='text-white flex flex-col gap-y-4'>
          <div className='flex flex-col gap-y-1'>
            <p className='text-sm'>Fome:</p>
            <ProgressBarAdapt xpInMoment={details.dataPetEquipped.apprenticePetEnergy} xpToGet={details.dataPetEquipped.petMaxEnergy} customizeSemanticColor={"text-white"} petMin={details.dataPetEquipped.petMinEnergy} />
            <p className='text-xs font-medium'>Mínimo para felicidade - {details.dataPetEquipped.petMinEnergy}</p>
          </div>
          <div className='flex flex-col gap-y-1'>
            <p className='text-sm'>Energia:</p>
            <ProgressBarAdapt xpInMoment={details.dataPetEquipped.apprenticePetEnergy} xpToGet={details.dataPetEquipped.petMaxEnergy} barPercentual={true} customizeSemanticColor={"text-white"} />
          </div>
        </div>

        : <p className='text-white text-sm font-medium'>Você tem um pet? Experimente equipá-lo!</p>}
    </div>

  )
}
