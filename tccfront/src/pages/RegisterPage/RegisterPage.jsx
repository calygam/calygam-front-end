import React, { useContext, useEffect, useState } from 'react'
import AuthFormComponent from '../../components/AuthFormComponent/AuthFormComponent'
import Header from '../../components/Header/Header'

import backPage from '../../assets/img/back-page.svg'
import mobileLoginDesert from '../../assets/img/waves-login.png'
import trailCalygamLogo from '../../assets/img/trail-calygam-logo.svg'
import desktopLoginDesert from '../../assets/img/waves-login.png'
import { TargetBackgroundByWidth } from '../../utils/TargetBackgroundByWidth/TargetBackgroundByWidth'
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
  const [loading,setLoading] = useState(false)
  const [errorMessage,setErrorMessage]= useState('')
  const [errorForFront,setErrorForFront] = useState('certo')
  const navigate = useNavigate()
  useEffect(()=>{
    userCpf.length >8 && userCpf.length <=14?
    setErrorForFront(getValidCPF(userCpf)):
    null
    
  },[userCpf])
  useEffect(()=>{
    setErrorMessage(errorForFront ?'':"CPF inválido")
  },[errorForFront])
   useEffect(()=>{
      localStorage.removeItem("token")
    },[])



  const handleSendFormRegisterAuth = async(e)=>{
    e.preventDefault();
    try{
      setLoading(true)
    await api.post("/auth/register",{
      "userName": userName,
      'userEmail':userEmail,
      'userPassword':userPassword,
     
      'userCpf':userCpf
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
  finally{
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
        backgroundRepeat: 'no-repeat'
      }}>
      {/* <header>
        <Header />

      </header> */}
      <div className=''>
        {loading?
          <LoadingCrazy/>
        :null}
        <div className='w-full  flex flex-col  '  >
            {/* <Link className='w-full mt-1 pl-5' to={"/"}>
        <img src={backPage} alt="" className='w-6 h-6'/>

      </Link> */}
      <div className='grid md:grid-cols-2 grid-cols-1 w-full place-items-center md:place-items-stretch   overflow-hidden  '
  >
        <div>
          <img src={trailCalygamLogo} alt="" className='w-[100px] h-[100px]' />
        </div>
        <AuthFormComponent actionName={"Criar Conta"} nameRequired={true} actionForm={"Cadastrar"} handleSendFormAuth={handleSendFormRegisterAuth} errorTarget={errorMessage} cpfRequired={true} />
        </div>
      </div>
      </div>
    </div>
  )
}
