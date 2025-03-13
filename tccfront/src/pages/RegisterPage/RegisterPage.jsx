import React, { useContext, useEffect, useState } from 'react'
import AuthFormComponent from '../../components/AuthFormComponent/AuthFormComponent'
import Header from '../../components/Header/Header'
import mobileLoginDesert from '../../assets/img/mobile-login-desert.jpg'
import desktopLoginDesert from '../../assets/img/desktop-login-desert.jpg'
import { TargetBackgroundByWidth } from '../../utils/TargetBackgroundByWidth/TargetBackgroundByWidth'
import api from '../../api/api'
import { CalygamAuthContext } from '../../context/CalygamAuthContext/CalygamAuthContext'
import LoadingCrazy from '../../components/LoadingCrazy/LoadingCrazy'

export default function RegisterPage() {
  const { userName, setUserName,
    userEmail, setUserEmail,
    userPassword, setUserPassword,
    userPhone, setUserPhone,
    userCpf, setUserCpf } = useContext(CalygamAuthContext)
  const [TargetImagePerWidth, setTargetImagePerWidth] = useState("")
  const [loading,setLoading] = useState(false)

  const handleSendFormRegisterAuth = async(e)=>{
    e.preventDefault();
    try{
      setLoading(true)
    await api.post("/auth/register",{
      "userName": userName,
      'userEmail':userEmail,
      'userPassword':userPassword,
      'userTelefone':userPhone,
      'userCpf':userCpf
    })
  }catch(e){
    console.log("Deu ruim " + e)
  }
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
      <div className='mt-16'>
        {loading?
          <LoadingCrazy/>
        :null}
        <AuthFormComponent actionName={"Cadastre-se"} nameRequired={true} actionForm={"Login"} handleSendFormAuth={handleSendFormRegisterAuth} />
      </div>
    </div>
  )
}
