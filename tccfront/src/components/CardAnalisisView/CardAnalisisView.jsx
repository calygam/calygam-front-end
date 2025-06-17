import React from 'react'

import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"
export default function CardAnalisisView({titleAnalisis,numberAnalisis,positionIndex}) {

    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, numberAnalisis, { duration: 5})
        return () => controls.stop()
    }, [])

  return (
    <div className='rounded-md border border-gray-400/55 w-[250px] h-[100px] px-4 py-2 flex flex-col  font-poppins'>
      <p className='text-lg'>{titleAnalisis}</p>
      <motion.pre style={{fontWeight:600,fontSize:30}}>{rounded}</motion.pre>
    </div>
  )
}
