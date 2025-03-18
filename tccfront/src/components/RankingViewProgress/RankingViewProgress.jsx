import React from 'react'
import ProgressBarAdapt from '../ProgressBarAdapt/ProgressBarAdapt'

export default function RankingViewProgress({ IconBadgeRank, NameRank, LargeRange, img }) {
    return (
        NameRank != null ?

            <div className={`flex flex-col  w-full justify-center transition-all  delay-100 duration-1000 ease-in-out items-center rounded-3xl py-2 px-4  bg-gradient-to-r bg-center from-rank-achiviment-bronze-one-first to-rank-achiviment-bronze-one-second/80`}>
                {LargeRange ?
                    <div className='flex items-center lg:w-[800px] transition-all delay-100 duration-500 ease-in-out  md:w-[400px] w-[200px] px-4 flex-wrap-reverse justify-center md:justify-between'>
                        <div className='w-[250px] text-white   text-xs pl-5'>
                            <p> Rank {NameRank}</p>
                            <ProgressBarAdapt xpInMoment={100} xpToGet={500} rangeBar={false} rangerBarRank={false} CountStartRow={true} />
                        </div>
                        <div className='w-fit'>
                            <img src={IconBadgeRank} alt="" className='w-20 h-20' />
                        </div>

                    </div> :
                    <>
                        <div className='flex items-center w-full gap-x-5  '>
                            <span className='flex'>

                                <img src={IconBadgeRank} alt="" className='w-[40px] h-[40px]' />
                            </span>
                            <div className='flex text-base text-white'>

                                <p className='text-base font-bold'> Rank {NameRank}</p>
                            </div>
                        </div>
                        <div className='flex w-full items-center'>
                            <ProgressBarAdapt xpInMoment={3} xpToGet={15} rangeBar={false} rangerBarRank={true} />
                        </div>
                    </>}

            </div> :
            <div className='flex bg-black rounded-lg w-[135px] px-3 pr-10 py-1 gap-2 justify-center  items-center'>

                <ProgressBarAdapt xpInMoment={4} xpToGet={5} rangeBar={true} rangerBarRank={false} />
                <div className='text-white text-xs'>Tarefas</div>
            </div>
    )
}
