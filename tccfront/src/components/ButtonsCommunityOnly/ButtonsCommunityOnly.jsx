import React from 'react'

export default function ButtonsCommunityOnly({viewCommunity,withSuperX}) {
  return (
    <div className='flex my-5  '>
        {viewCommunity?
      <div className='flex  '>
        <button className={`py-2 ${withSuperX?'px-10':'px-4'} border rounded-lg text-xs text-community-bold bg-community-clean/30 border-community-bold`}>
            {viewCommunity}
        </button>
      </div>:null}

      
    </div>
  )
}
