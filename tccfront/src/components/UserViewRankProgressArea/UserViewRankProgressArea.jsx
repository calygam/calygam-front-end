import React, { useEffect, useState } from 'react'
import ProgressBarAdapt from '../ProgressBarAdapt/ProgressBarAdapt'
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile'
import fireXp from '../../assets/img/fire-xp.svg'
import { useScroll } from 'framer-motion'
export default function UserViewRankProgressArea() {
    const {dataProfile} = UseDataProfile()
    const [BgRank,setBgRank] = useState("")
    useEffect(()=>{
        console.log(dataProfile)
    },[dataProfile])

const getRankBg = (rank) => {
  const r = (rank || "").toUpperCase();

  if (r.includes("BRONZE")) return "from-[#CD7F32] to-[#8B4513]";
  if (r.includes("SILVER")) return "from-gray-300 to-gray-500";
  if (r.includes("GOLD")) return "from-yellow-300 to-yellow-600";
  if (r.includes("PLATINUM")) return "from-teal-200 to-teal-500";
  if (r.includes("DIAMOND")) return "from-sky-200 to-sky-500";
  if (r.includes("ASCENDENT")) return "from-fuchsia-400 to-fuchsia-700";

  return "from-white to-gray-200";
};
useEffect(()=>{
    setBgRank(getRankBg(dataProfile.userRank))
},[dataProfile.userRank])
  return (
    <div className='rounded-full py-2 px-4 flex flex-col items-end  justify-center gap-1 w-full bg-calygam-purple-tone-2/40'>
        <div className='flex w-full justify-between items-center '>
        <img src={fireXp} alt="" className='w-[25px] h-[25px]' />
            <p>{dataProfile?.userRankPoints- dataProfile?.userXp} XP</p>
        </div>
   
      <ProgressBarAdapt xpInMoment={dataProfile.userXp} xpToGet={dataProfile.userRankPoints} rangeBar={false} rangerBarRank={false}customizeSemanticColor={BgRank} barPercentual={true} remaining={true}/>
     
    </div>
  )
}
