import React from 'react'
import { TranslateStatusUserUtil } from '../../utils/TranslateStatusUserUtil/TranslateStatusUserUtil'
import { ColorStatusUser } from '../../utils/ColorStatusUser/ColorStatusUser.js'
import { motion } from 'framer-motion';

//imagens
import editAdminButton from '../../assets/img/edit-admin-table.svg'
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile.js';
import { UseModalHook } from '../../hooks/UseModalHook/UseModalHook.js';

export default function RowOfTable({ oneRow }) {
    const { dataProfile, loading, dataTeachers, searchDataTeachers,targetTeacher,setTargetTeacher } = UseDataProfile()
    const {openModal} = UseModalHook()
  const hiddenTextLimitter = (str, max = 0) => {
    return str.length > max ? str.slice(0, max) + '…' : str;


  }
  
  const statusClass = oneRow?.userStatus ? ColorStatusUser(TranslateStatusUserUtil[oneRow?.userStatus], false) : "";
  const statusClassBall = oneRow?.userStatus ? ColorStatusUser(TranslateStatusUserUtil[oneRow?.userStatus], true) : "";


  const handleTargetTeacher=(teacher)=>{
    setTargetTeacher(teacher)
    openModal("AssignTeacher")
  }
  return (
    <motion.div className="grid grid-cols-[1.5fr_1fr_2fr_1fr] gap-2 p-3 min-w-max   bg-white  hover:bg-white transition-colors" role="row"

      initial={{  y: -12,  }}
      whileInView={{ y:0 }}
      viewport={{ amount: 0, once: true }}
      transition={{
        type: "spring",
        stiffness: 50 + (oneRow?.userId * 0.5),
        damping: 10 + (oneRow?.userId * 2),
        mass: 1 + (oneRow?.userId * 2),
       
      }}>


      <div className="flex items-center  w-[100px]  gap-x-2" role="cell">
        <div className=''>
          <img src={oneRow.userImage} alt="Foto do professor" className='w-[25px] rounded-full' />
        </div>
        <div>
          <p className="font-medium  text-xs text-gray-900 ">{hiddenTextLimitter(oneRow.userName, 8)}</p>

        </div>
      </div>

      <div role="cell" className=' w-[100px]'>
        <div className=' px-2 py-1 rounded-md border justify-center items-center w-fit  flex gap-x-1'>
           <span className={` flex rounded-full w-[7px] h-[7px] ${statusClassBall}`}></span>
          <span className={`inline-block bg-transparent ${statusClass} text-xs font-semibold `}>
            {TranslateStatusUserUtil[oneRow.userStatus]}
          </span>
         
        </div>
      </div>
      <div className="text-gray-600 text-sm  w-[180px]  min-w-0 cursor-pointer" title={oneRow.userEmail}>
        {oneRow.userEmail}
      </div>
      <div className="flex items-center  lg:w-[100px] w-[180px] gap-2 " role="cell">
        <button type='button' className="text-gray-500 outline-none hover:text-blue-600" aria-label={`Editar usuário ${oneRow.userName}`} title="Editar" onClick={()=>handleTargetTeacher(oneRow.userEmail)}>
          <img src={editAdminButton} alt="" className='w-[25px] h-[25px]' />
        </button>

      </div>
    </motion.div>
  )
}
