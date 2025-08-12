import React, { useEffect, useState } from 'react'
//images
import loadingImages from '../../assets/img/loading-images.svg'
import coinSymbol from '../../assets/img/homePage/coinSimbol.svg'
import xpIcon from '../../assets/img/rewards/xp-icon.svg'
import frangoIcon from '../../assets/img/rewards/frango-food.svg'
import { motion, useMotionValue } from 'framer-motion'
import { formattedCoins, managedControlDynamic, toPercentMoney } from '../../utils/FormatCoins/SoftFormatCoins'
import { usePetContext } from '../../hooks/usePetContext'
import { useInteractWithPet } from '../../utils/useInteractWithPet'
import { UseModalHook } from '../../hooks/UseModalHook/UseModalHook'
export default function PetNotEquippedCard({ item }) {

    const [roundedValue, setRoundedValue] = useState(0)
    const [isImageLoading, setIsImageLoading] = useState(true);
    const { details, setPetDetails } = usePetContext()
    const [showDetails, setShowDetails] = useState(false)
    const { HandleEquipOrUnequipPet, HandleEquipOrUnequipSkin } = useInteractWithPet(setPetDetails)
    const count = useMotionValue(0)
    const { contentModal } = UseModalHook()





    return (
        <motion.div

            initial={{ y: -80, x: -80 }}
            animate={{ y: 0, x: 0 }}
            transition={{ type: 'tween', duration: 0.7, ease: 'easeInOut' }}
            className={`md:w-[150px] h-fit   relative overflow-hidden bg-gradient-to-tr my-2  md:ml-0 font-poppins  gap-y-2 flex flex-col  border-[6px] ${item.apprenticeInventoryEquipped ? "border-green-700" : "border-gray-700"} group   rounded-md from-orange-500 via-purple-600 to-yellow-500`}
        >

            <div className='overflow-hidden relative flex  flex-col   '>
                {isImageLoading &&
                    <span className='flex  inset-0  relative h-fit    justify-center items-center w-full  bg-black/45       '>
                        <img src={loadingImages} alt="" className='  w-[100px] animate-spin' />
                    </span>
                }
                <img src={item.petOutfitUrl} alt="" className={`w-full max-h-[150px] bg-cover transition-all from-black via-gray-700 to-gray-700 hover:scale-105 ${isImageLoading ? "opacity-0" : "opacity-100 bg-white"}  `} onLoad={() => setIsImageLoading(false)} />
                {!showDetails &&
                    <div className='py-4 px-2'>
                        <button className='py-2 px-4 outline-none  w-full text-center justify-center rounded-md border-b-4 border-b-blue-600/50 hover:border-0 hover:translate-y-1 transition-all h-[40px] bg-blue-800  flex text-white mx-auto' onClick={() => setShowDetails(true)}>Detalhes</button>
                    </div>}
            </div>

            {!isImageLoading &&
                showDetails &&
                <div className='p-1 flex flex-col gap-y-2'>
                    {item.inventapprenticeInventoryTag === "PET" &&
                        <div className='flex flex-col bg-white/85 font-semibold rounded-lg pl-2  w-full gap-y-1'>
                            {/* {item.petBoostMoney != null ?
                <p>{item.petName}</p>:<p>{item.petOutfitName}</p>} */}
                            <div className='flex items-center gap-x-1'>
                                <img src={coinSymbol} alt="" className='w-[20px]' />
                                <p>+{toPercentMoney(item.petBoostMoney)}</p>
                            </div>
                            <div className='flex items-center gap-x-1'>
                                <img src={xpIcon} alt="" className='w-[20px]' />
                                <p>+{toPercentMoney(item.petBoostXp)}</p>
                            </div>
                            <div className='flex items-center gap-x-1'>
                                <img src={frangoIcon} alt="" className='w-[20px]' />
                                <p>+{toPercentMoney(item.petBoostFood)}</p>

                            </div>

                            <div className='w-full flex flex-col '>




                            </div>



                        </div>
                    }

                    {item.petOutfitPlusMoney > 0 || item.petOutfitPlusXp > 0 || item.petOutfitPlusFood > 0 ?
                        <>
                            {item.inventapprenticeInventoryTag === "PET" &&
                                <p className='bg-purple-800 rounded-md p-1 text-white'>Skin</p>
                            }
                            <div className='flex flex-col bg-purple-600/45 border-4 border-yellow-500/55 text-white font-semibold rounded-lg pl-2  w-full gap-y-1'>
                                {/* {item.petBoostMoney != null ?
                <p>{item.petName}</p>:<p>{item.petOutfitName}</p>} */}

                                <div className='flex items-center gap-x-1'>
                                    <img src={coinSymbol} alt="" className='w-[20px]' />
                                    <p>+{item.petOutfitPlusMoney}</p>
                                </div>
                                <div className='flex items-center gap-x-1'>
                                    <img src={xpIcon} alt="" className='w-[20px]' />
                                    <p>+{item.petOutfitPlusXp}</p>
                                </div>
                                <div className='flex items-center gap-x-1'>
                                    <img src={frangoIcon} alt="" className='w-[20px]' />
                                    <p>+{item.petOutfitPlusFood}</p>

                                </div>





                            </div>
                        </>
                        : item.petOutfitPlusMoney > 0 || item.petOutfitPlusXp > 0 || item.petOutfitPlusFood > 0 ?
                            <>
                                {item.inventapprenticeInventoryTag === "PET" &&
                                    <p className='bg-purple-800 rounded-md p-1 text-white'>Skin</p>
                                }
                                <div className='flex flex-col bg-purple-600/45 border-4 border-yellow-500/55 text-white font-semibold rounded-lg pl-2  w-full gap-y-1'>
                                    {/* {item.petBoostMoney != null ?
                <p>{item.petName}</p>:<p>{item.petOutfitName}</p>} */}

                                    <div className='flex items-center gap-x-1'>
                                        <img src={coinSymbol} alt="" className='w-[20px]' />
                                        <p>+{item.petOutfitPlusMoney}</p>
                                    </div>
                                    <div className='flex items-center gap-x-1'>
                                        <img src={xpIcon} alt="" className='w-[20px]' />
                                        <p>+{item.petOutfitPlusXp}</p>
                                    </div>
                                    <div className='flex items-center gap-x-1'>
                                        <img src={frangoIcon} alt="" className='w-[20px]' />
                                        <p>+{item.petOutfitPlusFood}</p>

                                    </div>





                                </div>
                            </> : null
                    }
                    {showDetails &&
                        <div className=''>
                            <button className='py-2 px-4 outline-none  w-full text-center justify-center rounded-md border-b-4 border-b-blue-600/50 hover:border-0 hover:translate-y-1 transition-all h-[40px] bg-blue-800  flex text-white mx-auto' onClick={() => setShowDetails(false)}>Esconder</button>
                        </div>}
                    <div className='w-full flex  '>

                        {
                            item.apprenticeInventoryEquipped ?
                                <button className='py-2 px-4 mb-2 rounded-md border-b-4 border-b-red-900/50 hover:border-0 hover:translate-y-1 transition-all h-[40px] bg-red-800  flex text-white mx-auto' onClick={() => {
                                    "SkinsOfPet".includes(contentModal) ?
                                        HandleEquipOrUnequipSkin(item.petOutfitId, item.inventapprenticeInventoryTag) :
                                        HandleEquipOrUnequipPet(item.petId, item.inventapprenticeInventoryTag)
                                }}>desequipar</button>
                                : <button className='py-2 mb-2 px-4 w-full text-center justify-center rounded-md border-b-4 border-b-lime-900/50 hover:border-0 hover:translate-y-1 transition-all h-[40px] bg-green-800  flex text-white mx-auto' onClick={() =>

                                    "SkinsOfPet".includes(contentModal) ?
                                        HandleEquipOrUnequipSkin(item.petOutfitId, item.inventapprenticeInventoryTag) :
                                        HandleEquipOrUnequipPet(item.petId, item.inventapprenticeInventoryTag)}>Equipar</button>}

                    </div>
                </div>
            }


        </motion.div >
    )
}

