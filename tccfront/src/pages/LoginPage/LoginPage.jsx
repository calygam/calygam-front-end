import React, { useContext, useEffect, useState } from 'react'
import backPage from '../../assets/img/back-page.svg'
import mobileLoginDesert from '../../assets/img/waves-login.png'
import desktopLoginDesert from '../../assets/img/waves-login.png'
import trailCalygamLogo from '../../assets/img/trail-calygam-logo.svg'
import AuthFormComponent from '../../components/AuthFormComponent/AuthFormComponent.jsx'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header.jsx'

import { TargetBackgroundByWidth } from '../../utils/TargetBackgroundByWidth/TargetBackgroundByWidth.js'
import api from '../../api/api.js'
import { CalygamAuthContext } from '../../context/CalygamAuthContext/CalygamAuthContext.jsx'
import LoadingCrazy from '../../components/LoadingCrazy/LoadingCrazy.jsx'
import { motion } from 'framer-motion'

export default function LoginPage() {

    const { 
      userEmail, setUserEmail,
      userPassword, setUserPassword,
} = useContext(CalygamAuthContext)
  const [TargetImagePerWidth, setTargetImagePerWidth] = useState("")

  const navigate = useNavigate()

  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    localStorage.removeItem("token")
  },[])
  
  
   
    const loginStyleForm = async(e)=>{
      e.preventDefault()
      try{
        setLoading(true)
        const response = await api.post("/auth/login",{
          'userEmail':userEmail,
          'userPassword':userPassword
        })
        localStorage.setItem('token',response.data.token)
        navigate("/home")
      }
      catch(e){
        alert("Esse usuário não pode ser autenticado, verifique se os valores estão corretas ")
      }
      finally{
        setUserEmail("")
        setUserPassword("")
        setLoading(false)
      }
  
    }

    useEffect(() => {
      const resetEvents = TargetBackgroundByWidth(mobileLoginDesert, desktopLoginDesert, setTargetImagePerWidth)
      return resetEvents
    }, [])

  return (
    <div className='overflow-hidden min-h-screen'       style={{
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
          </div>
  
      
   
            <div className='grid md:grid-cols-2 grid-cols-1 w-full place-items-center md:place-items-stretch   overflow-hidden  '
>
        <div>
          <img src={trailCalygamLogo} alt="" className='lg:w-[700px] lg:h-[700px] md:w-[400px] w-[50px] h-[50px]  md:h-[400px]' />
        </div>
      <AuthFormComponent className={"mt-3"} actionName={"Login"}  nameRequired={false} newUser={true} actionForm={"Entrar"} handleSendFormAuth={loginStyleForm} errorTarget={""}/>
      </div>

      
      
  
    </div>
  )
}
