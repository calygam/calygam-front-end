import React, { useState } from 'react'
import { UseDataActivitiesPerTrailIdHook } from '../../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook'
import { UseReadAllTrailsHook } from '../../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook';
import { UseModalHook } from '../../../hooks/UseModalHook/UseModalHook';
import { recentlyAcess } from '../../../utils/recentlyAcess';

import loadingImages from '../../../assets/img/loading-images.svg'
import { UseProgressHook } from '../../../hooks/UseProgressHook/UseProgressHook';
export default function TrailContainerMedium({ trail }) {
     const {setTrailId} = UseDataActivitiesPerTrailIdHook()
    
    
      const {searchtrails,setTargetTrailId} = UseReadAllTrailsHook()
      const {setProgressTrailId} = UseProgressHook()
      const [isImageLoading, setIsImageLoading] = useState(true);
       const {closeModal,openModal}= UseModalHook() 
    const handleModelIsOpen =(id)=>{
setTrailId(id)

setTargetTrailId(id)
setProgressTrailId(id)
openModal("AssignOneApprentice")
}
    return (
        <div className='flex justify-between
        
                    min-h-[150px]
                    border-2 rounded-3xl
                    py-2 px-4
                    font-poppins
                    cursor-pointer
                    border-calygam-purple-tone-2 ' onClick={()=>handleModelIsOpen(trail.trailId)}>
            <div className='flex flex-col  w-[60%] gap-y-2'>
                <p className='
                        text-calygam-purple-tone-2 font-medium'>Trilhas</p>
                <p>{trail.trailName}</p>
                <div className=' max-h-[100px]
                       custom-scrollbar  overflow-y-auto'>
                <p className='text-xs text-gray-600'>{trail.trailDescription}</p>
                </div>
            </div>
              <div className='flex flex-col relative items-center justify-center gap-y-2'>
                   {isImageLoading &&
                 <span className='absolute flex bg-gradient-to-tr -z-10 from-black via-gray-700 to-gray-700  rounded-full animate-spin'>
                            <img src={loadingImages} alt="" className='w-[60px]  h-[60px]' />
                          </span>
}
                <img src={trail.trailImage} alt="" className='
                                                        w-[60px]
                                                        h-[60px]
                                                        bg-cover
                                                        rounded-md' />
              </div>

        </div>
    )
}
