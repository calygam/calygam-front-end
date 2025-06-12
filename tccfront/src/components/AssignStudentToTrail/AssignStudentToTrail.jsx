import React, { useState } from 'react'
import closeModal from '../../assets/img/close-enter-to-trail.svg'

//utils
import { HandleEnterInTrail } from '../../utils/HandleEnterInTrail/HandleEnterInTrail.js'
import { RegexPassword } from '../../utils/RegexPassword/RegexPassword.js'

//hooks
import { UseLoading } from '../../hooks/UseLoading/UseLoading.js'
import { UseReadAllTrailsHook } from '../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook.js'
//images
import eyeOpen from '../../assets/img/eye-pass-open.png'
import eyeClose from '../../assets/img/eye-pass-close.png'
import { useNavigate } from 'react-router-dom'


export default function AssignStudentToTrail({ setModelIsOpen, trailData }) {
      const {searchtrails} = UseReadAllTrailsHook()
      







      
      const navigate = useNavigate()
    const { loading, setLoading, setLoadingText } = UseLoading()
    const loadingData = {
      loadingState:loading,
      setLoadingState:setLoading,
      setterText:setLoadingText
    }
  const [passwordValue, setPasswordValue] = useState("")
  const [eyeIsOpen,setEyeIsOpen] = useState(false)
  const [passError, setPassError] = useState(" ")
  const handlePasswordValue = (passValidate) => {
    let targetPassValid = passValidate
    setPassError(() => RegexPassword(targetPassValid))
    if (targetPassValid.length > 20) return
    setPasswordValue(targetPassValid)

  }
  return (
    <div className="fixed inset-0 z-50 font-poppins w-full h-full min-h-screen bg-black/75 flex items-center justify-center">

      <div className="bg-black/50 p-4  min-h-[60px] shadow-xl shadow-gray-700/50 text-white flex flex-col  gap-y-5  justify-center rounded-tl-3xl rounded-br-3xl">
        <div className='w-full flex justify-end items-center   '>

          <button type='button' className='outline-none bg-white rounded-md' onClick={() => setModelIsOpen(false)}><img src={closeModal} alt="" className='w-[25px] h-[25px]' /></button>
        </div>
        <h2 className=''>Participar de {trailData.trailName}</h2>

        <div className='flex flex-col '>
          <label htmlFor='passwordTrail' className='text-xs'>Informe uma Senha</label>
          <div className='w-fit bg-white rounded-xl flex'>
            <div className='bg-black rounded-l-lg'>
              <img src={trailData.trailImage} alt="" className='w-[35px] h-[35px] object-cover rounded-l-lg' />
            </div>

            <input type={eyeIsOpen?"text":"password"} id='passwordTrail' autoComplete='off' name='passwordTrail' className=' outline-none text-black pl-1 px-1  text-base rounded-lg' placeholder={"Digite uma Senha"} value={passwordValue} onChange={(e) => handlePasswordValue(e.target.value)} />

            <button type='button'  className='bg-white outline-none rounded-r-lg' onClick={()=>setEyeIsOpen(!eyeIsOpen)}>
              <img src={eyeIsOpen?eyeOpen:eyeClose} alt="" className='w-[25px] outline-none h-[25px] object-cover rounded-r-lg' />
            </button>
          </div>
          <p className={`text-xs font-semibold ${passError ? "text-red-500" : "text-green-500"} max-w-[200px] my-2`}>{passError ? `${passError && passError.length > 1 ? "*" : ""}${passError}` : "° Senha Segura."}</p>
        </div>
        {passError ?
          <button type='button' disabled={true} className='outline-none bg-gradient-to-tr h-[35px]  hover:bg-gradient-to-br cursor-not-allowed  from-black/30 text-white/30 via-gray-500/30 to-gray-700/30 rounded-md p-2' >Fazer Parte</button> :
          <button type='submit' className='outline-none bg-gradient-to-tr h-[35px]  hover:bg-gradient-to-br cursor-pointer  from-black via-gray-500 to-gray-700  rounded-md p-2' onClick={() => HandleEnterInTrail(trailData.trailId, passwordValue,loadingData,searchtrails,navigate,setModelIsOpen)}>Fazer Parte</button>}
      </div>

    </div>
  )
}
