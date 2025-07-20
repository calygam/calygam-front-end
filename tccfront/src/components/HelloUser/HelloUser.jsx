import React, { useEffect } from 'react'
import RankingViewProgress from '../RankingViewProgress/RankingViewProgress'
import usePhotoMockData from '../../hooks/UserMockHook/UserMockHook'
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile'
import LoadingCrazy from '../LoadingCrazy/LoadingCrazy'

import iconOfTeacher from '../../assets/img/icon-of-teacher.svg'

export default function HelloUser({ IconBadgeRank }) {
    const { userPhoto } = usePhotoMockData()
    const { dataProfile, loading } = UseDataProfile()

    useEffect(() => {
        console.log(dataProfile.userImage)
    }, [dataProfile.userImage])

    return (
        <div className={` hidden relative ${IconBadgeRank ? `sticky md:justify-between 
            
            
            bg-blue-500/25 backdrop-blur-lg  ${dataProfile.userRank?.includes("BRONZE") ? "bg-yellow-800 border-2 border-yellow-950/50"
            : dataProfile.userRank?.includes("SILVER") ? "bg-gray-500 border-2 border-gray-500/50"
                : dataProfile.userRank?.includes("GOLD") ? "text-yellow-400"
                    : dataProfile.userRank?.includes("PLATINUM") ? "text-teal-300"
                        : dataProfile.userRank?.includes("DIAMOND") ? "text-sky-300"
                            : dataProfile.userRank?.includes("ASCENDENT") ? "text-fuchsia-600":"bg-purple-500/50"} ` : "relative py-8 justify-between bg-calygam-semi-light-red w-full"} flex w-fit transition-all delay-100 duration-200 ease-in-out rounded-2xl font-poppins gap-y-3 md:gap-x-0 gap-x-32   justify-center flex-wrap items-center  py-4 px-6  `}>
            {/* {loading && <LoadingCrazy/>
            } */}

            {/* <div className=' w-fit flex items-center flex-wrap justify-center gap-y-3 md:gap-y-0 gap-x-4'>
                {IconBadgeRank ?
                    <div className=' rounded-full'>
                        <span className='flex bg-yellow-400/15 border border-yellow-300/55 rounded-full rounded-tl-none '>
                            <img src={`${dataProfile.userImage ? dataProfile.userImage : userPhoto.medium}`} alt="" className='w-[65px] h-[65px] rounded-full' />
                        </span>
                    </div>
                    : null}
                <div className=''>
                    <p className='text-white font-bold'>Olá {IconBadgeRank ? dataProfile.userName : "Professor!"}</p>
                    {IconBadgeRank?
                    <p className='text-white text-xs'>Suas Moedas: {dataProfile.userMoney}C</p>
                    :null}
                </div>
            </div> */}


        </div>
    )
}
