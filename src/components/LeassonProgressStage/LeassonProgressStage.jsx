import React, { useEffect, useState } from 'react'

export default function LeassonProgressStage({LeassonNow, LeassonTotal}) {
 const [barPercent,setBarPercent] = useState(0)
    useEffect(()=>{
        const getXpForFullBar = ()=>{
            const calculumnForFullBar = (LeassonNow/LeassonTotal) *100
            setBarPercent(calculumnForFullBar)
        }
        getXpForFullBar();
    },[barPercent])

  return (
    <div className={`flex flex-col w-full font-jersey   items-center `}>
        <div className='flex w-full h-[10px] bg-white rounded-full'>
      <span className={` transition-all delay-150 duration-500 flex h-full rounded-full w-0 bg-green-500`} style={{width:`${barPercent+"%"}`}}></span>
      </div>
      <div className='flex w-full justify-end '>
        <p className='text-white text-base'>{LeassonNow}/{LeassonTotal}</p>
      </div> 
    </div>
  )
}
