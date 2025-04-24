import React from 'react'

export default function MenuLocationLeasson({FirstIcon ,FirstLocationText, SecondIcon ,SecondLocationText, ThirdIcon,ThirdLocationText,ColorDiferent }) {
    return (
        <menu className={`flex  w-[200px] p-4 py-6 font-bold rounded-3xl space-y-2 ${ColorDiferent?"bg-trail-info-action":"bg-red-clean-type"}`}>
            <ul className='flex flex-col items-center space-y-4 text-white justify-center w-full'>
                <li className='flex items-center   w-full justify-between    '>
                    <p className='flex'>{FirstLocationText}</p>
                    <img src={FirstIcon} alt="" className='w-[20px] h-[20px]' />
                </li>
                <li className='flex items-center w-full justify-between     '>
                    <p className='flex '>{SecondLocationText}</p>
                    <img src={SecondIcon} alt="" className='w-[20px] h-[20px]' />
                </li>
                <li className='flex items-center  w-full justify-between   '>
                    <p className='flex'>{ThirdLocationText}</p>
                    <img src={ThirdIcon} alt="" className='w-[20px] h-[20px]' />
                </li>
            </ul>
        </menu>
    )
}
