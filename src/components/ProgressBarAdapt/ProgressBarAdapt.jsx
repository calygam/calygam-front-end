import React, { useEffect, useState } from 'react'

export default function ProgressBarAdapt({ xpInMoment, xpToGet, rangeBar, rangerBarRank, CountStartRow,trailVacancy }) {
  const [barPercent, setBarPercent] = useState(0)
  useEffect(() => {
    const getXpForFullBar = () => {
      const calculumnForFullBar = Math.round((xpToGet==0?1:xpInMoment / xpToGet) * 100)
      setBarPercent(calculumnForFullBar)
    }
    getXpForFullBar();
  }, [barPercent,xpInMoment,xpToGet])

  return (
    <div className={`flex ${CountStartRow ? "flex-col-reverse " : "flex-col"} w-full  ${rangeBar ? "px-2" : "px-0"} font-jersey   items-center `}>
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
          :
          <p className={`text-white text-xs `}>{xpInMoment}/{xpToGet==0?"MAX":xpToGet}</p>:null}
          

        
       
      <div className={`flex w-full ${rangeBar ? " w-full h-[4px]" : "w-full h-[5px]"} ${trailVacancy?"bg-gray-300":"bg-white"} rounded-full`}>
        <span className={` transition-all delay-150 duration-[3000ms] flex h-full rounded-full w-0 bg-gradient-to-tr ${trailVacancy?"from-purple-800 via-purple-600 to-purple-400":"from-green-800 via-green-600 to-green-400"}`} style={{ width: `${barPercent + "%"}` }}></span>
      </div>
      {rangerBarRank && !trailVacancy ?
        <div className='flex w-full justify-end '>
          <p className='text-white text-xs'>{xpInMoment}/{xpToGet==0?"MAX":xpToGet}</p>
        </div>
        : rangerBarRank && trailVacancy?
        <div className='flex w-full  '>
        <p className='text-black/50 text-xs'>Taxa de ocupação {barPercent}%</p>
      </div>:null}
    </div>
  )
}
