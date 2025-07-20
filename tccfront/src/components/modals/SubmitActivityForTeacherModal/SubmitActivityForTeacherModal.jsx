import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

//imagens
import groupMembers from '../../../assets/img/group-members.svg'
import closeX from '../../../assets/img/close-x.svg'
import { RegexEmail } from '../../../utils/RegexEmail/RegexEmail'
import { UseModalHook } from '../../../hooks/UseModalHook/UseModalHook'
import api from '../../../api/api'
import { UseLoading } from '../../../hooks/UseLoading/UseLoading'
import { UseDataProfile } from '../../../hooks/UseDataProfile/UseDataProfile'
import { useNavigate } from 'react-router-dom'
import { UseProgressHook } from '../../../hooks/UseProgressHook/UseProgressHook'
import { UseDataActivitiesPerTrailIdHook } from '../../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook'
import { HandleDeleteSubmit } from '../../../utils/HandleDeleteSubmit/HandleDeleteSubmit'

export default function SubmitActivityForTeacherModal({progressId,sending,setSending,selectedFiles,setSelectedFiles,trailId,targetActivityId,deletingMode}) {
 const [hasAnimated, setHasAnimated] = useState(false)
const { dataProfile, searchDataProfile } = UseDataProfile()
  const { submissionBaggage, ListenerOfDowloadableArchivesSubmited } = UseProgressHook()
 

const navigation = useNavigate()
          

    
    const { loading, setLoading, setLoadingText } = UseLoading()
 

    const { closeModal } = UseModalHook()





  const handleFileSubmit = async (e) => {
    setSending(true)
    setLoading(true)
    setLoadingText("Concluindo entrega...")
    e.preventDefault();
    if (selectedFiles.length === 0) {

      return;
    }

    const formData = new FormData();
    selectedFiles.forEach(file => {
      formData.append("activityFiles", file);
    });

    try {
      const response = await api.put(
        `/progress/submit/trail/${trailId}/activity/${targetActivityId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
           if (response.status === 200) {
                closeModal("Atividade entregue com sucesso!", "")
            }
            else {
                closeModal("aaaaaaaaaa", "")
            }
      console.log(response.data);
      setSelectedFiles([]);
      searchDataProfile()
      
      ListenerOfDowloadableArchivesSubmited(progressId)
      navigation("/Trilha")

    }   catch (e) {
  const errorMsg = e?.response?.data;
  closeModal("", errorMsg);
}
    finally {
      setSending(false)
      setLoading(false)
      setLoadingText("")
    }

  };

 

    return (
        <motion.div className='w-full h-full font-poppins fixed inset-0 z-30 bg-calygam-purple-semi-bold/50 backdrop-blur-md flex justify-center items-center'
            initial={hasAnimated ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, mass: 2 }}>
            <motion.div
                initial={hasAnimated ? false : { scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 150, mass: 1 }}
                className='lg:w-[500px] md:w-[325px] w-[250px] rounded-md divide-y divide-gray-200 bg-white min-h-[150px] pb-4 '
            >
                <div className='w-full flex justify-between p-4 items-center'>
                    <div className='flex items-center justify-center gap-x-1'>
                  
                        <p className='text-black md:text-base text-xs font-medium max-w-[260px] truncate'>{deletingMode?.isDeleting?`Deletar ${deletingMode?.obtainFile?.activityOriginalFileName}`:"Dever de Casa - Entregando"}</p>
                    </div>
                    <button className='flex outline-none justify-center items-center' onClick={() => closeModal("", "")}>
                        <img src={closeX} alt="fechar" className='md:w-[20px] w-[15px] ' />
                    </button>

                </div>
              
                <div className='flex justify-around w-full flex-wrap gap-y-2 md:flex-nowrap gap-x-4 p-4 pb-0 items-center'>
                    <button className='outline-none py-2 w-full text-gray-500 border border-gray-200 px-4 rounded-md' onClick={() => closeModal("", "")}>Cancelar</button>
                    {!deletingMode?.isDeleting?
                    <button type='button' disabled={sending} className={`outline-none py-2 w-full  h-[45px] bg-purple-600 border-b-4 border-purple-700/50 rounded-md text-white border-0 text-black/35 hover:border-b-0`} onClick={(e)=>handleFileSubmit(e)}>Entregar</button>
:<button type='button' disabled={sending} className={`outline-none py-2 w-full  h-[45px] bg-red-600 border-b-4 border-red-700/50 rounded-md text-white border-0 text-black/35 hover:border-b-0`}  onClick={()=>HandleDeleteSubmit(deletingMode.progressId,deletingMode?.obtainFile?.submissionId,setLoading,setLoadingText,closeModal)}>Deletar</button>}
                </div>



            </motion.div>

        </motion.div>
    )
}
