import React from 'react'

export default function ResponseCardBalloon({PossibleResponse}) {
  return (
    <div className='border lg:w-[400px] md text-center shadow-lg shadow-black/25  border-black rounded-xl p-4'>
      <p className='flex pl-3 text-base'>{PossibleResponse}</p>
    </div>
  )
}
