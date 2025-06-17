import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function LoadingCrazy({ loadingText }) {
  const [text, setText] = useState('Aguarde...')
  const numDots = 12
  const radius = 40
  const colors = ['#fff', '#a855f7', '#3b82f6', '#8b5cf6']

  useEffect(() => {
    setText(loadingText)
  }, [loadingText])

 
  const dots = Array.from({ length: numDots }).map((_, i) => {
    const angle = (i / numDots) * Math.PI * 2
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      color: colors[i % colors.length],
      delay: i * 0.05,
    }
  })
  return (
//     <div className={`fixed z-[1000] flex flex-col font-poppins justify-center space-y-5 bg-black/25 items-center -inset-0`}>
//     <div className=' flex items-center animate-pulse gap-2 justify-center w-full'>
//         <p className={` text-black font-black [text-shadow:1px_1px_2px_white]`}>Carregando </p>
//         <span className={`flex w-2 h-2 justify-center items-center rounded-tl [text-shadow:1px_1px_2px_white] rounded-br animate-spinningCleanMediumRage   bg-black`}> </span> 
//         <span className={`flex w-2 h-2 justify-center items-center rounded-tl [text-shadow:1px_1px_2px_white] rounded-br animate-spinningCleanMediumRage   bg-black`}> </span> 
//         <span className={`flex w-2 h-2 justify-center items-center rounded-tl [text-shadow:1px_1px_2px_white] rounded-br animate-spinningCleanMediumRage    bg-black`}> </span> 
//     </div>
//     <div >

//         <span className={`flex w-20 h-20 justify-center items-center rounded-lg animate-spinningClean bg-black`}>
//             <span className={`flex w-10/12 h-5/6 justify-center items-center rounded-lg animate-spinningCleanRage bg-white`}>
//                 <span className={`flex w-10/12 h-5/6 justify-center items-center rounded-lg animate-spinningCleanSuperRage  bg-black`}>
//                     <span className={`flex  w-10/12 h-5/6 rounded-md justify-center items-center animate-spinningCleanRage bg-white`}>
//                     <span className={`flex  w-10/12 h-5/6 rounded-full justify-center items-center  animate-spinningCleanMediumRage bg-black `}>
//                         <span className={`flex  w-10/12 h-5/6 rounded-full   animate-spinningCleanSuperRage bg-white`}>
//                             <span className={`flex  w-10/12 h-5/6 rounded-full  justify-center items-center animate-spinningClean bg-black`}>
//                                 <span className={`flex  w-10/12 h-5/6 rounded-full   animate-spinningCleanRage bg-white`}>

//                                     <span className={`flex  w-10/12 h-5/6 rounded-full animate-spinningCleanMediumRage justify-center items-center bg-black`}>
//                                         <span className={`flex  w-10/12 h-5/6 rounded-full animate-spinningCleanSuperRage bg-white`}>
//                                         </span>
//                                     </span>
//                                 </span>
//                             </span>
//                         </span>
//                     </span>
//                 </span>
//                 </span>
//             </span>
//         </span>
//     </div>
//     <div className=' flex items-center animate-pulse gap-2 justify-center w-full'>
//         <p className={`text-black font-black font-poppins [text-shadow:1px_1px_2px_white]`}>{text} </p>
//         </div>
// </div>
   <div className="fixed inset-0 z-[1000] flex flex-col justify-center items-center bg-gradient-to-br from-black/30 via-indigo-900/25 to-purple-900/30 backdrop-blur-sm font-poppins space-y-6">

      <motion.div
        className="relative w-[120px] text-center h-[120px]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 3 }}
      >
        {dots.map((dot, i) => (
          <motion.span
            key={i}
            className="absolute w-3.5 h-3.5 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              x: dot.x,
              y: dot.y,
              backgroundColor: dot.color,
              boxShadow: '0 0 6px rgba(255,255,255,0.4)',
              mixBlendMode: 'screen',
            }}
            initial={{ scale: 0.6 }}
            animate={{ scale: [0.6, 1.2, 0.6] }}
            transition={{
              delay: dot.delay,
              repeat: Infinity,
              duration: 0.8,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      <p className="text-white text-base font-black [text-shadow:1px_1px_2px_black] animate-pulse">
        {text}
      </p>
    </div>
  )
}
