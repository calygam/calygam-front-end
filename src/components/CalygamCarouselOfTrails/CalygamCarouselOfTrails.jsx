import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles


// import required modules
import { Pagination } from 'swiper/modules';

export default function CalygamCarouselOfTrails({Trails}) {
  return (
    <div className='w-[93%] flex flex-col font-poppins   '>
       <>
       <Swiper
  pagination={{ clickable: true }}
  modules={[Pagination]}
  className="w-full "
  breakpoints={{
    320: { slidesPerView: 1.3, spaceBetween: 5 }, 
    640: { slidesPerView: 2.3, spaceBetween: 5 },  
    768: { slidesPerView: 3.3, spaceBetween: 5 },  
    1024: { slidesPerView: 4.3, spaceBetween: 5 }, 
  }}
>
    {Trails.map((trail =>(
    <SwiperSlide  className="flex justify-center  " key={trail.id}>
    <div className=" py-4 px-4 max-w-[200px] rounded-lg bg-black/80">
      <img src={trail.trailImage} alt="" className='w-8 ' />
      <p className='text-xs text-white font-bold my-2'>{trail.trailName}</p>
      <p className='text-xs font-light text-white/80 my-8'>{trail.trailDescription}</p>
      <div className='w-full flex justify-center'>
      <button className='rounded-xl bg-white text-xs py-2 px-4'>Ir Para a Trilha</button>
      </div>
      </div>
  </SwiperSlide>
    )))}


</Swiper>

       
         
         
      
   
      
      
    </>
    </div>
  )
}
