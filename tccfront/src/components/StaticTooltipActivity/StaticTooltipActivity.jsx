import React, { useEffect, useState } from 'react'
import { UseReadAllTrailsHook } from '../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook'
import calyCoin from '../../assets/img/rewards/caly-coin.svg'
import calyFood from '../../assets/img/rewards/frango-food.svg'
import calyXp from '../../assets/img/rewards/xp-icon.svg'

import useDailyFlagsServices from '../../services/useDailyFlagsServices'
import { formatterOfTime } from '../../utils/formatterOfTime'
import { UseDataActivitiesPerTrailIdHook } from '../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook'
export default function StaticTooltipActivity({ comumInfo, tooltipInfo }) {
  const { targetTrail, searchtrailsById, targetTrailId } = UseReadAllTrailsHook()

    const { activities, trailId } = UseDataActivitiesPerTrailIdHook()
  const [indexAtv,setIndexAtv] = useState(activities.findIndex((atv)=>atv.activityId == comumInfo.activityId))

  const difficulties = ["FÁCIL", "MÉDIO", "DIFÍCIL", "CHEFE"]
  const hiddenTextLimitter = (str, max = 0) => {
    return str?.length > max ? str.slice(0, max) + '…' : str;


  }
  useEffect(() => {
    console.log(tooltipInfo?.trailImage)
  }, [tooltipInfo?.trailImage])

  useEffect(()=>{
    const atvIndex = activities.findIndex((atv)=>atv.activityId == comumInfo.activityId)
    setIndexAtv(atvIndex+1)
    
   
  },[comumInfo,tooltipInfo])


  return (
    <div className={` bg-calygam-purple-tone-2/40 lg:min-w-[250px] lg:max-w-[250px] md:min-w-[200px] md:max-w-[200px] flex-col p-1  font-poppins items-center min-h-[100px] flex  rounded-lg`}>
      {comumInfo && !tooltipInfo &&<div>
    
        <div className='flex flex-col space-y-2 p-2 items-center'>
          
          <div className=' text-sm flex uppercase font-bold flex-col items-center'>
            <h3>Detalhe da atividade</h3>

          </div>

          <p className='text-sm font-semibold text-wrap'>{comumInfo.activityName}</p>

          <span className={`rounded-full px-4 py-1 font-semibold text-sm border-2 shadow-sm transition-all duration-300
  ${difficulties[comumInfo.activityDifficulty] === "FÁCIL" ? "bg-yellow-100 text-yellow-800 border-yellow-400" :
              difficulties[comumInfo.activityDifficulty] === "MÉDIO" ? "bg-orange-100 text-orange-700 border-orange-400" :
                difficulties[comumInfo.activityDifficulty] === "DIFÍCIL" ? "bg-red-100 text-red-700 border-red-500" :
                  difficulties[comumInfo.activityDifficulty] === "CHEFE" ? "bg-black text-white/75 hover:text-white transition-all font-semibold border-black" :
                    "bg-gray-100 text-gray-600 border-gray-300"}
`}>
            {difficulties[comumInfo.activityDifficulty]}
          </span>
        </div></div>}
      {comumInfo && tooltipInfo && <div className='flex flex-col '>
        <div className='flex justify-end'>

        </div>

        {tooltipInfo&&
        <div className='flex flex-col p-2 items-center w-full'>
          {tooltipInfo.rewardPackageMoney &&
            <>
              <h2 className='uppercase font-semibold text-nowrap'>Recompensas - Atividade {indexAtv}</h2>
              <div className='flex flex-col text-yellow-500 '>
                <div className='flex items-center gap-x-1'>
                  <img src={calyCoin} alt="moedas calygam" className='w-[25px]' />
                  <p className='text-base font-semibold'>{tooltipInfo.rewardPackageMoney}</p>
                </div>
                <div className='flex items-center gap-x-1'>
                  <img src={calyXp} alt="xp calygam" className='w-[25px]' />
                  <p className='text-base font-semibold'>{tooltipInfo.rewardPackageXp}</p>
                </div>
                <div className='flex items-center gap-x-1'>
                  <img src={calyFood} alt="comida calygam" className='w-[25px]' />
                  <p className='text-base font-semibold'>{tooltipInfo.rewardPackageFood}</p>
                </div>
              </div>
            </>

          }

          {!tooltipInfo.rewardPackageMoney &&<p>Completou!</p>}

        </div>

        }
      </div>}
    </div>
  )
}

