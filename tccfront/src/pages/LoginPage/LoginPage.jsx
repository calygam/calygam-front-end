import React, { useContext, useEffect, useState } from 'react'
import backPage from '../../assets/img/back-page.svg'
import mobileLoginDesert from '../../assets/img/waves-login.png'
import desktopLoginDesert from '../../assets/img/waves-login.png'
import trailCalygamLogo from '../../assets/img/trail-calygam-logo.svg'
import discussionWhite from '../../assets/img/discussion-white.png'
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
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
          }}>
    {/* <header>
    <Header />
                
  </header> */}
        <div className=''>
          {loading?
            <LoadingCrazy/>
          :null}
          </div>
  
      
   
 <div className='grid md:grid-cols-2 grid-cols-1 gap-x-12 w-full place-items-center md:place-items-stretch   overflow-hidden  '
          >
            <motion.div
              className='md:bg-white/20 h-full flex flex-col font-poppins items-center text-start   md:backdrop-blur-lg'
              initial={{ opacity: 0, y: 20, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <img
                src={discussionWhite}
                alt=""
                className='lg:w-[600px]  lg:h-[600px] md:w-[400px] w-[300px] h-[300px] md:h-[400px]'
              />
              <div className='relative lg:text-2xl lg:-mt-32 md:text-base md:-mt-24 '>
                <p className=' text-white     font-semibold'>Entre na sua jornada de aprendizado</p>
                <p className=' text-white     font-semibold'>e desbloqueie conquistas a cada</p>
                <p className=' text-white   font-semibold'>passo!</p>
              </div>
            </motion.div>
      <AuthFormComponent className={"mt-3"} actionName={"Login"}  nameRequired={false} newUser={true} actionForm={"Entrar"} handleSendFormAuth={loginStyleForm} errorTarget={""}/>
      </div>

      
      
  
    </div>
  )
}
