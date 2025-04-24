import React from 'react'

export default function AdminManagementHeader({dashAdminFilter, dashAddTeacher}) {
    return (
        <header className='w-[75%] flex font-poppins justify-between h-fit items-center flex-wrap  '>
          
                <h1 className='text-white text-2xl md:text-lg'>Trilhas</h1>
          
            <div className='flex items-center  gap-x-2'>
                <button className='w-fit'>
                <img src={dashAdminFilter} alt="" className=' w-5 h-5' />
                </button>
                <button className='w-fit'>
                <img src={dashAddTeacher} alt="" className='w-5 h-5'/>
                </button>
            </div>
        </header>
    )
}
