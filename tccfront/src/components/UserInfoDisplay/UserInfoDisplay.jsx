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
import useAuth from '../../hooks/UseJwtChecked/UseJwtChecked'
import { useNavigate } from 'react-router-dom'

export default function UserInfoDisplay({ displayStyle,setIsEnabled,isEnabled,activities }) {
  const { dataProfile } = UseDataProfile()
  const {targetTrailId } = UseReadAllTrailsHook();
  const {trailId} = UseDataActivitiesPerTrailIdHook()
  const { setToken } = useAuth();
  const navigate = useNavigate()


  const {setTrailId,progress} = UseProgressHook()
 


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

  <div className='flex justify-center'>
          <span className='py-2 px-4 bg-white rounded-xl text-purple-600 flex justify-center items-center'>Tarefas Feitas: {progress?.activitiesCompleted +"/"+activities.length}</span>
  </div>
</div>

    </div>
  )
}
