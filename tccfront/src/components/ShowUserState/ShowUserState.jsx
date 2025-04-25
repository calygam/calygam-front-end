import React, { useEffect, useState } from 'react'
import friendIcons from '../../assets/img/friends-icon.svg'
import teacherIcon from '../../assets/img/teacher-icon.svg'

export default function ShowUserState({ roundedDelimiter, imgRamdomMock, teachers }) {


    return (
        <aside className={`relative   md:-top-6 -top-3 ${roundedDelimiter ? "md:rounded-md md:h-[322px]  -mt-3 md:-mt-3 rounded-full  transition-all delay-200 duration-300 ease-in-out lg:rounded-md" : "md:rounded-b-full md:rounded-t-none rounded-full"} transition-all delay-150  duration-200 items-center ease-linear  my-5 md:my-0  flex md:flex-col h-fit md:h-[375px] md:w-fit w-[200px]   bg-trail-info-action py-4 px-2`}>
            <div className='flex md:flex-col flex-col items-center text-white gap-x-2 w-full '>
                {teachers ?
                <>    <div>
                <img src={teacherIcon} alt="" className='md:w-[50px] md:h-[50px] w-[20px] h-[20px]' />
            </div>
            <div>
                <p className='text-xs'>Professores</p>
            </div></> 
               :    <>
    <div>
        <img src={friendIcons} alt="" className='md:w-[50px] md:h-[50px] w-[20px] h-[20px]' />
    </div>
    <div>
        <p>Amigos</p>
    </div> </>}

            </div>
            <ul className='flex w-full md:w-fit md:flex-col md:space-y-3 md:border-b-2 md:border-b-gray-400/60 md:space-x-0 space-x-3 h-full    md:scrollbar-hidden md:overflow-y-auto overflow-x-auto scrollbar-hidden scrollbar-calygam px-2 '>
                <li className=' flex  relative rounded-full bg-red-400'>
                    <span className='flex w-[35px] h-[35px] rounded-full   '   >
                        <div className='w-full flex '>
                            <span className='flex w-2 h-2 bg-green-500 rounded-full absolute ml-6 -mr-2'></span>
                        </div>
                        <img src={imgRamdomMock} alt="" className='w-[35px] h-[35px] rounded-full ' />
                    </span>
                </li>
                <li className=' flex  relative rounded-full bg-red-400'>
                    <span className='flex w-[35px] h-[35px] rounded-full   '   >
                        <div className='w-full flex '>
                            <span className='flex w-2 h-2 bg-green-500 rounded-full absolute ml-6 -mr-2'></span>
                        </div>
                        <img src={imgRamdomMock} alt="" className='w-[35px] h-[35px] rounded-full ' />
                    </span>
                </li>
                <li className=' flex  relative rounded-full bg-red-400'>
                    <span className='flex w-[35px] h-[35px] rounded-full   '   >
                        <div className='w-full flex '>
                            <span className='flex w-2 h-2 bg-green-500 rounded-full absolute ml-6 -mr-2'></span>
                        </div>
                        <img src={imgRamdomMock} alt="" className='w-[35px] h-[35px] rounded-full ' />
                    </span>
                </li>
                <li className=' flex  relative rounded-full bg-red-400'>
                    <span className='flex w-[35px] h-[35px] rounded-full   '   >
                        <div className='w-full flex '>
                            <span className='flex w-2 h-2 bg-green-500 rounded-full absolute ml-6 -mr-2'></span>
                        </div>
                        <img src={imgRamdomMock} alt="" className='w-[35px] h-[35px] rounded-full ' />
                    </span>
                </li>
                <li className=' flex  relative rounded-full bg-red-400'>
                    <span className='flex w-[35px] h-[35px] rounded-full   '   >
                        <div className='w-full flex '>
                            <span className='flex w-2 h-2 bg-green-500 rounded-full absolute ml-6 -mr-2'></span>
                        </div>
                        <img src={imgRamdomMock} alt="" className='w-[35px] h-[35px] rounded-full ' />
                    </span>
                </li>
                <li className=' flex  relative rounded-full bg-red-400'>
                    <span className='flex w-[35px] h-[35px] rounded-full   '   >
                        <div className='w-full flex '>
                            <span className='flex w-2 h-2 bg-green-500 rounded-full absolute ml-6 -mr-2'></span>
                        </div>
                        <img src={imgRamdomMock} alt="" className='w-[35px] h-[35px] rounded-full ' />
                    </span>
                </li>
                <li className=' flex  relative rounded-full bg-red-400'>
                    <span className='flex w-[35px] h-[35px] rounded-full   '   >
                        <div className='w-full flex '>
                            <span className='flex w-2 h-2 bg-green-500 rounded-full absolute ml-6 -mr-2'></span>
                        </div>
                        <img src={imgRamdomMock} alt="" className='w-[35px] h-[35px] rounded-full ' />
                    </span>
                </li>
                <li className=' flex  relative rounded-full bg-red-400'>
                    <span className='flex w-[35px] h-[35px] rounded-full   '   >
                        <div className='w-full flex '>
                            <span className='flex w-2 h-2 bg-green-500 rounded-full absolute ml-6 -mr-2'></span>
                        </div>
                        <img src={imgRamdomMock} alt="" className='w-[35px] h-[35px] rounded-full ' />
                    </span>
                </li>
                <li className=' flex  relative rounded-full bg-red-400'>
                    <span className='flex w-[35px] h-[35px] rounded-full   '   >
                        <div className='w-full flex '>
                            <span className='flex w-2 h-2 bg-green-500 rounded-full absolute ml-6 -mr-2'></span>
                        </div>
                        <img src={imgRamdomMock} alt="" className='w-[35px] h-[35px] rounded-full ' />
                    </span>
                </li>             <li className=' flex  relative rounded-full bg-red-400'>
                    <span className='flex w-[35px] h-[35px] rounded-full   '   >
                        <div className='w-full flex '>
                            <span className='flex w-2 h-2 bg-green-500 rounded-full absolute ml-6 -mr-2'></span>
                        </div>
                        <img src={imgRamdomMock} alt="" className='w-[35px] h-[35px] rounded-full ' />
                    </span>
                </li>
                <li className=' flex  relative rounded-full bg-red-400'>
                    <span className='flex w-[35px] h-[35px] rounded-full   '   >
                        <div className='w-full flex '>
                            <span className='flex w-2 h-2 bg-green-500 rounded-full absolute ml-6 -mr-2'></span>
                        </div>
                        <img src={imgRamdomMock} alt="" className='w-[35px] h-[35px] rounded-full ' />
                    </span>
                </li>
                <li className=' flex  relative rounded-full bg-red-400'>
                    <span className='flex w-[35px] h-[35px] rounded-full   '   >
                        <div className='w-full flex '>
                            <span className='flex w-2 h-2 bg-green-500 rounded-full absolute ml-6 -mr-2'></span>
                        </div>
                        <img src={imgRamdomMock} alt="" className='w-[35px] h-[35px] rounded-full ' />
                    </span>
                </li>
              







            </ul>
        </aside>
    )
}
