import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import jsIconTrail from '../../assets/img/trilha-de js.png'
// Import Swiper styles


// import required modules


export default function SectionOfTrails() {
  return (
    <div className='flex flex-col font-poppins w-full'>
      <div className='flex flex-col  w-fit '>
        <p className='text-2xl font-bold'>Trilhas</p>
        <div className='w-full h-[2px] bg-red-clean-type rounded-full'></div>
      </div>
      <div className='flex w-full h-[150px] my-5'>

      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full "
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 8 },
          480: { slidesPerView: 3, spaceBetween: 12 },
          768: { slidesPerView: 4, spaceBetween: 16 },
          1024: { slidesPerView: 6, spaceBetween: 18 },
          1280: { slidesPerView: 7, spaceBetween: 20 },
        }}
      >
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>
        <SwiperSlide className='    rounded-xl h-[100px]' style={{backgroundImage:`url(${jsIconTrail})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></SwiperSlide>



      </Swiper>
 
      </div>
    </div>
  )
}
