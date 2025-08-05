import React from 'react'
//images

import notHavePet from '../../../assets/img/homePage/not-have-pet.png'
export default function NotHavePetImageArea() {
  return (
    <div className='flex justify-end'>
      <img src={notHavePet} alt="" className='w-[250px]' />
    </div>
  )
}
