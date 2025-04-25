import React from 'react'

export default function TeacherInfoInLeasson({ImgTeacher, NameTeacher,ActivityTeacher,NameActivityTeacher, NameDataExpires, ExpiresDataLeasson}) {
    return (
        <div className='w-[80%] flex bg-red-clean-type font-jersey rounded-3xl py-2 px-4 '>
            <div className='flex w-full  items-center justify-around flex-wrap gap-x-48 space-y-2'>
                <div className='flex gap-x-1'>
                    <span className='w-16 h-16 rounded-full'>
                        <img src={ImgTeacher} alt="" className='w-full object-cover bg-cover rounded-full' />
                    </span>
                    <div className='flex flex-col justify-center font-light text-white text-xs'>
                    <p>{NameTeacher}</p>
                    <p>{ActivityTeacher}</p>
                    </div>
                </div>
                <div className='flex gap-x-1 text-xs text-white  -mt-2'>
                    <div className='flex'>
                        <p>{NameActivityTeacher}</p>
                    </div>
                </div>
                <div className='flex gap-x-1 text-xs text-white '>
                <div className='flex flex-col justify-center font-light text-white text-xs'>
                    <p>{NameDataExpires}</p>
                    <p>{ExpiresDataLeasson}</p>
                    </div>
                </div>
                

            </div>
        </div>
    )
}
