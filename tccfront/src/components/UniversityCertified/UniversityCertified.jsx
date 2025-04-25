import React from 'react'
import UniversityIcon from '../../assets/img/university.png'

export default function UniversityCertified() {
    return (
        <div className='pt-20 grid place-items-center font-poppins items-stretch lg:grid-flow-col   grid-cols-1  '>
            <div className='flex flex-col  '>
                <div className='flex justify-start'>
                    <p className='text-red-clean-type font-semibold text-sm md:text-md lg:text-lg'>Garanta seu Certificado!</p>
                </div>
                <div className='flex flex-col '>
                    <p className='  text-sm md:text-md lg:text-lg font-light'>Descubra oputunidades de apredizado e crescimento</p>
                    <p className='text-sm md:text-md lg:text-lg font-light'>com nossos Cursos e garanta seu Certificado ao Final </p>
                    <p className='text-sm md:text-md lg:text-lg font-light'>do Curso.</p>
                </div>
            </div>
            <div className='w-[235px] h-[211px]  md:w-[374px] md:h-[432px] lg:w-[593px] lg:h-[593px]'>
                <img className='w-full bg-cover ' src={UniversityIcon} alt="" />
            </div>
        </div>
    )
}
