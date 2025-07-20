import { motion } from 'framer-motion'
import React, { useState } from 'react'

export default function PublishTrail({ setIsPublish, isPublish, trailName, setTrailCode, trailCode, handleUpdate }) {

 const [hasAnimated, setHasAnimated] = useState(false)

    const codeHandleChange = (e) => {
        const input = e.target.value
        if (input.length > 16) {
            return
        }
        else {
            setTrailCode(input)
        }

    }

    return (
<motion.div
  className={`w-full h-full min-h-[125dvh] md:min-h-[150dvh] lg:min-h-[200dvh] font-poppins fixed inset-0 z-40 ${!isPublish ? "overflow-hidden" : "overflow-y-auto"} bg-calygam-purple-semi-bold/50 pb-2 custom-scrollbar backdrop-blur-md flex justify-center items-center`}
  key={"batata"}
  initial={hasAnimated ? false : { opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ type: 'spring', stiffness: 200, mass: 2 }}
>
  <motion.div
    key={"feijão"}
    initial={hasAnimated ? false : { scale: 0, rotateX: -50, rotateY: 35 }}
    exit={{ opacity: 0, scale: 0 }}
    animate={{ scale: 1, rotateX: 0, rotateY: 0 }}
    transition={{ type: 'spring', stiffness: 250, mass: 1 }}
    className='lg:w-[600px] md:w-[425px] w-[300px] bg-white rounded-md pb-4 mt-16 mb-8 shadow-lg'
  >
    <div className='w-full flex justify-between items-center px-4 py-3 border-b border-gray-200'>
      <h4 className='text-black text-base font-semibold'>Publicando trilha</h4>
      <button onClick={() => setIsPublish(false)} className='text-gray-500 hover:text-black transition'>
        X
      </button>
    </div>

    <div className='px-4 py-2 flex flex-col gap-y-2'>
      <p className='text-purple-800 font-medium text-sm bg-purple-200/50 rounded-md w-fit px-2 py-1'>{trailName}</p>

      <div className='flex flex-col bg-gray-100 p-3 rounded-md mt-1'>
        <p className='text-gray-700 text-xs'>Digite o código abaixo para confirmar</p>
        <p className='text-purple-700 text-xs font-semibold bg-purple-300/50 rounded-md w-fit px-2 py-1 mt-2'>calygam up trail</p>

        <input
          type="text"
          value={trailCode}
          onChange={(e) => codeHandleChange(e)}
          className='text-xs mt-2 px-2 py-1 border-b-2 border-purple-500 bg-transparent text-gray-800 focus:outline-none'
        />
      </div>

      <div className='flex justify-center mt-4'>
        {trailCode.trim() === "calygam up trail" ? (
          <button
            type='submit'
            onClick={handleUpdate}
            className='outline-none bg-purple-500 hover:bg-purple-600 rounded-md py-2 px-4 text-white font-medium transition'
          >
            Tornar pública
          </button>
        ) : (
          <button
            type='button'
            disabled
            className='outline-none bg-purple-500/50 cursor-not-allowed rounded-md py-2 px-4 text-white'
          >
            Tornar pública
          </button>
        )}
      </div>
    </div>
  </motion.div>
</motion.div>
    )
}
