import React, { useEffect, useState } from 'react'

export default function AdminButtonDasnboard({ iconAreaDash, textAreaDash,identifier,selectedButton,setSelectedButton }) {

    return (
        <button className='flex justify-center font-poppins cursor-pointer items-center  w-full group   rounded-l-xl relative   lg:p-4 py-6 px-4    ' onClick={()=> setSelectedButton(identifier)}>
            <div className='absolute w-full transition-all   group h-full flex justify-end'>
                <div className={`  delay-0 duration-[1200ms] w-0 ease-in-out  group-hover:rounded-l-xl group-hover:w-full   group-hover:h-full bg-white ${identifier === selectedButton? "w-full rounded-l-xl ":"w-0 "}`}></div>
            </div>
                <div className='flex items-center  w-full pl-4 gap-2 z-10'>
                <div className='w-fit'>
                    <img src={iconAreaDash} alt={"Home"} className='w-6 h-6' />
                </div>
                <div>
                    <p className={`  ${identifier === selectedButton? " text-red-clean-type font-semibold":" text-gray-500"}`}>{textAreaDash}</p>
                </div>
                </div>
           
        </button>

    )
}
