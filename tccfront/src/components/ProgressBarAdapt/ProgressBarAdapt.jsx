import React, { useEffect, useState } from 'react'

export default function ProgressBarAdapt({xpInMoment,xpToGet,rangeBar,rangerBarRank}) {
    const [barPercent,setBarPercent] = useState(0)
    useEffect(()=>{
        const getXpForFullBar = ()=>{
            const calculumnForFullBar = (xpInMoment/xpToGet) *100
            setBarPercent(calculumnForFullBar)
        }
        getXpForFullBar();
    },[barPercent])

  return (
    <div className={`flex flex-col w-full ${rangeBar?"px-2":"px-0"} font-jersey   items-center `}>
            {!rangerBarRank?
      <div className='flex w-full justify-start  '>
        <p className='text-white text-xs'>{xpInMoment}/{xpToGet}</p>
      </div> 
      :null}
        <div className={`flex w-full ${rangeBar?" w-full h-[4px]":"w-full h-[10px]"} bg-white rounded-full`}>
      <span className={` transition-all delay-150 duration-500 flex h-full rounded-full w-0 bg-green-500`} style={{width:`${barPercent+"%"}`}}></span>
      </div>
      {rangerBarRank?
      <div className='flex w-full justify-end '>
        <p className='text-white text-base'>{xpInMoment}/{xpToGet}</p>
      </div> 
      :null}
    </div>
  )
}
