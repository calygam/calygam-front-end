import React, { useEffect, useState } from 'react'
import ProgressBarAdapt from '../ProgressBarAdapt/ProgressBarAdapt'
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile'
import { translateRank } from '../../utils/RankIconLibrary/DarkRankIcon/DarkRankIcon'
import calyCoin from '../../assets/img/homePage/coinSimbol.svg'
import { animate, useMotionValue, useTransform } from 'framer-motion'
export default function RankingViewProgress({ IconBadgeRank, NameRank, LargeRange, img, sunOn,pureMode }) {
    const { dataProfile, loading } = UseDataProfile()
     const [roundedValue,setRoundedValue] = useState(0)
    const hasValidSuffix = ["-I", "-II", "-III"].some(suffix =>
        IconBadgeRank?.toUpperCase().includes(suffix)
    )

    const formattedCoins  = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 0,
}).format(roundedValue);

  const count = useMotionValue(0)




    const icon = hasValidSuffix ? translateRank(IconBadgeRank) : IconBadgeRank

 const getRankColor = (rank) => {
  const pm = typeof pureMode !== "undefined" && pureMode;
  const r = (rank || "").toUpperCase();

  if (r.includes("BRONZE")) return pm ? "text-[#CD7F32]/80 [text-shadow:1px_1px_rgba(255,255,255,0.35)]" : "text-[#CD7F32]";
  if (r.includes("SILVER")) return pm ? "text-gray-300/80 [text-shadow:1px_1px_rgba(255,255,255,0.5)]" : "text-gray-600";
  if (r.includes("GOLD")) return pm ? "text-yellow-300/90 [text-shadow:1px_1px_rgba(255,255,255,0.5)]" : "text-yellow-600 [text-shadow:1px_1px_rgba(0,0,0,1)]";
  if (r.includes("PLATINUM")) return pm ? "text-teal-200/90 [text-shadow:1px_1px_rgba(255,255,255,0.5)]" : "text-teal-300";
  if (r.includes("DIAMOND")) return pm ? "text-sky-200/90 [text-shadow:1px_1px_rgba(255,255,255,0.5)]" : "text-sky-300";
  if (r.includes("ASCENDENT")) return pm ? "text-fuchsia-500 [text-shadow:1px_1px_rgba(255,255,255,0.5)]" : "text-fuchsia-600";

  return pm ? "text-white/90 [text-shadow:1px_1px_rgba(255,255,255,0.5)]" : "text-white";
};

  useEffect(() => {
    const controls = animate(count, dataProfile?.userMoney, {
      duration: 5,
      onUpdate: (latest) => {
        setRoundedValue(Math.round(latest))
      }
    })
    return () => controls.stop()
  }, [dataProfile?.userMoney])

    return (
        NameRank != null ?

            <div className={`flex flex-col  w-full font-poppins   items-center ${sunOn ? "rounded-full bg-transparent" : "rounded-3xl"} py-2 px-4  bg-center ${IconBadgeRank?.includes("I") ? "bg-transparent" : "from-rank-achiviment-bronze-one-first to-rank-achiviment-bronze-one-second/80"} `}>

                {LargeRange ?
                    <div className='flex items-center lg:w-[800px]   md:w-[400px] w-[200px] px-4 flex-wrap-reverse justify-center md:justify-between'>
                        <div className='w-[250px] text-white   text-xs pl-5'>
                            <p> Rank {dataProfile.userRank}</p>
                            <ProgressBarAdapt xpInMoment={dataProfile.userXp} xpToGet={dataProfile.userRankPoints} rangeBar={false} rangerBarRank={false} CountStartRow={true} />
                        </div>
                        <div className='w-fit  '>
                            <img src={IconBadgeRank} alt="" className='w-20 h-20' />
                        </div>

                    </div> :
                    <>
                        <div className={`flex  ${pureMode?"flex gap-x-4 justify-between ":"flex-row-reverse justify-between gap-x-5 w-full"} items-center     `}>

                            <span className={`flex transform cursor-pointer    [transform-style:preserve-3d] hover:animate-rotateYBadge ${pureMode?"md:hidden flex lg:flex":''}`}>

                                <img src={icon} alt="" className={`${IconBadgeRank?.includes("-I") ? "w-[25px]" : "w-[40px]"} `} />
                            </span>
                            <div className={`flex flex-col text-sm  ${pureMode?"text-white":"text-black"}`}>

                                <p className={`font-semibold ${pureMode?"":""}`}>
                                    Rank <span className={getRankColor(dataProfile.userRank)+` ${pureMode?"    rounded-r-full p-1":""}`}>
                                        {dataProfile.userRank}
                                    </span>
                                </p>
                             
                            </div>
                        </div>
                        {sunOn&&   
                        <div className='flex flex-col w-full '>
                            <ProgressBarAdapt xpInMoment={dataProfile.userXp} xpToGet={dataProfile.userRankPoints} rangeBar={false} rangerBarRank={IconBadgeRank?.includes("-I") ? false : true} />
                            
                            <div className='flex gap-x-1 my-1 items-center'>
                            <img src={calyCoin} alt="moedas" className='w-[25px] h-[25px]' />
                            <p>{formattedCoins}</p>
                            </div>
                        </div>
                        }
                    </>}

            </div> :
            <div className='flex bg-black rounded-lg w-[135px] px-3 pr-10 py-1 gap-2 justify-center  items-center'>

                <ProgressBarAdapt xpInMoment={5} xpToGet={15} rangeBar={true} rangerBarRank={false} />
                <div className='text-white text-xs'>Tarefas</div>
            </div>
    )
}
