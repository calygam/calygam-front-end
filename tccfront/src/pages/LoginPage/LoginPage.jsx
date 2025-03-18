import React, { useContext, useEffect, useState } from 'react'
import backPage from '../../assets/img/back-page.svg'
import mobileLoginDesert from '../../assets/img/mobile-login-desert.jpg'
import desktopLoginDesert from '../../assets/img/desktop-login-desert.jpg'
import ComponentToggleContext from '../../context/ComponentToggleContext.jsx'
import AuthFormComponent from '../../components/AuthFormComponent/AuthFormComponent.jsx'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header.jsx'
import { TargetBackgroundByWidth } from '../../utils/TargetBackgroundByWidth/TargetBackgroundByWidth.js'
import api from '../../api/api.js'
import { CalygamAuthContext } from '../../context/CalygamAuthContext/CalygamAuthContext.jsx'
import LoadingCrazy from '../../components/LoadingCrazy/LoadingCrazy.jsx'
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
    <div       style={{
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
          </div>
    <div className='w-full min-h-lvh flex flex-col h-full '  >
      
      <Link className='w-full mt-3 pl-5' to={"/Register"}>
        <img src={backPage} alt="" className='w-6 h-6'/>

      </Link>
      <div className='mt-4'>
      <AuthFormComponent className={"mt-3"} actionName={"Login"}  nameRequired={false} newUser={true} actionForm={"Entrar"} handleSendFormAuth={loginStyleForm} errorTarget={""}/>
      </div>

      
      
    </div>
    </div>
  )
}
