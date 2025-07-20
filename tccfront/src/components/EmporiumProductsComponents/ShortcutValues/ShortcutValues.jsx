import React, { useEffect, useState } from 'react'


//hooks
import { UseDataProfile } from '../../../hooks/UseDataProfile/UseDataProfile.js'
import { useMotionValue } from 'framer-motion'
//utils
import { formattedCoins, managedControl } from '../../../utils/FormatCoins/SoftFormatCoins.js'
//images
import coinSymbol from '../../../assets/img/homePage/coinSimbol.svg'
import favoriteItemsIcon from '../../../assets/img/emporiumPage/favorite-items.svg'

//components
import ButtonOrderBy from '../../../components/EmporiumProductsComponents/ButtonOrderBy.jsx'

export default function ShortcutValues() {
  const { dataProfile } = UseDataProfile()
  const [roundedValue, setRoundedValue] = useState(0)
  const count = useMotionValue(0)

  useEffect(() => {
    managedControl(count, dataProfile, setRoundedValue)
  }, [dataProfile.userMoney])
//.
  return (
    <div className='w-full flex  flex-wrap items-center justify-between gap-y-2 '>
      <div className='hidden md:flex flex-wrap gap-2 transition-all '>
        <ButtonOrderBy orderByText={"Popularidade"} orderByRole="POPULAR" />
        <ButtonOrderBy orderByText={"Preço: baixo para alto"} orderByRole="ASC"/>
        <ButtonOrderBy orderByText={"Preço: Alto para baixo"} orderByRole="DESC" />
      </div>
      <div className=' flex items-center font-bold flex-none gap-2'>
        <div className='flex  items-center gap-x-1'>
          <img src={coinSymbol} alt="" className='w-[20px]' />
          <p>{formattedCoins(roundedValue)}</p>

        </div>
        <p>Coins</p>
      </div>
      <div className='flex'>
        <button className='p-1 flex rounded-md bg-calygam-gray-light/15'>
        <img src={favoriteItemsIcon} alt="" className='w-[15px]' />
        </button>
      </div>

    </div>
  )
}
