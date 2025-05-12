import React, { useEffect } from 'react'

import UserInfoViewManagement from '../../components/UserInfoViewManagement/UserInfoViewManagement.jsx'
import CreateAndShowTrailManagement from '../../components/CreateAndShowTrailManagement/CreateAndShowTrailManagement.jsx'
import ViewTrails from '../../components/ViewTrails/ViewTrails.jsx'


import useAuth from '../../hooks/UseJwtChecked/UseJwtChecked.js';
import { UseReadAllTrailsHook } from '../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook.js';

export default function MakeNewTrailPage() {
  const { setToken } = useAuth();
  const {targetTrailId} = UseReadAllTrailsHook()

   useEffect(() => {
    if (targetTrailId) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }
   },[targetTrailId])

  return (
    <div className='flex  flex-col items-center    h-full transition-all duration-[2000ms] ease-linear'>
      
      <div className='md:w-[90%] w-[85%]'>
        <UserInfoViewManagement />
        <div className={`w-full transition-all ease-linear duration-[3000ms]  gap-x-4 ${targetTrailId?"flex justify-center":"grid lg:grid-cols-2 my-16 md:grid-cols-2 justify-center"}   md:space-y-0 space-y-3  grid-cols-1`}>

          <CreateAndShowTrailManagement />



          {/* {trails.map(imgs=>(
          <a href={imgs.trailImage} key={imgs.trailId}  alt="" className=' bg-gray-500  object-cover' >Baixar -{imgs.trailId}</a>
        ))} */}
          <ViewTrails />





        </div>
      </div>
    </div>
  )
}
