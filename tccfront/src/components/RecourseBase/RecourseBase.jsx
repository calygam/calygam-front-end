import React, { useEffect, useState } from 'react'
import { formattedCoins, managedControlDynamic } from '../../utils/FormatCoins/SoftFormatCoins'
import { useMotionValue } from 'framer-motion'

export default function RecourseBase({haveIcon,infoQtd,infoText,hourNeed}) {
     const [roundedValue, setRoundedValue] = useState(0)
    const count = useMotionValue(0)

    
        useEffect(() => {
            managedControlDynamic(count, infoQtd, setRoundedValue)
        }, [infoQtd])
  return (
    <div className='rounded-full p-1 px-4 flex items-center  justify-center gap-1 w-full bg-calygam-purple-tone-2/40 '>
      {haveIcon&& <img src={haveIcon} className='w-[25px]'></img>}
      <p className='text-sm'>{hourNeed?infoQtd!=0?infoQtd:"Pause":formattedCoins(roundedValue)} {infoText}</p>
    </div>
  )
}
