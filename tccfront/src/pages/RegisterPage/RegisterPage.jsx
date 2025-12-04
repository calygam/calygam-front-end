import React, { useContext, useEffect, useState } from 'react'
import AuthFormComponent from '../../components/AuthFormComponent/AuthFormComponent'
import Header from '../../components/Header/Header'

import backPage from '../../assets/img/back-page.svg'
import mobileLoginDesert from '../../assets/img/white-login-view.jpg'
import trailCalygamLogo from '../../assets/img/trail-calygam-logo.svg'
import desktopLoginDesert from '../../assets/img/white-login-view.jpg'
import { TargetBackgroundByWidth } from '../../utils/TargetBackgroundByWidth/TargetBackgroundByWidth'
import discussionPurple from '../../assets/img/discussion-purple.png'
import api from '../../api/api'
import { CalygamAuthContext } from '../../context/CalygamAuthContext/CalygamAuthContext'
import LoadingCrazy from '../../components/LoadingCrazy/LoadingCrazy'
import { getValidCPF } from '../../utils/ValidateCPF/ValidateCPF'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";

export default function RegisterPage() {
  const { userName, setUserName,
    userEmail, setUserEmail,
    userPassword, setUserPassword,
    userPhone, setUserPhone,
    userCpf, setUserCpf } = useContext(CalygamAuthContext)
  const [TargetImagePerWidth, setTargetImagePerWidth] = useState("")
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [errorForFront, setErrorForFront] = useState('certo')
  const navigate = useNavigate()
  useEffect(() => {
    userCpf.length > 8 && userCpf.length <= 14 ?
      setErrorForFront(getValidCPF(userCpf)) :
      null

  }, [userCpf])
  useEffect(() => {
    setErrorMessage(errorForFront ? '' : "CPF inválido")
  }, [errorForFront])
  useEffect(() => {
    localStorage.removeItem("token")
  }, [])



  const handleSendFormRegisterAuth = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      await api.post("/auth/register", {
        "userName": userName,
        'userEmail': userEmail,
        'userPassword': userPassword,

        'userCpf': userCpf
      })
      setUserName("")
      setUserEmail("")
      setUserCpf("")
      setUserPassword("")
      navigate("/Login")

    }
    // catch(e){
    //   e.response.data?setErrorForFront(true):setErrorForFront(false)
    // }
    finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    const resetEvents = TargetBackgroundByWidth(mobileLoginDesert, desktopLoginDesert, setTargetImagePerWidth)
    return resetEvents
  }, [])



  return (
    <div className='w-full  flex flex-col min-h-screen  overflow-hidden '
      style={{
        backgroundImage: TargetImagePerWidth,

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}>
      {/* <header>
        <Header />

      </header> */}
      <div className=''>
        {loading ?
          <LoadingCrazy />
          : null}
        <div className='w-full  flex flex-col  '  >
          {/* <Link className='w-full mt-1 pl-5' to={"/"}>
        <img src={backPage} alt="" className='w-6 h-6'/>

      </Link> */}
          <div className='grid md:grid-cols-2 grid-cols-1 gap-x-12 w-full place-items-center md:place-items-stretch   overflow-hidden  '
          >
            <div
              className='md:bg-white/20  h-full md:min-h-[100dvh] gap-6 flex flex-col font-poppins items-center text-start   md:backdrop-blur-lg'

            >
              <motion.img
                initial={{ opacity: 0, y: 20, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                src={discussionPurple}
                alt=""
                className='lg:w-[600px]  lg:h-[600px] hidden md:block md:w-[400px] w-[300px] h-[300px] md:h-[400px]'
              />
              <div className='hidden md:block relative lg:text-2xl lg:-mt-32 md:text-base md:-mt-24 '>
                <p className=' text-calygam-purple-medium-light     font-semibold'>Entre na sua jornada de aprendizado</p>
                <p className=' text-calygam-purple-medium-light     font-semibold'>e desbloqueie conquistas a cada</p>
                <p className=' text-calygam-purple-medium-light   font-semibold'>passo!</p>
              </div>
            </div>
            <AuthFormComponent actionName={"Criar Conta"} nameRequired={true} actionForm={"Cadastrar"} handleSendFormAuth={handleSendFormRegisterAuth} errorTarget={errorMessage} cpfRequired={true} />
          </div>
        </div>
      </div>
    </div>
  )
}
