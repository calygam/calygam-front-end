import { animate, useMotionValue, useTransform } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import calyXp from '../../assets/img/rewards/xp-icon.svg'

export default function ProgressBarAdapt({ xpInMoment, xpToGet, rangeBar, rangerBarRank, CountStartRow,trailVacancy,barPercentual,customizeSemanticColor,petMin }) {
const [barPercent, setBarPercent] = useState(0)
  const [roundedValue,setRoundedValue] = useState(0)
  useEffect(() => {
    const getXpForFullBar = () => {
      const calculumnForFullBar = Math.round((xpToGet == 0 ? 1 : xpInMoment / xpToGet) * 100)
      setBarPercent(calculumnForFullBar)
    }
    getXpForFullBar();
  }, [barPercent, xpInMoment, xpToGet])

     const formattedCoins  = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 0,
}).format(roundedValue);

  const count = useMotionValue(0)
  const rounded = useTransform(() => Math.round(count.get()))

  useEffect(() => {
    const controls = animate(count, barPercentual?barPercent:xpInMoment, {
      duration: 2,
      onUpdate: (latest) => {
        setRoundedValue(Math.round(latest))
      }
    })
    return () => controls.stop()
  }, [xpInMoment,barPercent])

  return (
    <div className={`flex ${CountStartRow ? "flex-col-reverse " : "flex-col"} w-full  ${rangeBar ? "px-2" : "px-0"} font-jersey    `}>
      {!rangerBarRank ? CountStartRow ?
        <div className='flex w-full justify-start items-center space-x-2  '>
          <div className=''>
            <p className={`text-white text-xs `}>{xpInMoment}</p>
          </div>
          <div className=''>
            <span className={`flex w-2 h-2 bg-gradient-to-l rounded-full from-orange-500 to-orange-600`}></span>
          </div>
          <div className=''>
            <p className={`text-white text-xs `}>{xpToGet}</p>
          </div>
          </div>
          :!barPercentual?
          <div className={` flex gap-x-1  items-center`}>
          <p className={`text-black ${customizeSemanticColor} text-xs `}>{formattedCoins}/{xpToGet==0?"MAX":xpToGet} </p>
          {!customizeSemanticColor&&
          <img src={calyXp} alt="seu xp" className='w-[35px] h-[35px]' />
}
          </div>:<div className='flex gap-x-1 items-center'>
          <p className={`text-black ${customizeSemanticColor} text-xs `}>{formattedCoins}% </p>
       
          </div>:null}
          

        
       
      <div className={`flex w-full ${rangeBar ? " w-full h-[4px]" : "w-full h-[5px]"} ${trailVacancy?"bg-gray-300":"bg-white"} rounded-full`}>
        <span className={` transition-all delay-150 duration-[3000ms] flex justify-center items-center h-full rounded-full w-0 bg-gradient-to-tr ${trailVacancy?"from-purple-800 via-purple-600 to-purple-400":"from-purple-800 via-purple-600 to-purple-400"}`} style={{ width: `${barPercent + "%"}` }}>

        </span>
      </div>
      {rangerBarRank && !trailVacancy ?
        <div className='flex w-full justify-end '>
          <p className={`text-black ${customizeSemanticColor} text-xs`}>{xpInMoment}/{xpToGet==0?"MAX":xpToGet}</p>
        </div>
        : rangerBarRank && trailVacancy?
        <div className='flex w-full  '>
        <p className='text-black/50 text-xs'>Taxa de ocupação {barPercent}%</p>
      </div>:null}
    </div>
  )
}
