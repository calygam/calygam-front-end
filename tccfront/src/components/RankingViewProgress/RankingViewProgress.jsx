import React, { useEffect } from 'react'
import ProgressBarAdapt from '../ProgressBarAdapt/ProgressBarAdapt'
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile'
import { translateRank } from '../../utils/RankIconLibrary/DarkRankIcon/DarkRankIcon'

export default function RankingViewProgress({ IconBadgeRank, NameRank, LargeRange, img }) {
    const {dataProfile,loading} = UseDataProfile()
const hasValidSuffix = ["-I", "-II", "-III"].some(suffix =>
  IconBadgeRank?.toUpperCase().includes(suffix)
)

const icon = hasValidSuffix ? translateRank(IconBadgeRank) : IconBadgeRank
    return (
        NameRank != null ?

            <div className={`flex flex-col  w-full  items-center rounded-3xl py-2 px-4  bg-gradient-to-r bg-center ${IconBadgeRank?.includes("I")?"bg-transparent":"from-rank-achiviment-bronze-one-first to-rank-achiviment-bronze-one-second/80"} `}>
                
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
                        <div className={`flex flex-row-reverse items-center justify-between w-full gap-x-5  `}>
                            <span className='flex transform cursor-pointer    [transform-style:preserve-3d] hover:animate-rotateYBadge'>

                                <img src={icon} alt="" className={`${IconBadgeRank?.includes("-I")?"w-[25px]":"w-[40px]" } `} />
                            </span>
                            <div className='flex text-base  text-white'>

                                <p className=' font-bold'> Rank <span className={`${IconBadgeRank?.includes("-I")?"text-yellow-500":"text-white"}`}>{dataProfile.userRank}</span></p>
                            </div>
                        </div>
                        <div className='flex w-full '>
                            <ProgressBarAdapt xpInMoment={dataProfile.userXp} xpToGet={dataProfile.userRankPoints} rangeBar={false} rangerBarRank={IconBadgeRank?.includes("-I")?false:true} />
                        </div>
                    </>}

            </div> :
            <div className='flex bg-black rounded-lg w-[135px] px-3 pr-10 py-1 gap-2 justify-center  items-center'>

                <ProgressBarAdapt xpInMoment={5} xpToGet={15} rangeBar={true} rangerBarRank={false} />
                <div className='text-white text-xs'>Tarefas</div>
            </div>
    )
}
