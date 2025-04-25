import React from 'react'

export default function CardDevelopProject({FirstCard, titleCard, TextCard}) {
  return (
    <div className={` font-poppins p-4 rounded-lg border-2 border-red-bold-type ${FirstCard?" border-l-[10px] ":"border-l-2"}`}>
      <h4 className='text-base font-extrabold'>{titleCard}</h4>
      <p className='font-light text-base'>{TextCard}</p>
    </div>
  )
}
