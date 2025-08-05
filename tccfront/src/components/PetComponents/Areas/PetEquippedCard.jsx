import React, { useEffect, useState } from 'react'
//images
import loadingImages from '../../../assets/img/loading-images.svg'
import coinSymbol from '../../../assets/img/homePage/coinSimbol.svg'
import xpIcon from '../../../assets/img/rewards/xp-icon.svg'
import frangoIcon from '../../../assets/img/rewards/frango-food.svg'
import { motion, useMotionValue } from 'framer-motion'
import { formattedCoins, managedControlDynamic, toPercentMoney } from '../../../utils/FormatCoins/SoftFormatCoins'
import { usePetContext } from '../../../hooks/usePetContext'
export default function PetEquippedCard() {
    const { details, setDetails } = usePetContext()
    const [roundedValue, setRoundedValue] = useState(0)
     const [isImageLoading, setIsImageLoading] = useState(true);
    const count = useMotionValue(0)

    // useEffect(() => {
    //     managedControlDynamic(count, details.dataPetEquipped.petBoostMoney, setRoundedValue)
    // }, [details.dataPetEquipped.petBoostMoney])

    return (
        <motion.div

            initial={{ y: -80, x: -80 }}
            animate={{ y: 0, x: 0 }}
            transition={{ type: 'spring', stiffness: 350, mass: 1 }}
            className='w-[250px] min-h-[250px] relative overflow-hidden bg-gradient-to-tr my-2 font-poppins pb-2 gap-y-2 flex flex-col justify-between border-[6px] border-gray-700 group   rounded-md from-orange-500 via-purple-600 to-yellow-500'
        >

            <div className='overflow-hidden relative flex  flex-col   '>
 {isImageLoading  &&
                                    <span className='flex  inset-0  relative    justify-center items-center w-full max-h-[150px] bg-black/45   p-1    '>
                                        <img src={loadingImages} alt="" className='  w-[100px] animate-spin' />
                                    </span>
                                }
                <img src={details.dataPetEquipped.petOutfitUrl} alt="" className='w-full max-h-[150px] bg-cover transition-all from-black via-gray-700 to-gray-700 group-hover:scale-125   ' onLoad={()=>setIsImageLoading(false)} />
            </div>
            <div className='p-1 flex flex-col gap-y-2'>
                <div className='flex flex-col bg-white/85 font-semibold rounded-lg pl-2  w-full gap-y-1'>
                    {/* {pet.petBoostMoney != null ?
                <p>{pet.petName}</p>:<p>{pet.petOutfitName}</p>} */}
                    <div className='flex items-center gap-x-1'>
                        <img src={coinSymbol} alt="" className='w-[20px]' />
                        <p>+{toPercentMoney(details.dataPetEquipped.petBoostMoney)}</p>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <img src={xpIcon} alt="" className='w-[20px]' />
                        <p>+{toPercentMoney(details.dataPetEquipped.petBoostXp)}</p>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <img src={frangoIcon} alt="" className='w-[20px]' />
                        <p>+{toPercentMoney(details.dataPetEquipped.petBoostFood)}</p>

                    </div>

                    <div className='w-full flex flex-col '>




                    </div>



                </div>
                {details.dataPetEquipped.petOutfitPlusMoney>0 || details.dataPetEquipped.petOutfitPlusXp>0 || details.dataPetEquipped.petOutfitPlusFood>0?
                <>
                    <p className='bg-purple-800 rounded-md p-1 text-white'>Skin</p>
                <div className='flex flex-col bg-purple-600/45 border-4 border-yellow-500/55 text-white font-semibold rounded-lg pl-2  w-full gap-y-1'>
                    {/* {pet.petBoostMoney != null ?
                <p>{pet.petName}</p>:<p>{pet.petOutfitName}</p>} */}
             
                    <div className='flex items-center gap-x-1'>
                        <img src={coinSymbol} alt="" className='w-[20px]' />
                        <p>+{toPercentMoney(details.dataPetEquipped.petBoostMoney)}</p>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <img src={xpIcon} alt="" className='w-[20px]' />
                        <p>+{toPercentMoney(details.dataPetEquipped.petBoostXp)}</p>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <img src={frangoIcon} alt="" className='w-[20px]' />
                        <p>+{toPercentMoney(details.dataPetEquipped.petBoostFood)}</p>

                    </div>

                    <div className='w-full flex flex-col '>




                    </div>



                </div>
                </>
:null}
            </div>


        </motion.div >
    )
}

