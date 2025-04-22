import React from 'react'
import HelloUser from '../HelloUser/HelloUser'
import backPage from '../../assets/img/back-page.svg'
import { Link } from 'react-router-dom'
export default function UserInfoViewManagement() {
  return (
    <div>
       <div className='w-[95%] mx-auto my-4 flex flex-col items-center space-y-8 '>
      <HelloUser/>
      <Link className='w-full mt-3 pl-5' to={"/home"}>
        <img src={backPage} alt="" className='w-6 h-6'/>

      </Link>
      </div> 

    </div>
  )
}
