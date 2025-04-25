import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import ProgressBarAdapt from '../ProgressBarAdapt/ProgressBarAdapt';
export default function AdminViewManagementTrails({ trails }) {
    return (
        <Swiper
            slidesPerView={2}
            grid={{ rows: 2 }}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Grid, Pagination]}
            breakpoints={{
                0: { slidesPerView: 1, grid: { rows: 1 } },
                768: { slidesPerView: 2, grid: { rows: 2 } },
            }}
            className="w-full  lg:max-w-[85%]  md:max-w-[75%] max-w-[250px] font-poppins lg:h-[600px] md:h-[600px] h-[300px]"
        >
            {trails.map((trail, index) => (
                <SwiperSlide key={index} className="bg-white rounded-xl min-h-[270px]  flex  ">
                    <div className='flex w-[90%] flex-col space-y-4 py-6  items-center mx-auto '>
                        <div className=' w-full flex flex-wrap  justify-between '>
                            <div className='flex gap-x-2 text-xs'>
                                <p className='text-calygam-gray-semi-strong'>{trail.trailDate} </p>
                                <p className='text-calygam-gray-semi-strong'>{trail.trailDay}</p>
                            </div>
                            <div className='flex items-center w-fit justify-center '>
                                <button className='flex space-x-1'>
                                    <span className='w-[4px] h-[4px] bg-black flex rounded-full'></span>
                                    <span className='w-[4px] h-[4px] bg-black flex rounded-full'></span>
                                    <span className='w-[4px] h-[4px] bg-black flex rounded-full'></span>
                                </button>
                            </div>

                        </div>
                        <div className='flex flex-col items-center text-center'>
                            <h3 className='text-black text-xl font-semibold'>{trail.trailTitle}</h3>
                            <p className='text-calygam-gray-semi-strong text-xs'>{trail.trailDescription}</p>
                        </div>
                        <div className='w-[90%]'>
                            <ProgressBarAdapt xpInMoment={trail.trailVacancyIn} xpToGet={trail.trailCapacity} rangeBar={false} trailVacancy={true} rangerBarRank={true} CountStartRow={false} />
                        </div>
                        <div className='flex  w-[93%] justify-between items-center h-fit'>
                            <div className='flex'>
                                <span className='w-9 h-9 bg-gray-600/35 flex rounded-full'>
                                    
                                </span>
                               
                            </div>
                            <button className='w-5 h-5 bg-calygam-semi-light-pink flex justify-center items-center rounded-full text-white text-xl'>+</button>
                        </div>
                    </div>

                </SwiperSlide>
            ))
            }

        </Swiper>
    );
}
