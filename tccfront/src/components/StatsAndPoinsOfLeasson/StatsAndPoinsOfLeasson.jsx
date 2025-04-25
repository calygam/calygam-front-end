import React from 'react'


export default function StatsAndPoinsOfLeasson({HavePoints , Points , haveState , State , HaveLine , ColorLine ,}) {
  return (
    <div className='flex flex-col font-poppins my-5 text-base w-fit font-semibold'>
        <div className='flex gap-x-6 '>
            <p>Pontos:</p>
            <p>{Points}</p>
        </div>
        <div className='flex items-center gap-x-6  '>
            <p>Status:</p>
            <p className='text-xs text-yellow-500'>{State}</p>
        </div>
        {HaveLine? <hr className={`flex h-1 ${ColorLine} rounded-full `}></hr>:null}
      
    </div>
  )
}
