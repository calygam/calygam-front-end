import React, { useState } from 'react'
import AdminButtonDasnboard from '../AdminButtonDasnboard/AdminButtonDasnboard'

export default function CalygamDropDown({toggle,setToggle,options,Options,selectedOption,SelectOneOption}) {
   
    const [selectedButton,setSelectedButton] = useState(null)
  return (
    <div className='flex mt-2 mb-6  w-full '>
 
        <div className='flex flex-col w-full '>
            <div className="flex flex-col  h-fit mt-5 text-white  w-full ">
                <button
                    type='button'

                    onClick={() => setToggle(() => !toggle)}
                    className="flex  px-4 py-2   justify-between gap-2 bg-calygam-semi-light-red/45 border rounded-t-lg  shadow-sm outline-none"
                >
                    {selectedOption ? selectedOption.label : SelectOneOption}
                    <span className='w-10'>
                        {toggle ? String.fromCharCode(0x2193) : String.fromCharCode(0x2191)}
                    </span>
                </button>


                {toggle && (
                    <ul className="flex flex-col   bg-calygam-semi-light-red/45 text-black border ">
                        {options.map((option,index) => (
                            <li
                                key={option.value}
                                onClick={() => Options(option)}
                                className="border-b    group-hover:text-black    shadow-b-lg cursor-pointer"
                            >
                               <AdminButtonDasnboard identifier={index} textAreaDash={option.label} selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div> 
        </div>
  )
}
