import React from 'react'
import RankingViewProgress from '../RankingViewProgress/RankingViewProgress'
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile'

export default function UserViewRank() {
    const {dataProfile} = UseDataProfile()
  return (
    <div className='rounded-full p-1 flex items-center  justify-center gap-1 w-full bg-calygam-purple-tone-2/40 '>
                           
                                  <RankingViewProgress IconBadgeRank={dataProfile.userRank} LargeRange={false} NameRank={'true'} pureMode={true}  />
                            
    </div>
  )
}
