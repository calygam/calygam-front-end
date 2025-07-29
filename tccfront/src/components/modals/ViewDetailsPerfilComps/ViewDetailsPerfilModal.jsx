import React, { useEffect, useReducer, useState } from 'react'
import closeX from '../../../assets/img/close-x.svg'
import { acceleratedValues, motion } from 'framer-motion'
import { UseLoading } from '../../../hooks/UseLoading/UseLoading'
import { UseDataProfile } from '../../../hooks/UseDataProfile/UseDataProfile'
import { UseModalHook } from '../../../hooks/UseModalHook/UseModalHook'
import { useProfileReducer } from '../../../utils/ContextReducers/DataProfileReducer/useProfileReducer'

//images
import eyeOpen from '../../../assets/img/eye-pass-open.png'
import eyeClose from '../../../assets/img/eye-pass-close.png'
import loadingImages from '../../../assets/img/loading-images.svg'
import api from '../../../api/api'
import { RegexEmail } from '../../../utils/RegexEmail/RegexEmail'
import { RegexPassword } from '../../../utils/RegexPassword/RegexPassword'

export default function ViewDetailsPerfil() {
    const { dataProfile, searchDataProfile } = UseDataProfile()
    const { setLoading, setLoadingText } = UseLoading()
    const [validEmail, setValidEmail] = useState("!")
    const [isImageLoading, setIsImageLoading] = useState(true);
    const { closeModal } = UseModalHook()
    const { profile, setMultipleProfileFields, setFieldErrors, fieldErrors, setProfileField } = useProfileReducer()

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setProfileField("userImage", file)
            const imagePreviewUrl = URL.createObjectURL(file)
            setProfileField("userImagePreview", imagePreviewUrl)
        }
    }

    useEffect(() => {
        setMultipleProfileFields({
            userName: dataProfile.userName,
            userEmail: dataProfile.userEmail,
            userPassword: "",
            userNewPassword: "",
            userImagePreview: dataProfile.userImage,
            userImage: null
        }
        )
    }, [dataProfile])
    useEffect(() => {
        console.log(profile)
    }, [profile])

    const handleSubmitChangeCredentials = async () => {
        const formData = new FormData()
        formData.append("userName", profile.userName)
        formData.append("userEmail", profile.userEmail.includes(dataProfile.userEmail) ? "" : profile.userEmail)
        formData.append("userPassword", profile.userPassword)
        formData.append("userNewPassword", profile.userNewPassword)
          if (profile.userImage) {
        formData.append("userMultipartFile", profile.userImage);
    }
        try {
            setLoading(true)
            setLoadingText("editando credenciais...")
            const response = await api.put("users/editOne", formData)
            console.log(response.data)
            closeModal("Credenciais modificadas", "")
        } catch (e) {
            console.log(e?.response?.data)
             closeModal("", e?.response?.data)

        } finally {
            setLoading(false)
            setLoadingText("")
        
            searchDataProfile()
        }

    }


    useEffect(() => {
        profile.userEmail != '' ?
            setValidEmail(RegexEmail(profile.userEmail)) : setValidEmail("!")
    }, [profile.userEmail])

    useEffect(() => {
        profile.userPassword != '' ?
            setFieldErrors("validPassword", RegexPassword(profile.userPassword)) : setFieldErrors("validPassword", RegexPassword("false"))
        profile.userNewPassword != '' ?
            setFieldErrors("validNewPassword", RegexPassword(profile.userNewPassword)) : setFieldErrors("validNewPassword", RegexPassword("false"))
    }, [profile.userPassword, profile.userNewPassword])








    return (
        <motion.div className='w-full h-full pt-[300px] md:pt-0 font-poppins fixed   inset-0 z-30 overflow-y-auto custom-scrollbar bg-calygam-purple-semi-bold/50 backdrop-blur-md flex justify-center items-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, mass: 2 }}
            exit={{ opacity: 0 }}>

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 150, mass: 1 }}
                exit={{ scale: 0 }}
                className='lg:w-[550px] md:w-[400px] relative   w-[300px] rounded-md divide-y divide-gray-200 bg-white min-h-[150px] pb-4 '
            >
                <div className='w-full flex  justify-between p-4 items-center'>
                    <div>
                        <p className='text-calygam-purple-semi-strong md:text-base text-sm font-semibold'>Configurações de perfil</p>
                    </div>

                    <button className='flex outline-none justify-center items-center' onClick={() => {

                        closeModal("", "")

                    }}>
                        <img src={closeX} alt="fechar" className='md:w-[20px] w-[15px] ' />
                    </button>

                </div>
                <div className='flex flex-col w-full'>

                    <div className='grid w-full md:grid-cols-2 grid-cols-1 place-items-center md:place-items-stretch mx-auto p-4'>
                        <div className='flex flex-col gap-y-2'>
                            <p className='text-xs  font-semibold'>Detalhes</p>
                            <label htmlFor='input-image-perfil' className=''>
                                <p className='text-xs'>Selecione uma imagem</p>
                            </label>
                            {profile.userImage != "" || dataProfile.userImage != "" ?
                                <label htmlFor='input-image-perfil' className='relative cursor-pointer rounded-full overflow-hidden  w-fit flex'>
                                    <span className='absolute flex bg-gradient-to-tr w-fit inset-0 justify-center items-center from-black via-gray-700 to-gray-700  rounded-full animate-spin'>
                                        {isImageLoading && dataProfile.userImage != "" &&
                                            <img src={loadingImages} alt="" className='w-[150px]  h-[150px] ' />
                                        }
                                    </span>
                                    <img src={profile.userImagePreview != "" ? profile.userImagePreview : dataProfile?.userImage} alt="" className='w-[150px]  hover:scale-110 transition-all   z-10 h-[150px] flex rounded-full' onLoad={() => setIsImageLoading(false)} />
                                </label>
                                :
                                <label htmlFor='input-image-perfil' className='relative flex justify-center border border-dashed border-purple-200 min-h-[100px] min-w-[100px] items-center bg-black/35 rounded-full w-fit'>
                                    {dataProfile.userImagePreview &&
                                        <img src={dataProfile.userImagePreview} alt="" className='w-[150px] absolute z-10 h-[150px] rounded-full' />
                                    }


                                </label>}
                            <p className='text-calygam-purple-semi-strong text-sm'>@{dataProfile.userName}</p>
                            <input type="file" accept='image/*' id='input-image-perfil' name='input-image-perfil' onChange={(e) => handleImageChange(e)} className='hidden' />
                        </div>

                        <div className='flex flex-col mt-[25%] w-full gap-y-2'>
                            <label htmlFor="input-for-name">
                                <p className='text-sm'>Nome:</p>
                                <div className='rounded-md bg-gray-600/25  '>
                                    <input type="text" id='input-for-name' name='input-for-name' placeholder='Ex. nightzinho' className='outline-none text-xs p-2 w-full text-black bg-transparent border-0' value={profile.userName} onChange={(e) => setProfileField("userName", e.target.value)} />
                                </div>
                            </label>
                            <label htmlFor="input-for-email">
                                <p className='text-sm'>Email:</p>
                                <div className='rounded-md bg-gray-600/25  '>
                                    <input type="text" id='input-for-email' name='input-for-email' placeholder='Ex. nightzinho@gmail.com' className='outline-none w-full text-xs p-2 text-black bg-transparent border-0' value={profile.userEmail} onChange={(e) => setProfileField("userEmail", e.target.value)} />
                                </div>
                            </label>
                            {validEmail != "" && profile.userEmail.length > 0 ? <p className='text-red-600 text-xs'>*Email inválido</p> : null}
                            <div className='flex flex-col gap-y-1  '>
                                <label htmlFor="input-for-old-password" className={`font-light text-black text-sm`}>Senha Atual:</label>
                                <div className='rounded-md flex items-center bg-gray-600/25  '>
                                    <input type={fieldErrors.showPassword ? "text" : "password"} id='input-for-old-password' name='input-for-old-password' placeholder='Ex.' className='outline-none text-xs w-full  p-2 text-black bg-transparent border-0' value={profile.userPassword} onChange={(e) => setProfileField("userPassword", e.target.value)} />
                                    <img src={fieldErrors.showPassword ? eyeOpen : eyeClose} alt="" className='w-6 h-6 opacity-90 cursor-pointer' onClick={() => setFieldErrors("showPassword", !fieldErrors.showPassword)} />
                                </div>
                            </div>


                            {profile.userPassword != "" && fieldErrors.validPassword != "" ?
                                <p className='text-xs text-red-grad-bold-type font-semibold'>{RegexPassword(profile.userPassword)}</p>
                                : null}

                            <div className='flex flex-col gap-y-1  '>
                                <label htmlFor="input-for-new-password" className={`font-light text-black text-sm`}>Nova Senha:</label>
                                <div className='rounded-md flex items-center bg-gray-600/25  '>
                                    <input type={fieldErrors.showNewPassword ? "text" : "password"} id='input-for-new-password' name='input-for-new-password' placeholder='Ex.' className='outline-none text-xs w-full  p-2 text-black bg-transparent border-0' value={profile.userNewPassword} onChange={(e) => setProfileField("userNewPassword", e.target.value)} />
                                    <img src={fieldErrors.showNewPassword ? eyeOpen : eyeClose} alt="" className='w-6 h-6 opacity-90 cursor-pointer' onClick={() => setFieldErrors("showNewPassword", !fieldErrors.showNewPassword)} />
                                </div>
                            </div>

                            {profile.userNewPassword != "" && fieldErrors.validNewPassword != "" ?
                                <p className='text-xs text-red-grad-bold-type font-semibold'>{RegexPassword(profile.userNewPassword)}</p>
                                : null}


                        </div>

                    </div>
                    <div className='p-4'>
                        {validEmail != "" ?
                            <button type='button' disabled={true} className='w-full outline-none rounded-md  flex items-center justify-center h-[45px] hover:border-0 cursor-not-allowed transition-all hover:translate-y-1 text-white/75 bg-calygam-purple-medium-light/45  px-4 py-2' onClick={handleSubmitChangeCredentials}>
                                Salvar configurações
                            </button> :
                            <button type='button' className='w-full outline-none rounded-md border-b-4 flex items-center justify-center h-[45px] hover:border-0 border-purple-900/50 transition-all hover:translate-y-1 text-white bg-calygam-purple-medium-light  px-4 py-2' onClick={handleSubmitChangeCredentials}>
                                Salvar configurações
                            </button>}
                    </div>
                </div>





            </motion.div>

        </motion.div>
    )

}
