import React from 'react'
import RankingViewProgress from '../RankingViewProgress/RankingViewProgress'
import usePhotoMockData from '../../hooks/UserMockHook/UserMockHook'
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile'
import LoadingCrazy from '../LoadingCrazy/LoadingCrazy'

import iconOfTeacher from '../../assets/img/icon-of-teacher.svg'

export default function HelloUser({ IconBadgeRank }) {
    const {userPhoto} = usePhotoMockData()
    const {dataProfile,loading} = UseDataProfile()
    return (
        <div className={`relative ${IconBadgeRank?"sticky md:justify-between bg-black/80":"relative py-8 justify-between bg-calygam-semi-light-red"} flex w-full transition-all delay-100 duration-200 ease-in-out rounded-lg font-poppins gap-y-3 md:gap-x-0 gap-x-32   justify-center flex-wrap items-center  py-4 px-6 `}>
            {/* {loading && <LoadingCrazy/>
            } */}
            
            <div className=' w-fit flex items-center flex-wrap justify-center gap-y-3 md:gap-y-0 gap-x-4'>
            {IconBadgeRank?
                <div className=' rounded-full'>
                    <span className='flex bg-slate-500 rounded-full'>
                        <img src={userPhoto.medium} alt="" className='w-[65px] h-[65px] rounded-full' />
                    </span>
                </div>
                :null}
                <div className=''>
                    <p className='text-white font-bold'>Olá {IconBadgeRank?dataProfile.userName:"Professor!"}</p>
                    {IconBadgeRank?
                    <p className='text-white text-xs'>Suas Moedas: {dataProfile.userMoney}C</p>
                    :null}
                </div>
            </div>
            {IconBadgeRank?
            <div className=''>
                <RankingViewProgress IconBadgeRank={IconBadgeRank} NameRank={'Bronze'} />
            </div>:<div className='absolute lg:left-[85%] md:left-[80%] left-[65%] '><img src={iconOfTeacher} alt='icone de professor' className=' lg:w-[125px] lg:h-[125px] md:w-[115px] md:h-[115px] w-[95px] h-[95px] ' /></div>  }

        </div>
    )
}
