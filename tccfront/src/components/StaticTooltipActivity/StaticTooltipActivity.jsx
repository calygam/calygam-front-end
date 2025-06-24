import React from 'react'

export default function StaticTooltipActivity({comumInfo,tooltipInfo}) {

    const difficulties =["Fácil","Médio","Difícil","CHEFE"]
  return (
    <div className={` border-2 border-white w-full flex-col font-poppins items-center min-h-[100px] flex p-4 ${comumInfo?"rounded-bl-[55px] rounded-tl-[20px] rounded-br-[20px] rounded-tr-[55px]":"rounded-bl-[20px] rounded-tl-[55px] rounded-br-[55px] rounded-tr-[20px]"}`}>
        {comumInfo&&
        <div className='flex flex-col items-center'>
        <h3>Detalhes</h3>
        <div className='w-full bg-white/65 rounded-full h-[1px]'></div>
        <p className='text-base font-light'>{comumInfo.activityName}</p>
        <p className='text-xs font-light truncate text-center max-w-[150px] text-wrap'>{comumInfo.activityDescription}</p>
        <p className={`text-base font-bold my-1
            ${difficulties[comumInfo.activityDifficulty] === "Fácil"?"bg-yellow-500/25 rounded-3xl p-2 text-purple-600"
            :difficulties[comumInfo.activityDifficulty] === "Difícil"?"bg-purple-500/25 rounded-bl-xl rounded-tl-lg rounded-3xl p-2 text-red-600":"bg-transparent"}`}>{difficulties[comumInfo.activityDifficulty]}</p>
        </div>}
    </div>
  )
}

