import { motion, useMotionValue } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { UseDataProfile } from '../../../hooks/UseDataProfile/UseDataProfile'
import { formattedCoins, managedControlDynamic, toPercentMoney } from '../../../utils/FormatCoins/SoftFormatCoins'
//hooks
import { useCalygamEmporium } from '../../../hooks/useCalygamEmporium/useCalygamEmporium'


//comps
import EmporiumRankIsRequired from '../../../components/EmporiumProductsComponents/EmporiumRankIsRequired/EmporiumRankIsRequired.jsx'
import PurchaseOneItemModal from '../../modals/PurchaseOneItemModal/PurchaseOneItemModal.jsx'
import { UseModalHook } from '../../../hooks/UseModalHook/UseModalHook.js'

//images
import coinSymbol from '../../../assets/img/homePage/coinSimbol.svg'
import xpIcon from '../../../assets/img/rewards/xp-icon.svg'
import frangoIcon from '../../../assets/img/rewards/frango-food.svg'


export default function CardTreatStock({ pet }) {
    const { dataProfile } = UseDataProfile()

    const {
        filters,
        setFilter,
        setPurchase, purchase } = useCalygamEmporium()
    const { openModal, setContentModal } = UseModalHook()
    const [roundedValue, setRoundedValue] = useState(0)
    const count = useMotionValue(0)
    const handleOpenModalPurchasing = () => {
        openModal("purchasingModal"),
            setPurchase('itemCapture', pet)
    }



    useEffect(() => {
        managedControlDynamic(count, pet.emporiumItemGoldCost, setRoundedValue)
    }, [pet.emporiumItemGoldCost, filters.orderByMinMax])

    return (
        <motion.div
            key={filters.orderByMinMax}
            initial={{ y: -80, x: -80 }}
            animate={{ y: 0, x: 0 }}
            transition={{ type: 'spring', stiffness: 450 + pet.petId, mass: pet.petId }}
            className='w-[160px] relative bg-gradient-to-tr my-2 font-poppins p-1 py-2 gap-y-2 flex flex-col border group border-black  rounded-md from-orange-500 via-purple-600 to-yellow-500'
        >
            {dataProfile.userXp < pet.emporiumXpRequired &&
                <EmporiumRankIsRequired pet={pet} />
            }
            <div className='overflow-hidden rounded-lg   '>
                <img src={pet.petOutfitUrl} alt="" className='w-full max-h-[125px] bg-cover transition-all bg-white group-hover:scale-125 min-h-[125px]  ' />
            </div>
            <div className='flex flex-col bg-white/85 font-semibold rounded-lg pl-2 w-full gap-y-1'>
            {pet.petBoostMoney != null ?
                <p>{pet.petName}</p>:<p>{pet.petOutfitName}</p>}
                <div className='flex items-center gap-x-1'>
                    <img src={coinSymbol} alt="" className='w-[25px]' />
                    <p>{formattedCoins(roundedValue)}</p>
                </div>
                {
                    purchase.itemCapture != null &&
                    <div className='w-full flex flex-col '>

                        <p>Boosts</p>
                        {pet.petBoostMoney != null ?
                            <div className='pl-2'>
                                <div className='flex items-center gap-x-1'>
                                    <img src={coinSymbol} alt="" className='w-[20px]' />
                                    <p>+{toPercentMoney(pet.petBoostMoney)}</p>
                                </div>
                                <div className='flex items-center gap-x-1'>
                                    <img src={xpIcon} alt="" className='w-[20px]' />
                                    <p>+{toPercentMoney(pet.petBoostXp)}</p>
                                </div>
                                <div className='flex items-center gap-x-1'>
                                    <img src={frangoIcon} alt="" className='w-[20px]' />
                                    <p>+{toPercentMoney(pet.petBoostFood)}</p>
                                </div>

                            </div> : <div className='pl-2'>
                                <div className='flex items-center gap-x-1'>
                                    <img src={coinSymbol} alt="" className='w-[20px]' />
                                    <p>+{pet.petOutfitPlusMoney}</p>
                                </div>
                                <div className='flex items-center gap-x-1'>
                                    <img src={xpIcon} alt="" className='w-[20px]' />
                                    <p>+{pet.petOutfitPlusXp}</p>
                                </div>
                                <div className='flex items-center gap-x-1'>
                                    <img src={frangoIcon} alt="" className='w-[20px]' />
                                    <p>+{pet.petOutfitPlusFood}</p>
                                </div>

                            </div>}


                    </div>

                }

            </div>
            {purchase.itemCapture == null && <button className='py-2 px-4 bg-gradient-to-tr outline-none from-blue-200 via-blue-400 to-blue-500 text-black font-semibold flex justify-center border-b-4 h-[35px] hover:border-none hover:translate-y-1 transition-all ease-in-out border-blue-700/25 rounded-lg items-center' onClick={handleOpenModalPurchasing}>Detalhes</button>

            }

        </motion.div>
    )
}
