import React from 'react'

export default function ModifyTeacherTag() {
  return (
    <div className=' md:w-[300px] w-full bg-calygam-brown-semi-light font-poppins my-6  rounded-xl px-4 pt-4 space-y-4 pb-12'>
        <div className='flex  justify-between gap-x-5  items-center'>
            <div className='bg-white rounded-md lg:w-full w-[75%]   border border-gray-400'>
                <input className='bg-transparent outline-none pl-2 placeholder:text-xs ' type="text" name="" id="" placeholder='Pesquisar:' />
            </div>
            <div className='flex items-center justify-center space-x-1'>
                <span className='w-1 h-1 rounded-full flex bg-black'></span>
                <span className='w-1 h-1 rounded-full flex bg-black'></span>
                <span className='w-1 h-1 rounded-full flex bg-black'></span>
            </div>
        </div>
      <div className='w-full flex items-center  ml-6 gap-x-4 flex-wrap'>
          <span className='w-8 h-8 flex bg-gray-600/35 rounded-full'></span>
          <p className='font-semibold text-xs'>Chile</p>
        </div>
    </div>
  )
}
