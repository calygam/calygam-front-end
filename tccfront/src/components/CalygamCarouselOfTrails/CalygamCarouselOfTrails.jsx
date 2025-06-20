import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';


import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { UseDataActivitiesPerTrailIdHook } from '../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook';

//components
import AssignStudentToTrail from '../../components/AssignStudentToTrail/AssignStudentToTrail.jsx'
import { UseReadAllTrailsHook } from '../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook.js';
export default function CalygamCarouselOfTrails({ Trails }) {
  const {setTrailId} = UseDataActivitiesPerTrailIdHook()
  const { trails,targetTrail, targetTrailId, setTargetTrailId,modelIsOpen,setModelIsOpen } = UseReadAllTrailsHook();
 const trailData={
  trailId:targetTrail.trailId,
  trailName:targetTrail.trailName,
  trailImage:targetTrail.trailImage
 }
  const hiddenTextLimitter=(str, max = 0)=> {
  return str.length > max ? str.slice(0, max) + '…' : str;


}
const handleModelIsOpen =(id)=>{
setTrailId(id)
setTargetTrailId(id)
setModelIsOpen(true)
}
  return (
    <div className='w-[93%] flex flex-col font-poppins   '>
      {modelIsOpen&&
      <AssignStudentToTrail setModelIsOpen={setModelIsOpen} trailData={trailData}/>
}
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
          {Trails.filter((filterStats) => filterStats.trailStatus.includes("ENABLE")).map((trail => (
            <SwiperSlide className="flex justify-center  " key={trail.trailId}>
              <div className=" py-4 px-4 w-[200px] h-[250px] flex flex-col justify-between   rounded-lg bg-black/80">
                <div className=' overflow-hidden'>
                  <img src={trail.trailImage} alt="" className='w-14 h-14 rounded-md object-cover ' />
                </div>
                <p className='text-xs text-white font-bold my-2'>{trail.trailName}</p>
<p className='text-xs font-light text-white/80 my-8'>
  {hiddenTextLimitter(trail.trailDescription, 30)}
</p>
                <div className='w-full flex justify-center'>
                  {/* <Link to={"/Trilha"}><button className='rounded-xl bg-white outline-none text-xs py-2 px-4' onClick={()=>setTrailId(trail.trailId)}>Ir Para a Trilha</button></Link> */}
                  <button className='rounded-xl bg-white outline-none text-xs py-2 px-4' onClick={()=>handleModelIsOpen(trail.trailId)}>Ir Para a Trilha</button>
                </div>
              </div>
            </SwiperSlide>
          )))}


        </Swiper>








      </>
    </div>
  )
}
