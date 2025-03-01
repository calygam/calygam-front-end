import React from 'react'
import AuthFormComponent from '../../components/AuthFormComponent/AuthFormComponent'
import Header from '../../components/Header/Header'

export default function RegisterPage() {
  return (
    <div className='w-full min-h-lvh flex flex-col h-full  bg-mobile-login-desert md:bg-desktop-login-desert bg-cover bg-no-repeat bg-center'>
          <header>
    <Header />
                
  </header>
        <div className='mt-16'>
        <AuthFormComponent   actionName={"Cadastre-se"}  nameRequired={true} actionForm={"Login"} />
        </div>
      </div>
  )
}
