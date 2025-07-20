import React, { useState } from 'react'
import AdminButtonDasnboard from '../AdminButtonDasnboard/AdminButtonDasnboard'
import { motion } from 'framer-motion'

export default function CalygamDropDown({toggle,setToggle,options,Options,selectedOption,SelectOneOption}) {
   
    const [selectedButton,setSelectedButton] = useState(null)
  return (
    <div className='flex mt-2 mb-6  w-full '>
 
        <div className='flex flex-col w-full '>
            <div className="flex flex-col  h-fit mt-5 text-white  w-full ">
                <button
                    type='button'

                    onClick={() => setToggle(() => !toggle)}
                    className="flex  px-4 py-2   justify-between gap-2 bg-purple-800 border border-gray-700 rounded-t-lg  shadow-sm outline-none"
                >
                    {selectedOption ? selectedOption.label : SelectOneOption}
                    <span className='w-10'>
                        {toggle ? String.fromCharCode(0x2193) : String.fromCharCode(0x2191)}
                    </span>
                </button>


                {toggle && (
                    <ul className="flex flex-col   bg-purple-700 text-black border overflow-hidden border-gray-700  ">
                        {options.map((option,index) => (
                            
                            <motion.li
                                key={option.value}
                                onClick={() => Options(option)}
                                className="border-b border-gray-700     group-hover:text-black    shadow-b-lg cursor-pointer"
                                initial={!toggle?false:{y:-20}}
                                animate={{y:0}}
                                transition={{type:'spring',stiffness:200,mass:2+index}}
                            >
                               <AdminButtonDasnboard identifier={index} textAreaDash={option.label} selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
                            </motion.li>
                        ))}
                    </ul>
                )}
            </div>
        </div> 
        </div>
  )
}
