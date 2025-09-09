import React, { useEffect } from 'react'
import { UseReadAllTrailsHook } from '../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook'
import calyCoin from '../../assets/img/rewards/caly-coin.svg'
import calyFood from '../../assets/img/rewards/frango-food.svg'
import calyXp from '../../assets/img/rewards/xp-icon.svg'
export default function StaticTooltipActivity({ comumInfo, tooltipInfo }) {
  const { targetTrail, searchtrailsById, targetTrailId } = UseReadAllTrailsHook()
  const difficulties = ["FÁCIL", "MÉDIO", "DIFÍCIL", "CHEFE"]
  const hiddenTextLimitter = (str, max = 0) => {
    return str?.length > max ? str.slice(0, max) + '…' : str;


  }
  useEffect(() => {
    console.log(tooltipInfo?.trailImage)
  }, [tooltipInfo?.trailImage])
  return (
    <div className={` border-2 border-white  flex-col w-[160px] p-1   font-poppins items-center min-h-[100px] flex  ${comumInfo ? "rounded-bl-[55px] rounded-tl-[20px] rounded-br-[20px] rounded-tr-[55px]" : "rounded-bl-[20px] rounded-tl-[55px] rounded-br-[55px] rounded-tr-[20px]"}`}>
      {comumInfo && !tooltipInfo &&
        <div className='flex flex-col space-y-2 items-center'>
          <div className='w-[85%] mx-auto flex flex-col items-center'>
            <h3>Detalhes</h3>

          </div>

          <p className='text-sm font-semibold  text-nowrap'>{hiddenTextLimitter(comumInfo.activityName, 16)}</p>

          <span className={`rounded-full px-4 py-1 font-semibold text-sm border-2 shadow-sm transition-all duration-300
  ${difficulties[comumInfo.activityDifficulty] === "FÁCIL" ? "bg-yellow-100 text-yellow-800 border-yellow-400" :
              difficulties[comumInfo.activityDifficulty] === "MÉDIO" ? "bg-orange-100 text-orange-700 border-orange-400" :
                difficulties[comumInfo.activityDifficulty] === "DIFÍCIL" ? "bg-red-100 text-red-700 border-red-500" :
                  difficulties[comumInfo.activityDifficulty] === "CHEFE" ? "bg-black text-white/75 hover:text-white transition-all font-semibold border-black" :
                    "bg-gray-100 text-gray-600 border-gray-300"}
`}>
            {difficulties[comumInfo.activityDifficulty]}
          </span>
        </div>}
      {!comumInfo && tooltipInfo && <div className='flex flex-col '>
        <div className='flex justify-end'>

        </div>

        {tooltipInfo&&
        <div className='flex flex-col w-full'>
          {tooltipInfo.rewardPackageMoney &&
            <>
              <h2>Recompensas</h2>
              <div className='flex flex-col'>
                <div className='flex items-center gap-x-1'>
                  <img src={calyCoin} alt="moedas calygam" className='w-[25px]' />
                  <p className='text-base font-light'>{tooltipInfo.rewardPackageMoney}</p>
                </div>
                <div className='flex items-center gap-x-1'>
                  <img src={calyXp} alt="xp calygam" className='w-[25px]' />
                  <p className='text-base font-light'>{tooltipInfo.rewardPackageXp}</p>
                </div>
                <div className='flex items-center gap-x-1'>
                  <img src={calyFood} alt="comida calygam" className='w-[25px]' />
                  <p className='text-base font-light'>{tooltipInfo.rewardPackageFood}</p>
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

