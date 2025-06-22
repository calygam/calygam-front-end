import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

export default function ErrorModal({ errorMessage }) {
    const [hasAnimated, setHasAnimated] = useState(false)
    useEffect(() => {
        if (!hasAnimated) {
            setHasAnimated(true)
        }
    }, [hasAnimated])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setHasAnimated(false)
        }, 5000)

        return () => clearTimeout(timeout)
    }, [])
    return (
        <div

            className='fixed font-poppins flex z-20 w-full my-4 justify-end items-center'>

            <motion.div
                key={errorMessage}
                initial={hasAnimated ? false : { width: 0 }}
                animate={{ width: '50%' }}
                transition={{ type: 'spring', stiffness: 200, mass: 2 }} className='p-4 px-8 rounded-tl-md rounded-tr-md bg-red-600/20 backdrop-blur-sm'>

                <p className='text-white/85 font-extrabold'>{"* " + errorMessage}</p>

                <motion.div
                    initial={{ width: '100%' }}
                    animate={{ width: 0 }}
                    transition={{ duration: 5, ease: 'linear' }}
                    className="absolute bottom-0 left-0 h-1 bg-red-700"
                >
               
                </motion.div>
            </motion.div>



        </div>
    )
}
