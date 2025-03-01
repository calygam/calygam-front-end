import React, { useContext, useEffect } from 'react'
import backPage from '../../assets/img/back-page.svg'
import ComponentToggleContext from '../../context/ComponentToggleContext.jsx'
import AuthFormComponent from '../../components/AuthFormComponent/AuthFormComponent.jsx'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header.jsx'
export default function LoginPage() {
   

  return (
    <div>
    <header>
    <Header />
                
  </header>
    <div className='w-full min-h-lvh flex flex-col h-full mt- bg-mobile-login-desert md:bg-desktop-login-desert bg-cover bg-no-repeat bg-center'>
      
      <Link className='w-full mt-3 pl-5' to={"/Register"}>
        <img src={backPage} alt="" className='w-6 h-6'/>

      </Link>
      <div className='mt-4'>
      <AuthFormComponent className={"mt-3"} actionName={"Login"}  nameRequired={false} newUser={true} actionForm={"Entrar"}/>
      </div>

      
      
    </div>
    </div>
  )
}
