import React, { useEffect } from 'react'
import ProgressBarAdapt from '../ProgressBarAdapt/ProgressBarAdapt'
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile'

export default function UserViewRankProgressArea() {
    const {dataProfile} = UseDataProfile()
    useEffect(()=>{
        console.log(dataProfile)
    },[dataProfile])
  return (
    <div className='rounded-full p-1 px-4 flex items-center  justify-center gap-1 w-full bg-calygam-purple-tone-2/40'>
      <ProgressBarAdapt xpInMoment={dataProfile.userXp} xpToGet={dataProfile.userRankPoints} rangeBar={false} rangerBarRank={false} />
    </div>
  )
}
