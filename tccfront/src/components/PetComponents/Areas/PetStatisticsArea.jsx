import React, { useEffect, useState } from 'react'
//images
import chooseIcon from '../../../assets/img/homePage/choose-icon.svg'
import hungryIcon from '../../../assets/img/homePage/hungry-icon.svg'
import skinsIcon from '../../../assets/img/homePage/skins-icon.svg'
import petIconHand from '../../../assets/img/homePage/pet-icon-hand.svg'
import ProgressBarAdapt from '../../ProgressBarAdapt/ProgressBarAdapt.jsx'
import { usePetReducer } from '../../../utils/ContextReducers/PetReducer/usePetReducer.js'
import { usePetContext } from '../../../hooks/usePetContext.js'
import { UseModalHook } from '../../../hooks/UseModalHook/UseModalHook.js'
import { useInteractWithPet } from '../../../utils/useInteractWithPet.js'
import { useCallInfoPet } from '../../../hooks/useCallInfoPet.js'
export default function PetStatisticsArea() {
  const { details, setPetDetails } = usePetContext()
  const { openModal } = UseModalHook()
  const { HandleFeedPet } = useInteractWithPet(setPetDetails)

  useCallInfoPet(setPetDetails)

  
  return (
    <div className='flex flex-col gap-y-1 p-8     font-poppins'>
      <div className='flex gap-4 items-center  flex-wrap '>
        <p className='text-white'>Meu Mascote</p>
        <img src={petIconHand} alt="" className='w-[80px]' />
      </div>
      {details.dataPetEquipped != null && details.dataPetEquipped != '' ?

        <div className='text-white flex flex-col gap-y-4'>
          <div className='flex flex-col gap-y-1'>
            <p className='text-sm'>Energia:</p>

            <ProgressBarAdapt xpInMoment={details.dataPetEquipped.apprenticePetEnergy} xpToGet={details.dataPetEquipped.petMaxEnergy} customizeSemanticColor={"text-white"} petMin={details.dataPetEquipped.petMinEnergy} />
            <p className='text-xs font-medium'>Mínimo para felicidade - {details.dataPetEquipped.petMinEnergy}</p>
          </div>
          <div className='flex flex-col gap-y-1'>
            <p className='text-sm'>Fome:</p>
            <ProgressBarAdapt xpInMoment={details.dataPetEquipped.apprenticePetEnergy} xpToGet={details.dataPetEquipped.petMaxEnergy} barPercentual={true} customizeSemanticColor={"text-white"} />
          </div>
          <div className='flex flex-wrap gap-2 justify-center items-center'>
            <button className='rounded-md bg-white text-black  text-sm font-medium border-b-4  gap-x-1 flex items-center border-b-black/15 h-[40px] hover:border-0 outline-none p-1 transition-all hover:translate-y-1' onClick={() => openModal("showInventory")}>
              <img src={chooseIcon} alt="" className='w-[15px]' />
              <p>Trocar</p></button>
            <button className='rounded-md bg-white text-black  border-b-4 text-sm font-medium gap-x-1 flex   items-center border-b-black/15 h-[40px] hover:border-0 outline-none p-1 transition-all hover:translate-y-1' onClick={() => HandleFeedPet(details.dataPetEquipped.petId, false)}>
              <img src={hungryIcon} alt="" className='w-[15px]' />
              <p>Comer</p></button>
            {details.dataPetEquipped.petMultiplierUp > 1 &&
              <button className='rounded-md bg-white text-black  border-b-4 text-sm font-medium gap-x-1 flex   items-center border-b-black/15 h-[40px] hover:border-0 outline-none p-1 transition-all hover:translate-y-1' onClick={() => HandleFeedPet(details.dataPetEquipped.petId, true)}>
                <img src={hungryIcon} alt="" className='w-[15px]' />
                <p>Mimar x{details.dataPetEquipped.petMultiplierUp}</p></button>}
            <button className='rounded-md bg-white text-black  border-b-4 text-sm font-medium gap-x-1 flex   items-center border-b-black/15 h-[40px] hover:border-0 outline-none p-1 transition-all hover:translate-y-1' onClick={() =>{
              openModal("SkinsOfPet")}}>
            
              <p>Skins</p></button>

          </div>
        </div>

        : <p className='text-white text-sm font-medium'>Você tem um pet? Experimente equipá-lo!</p>}
    </div>

  )
}
