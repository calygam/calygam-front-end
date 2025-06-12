import React, { useContext, useEffect, useState } from 'react'
import AuthFormComponent from '../../components/AuthFormComponent/AuthFormComponent'
import Header from '../../components/Header/Header'

import backPage from '../../assets/img/back-page.svg'
import mobileLoginDesert from '../../assets/img/waves-login.png'
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
    <div className='w-full  flex flex-col  overflow-hidden '
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
      <motion.div className='grid grid-cols-2 w-full   overflow-hidden  '
      initial={{translateX:"130vw"}}
      animate={{translateX:"0vw"} }
      
      transition={{type:"tween",duration:0.8,ease:"easeInOut"}}>
        <div></div>
        <AuthFormComponent actionName={"Cadastre-se"} nameRequired={true} actionForm={"Cadastrar"} handleSendFormAuth={handleSendFormRegisterAuth} errorTarget={errorMessage} cpfRequired={true} />
        </motion.div>
      </div>
      </div>
    </div>
  )
}
