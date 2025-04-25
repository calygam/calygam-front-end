import React from 'react'

export default function ButtonSocialAreaLocation({ imgArea, nameArea }) {
    return (
        <div className='w-[200px] px-6 py-4 font-jersey bg-red-clean-type mt-1 flex  rounded-xl justify-around items-center'>
            <div className='w-6 h-6 flex justify-center items-center'>
                <img src={imgArea} alt="" className='w-full' />
            </div>
            <div className='flex justify-center text-white items-center'>
                <p className='text-lg'>{nameArea}</p>
            </div>
        </div>
    )
}
