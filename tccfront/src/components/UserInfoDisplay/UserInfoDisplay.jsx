import React, { useEffect, useState } from 'react'
import RankingViewProgress from '../RankingViewProgress/RankingViewProgress'
import { DarkRankIcon, translateRank } from '../../utils/RankIconLibrary/DarkRankIcon/DarkRankIcon'
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile'

import calyCoin from '../../assets/img/homePage/coinSimbol.svg'
import fireXpTrail from '../../assets/img/fire-xp-trail.svg'

//images

import moneyIcon from '../../assets/img/Moedas.svg'

import { UseReadAllTrailsHook } from '../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook'
import UseTrailDataHook from '../../hooks/UseTrailDataHook/UseTrailDataHook'
import { UseProgressHook } from '../../hooks/UseProgressHook/UseProgressHook'
import { UseDataActivitiesPerTrailIdHook } from '../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook'
import useAuth from '../../hooks/UseJwtChecked/UseJwtChecked'
import { useNavigate } from 'react-router-dom'
import tasksMakeTotal from '../../assets/img/tasks-make-total.svg'
import ProgressBarAdapt from '../ProgressBarAdapt/ProgressBarAdapt'

export default function UserInfoDisplay({ displayStyle, setIsEnabled, isEnabled, activities, IconBadgeRank }) {
  const { dataProfile } = UseDataProfile()
  const { targetTrailId } = UseReadAllTrailsHook();
  const { trailId } = UseDataActivitiesPerTrailIdHook()
  const { setToken } = useAuth();
  const navigate = useNavigate()
  const hasValidSuffix = ["-I", "-II", "-III"].some(suffix =>
    IconBadgeRank?.toUpperCase().includes(suffix)
  )


  const { setTrailId, progress } = UseProgressHook()
  const icon = hasValidSuffix ? translateRank(IconBadgeRank) : IconBadgeRank


 const baseRank = IconBadgeRank?.toUpperCase().split("-")[0]
     const getRankColor = (rank) => {
        if (rank?.includes("BRONZE")) return "text-[#CD7F32]";
        if (rank?.includes("SILVER")) return "text-gray-600";
        if (rank?.includes("GOLD")) return "text-yellow-400";
        if (rank?.includes("PLATINUM")) return "text-teal-300";
        if (rank?.includes("DIAMOND")) return "text-sky-300";
        if (rank?.includes("ASCENDENT")) return "text-fuchsia-600";
        return "text-white";
    };
  // const UseProgressHook

  return (
    <div className={`rounded-md bg-gradient-to-tr from-calygam-purple-tone-2 to-calygam-blue-semi-bold w-full min-h-[250px] font-poppins p-8 `}>
      <div className='md:hidden w-full flex ' onClick={() => setIsEnabled(!isEnabled)}>
        <button className='flex outline-none items-center gap-x-1 justify-center'>
          <span className='flex w-[2px] h-[2px] rounded-full bg-white'></span>
          <span className='flex w-[2px] h-[2px] rounded-full bg-white'></span>
          <span className='flex w-[2px] h-[2px] rounded-full bg-white'></span>
        </button>
      </div>

      <div className='flex w-full justify-between flex-wrap'>

        <p className='text-white font-medium'>Painel de Recompensa</p>
        <div className='flex  justify-center items-center gap-2  text-white'>
          <img src={calyCoin} alt="moedas do usuário" className='w-[20px]' />
          <div>
            <p>{dataProfile.userMoney}</p>
          </div>

        </div>


      </div>
      <div className='grid lg:grid-cols-3 my-4 md:grid-cols-2 grid-cols-1 place-items-center   justify-center items-center gap-2  text-white'>
        <div className='bg-calygam-purple-tone-2  flex flex-col items-center justify-center font-medium h-[35px] w-[125px] p-10 rounded-xl border-2 border-white '>
          <img src={tasksMakeTotal} alt="" className='w-[25px] h-[25px]' />

          <p>{progress?.activitiesCompleted}</p>
          <p>Lições</p>
        </div>
        <div className='bg-calygam-purple-tone-2 gap-1 flex  items-center justify-center font-medium h-[55px] w-[145px] p-10  rounded-xl border-2 border-white '>
          <img src={icon} alt="" className='w-[20px] h-[20px]' />

          <p className='font-semibold text-nowrap'>Rank <span className={`font-semibold ${getRankColor(IconBadgeRank)}`}>{baseRank}</span></p>
  
        </div>
        <div className='bg-calygam-purple-tone-2 text-white  flex gap-2 items-center   justify-center font-medium h-[35px] w-[125px] p-10 rounded-xl border-2 border-white '>
          <img src={fireXpTrail} alt="" className='w-[20px] h-[20px]' />
                                      <div className='flex w-full gap-x-2'>
                                      <ProgressBarAdapt customizeSemanticColor={"text-white w-full"} xpInMoment={dataProfile.userXp} xpToGet={dataProfile.userRankPoints} rangeBar={false} rangerBarRank={false} />
                                   
                                      </div>
       
        </div>

      </div>

      {/* <div className='flex  w-full '>
        {dataProfile.userRank ?
          <RankingViewProgress IconBadgeRank={dataProfile.userRank} LargeRange={false} NameRank={'Bronze'}  />
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
          <span className='py-2 px-4 bg-white rounded-xl text-purple-600 h-[35px] flex justify-center items-center'>Tarefas Feitas: {progress?.activitiesCompleted +"/"+activities.length}</span>
  </div>
</div> */}

    </div>
  )
}
