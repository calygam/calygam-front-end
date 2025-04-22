import React from 'react'

import UserInfoViewManagement from '../../components/UserInfoViewManagement/UserInfoViewManagement.jsx'
import CreateAndShowTrailManagement from '../../components/CreateAndShowTrailManagement/CreateAndShowTrailManagement.jsx'

export default function MakeNewTrailPage() {
  return (
    <div className='flex  flex-col w-full h-full transition-all duration-1000 ease-in-out'>
        <UserInfoViewManagement/>
       <div className='w-full grid lg:grid-cols-2 my-16 md:grid-cols-2 place-items-center md:space-y-0 space-y-3  grid-cols-1'>
    
       <CreateAndShowTrailManagement/>


       <div className=' bg-green-400 lg:w-[378px] h-[300px] md:w-[300px] w-[250px]'></div>

      
       

        </div> 
    </div>
  )
}
