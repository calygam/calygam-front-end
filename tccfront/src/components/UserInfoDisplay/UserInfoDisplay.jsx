import React, { useEffect, useState } from 'react'
import RankingViewProgress from '../RankingViewProgress/RankingViewProgress'
import { DarkRankIcon, translateRank } from '../../utils/RankIconLibrary/DarkRankIcon/DarkRankIcon'
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile'

//images

import moneyIcon from '../../assets/img/Moedas.svg'
import { UseReadAllTrailsHook } from '../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook'
import UseTrailDataHook from '../../hooks/UseTrailDataHook/UseTrailDataHook'
import { UseProgressHook } from '../../hooks/UseProgressHook/UseProgressHook'
import { UseDataActivitiesPerTrailIdHook } from '../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook'

export default function UserInfoDisplay({ displayStyle,setIsEnabled,isEnabled }) {
  const { dataProfile } = UseDataProfile()
  const {targetTrailId } = UseReadAllTrailsHook();
  const {trailId} = UseDataActivitiesPerTrailIdHook()


  const {setTrailId,progress} = UseProgressHook()
  useEffect(()=>{ 
    
   
      setTrailId(trailId)
    
  },[trailId])
// const UseProgressHook

  return (
    <div className={`${displayStyle} font-poppins p-4 `}>
                       <div className='md:hidden w-full flex ' onClick={()=>setIsEnabled(!isEnabled)}>
              <button className='flex outline-none items-center gap-x-1 justify-center'>
                <span className='flex w-[2px] h-[2px] rounded-full bg-white'></span>
                <span className='flex w-[2px] h-[2px] rounded-full bg-white'></span>
                <span className='flex w-[2px] h-[2px] rounded-full bg-white'></span>
                </button>
                </div>
      <div className='flex  w-full '>
        {dataProfile.userRank ?
          <RankingViewProgress IconBadgeRank={dataProfile.userRank} LargeRange={false} NameRank={'Bronze'} />
          :
          <p className='text-center text-white font-poppins text-xl'>Carregando...</p>}
      </div>
      <div className='flex w-full justify-center items-center gap-x-8  text-white'>
        <img src={moneyIcon} alt="moedas do usuário" className='w-[20px]' />
        <div>
          <p>{dataProfile.userMoney}</p>
        </div>

      </div>
     <div className='flex w-full justify-center items-center lg:col-span-1 md:justify-center md:items-center flex-col md:col-span-2'>
  <p className='text-white text-lg text-center'>Tarefas Feitas: {progress?.activitiesCompleted}</p>
  <div className='flex justify-center'>
    <button type='button' className='rounded-lg px-4 outline-none flex items-center justify-center bg-white'>
      <p className='text-calygam-purple-medium-bold text-lg'>Histórico</p>
    </button>
  </div>
</div>

    </div>
  )
}
