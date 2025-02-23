import React, { useContext, useEffect } from 'react'
import backPage from '../../assets/img/back-page.svg'
import ComponentToggleContext from '../../context/ComponentToggleContext.jsx'
import AuthFormComponent from '../../components/AuthFormComponent/AuthFormComponent.jsx'
export default function LoginPage() {
   

  return (
    <div className='w-full min-h-lvh flex flex-col h-full mt- bg-mobile-login-desert md:bg-desktop-login-desert bg-cover bg-no-repeat bg-center'>
     
      <div className='w-full mt-3 pl-5'>
        <img src={backPage} alt="" className='w-6 h-6'/>

      </div>
      <div className='mt-4'>
      <AuthFormComponent className={"mt-3"} actionName={"Login"}  nameRequired={false} newUser={true} actionForm={"Entrar"}/>
      </div>

      
      
    </div>
  )
}
