import React, { useContext, useEffect, useState } from 'react'
import AuthFormComponent from '../../components/AuthFormComponent/AuthFormComponent'
import Header from '../../components/Header/Header'
import mobileLoginDesert from '../../assets/img/mobile-login-desert.jpg'
import desktopLoginDesert from '../../assets/img/desktop-login-desert.jpg'
import { TargetBackgroundByWidth } from '../../utils/TargetBackgroundByWidth/TargetBackgroundByWidth'
import api from '../../api/api'
import { CalygamAuthContext } from '../../context/CalygamAuthContext/CalygamAuthContext'
import LoadingCrazy from '../../components/LoadingCrazy/LoadingCrazy'
import { getValidCPF } from '../../utils/ValidateCPF/ValidateCPF'
import { useNavigate } from 'react-router-dom'

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
    <div className='w-full min-h-lvh flex flex-col h-full  '
      style={{
        backgroundImage: TargetImagePerWidth,

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
      <header>
        <Header />

      </header>
      <div className=''>
        {loading?
          <LoadingCrazy/>
        :null}
        <AuthFormComponent actionName={"Cadastre-se"} nameRequired={true} actionForm={"Login"} handleSendFormAuth={handleSendFormRegisterAuth} errorTarget={errorMessage} cpfRequired={true} />
      </div>
    </div>
  )
}
