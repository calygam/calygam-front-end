import React, { useState } from 'react'
import MenuCalygamAdmin from '../../components/MenuCalygamAdmin/MenuCalygamAdmin.jsx'
export default function CalygamSidebar({isEnabled,setIsEnabled}) {
    
  return (
    <div>
                    {/* <div className='w-full lg:hidden flex justify-end pr-5 text-black py-4 pb-20 font-black text-xl'>
                    <button onClick={()=>setIsEnabled(!isEnabled)}> {isEnabled?"X":null}</button></div> */}
      <MenuCalygamAdmin isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
    </div>
  )
}
