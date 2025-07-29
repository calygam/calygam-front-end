import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { HandleEnterInTrail } from '../../utils/HandleEnterInTrail/HandleEnterInTrail'
import { HandleEnterInTrailTeacher } from '../../utils/HandleEnterInTrail/HandleEnterInTrailTeacher'
import eyeOpen from '../../assets/img/eye-pass-open.png'
import eyeClose from '../../assets/img/eye-pass-close.png'
import { RegexPassword } from '../../utils/RegexPassword/RegexPassword'
import { UseLoading } from '../../hooks/UseLoading/UseLoading'
export default function PublishTrail({ setIsPublish, isPublish, trailName, setTrailCode, trailCode, handleUpdate, trailId,}) {
  const {setLoading,setLoadingText} = UseLoading()

  const [hasAnimated, setHasAnimated] = useState(false)
  const [eyeIsOpen, setEyeIsOpen] = useState(false)
  const [passwordValue, setPasswordValue] = useState("")
  const [passError, setPassError] = useState(" ")
  const handlePasswordValue = (passValidate) => {
    let targetPassValid = passValidate
    setPassError(() => RegexPassword(targetPassValid))
    if (targetPassValid.length > 20) return
    setPasswordValue(targetPassValid)

  }

  const codeHandleChange = (e) => {
    const input = e.target.value
    if (input.length > 16) {
      return
    }
    else {
      setTrailCode(input)
    }

  }
  const handleMapperProgressTeacer = async(e) => {
    try{
      setLoading(true)
      setLoadingText("Preparando o ambiente... ,  aguarde um momento")
    await HandleEnterInTrailTeacher(trailId, passwordValue)
    await handleUpdate(e)
    }catch(e){
    console.log("algo deu errado" + e)
    }
    finally{
      setLoading(false)
      setLoadingText("")
      searchTrails()
    }
  }
  return (
    <motion.div className={`w-full  font-poppins   fixed inset-0 z-30 ${isPublish ? "overflow-hidden" : "overflow-y-auto"} bg-calygam-purple-semi-bold/50 pb-2 custom-scrollbar backdrop-blur-md flex justify-center  items-start`}
      key={"batata"}
      initial={hasAnimated ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'spring', stiffness: 200, mass: 2 }}
    >
      <motion.div
        key={"feijão"}
        initial={hasAnimated ? false : { scale: 0, rotateX: -50, rotateY: 35 }}
        exit={{ opacity: 0, scale: 0 }}
        animate={{ scale: 1, rotateX: 0, rotateY: 0 }}
        transition={{ type: 'spring', stiffness: 250, mass: 1 }}
        className='lg:w-[600px] md:w-[425px] w-[300px]
             bg-white rounded-md divide-y divide-gray-200 pb-4
               mt-16 mb-8'
      >
        <div className='w-full flex justify-between items-center px-4 py-3 border-b border-gray-200'>
          <h4 className='text-black text-base font-semibold'>Publicando trilha</h4>
          <button onClick={() => setIsPublish(false)} className='text-gray-500 hover:text-black transition'>
            X
          </button>
        </div>

        <div className='px-4 py-2 flex flex-col gap-y-2'>
          <p className='text-purple-800 font-medium text-sm bg-purple-200/50 rounded-md w-fit px-2 py-1'>{trailName}</p>

          <div className='flex flex-col bg-gray-100 p-3 rounded-md mt-1'>
            <p className='text-gray-700 text-xs'>Digite o código abaixo para confirmar</p>
            <p className='text-purple-700 text-xs font-semibold bg-purple-300/50 rounded-md w-fit px-2 py-1 mt-2'>calygam up trail</p>

            <input
              type="text"
              value={trailCode}
              onChange={(e) => codeHandleChange(e)}
              className='text-xs mt-2 px-2 py-1 border-b-2 border-purple-500 bg-transparent text-gray-800 focus:outline-none'
            />
            <div className='flex flex-col '>
              <label htmlFor='passwordTrail' className='text-sm my-1'>Informe uma Senha</label>
              <div className='w-full border-2 border-gray-500 pr-2 bg-white rounded-xl overflow-hidden flex'>


                <input type={eyeIsOpen ? "text" : "password"} id='passwordTrail' autoComplete='off' name='passwordTrail' className='w-full outline-none text-black pl-1 px-1  text-base rounded-lg' placeholder={"Digite uma Senha"} value={passwordValue} onChange={(e) => handlePasswordValue(e.target.value)} />

                <button type='button' className='bg-white outline-none rounded-r-lg' onClick={() => setEyeIsOpen(!eyeIsOpen)}>
                  <img src={eyeIsOpen ? eyeOpen : eyeClose} alt="" className='w-[25px] outline-none h-[25px] object-cover rounded-r-lg' />
                </button>
              </div>
              <p className={`text-xs font-semibold ${passError ? "text-red-500" : "text-green-500"} max-w-[200px] my-2`}>{passError ? `${passError && passError.length > 1 ? "*" : ""}${passError}` : "° Senha Segura."}</p>
            </div>
          </div>

          <div className='flex justify-center mt-4'>
            {trailCode.trim() === "calygam up trail" && !passError ? (
              <button
                type='button'
                onClick={(e) => handleMapperProgressTeacer(e)}
                className='outline-none bg-purple-500 hover:bg-purple-600 rounded-md py-2 px-4 text-white font-medium transition'
              >
                Tornar pública
              </button>
            ) : (
              <button
                type='button'
                disabled
                className='outline-none bg-purple-500/50 cursor-not-allowed rounded-md py-2 px-4 text-white'
              >
                Tornar pública
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
