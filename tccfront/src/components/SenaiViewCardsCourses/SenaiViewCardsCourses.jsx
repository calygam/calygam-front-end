import React from 'react'
import featuredCourse1 from '../../assets/img/featuredCourse1.png'
import featuredCourse2 from '../../assets/img/DesignFeature.png'
import featuredCourse3 from '../../assets/img/Industria.png'

export default function SenaiViewCardsCourses() {
    return (
        <div className='flex flex-col w-full items-center  mt-20'>
            <div className='hidden  md:flex w-full flex-col pl-20 pb-5 '>
                <p className='lg:text-3xl md:text-xl pb-2 font-normal'>Cursos em Destaque </p>
                <p className='text-red-clean-type text-sm'>100% Presenciais</p>
            </div>
            <div className='w-full grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 '>
              
                    <div className='flex flex-col items-center w-64  border p-3 rounded-lg  mx-16'>
                        <div className='w-full rounded-sm  '>
                            <img src={featuredCourse1} alt="" />
                        </div>
                        <div>
                            <p>TI</p>
                        </div>
                        <div>
                            <p>Os cursos técnicos em</p>
                            <p>tecnologia são voltados</p>
                            <p>para quem deseja se</p>
                            <p>especializar em áreas</p>
                            <p>como informática, redes</p>
                            <p>programação, e</p>
                            <p>desenvolvimento de</p>
                            <p>software.</p>
                        </div>
                        
                    
                </div>
                <div className='flex flex-col items-center w-64   border p-3 rounded-lg mx-16 '>
                        <div className='w-full rounded-sm  '>
                            <img src={featuredCourse2} alt="" />
                        </div>

                        
                    
                </div>
                <div className='flex flex-col items-center w-64 border p-3 rounded-lg mx-16 '>
                        <div className='w-full rounded-sm  '>
                            <img src={featuredCourse3} alt="" />
                        </div>
                        <div>
                            <p>TI</p>
                        </div>
                        <div>
                            <p>Os cursos técnicos em</p>
                            <p>tecnologia são voltados</p>
                            <p>para quem deseja se</p>
                            <p>especializar em áreas</p>
                            <p>como informática, redes</p>
                            <p>programação, e</p>
                            <p>desenvolvimento de</p>
                            <p>software.</p>
                        </div>
                        
                    
                </div>
                

            </div>
            <div className='flex  mt-3 mb-3 w-full items-center pt-10 ' >
                <hr className='w-[75%] h-[2px] bg-gray-600'></hr>
                <span className='w-2 h-2 rounded-full bg-gray-600'></span>
            </div>
        </div>
    )
}
