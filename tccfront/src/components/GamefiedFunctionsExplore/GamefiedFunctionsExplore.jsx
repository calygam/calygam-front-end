import React from 'react'
import InviteToFunctions from '../../components/InviteToFunctions/InviteToFunctions.jsx'
import PrincipalFunctionsSupport from '../../components/PrincipalFunctionsSupport/PrincipalFunctionsSupport.jsx'
export default function GamefiedFunctionsExplore() {
  return (
    <div className='mx-auto flex flex-wrap lg:justify-between gap-y-24 justify-center items-center font-poppins md:w-[80%] w-[90%]'>
      <InviteToFunctions/>
      <PrincipalFunctionsSupport/>
      
    </div>
  )
}
