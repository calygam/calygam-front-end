import React, { useState } from 'react'



// Components
import CalygamSidebar from '../../components/CalygamSidebar/CalygamSidebar.jsx'
import DashboardInfoTrails from '../../components/DashboardInfoTrails/DashboardInfoTrails.jsx'
import ModifyTeacherTag from '../../components/ModifyTeacherTag/ModifyTeacherTag.jsx'
import useAuth from '../../hooks/UseJwtChecked/UseJwtChecked.js';
export default function AssignTeacher() {
  const { setToken } = useAuth();
    const [isEnabled,setIsEnabled] = useState(true)
  return (
    
    // <div className='w-full h-full transition-all font-poppins duration-1000 ease-in-out grid lg:grid-cols-[max-content_1fr_max-content] md:grid-cols-[1fr_max-content] grid-cols-1'>
    //     <div className='flex lg:order-1 order-3 '>
    //   <CalygamSidebar isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
    //   </div>
    //   <div className=' flex min-h-lvh lg:order-2 my-8 md:order-1 order-2'>
    //     <DashboardInfoTrails/>
        
    //   </div>
    //   <div className='  flex flex-col items-end my-8 pr-14 pl-6 lg:order-3 md:order-2 order-1'>
    //     <div className='w-full flex items-center   justify-end gap-x-4 flex-wrap'>
    //       <span className='w-10 h-10 flex bg-gray-600/35 rounded-full'></span>
    //       <p className='font-semibold text-xl'>Chile</p>
    //     </div>
    //     <ModifyTeacherTag/>

    //   </div>
    // </div>
    <div className='w-full h-full transition-all font-poppins duration-1000 ease-in-out grid lg:grid-cols-[max-content_1fr_max-content]  grid-cols-1'>
    <div className='flex lg:order-1 order-3 '>
  <CalygamSidebar isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
  </div>
  {/* <div className=' flex min-h-lvh lg:order-2 my-8 md:order-1 order-2'> */}
  <div className=' flex min-h-lvh lg:order-2 my-8  order-2'>
    <DashboardInfoTrails/>
  </div>
  {/* <div className='  flex flex-col items-end my-8 pr-14 pl-6 lg:order-3 md:order-2 order-1'> */}
  <div className='  flex flex-col items-end my-8 pr-14  lg:order-3  order-1'>
    <div className='w-full flex items-center   justify-end gap-x-4 flex-wrap'>
      <span className='w-10 h-10 flex bg-gray-600/35 rounded-full'></span>
      <p className='font-semibold text-xl'>Chile</p>
    </div>
    <ModifyTeacherTag/>

  </div>
</div>
  )
}
