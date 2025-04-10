import React, { useState } from 'react'
import CalygamSidebar from '../../components/CalygamSidebar/CalygamSidebar.jsx'
export default function AssignTeacher() {
    const [isEnabled,setIsEnabled] = useState(false)
  return (
    
    <div className='w-full h-full grid lg:grid-cols-[max-content_1fr_25%] md:grid-cols-2 grid-cols-1'>
        <div className='flex lg:order-1 order-3 '>
      <CalygamSidebar isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
      </div>
      <div className='bg-green-100 h-full lg:order-2 order-2'>a</div>
      <div className='bg-orange-600  h-full lg:order-3 order-1'>b</div>
    </div>
  )
}
