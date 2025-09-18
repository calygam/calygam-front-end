import React, { useEffect, useState } from 'react'
import RankingViewProgress from '../RankingViewProgress/RankingViewProgress'
import { DarkRankIcon, translateRank } from '../../utils/RankIconLibrary/DarkRankIcon/DarkRankIcon'
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile'

//images

import moneyIcon from '../../assets/img/Moedas.svg'

import { UseReadAllTrailsHook } from '../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook'
import UseTrailDataHook from '../../hooks/UseTrailDataHook/UseTrailDataHook'
import { UseProgressHook } from '../../hooks/UseProgressHook/UseProgressHook'
import { UseDataActivitiesPerTrailIdHook } from '../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook'
import useAuth from '../../hooks/UseJwtChecked/UseJwtChecked'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import loadingImages from '../../assets/img/loading-images.svg'

export default function UserInfoDisplay({ setIsEnabled, isEnabled }) {
  const { dataProfile } = UseDataProfile()
  const { targetTrail, searchtrailsById, targetTrailId } = UseReadAllTrailsHook()
  const [isImageLoading, setIsImageLoading] = useState(true);




  // const UseProgressHook

  return (
    <motion.div className='p-4 px-6 bg-calygam-purple-tone-2 flex flex-wrap items-center justify-between w-full m-0 md:ml-20 md:w-[80%] lg:m-0 gap-2 rounded-3xl'
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ type: 'tween', duration: 1.4, ease: 'easeInOut' }}>
      <div className='flex w-full  md:hidden'>
        <button className='flex outline-none self-start  items-center gap-x-1 justify-center' onClick={() => setIsEnabled(!isEnabled)}>
          <span className='flex w-[2px] h-[2px] rounded-full bg-white'></span>
          <span className='flex w-[2px] h-[2px] rounded-full bg-white'></span>
          <span className='flex w-[2px] h-[2px] rounded-full bg-white'></span>
        </button>
      </div>
      <div className='flex flex-wrap gap-4 items-center justify-center'>

        {isImageLoading && dataProfile.userImage != "" &&
          <span className=' flex bg-gradient-to-tr inset-0 justify-center items-center from-black via-gray-700 to-gray-700  rounded-full animate-spin'>
            <img src={loadingImages} alt="" className='w-[60px]  h-[60px]' />
          </span>
        }
        <img src={dataProfile.userImage} alt="imagem de perfil" className={`w-[50px] h-[50px] rounded-full object-cover ${isImageLoading ? "hidden" : ""}`} onLoad={() => setIsImageLoading(false)} />
        <div className='flex flex-col gap-2'>

          <p className='text-white font-bold text-xs uppercase'>Olá, {dataProfile.userName}! - {targetTrail.trailName}</p>
          <p className='text-xs text-white font-light md:block hidden'>Continue de onde parou!</p>
        </div>
      </div>
    </motion.div>
  )
}
