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
import groupMembers from '../../assets/img/group-members.svg'
import closeX from '../../assets/img/close-x.svg'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { UseModalHook } from '../../hooks/UseModalHook/UseModalHook.js'


export default function AssignStudentToTrail({ setModelIsOpen, trailData }) {
  const { searchtrails } = UseReadAllTrailsHook()
 const [hasAnimated, setHasAnimated] = useState(false)
 const {closeModal}= UseModalHook() 
   const { targetTrail} = UseReadAllTrailsHook();








  const navigate = useNavigate()
  const { loading, setLoading, setLoadingText } = UseLoading()
  const loadingData = {
    loadingState: loading,
    setLoadingState: setLoading,
    setterText: setLoadingText
  }
  const [passwordValue, setPasswordValue] = useState("")
  const [eyeIsOpen, setEyeIsOpen] = useState(false)
  const [passError, setPassError] = useState(" ")
  const handlePasswordValue = (passValidate) => {
    let targetPassValid = passValidate
    setPassError(() => RegexPassword(targetPassValid))
    if (targetPassValid.length > 20) return
    setPasswordValue(targetPassValid)

  }
  return (

    <motion.div className='w-full h-full font-poppins fixed inset-0 z-30 bg-calygam-purple-semi-bold/50 backdrop-blur-md flex justify-center items-center'
      initial={hasAnimated ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, mass: 2 }}>
      <motion.div
        initial={hasAnimated ? false : { scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 150, mass: 1 }}
        className='lg:w-[500px] md:w-[325px] w-[250px] rounded-md divide-y divide-gray-800 bg-calygam-black-strong min-h-[150px] pb-4 '
      >
        <div className='w-full flex justify-between p-4 items-center'>
          <div className='flex items-center justify-center gap-x-1'>
            
            <p className='text-white md:text-base text-xs font-medium'>Participar de {trailData.trailName}</p>
          </div>
          <button className='flex outline-none justify-center items-center' onClick={() => closeModal("", "")}>
            <img src={closeX} alt="fechar" className='md:w-[20px] w-[15px] ' />
          </button>

        </div>
        {targetTrail.trailPassword?.length>1?
        <form className='w-full flex flex-col px-4 gap-y-2 my-1 py-2 pb-4'>
         

          <div className='flex flex-col '>
            <label htmlFor='passwordTrail' className='text-sm my-1'>Informe uma Senha</label>
            <div className='w-full border-2 border-gray-500 pr-2 bg-white rounded-xl overflow-hidden flex'>
              <div className='bg-black rounded-l-lg'>
                <img src={trailData.trailImage} alt="" className='w-[50px] h-[50px] object-cover ' />
              </div>

              <input type={eyeIsOpen ? "text" : "password"} id='passwordTrail' autoComplete='off' name='passwordTrail' className='w-full outline-none text-black pl-1 px-1  text-base rounded-lg' placeholder={"Digite uma Senha"} value={passwordValue} onChange={(e) => handlePasswordValue(e.target.value)} />

              <button type='button' className='bg-white outline-none rounded-r-lg' onClick={() => setEyeIsOpen(!eyeIsOpen)}>
                <img src={eyeIsOpen ? eyeOpen : eyeClose} alt="" className='w-[25px] outline-none h-[25px] object-cover rounded-r-lg' />
              </button>
            </div>
            <p className={`text-xs font-semibold ${passwordValue?.length<8 ? "text-red-500" : "text-green-500"} max-w-[200px] my-2`}>{passwordValue?.length<8?"*Pelo menos 8 caracteres":"° Senha Segura."}</p>
          </div>
        </form>:null}
        
        <div className='flex justify-around w-full flex-wrap gap-y-2 md:flex-nowrap gap-x-4 p-4 pb-0 items-center'>

          {targetTrail.trailPassword?.length>0 && passwordValue?.length<8?<button type='button' disabled={true} className='outline-none bg-gradient-to-tr h-[35px]  hover:bg-gradient-to-br cursor-not-allowed  from-calygam-purple-tone-2/30 text-white/45 via-calygam-purple-tone-2/30 to-calygam-purple-tone-2/30 rounded-md p-2' >Fazer Parte</button>:
           <button type='submit' className='outline-none bg-gradient-to-tr h-[35px]  hover:bg-gradient-to-tl cursor-pointer  from-calygam-purple-tone-2 via-calygam-purple-tone-2 to-calygam-purple-tone-2 text-white  rounded-2xl py-2 px-4 ' onClick={() => HandleEnterInTrail(trailData.trailId, passwordValue,loadingData,searchtrails,navigate,setModelIsOpen)}>Fazer Parte</button>}
        </div>



      </motion.div>

    </motion.div>




    // <div className="fixed inset-0 z-50 font-poppins w-full h-full min-h-screen bg-black/75 flex items-center justify-center">

    //   <div className="bg-black/50 p-4  min-h-[60px] shadow-xl shadow-gray-700/50 text-white flex flex-col  gap-y-5  justify-center rounded-tl-3xl rounded-br-3xl">
    //     <div className='w-full flex justify-end items-center   '>

    //       <button type='button' className='outline-none bg-white rounded-md' onClick={() => setModelIsOpen(false)}><img src={closeModal} alt="" className='w-[25px] h-[25px]' /></button>
    //     </div>
    //     <h2 className=''>Participar de {trailData.trailName}</h2>

    //     <div className='flex flex-col '>
    //       <label htmlFor='passwordTrail' className='text-xs'>Informe uma Senha</label>
    //       <div className='w-fit bg-white rounded-xl flex'>
    //         <div className='bg-black rounded-l-lg'>
    //           <img src={trailData.trailImage} alt="" className='w-[35px] h-[35px] object-cover rounded-l-lg' />
    //         </div>

    //         <input type={eyeIsOpen?"text":"password"} id='passwordTrail' autoComplete='off' name='passwordTrail' className=' outline-none text-black pl-1 px-1  text-base rounded-lg' placeholder={"Digite uma Senha"} value={passwordValue} onChange={(e) => handlePasswordValue(e.target.value)} />

    //         <button type='button'  className='bg-white outline-none rounded-r-lg' onClick={()=>setEyeIsOpen(!eyeIsOpen)}>
    //           <img src={eyeIsOpen?eyeOpen:eyeClose} alt="" className='w-[25px] outline-none h-[25px] object-cover rounded-r-lg' />
    //         </button>
    //       </div>
    //       <p className={`text-xs font-semibold ${passError ? "text-red-500" : "text-green-500"} max-w-[200px] my-2`}>{passError ? `${passError && passError.length > 1 ? "*" : ""}${passError}` : "° Senha Segura."}</p>
    //     </div>
    //     {passError ?
    //       <button type='button' disabled={true} className='outline-none bg-gradient-to-tr h-[35px]  hover:bg-gradient-to-br cursor-not-allowed  from-black/30 text-white/30 via-gray-500/30 to-gray-700/30 rounded-md p-2' >Fazer Parte</button> :
    //       <button type='submit' className='outline-none bg-gradient-to-tr h-[35px]  hover:bg-gradient-to-br cursor-pointer  from-black via-gray-500 to-gray-700  rounded-md p-2' onClick={() => HandleEnterInTrail(trailData.trailId, passwordValue,loadingData,searchtrails,navigate,setModelIsOpen)}>Fazer Parte</button>}
    //   </div>

    // </div>
  )
}
