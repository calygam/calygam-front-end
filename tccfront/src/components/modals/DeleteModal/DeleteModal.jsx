import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

//imagens
import groupMembers from '../../../assets/img/group-members.svg'
import trashIcon from '../../../assets/img/trash-icon.svg'
import closeX from '../../../assets/img/close-x.svg'
import { RegexEmail } from '../../../utils/RegexEmail/RegexEmail'
import { UseModalHook } from '../../../hooks/UseModalHook/UseModalHook'
import api from '../../../api/api'
import { UseLoading } from '../../../hooks/UseLoading/UseLoading'
import { UseDataProfile } from '../../../hooks/UseDataProfile/UseDataProfile'
import { MessageServices } from '../../../services/MessageServices'

export default function DeleteModal({ id, setData, data,setShowResponse,showResponse }) {
    const [hasAnimated, setHasAnimated] = useState(false)
    const [validEmail, setValidEmail] = useState("!")
    const { dataProfile, dataTeachers, searchDataTeachers, targetTeacher, setTargetTeacher } = UseDataProfile()
    const [userEmail, setUserEmail] = useState(targetTeacher ? targetTeacher : "")

    const { loading, setLoading, setLoadingText } = UseLoading()
    const { deleteOneComment } = MessageServices()

    const { closeModal } = UseModalHook()




    useEffect(() => {
        if (!hasAnimated) {
            setHasAnimated(true)
        }
    }, [hasAnimated])
    // useEffect(() => {
    //     console.log("-----Delete Modal em sí------ id")
    //     console.log(id)
    // }, [])
    return (
        <motion.div className='w-full h-full font-poppins fixed inset-0 z-30 bg-calygam-purple-semi-bold/15 backdrop-blur-none flex justify-center items-center'
            initial={hasAnimated ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'tween', duration: 0.7, ease: 'easeInOut' }}>
            <motion.div
                initial={hasAnimated ? false : { scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'tween', duration: 0.7, ease: 'easeInOut' }}
                className='lg:w-[400px] md:w-[300px] w-[250px] rounded-md divide-y divide-gray-200 bg-white min-h-[150px] pb-4 '
            >
                <div className='w-full flex justify-between p-4 items-center'>
                    <div className='flex items-center justify-center gap-x-1'>

                        <p className='text-black md:text-base text-xs bg-red-600 opacity-70 p-1 rounded-md font-medium'>Deletar Comentário</p>
                    </div>
                    <button className='flex outline-none justify-center items-center' onClick={() => closeModal("", "")}>
                        <img src={closeX} alt="fechar" className='md:w-[20px] w-[15px] ' />
                    </button>

                </div>

                <div className='flex justify-around w-full flex-wrap gap-y-2 md:flex-nowrap gap-x-4 p-4 pb-0 items-center'>
                    <button className='outline-none py-2 w-full text-gray-500 border border-gray-200 hover:bg-red-600/50 opacity-60 px-4 rounded-md' onClick={() => {

                        deleteOneComment(id, setData, data)
                        closeModal("", "")
                        setShowResponse(!showResponse)
                    }}><img src={trashIcon} className='w-full h-[35px]' /> </button>

                </div>



            </motion.div>

        </motion.div>
    )
}
