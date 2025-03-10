import React from 'react'
import ProgressBarAdapt from '../ProgressBarAdapt/ProgressBarAdapt'

export default function RankingViewProgress({ IconBadgeRank, NameRank }) {
    return (
        NameRank != null ?

            <div className='flex flex-col  w-[250px] justify-center items-center rounded-[30px] p-3 bg-gradient-to-r from-rank-achiviment-bronze-one-first to-rank-achiviment-bronze-one-second/80'>
                <div className='flex items-center'>
                    <span className='flex'>

                        <img src={IconBadgeRank} alt="" className='w-[40px] h-[40px]' />
                    </span>
                    <div className='flex text-base text-white'>

                        <p className='text-xl'>{NameRank}</p>
                    </div>
                </div>
                <div className='flex w-full items-center'>
                    <ProgressBarAdapt xpInMoment={3} xpToGet={15} rangeBar={false} rangerBarRank={true} />
                </div>
            </div> :
            <div className='flex bg-black rounded-lg w-[135px] px-3 pr-10 py-1 gap-2 justify-center  items-center'>

                <ProgressBarAdapt xpInMoment={4} xpToGet={5} rangeBar={true} rangerBarRank={false} />
                <div className='text-white text-xs'>Tarefas</div>
            </div>
    )
}
