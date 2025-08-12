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

export default function AssignPositionModal() {
    const [hasAnimated, setHasAnimated] = useState(false)
    const [validEmail, setValidEmail] = useState("!")
          const { dataProfile,  dataTeachers, searchDataTeachers,targetTeacher,setTargetTeacher } = UseDataProfile()
    const [userEmail, setUserEmail] = useState(targetTeacher?targetTeacher:"")
    
    const { loading, setLoading, setLoadingText } = UseLoading()
 

    const { closeModal } = UseModalHook()


    const assignTeacherToProject = async () => {
        try {
            setLoading(true)
            setLoadingText("Adicionando professor...")
            const response = await api.put(`/users/teacher/${userEmail}`)
            if (response.status === 200) {
                closeModal("Novo Membro na equipe!", "")
            }
            else {
                closeModal("", "")
            }
        }
        catch (e) {

            closeModal("", e.response.data)
        }
        finally {
            setLoading(false)
            setLoadingText("")

            searchDataTeachers(0, "userName,desc")
        }
    }

        const removeTeacherOfProject = async () => {
        try {
            setLoading(true)
            setLoadingText("Removendo Cargo...")
            const response = await api.put(`/users/teacher/remove/${userEmail}`)
            if (response.status === 200) {
                closeModal("Um professor deixou seu cargo!", "")
            }
            else {
                closeModal("", "")
            }
        }
        catch (e) {

            closeModal("", e.response.data)
        }
        finally {
            setLoading(false)
            setLoadingText("")

            searchDataTeachers(0, "userName,desc")
        }
    }
   




    useEffect(() => {
        userEmail != '' ?
            setValidEmail(RegexEmail(userEmail)) : setValidEmail("!")
    }, [userEmail])

    useEffect(() => {
        if (!hasAnimated) {
            setHasAnimated(true)
        }
    }, [hasAnimated])
    return (
        <motion.div className='w-full h-full font-poppins fixed inset-0 z-30 bg-calygam-purple-semi-bold/50 backdrop-blur-md flex justify-center items-center'
            initial={hasAnimated ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
               transition={{ type: 'tween',duration:0.7, ease:'easeInOut' }}>
            <motion.div
                initial={hasAnimated ? false : { scale: 0 }}
                animate={{ scale: 1 }}
                   transition={{ type: 'tween',duration:0.7, ease:'easeInOut' }}
                className='lg:w-[500px] md:w-[325px] w-[250px] rounded-md divide-y divide-gray-200 bg-white min-h-[150px] pb-4 '
            >
                <div className='w-full flex justify-between p-4 items-center'>
                    <div className='flex items-center justify-center gap-x-1'>
                        <img src={groupMembers} alt="membros" className='md:w-[25px] w-[15px]' />
                        <p className='text-black md:text-base text-xs font-medium'>Adicionar Novo Professor</p>
                    </div>
                    <button className='flex outline-none justify-center items-center' onClick={() => closeModal("", "")}>
                        <img src={closeX} alt="fechar" className='md:w-[20px] w-[15px] ' />
                    </button>

                </div>
                <form className='w-full flex flex-col px-4 gap-y-2 my-1 py-2 pb-4'>
                    <div>
                        <div className='flex justify-between items-center'>
                            <label htmlFor="input-for-email" className='text-gray-500 text-xs self-start font-medium'>Email</label>
                            <div className='border rounded-md w-[75%] border-gray-600'>
                                <input type="text" className='bg-transparent outline-none w-full text-xs pl-2 py-2 ' id='input-for-email' name='input-for-email' placeholder='Ex.calygam@gmail.com' autoComplete='off' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                            </div>

                        </div>
                        {validEmail != "" && userEmail.length > 0 ? <p className='text-red-600 text-xs'>*Email inválido</p> : null}
                    </div>
                    <div className='flex flex-col  w-full  items-center gap-y-3'>
                        <span className='w-full h-[2px] rounded-full bg-gray-200 flex '></span>
                        <span className='w-full h-[2px] rounded-full bg-gray-200 flex '></span>
                    </div>
                </form>
                <div className='flex justify-around w-full flex-wrap gap-y-2 md:flex-nowrap gap-x-4 p-4 pb-0 items-center'>
                    <button className='outline-none py-2 w-full text-gray-500 border border-gray-200 px-4 rounded-md' onClick={() => closeModal("", "")}>Cancelar</button>
                    <button type='button' disabled={validEmail != ""} className={`outline-none py-2 w-full  h-[45px] ${targetTeacher?"border-b-red-800/20":"border-b-purple-800/20"} ${validEmail != "" ? `${targetTeacher?"bg-red-600/35":"bg-purple-600/35"} border-0 text-black/35 hover:cursor-not-allowed` : `${targetTeacher?"bg-red-600":"bg-purple-600"} border-b-8 text-white`}  hover:border-0 px-4 rounded-md`} onClick={targetTeacher?removeTeacherOfProject:assignTeacherToProject}>{targetTeacher?"Remover":"Adicionar"}</button>
                </div>



            </motion.div>

        </motion.div>
    )
}
