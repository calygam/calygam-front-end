import React from 'react'
import BlogIcon from '../../assets/img/ImageBlog.png'

export default function BlogAnounciments() {
    return (
        <div className='flex w-full flex-col mt-20 font-poppins '>
            <div className='text-lg lg:text-3xl md:text-xl pl-5 lg:pl-24'>
                <div className='drop-shadow-2xl '>
                    <p className='font-bold lg:text-3xl md:lg:text-2xl text-lg  w-fit '>Conheça Nosso <span className='text-red-clean-type'>Blog</span></p>
                </div>
                <div>
                    <p className='text-sm md:text-lg lg:text-2xl font-light'>Uma seção para artigos ou postagens de blog sobre tendências do mercado, </p>
                    <p className='text-sm md:text-lg lg:text-2xl font-light'>dicas para entrevistas e desenvolvimento de habilidades.</p>
                </div>
            </div>
            <div className='flex w-full justify-center pt-5 '>
                <div className='flex lg:w-[800px] md:w-[575px] w-[300px]  justify-center '>
                    <img className='w-full' src={BlogIcon} alt="" />
                </div>
            </div>

        </div>
    )
}
