import React, { useEffect, useState } from 'react'
//a
export default function AdminButtonDasnboard({ iconAreaDash, textAreaDash, identifier, selectedButton, setSelectedButton, modifyStyles, isAnchor, navRoute, setIsEnabled, isEnabled }) {

    return (
        iconAreaDash ?
            <a href={`${navRoute}`} className='flex justify-center outline-none font-poppins cursor-pointer items-center  w-full group   rounded-l-xl relative   lg:p-4 py-4 px-6    ' onClick={() => {
      
                setSelectedButton(identifier)
            }}>
                {iconAreaDash ?
                    <div className='absolute w-full    group h-full flex justify-end p-1 '>
                        <div className={`  delay-0 duration-[750ms] w-0 ease-in-out  group-hover:rounded-full group-hover:w-full   group-hover:h-full bg-gradient-to-tr from-gray-600/75 via-zinc-800 group-hover:border group-hover:border-white  to-gray-900/75 ${identifier === selectedButton ? "w-full rounded-l-xl " : "w-0 bg-transparent "}`}></div>
                    </div> : <div className='absolute w-full transition-all   group h-full flex justify-end'>
                        <div className={`  delay-0 duration-[750ms] w-0 ease-in-out  group-hover:rounded-0 group-hover:w-full   group-hover:h-full  ${identifier === selectedButton ? "w-full bg-blue-400/35 " : "w-0 bg-purple-900/20"}`}></div>
                    </div>
                }
                <div className='flex items-center   w-full pl-4 gap-2 z-10'>



                    {iconAreaDash &&
                        <div className='flex items-center  gap-2'>
                            <div className='w-fit'>
                                <img src={iconAreaDash} alt={"Home"} className='w-6 h-6' />
                            </div>

                            <div>
                                <p className={`  ${identifier === selectedButton ? ` ${modifyStyles ? modifyStyles.selectedColorText : "text-red-clean-type font-semibold"}` : " text-white/50 transition-all duration-[1300ms] group-hover:text-white"}`}>{textAreaDash}</p>
                            </div></div>}

                    {!iconAreaDash &&
                        <div>
                            <p className={`  ${identifier === selectedButton ? " text-gray-300 " : " text-white"}`}>{textAreaDash}</p>
                        </div>
                    }




                    {!iconAreaDash &&
                        <div>
                            <p className={`  ${identifier === selectedButton ? " text-gray-300 " : " text-white"}`}>{textAreaDash}</p>
                        </div>
                    }
                </div>

            </a> : <button className='flex justify-center outline-none font-poppins cursor-pointer items-center  w-full group   rounded-l-xl relative   lg:p-4 py-4 px-6    ' onClick={() => {
               
                setSelectedButton(identifier)
            }}>
                {iconAreaDash ?
                    <div className='absolute w-full    group h-full flex justify-end'>
                        <div className={`  delay-0 duration-[750ms] w-0 ease-in-out  group-hover:rounded-l-xl group-hover:w-full   group-hover:h-full bg-white ${identifier === selectedButton ? "w-full rounded-l-xl " : "w-0 bg-transparent "}`}></div>
                    </div> : <div className='absolute w-full transition-all   group h-full flex justify-end'>
                        <div className={`  delay-0 duration-[750ms] w-0 ease-in-out  group-hover:rounded-0 group-hover:w-full   group-hover:h-full  ${identifier === selectedButton ? "w-full bg-blue-400/35 " : "w-0 bg-purple-900/20"}`}></div>
                    </div>
                }
                <div className='flex items-center   w-full pl-4 gap-2 z-10'>




                    {!iconAreaDash &&
                        <div>
                            <p className={`  ${identifier === selectedButton ? " text-gray-300 " : " text-white"}`}>{textAreaDash}</p>
                        </div>
                    }




                 
                </div>

            </button>


    )
}
