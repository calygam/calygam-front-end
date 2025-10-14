import React, { useEffect, useState } from 'react'
import { TranslateStatusUserUtil } from '../../utils/TranslateStatusUserUtil/TranslateStatusUserUtil'
import { ColorStatusUser } from '../../utils/ColorStatusUser/ColorStatusUser.js'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';

//imagens
import editAdminButton from '../../assets/img/edit-admin-table.svg'
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile.js';
import { UseModalHook } from '../../hooks/UseModalHook/UseModalHook.js';
import { TranslateTrailStatusUtil } from '../../utils/TranslateTrailStatusUtil/TranslateTrailStatusUtil.js';
import { ColorStatusTrail } from '../../utils/ColorStatusTrail/ColorStatusTrail.js';
import { UseReadAllTrailsHook } from '../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook.js';
import loadingImages from '../../assets/img/loading-images.svg'
import perfilPageIcon from '../../assets/img/perfilPageIcon.png'
import { data } from 'react-router-dom';

export default function RowOfTable({ oneRow }) {
  const { dataProfile, loading, dataTeachers, searchDataTeachers, targetTeacher, setTargetTeacher } = UseDataProfile()
  const { trails, targetTrailId, setTargetTrailId } = UseReadAllTrailsHook();
 const [isImageLoading, setIsImageLoading] = useState(true);
  useEffect(() => {
    console.log("LOGANDO ------ DEBUG")
    console.log(dataTeachers)
  }, [dataProfile])





  const { openModal } = UseModalHook()

  const hiddenTextLimitter = (str, max = 0) => {
    return str?.length > max ? str.slice(0, max) + '…' : str;


  }

  const handleEditTrail = (trailId) => {
    setTargetTrailId(trailId)
    openModal("CreateAnewTrail")

  }

  useEffect(() => {
    console.log(oneRow?.userImage)
  }, [oneRow])

  const statusClass =

    oneRow?.trailId ? ColorStatusTrail(TranslateTrailStatusUtil[oneRow.trailStatus], false) :
      oneRow?.userStatus ? ColorStatusUser(TranslateStatusUserUtil[oneRow?.userStatus], false) : "";
  const statusClassBall = oneRow?.trailId ? ColorStatusTrail(TranslateTrailStatusUtil[oneRow.trailStatus], true) :
    oneRow?.userStatus ? ColorStatusUser(TranslateStatusUserUtil[oneRow?.userStatus], true) : "";

  const count = useMotionValue(0)
  const rounded = useTransform(() => Math.round(count.get()))

  useEffect(() => {
    const controls = oneRow?.trailId ? animate(count, oneRow.trailVacancies, { duration: 5 }) : ""
    if (!controls.length > 0) {
      return
    }
    return () => controls.stop()
  }, [])



  const handleTargetTeacher = (teacher) => {
    setTargetTeacher(teacher)
    openModal("AssignTeacher")
  }
  return (
    <motion.div className={`flex items-center w-full gap-2 px-2 py-2 relative -left-0    bg-white  hover:bg-white transition-colors`} role="row"


      initial={{ y: -12, }}
      whileInView={{ y: 0 }}
      viewport={{ amount: .5, once: true }}
      transition={{
        type: "spring",
        stiffness: 50 + (oneRow?.trailId ? oneRow.trailId * 0.5 : dataProfile?.userId * 0.5),
        damping: 10 + (oneRow?.userId * 2),
        mass: 1 + (oneRow?.userId * 2),

      }}>
      {oneRow?.trailId && !oneRow.trailStatus?.includes("BUILDING") && <div className={`w-full h-full -left-0 bg-black/25 absolute`}></div>}

      {!oneRow?.trailId &&
        <div className="flex items-center   w-full px-4  gap-x-2" role="cell">
          <div className=''>
            <img src={`${oneRow?.userImage}`} alt="Foto do professor" className='w-[35px] h-[35px] rounded-full object-cover object-center' />
          </div>
          <div>
            <p className="font-medium  text-xs text-gray-900 ">{hiddenTextLimitter(oneRow.userName, 16)}</p>

          </div>
        </div>
      }
      {oneRow?.trailId &&
        <div className="flex items-center   w-full min-w-[300px] px-4  gap-x-2" role="cell">
          <div className=''>
            <img src={`${oneRow?.trailImage}`} alt="Foto do professor" className='w-[50px] h-[50px]  rounded-full object-cover' />
          </div>
          <div>
            <p className="font-medium  text-xs text-gray-900 ">{hiddenTextLimitter(oneRow.trailName, 20)}</p>

          </div>
        </div>
      }


      <div role="cell" className=' w-full px-4 '>
        <div className={` px-2 py-1 rounded-md border justify-center  ${statusClass}  items-center w-fit  flex gap-x-1`}>
          <span className={` flex rounded-full w-[7px] h-[7px] ${statusClassBall}`}></span>
          <span className={`inline-block bg-transparent text-xs font-semibold `}>
            {oneRow?.trailId ? TranslateTrailStatusUtil[oneRow.trailStatus] : TranslateStatusUserUtil[oneRow.userStatus]}
          </span>

        </div>
      </div>
      {oneRow?.trailId && <div className="flex items-center   w-full px-4   gap-x-2" role="cell">

        <div>
          <p className="font-medium  text-xs text-gray-900 ">{oneRow?.trailVacancy + ` /${oneRow?.trailVacancies}`}</p>
        </div>
      </div>}
      {!oneRow?.trailId &&
        <div className="text-gray-600 text-sm text-start   w-full px-4   cursor-pointer" >
          {oneRow.userEmail}
        </div>}
      {oneRow?.trailId && <div className="flex items-center   w-full px-4   gap-x-2" role="cell">

        {dataProfile.userImage ?
          <button type='button' className='relative outline-none flex cursor-pointer' onClick={() => openModal("ViewYourDataProfile")}>
            {isImageLoading && dataProfile.userImage != "" &&
              <span className='absolute flex bg-gradient-to-tr inset-0 justify-center items-center from-black via-gray-700 to-gray-700  rounded-full animate-spin'>
                <img src={loadingImages} alt="" className='w-fit  h-[45px]' />
              </span>
            }
            <img src={dataProfile.userImage} alt="Foto de Perfil" className=' object-cover w-[45px] z-10 h-[45px] rounded-full' onLoad={() => setIsImageLoading(false)} />

          </button> : <button type='button' className='flex rounded-full outline-none group cursor-pointer overflow-hidden transition-all hover:rotate-6  hover:rounded-tl-md hover:rounded-br-md  bg-black/25 p-1 justify-center items-center' onClick={() => openModal("ViewYourDataProfile")}>
            <img src={perfilPageIcon} alt="ir para perfil" className='w-[25px] group-hover:-rotate-45 transition-all h-[25px]' />
          </button>}
        <div>
          <p className="font-medium  text-xs text-gray-900 ">{hiddenTextLimitter(dataProfile?.userName, 15)}</p>

        </div>
      </div>}
      {!oneRow?.trailId &&

        <div className="flex items-center  w-full px-4   " role="cell">
          <button type='button' className="text-gray-500 outline-none hover:text-blue-600" aria-label={`Editar usuário ${oneRow.userName}`} title="Editar" onClick={() => handleTargetTeacher(oneRow.userEmail)}>
            <img src={editAdminButton} alt="" className='w-[25px] h-[25px]' />
          </button>

        </div>
      }
      {oneRow?.trailId &&

        <div className="flex items-center  w-full px-4   " role="cell">
          <button type='button' className="text-gray-500 outline-none hover:text-blue-600" aria-label={`Editar usuário ${oneRow.userName}`} title="Editar" onClick={() => handleEditTrail(oneRow.trailId)}>
            <img src={editAdminButton} alt="" className='w-[25px] h-[25px]' />
          </button>

        </div>
      }
    </motion.div>
  )
}
