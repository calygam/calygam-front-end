import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UseDataActivitiesPerTrailIdHook } from '../../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook';
import { UseProgressHook } from '../../../hooks/UseProgressHook/UseProgressHook';
import { UseReadAllTrailsHook } from '../../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook';
import ProgressBarAdapt from '../../ProgressBarAdapt/ProgressBarAdapt';
import { motion } from 'framer-motion';

//images
import loadingImages from '../../../assets/img/loading-images.svg'
import { UseModalHook } from '../../../hooks/UseModalHook/UseModalHook';


export default function TrailContainerSmall({ trail }) {
   const {setTrailId} = UseDataActivitiesPerTrailIdHook()
  // const {setTrailId} = UseDataActivitiesPerTrailIdHook()
  
    const {searchtrails,setTargetTrailId} = UseReadAllTrailsHook()
    const [isImageLoading, setIsImageLoading] = useState(true);
    const {setProgressTrailId} = UseProgressHook()
     const {closeModal,openModal}= UseModalHook() 
  

      const navigate = useNavigate()
    const handleModelIsOpen =(id)=>{
localStorage.setItem("TrailId",id)

setTrailId(id)

setTargetTrailId(id)
setProgressTrailId(id)
navigate("/Trilha")


  

      
}
//.

  return (
   
      <motion.div className='flex justify-between

                    min-h-[150px]
                    border-2 rounded-3xl
                    py-2 px-4
                    font-poppins
                    cursor-pointer
                    border-calygam-purple-tone-2 ' onClick={() => handleModelIsOpen(trail.trailId)}
                    
                    initial={{y:20}}
                    animate={{y:0}}
                    transition={{type:"spring",stiffness:250}}
                    
                    >
        <div className='flex flex-col  w-[60%] gap-y-2'>
          <p className='
                        text-calygam-purple-tone-2 font-medium'>Sua Trajetória</p>
          <p>{trail.trailName}</p>
          <ProgressBarAdapt xpInMoment={trail.progressBarTrailDTO?.totalActivitiesCompleted} xpToGet={trail.progressBarTrailDTO?.totalActivities} barPercentual={true} trailVacancy={true} rangeBar={true}/>
        </div>
        
        <div className='flex relative flex-col items-center justify-center gap-y-2'>
          {isImageLoading &&
          <span className='absolute flex bg-gradient-to-tr from-black via-gray-700 to-gray-700  rounded-full animate-spin'>
            <img src={loadingImages} alt="" className='w-[60px]  h-[60px]' />
          </span>
}
          <img src={trail.trailImage} alt="" className='
                                                        w-[60px]
                                                        z-10
                                                        h-[60px]
                                                        bg-cover
                                                        rounded-md' />
        </div>

   

    </motion.div>
  )
}
