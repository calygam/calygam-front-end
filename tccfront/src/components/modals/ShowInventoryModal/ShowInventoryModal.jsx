import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { UseModalHook } from '../../../hooks/UseModalHook/UseModalHook'
import closeX from '../../../assets/img/close-x.svg'
import { UseLoading } from '../../../hooks/UseLoading/UseLoading'
import PetEquippedCard from '../../PetComponents/Areas/PetEquippedCard'
import PetNotEquippedCard from '../../PetComponents/PetNotEquippedCard'
import { usePetContext } from '../../../hooks/usePetContext'
import { useCallInfoPet } from '../../../hooks/useCallInfoPet'

export default function ShowInventoryModal() {
    const [hasAnimated, setHasAnimated] = useState(false)

    const { details, setPetDetails } = usePetContext()

    const { closeModal, contentModal, modalIsOpen, openModal } = UseModalHook()


    return (
        <motion.div className='w-full h-full font-poppins fixed inset-0 z-30  bg-calygam-purple-semi-bold/50 backdrop-blur-md flex overflow-y-auto custom-scrollbar justify-center items-center'
            initial={hasAnimated ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: 'tween', duration: 0.7, ease: 'easeInOut' }}
        >
            <motion.div
                initial={hasAnimated ? false : { scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'tween', duration: 0.7, ease: 'easeInOut' }}

                className='w-[90vw]  rounded-md  bg-calygam-purple-tone-3   min-h-[150px] pb-4 '
            >
                <div className='w-full flex justify-between px-2  items-center'>
                    <div className='flex items-center justify-center gap-x-2 '>
                             <div className='flex items-center justify-center  gap-x-1'>
                            <div className='py-4 px-2'>
                                <button className={`py-2 px-4 outline-none  w-full text-center justify-center rounded-md  transition-all h-[40px] ${contentModal==="showInventory"?"border-b-4  hover:border-0 hover:translate-y-1 bg-purple-800 border-b-purple-900":"border-b-4  hover:border-0 hover:translate-y-1 bg-purple-700 border-b-purple-800 "} flex text-white mx-auto`} onClick={() => openModal("showInventory")}>Pets</button>
                            </div>

                        </div>
                     
                        <div className='flex items-center justify-center  gap-x-1'>
                            <div className='py-4 px-2'>
                                <button className={`py-2 px-4 outline-none  w-full text-center justify-center rounded-md  transition-all h-[40px] ${contentModal==="SkinsOfPet"?"border-b-4  hover:border-0 hover:translate-y-1 bg-purple-800 border-b-purple-900":"border-b-4  hover:border-0 hover:translate-y-1 bg-purple-700 border-b-purple-800 "} flex text-white mx-auto`} onClick={() => openModal("SkinsOfPet")}>Skins</button>
                            </div>

                        </div>
                    </div>
                    <button className='flex outline-none justify-center bg-white/70 border border-purple-700/75 rounded-md items-center' onClick={() => {

                        closeModal("", "")

                    }}>
                        <img src={closeX} alt="fechar" className='md:w-[20px] w-[15px] ' />
                    </button>

                </div>
                <div className='flex flex-wrap max-h-[350px] w-full overflow-y-auto  p-4 grid-col-1 gap-x-16 md:gap-x-8 md:gap-0 mx-auto   justify-center'>
                    {/* { contentModal==="showInventory" ? details.dataPetNotEquipped.map(pet=>(
                        <div className='' key={pet.petOutfitId}>
                        <PetNotEquippedCard item={pet} />
                        </div>
                    )):contentModal==="showInventorySkinsOfPet"?details.dataPetEquippedSkins.map(skins=>(
                        <div className='flex flex-col   ' key={skins.petOutfitId}>
                        <p className='font-poppins bg-purple-500 rounded-md p-1 text-white font-medium'>{skins.petOutfitName}</p>
                        <PetNotEquippedCard item={skins} />
                        </div>
                    )):null} */}

                    {"showInventory".includes(contentModal) ? details.dataPetNotEquipped.map(pet => (
                        <div key={pet.petId}>
                            <PetNotEquippedCard item={pet} />
                        </div>
                    )) : "SkinsOfPet".includes(contentModal) ? details.dataPetEquippedSkins.map(skins => (
                        <div key={skins.petOutfitId}>
                            <PetNotEquippedCard item={skins} />
                        </div>
                    )) : null}

                </div>




            </motion.div>

        </motion.div>
    )
}
