import React from 'react'
import { TranslateStatusUserUtil } from '../../utils/TranslateStatusUserUtil/TranslateStatusUserUtil'
import { motion } from 'framer-motion';

export default function RowOfTable({oneRow}) {
          const hiddenTextLimitter=(str, max = 0)=> {
  return str.length > max ? str.slice(0, max) + '…' : str;


}
    
  return (
<motion.div className="grid grid-cols-5 gap-2 p-3 bg-white place-items-center hover:bg-white transition-colors" role="row"

initial={{ y: -6, x: -12, scale: 0.8 }}
  whileInView={{ y: 0, x: 0, scale: 1 }}
  viewport={{ amount: 0.3, once: false }}
  transition={{
    type: "spring",
    stiffness: 100 + (oneRow?.userId * 20), 
    damping: 10 + (oneRow?.userId * 2),    
    mass: 1 + (oneRow?.userId * 0.5),       
            duration: 0.1,}}>
                        
                        <div className="flex items-center  space-x-2" role="cell">
                            <div className=''>
                                <img src={oneRow.userImage} alt="Foto do professor" className='w-[25px] rounded-full' />
                            </div>
                            <div>
                                <div className="font-medium text-gray-900">{hiddenTextLimitter(oneRow.userName,8)}</div>
                              
                            </div>
                        </div>
                        <div role="cell">
                            <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                                {TranslateStatusUserUtil[oneRow.userStatus]}
                            </span>
                        </div>
                        <div className="text-gray-600" role="cell">  {oneRow.userEmail}</div>
                        <div className="flex space-x-2 justify-center" role="cell">
                        </div>
                    </motion.div>
  )
}
