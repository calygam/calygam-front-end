import React from 'react'
import giftIcon from '../../assets/img/giftIcon.png'

export default function SenaiWarnings() {
    return (
        <div className='flex flex-col font-poppins items-center w-full h-fit mt-20'>
            <div className='hidden md:flex gap-6 mb-10 items-center'>
                <p className='font-bold md:text-2xl lg:text-4xl'>Nossos <span className='text-red-500'>Benefícios</span></p>
                <img className='w-16 h-16' src={giftIcon} alt="" />
            </div>
            <div className='hidden md:grid w-full lg:grid-cols-3 md:grid-cols-2 gap-y-3 place-items-center '>
                <div className='flex flex-col '>
                    <p className='font-bold'><span className='text-red-clean-type'>Etapas</span> do Processo de<br />Ensino no <span className='text-red-clean-type'>SENAI</span></p>
                    <p className='font-light md:text-[14px] lg:text-[16px]'>Nossos cursos são divididos</p>
                    <p className='font-light md:text-[14px] lg:text-[16px]'>em módulos que facilitam a </p>
                    <p className='font-light md:text-[14px] lg:text-[16px]'>assimilação do conteúdo.</p>


                </div>
                <div className='flex flex-col '>
                    <p className='font-bold'>Acompanhamento e<br/><span className='text-red-clean-type'>Suporte</span> ao <span className='text-red-clean-type'>Aluno</span></p>
                    <p className='font-light md:text-[14px] lg:text-[16px]'>Oferecemos mentoria e</p>
                    <p className='font-light md:text-[14px] lg:text-[16px]'>suporte contínuo durante a </p>
                    <p className='font-light md:text-[14px] lg:text-[16px]'>formação.</p>

                </div>
                <div className='flex flex-col '>
                    <p className='font-bold'><span className='text-red-clean-type'>Integração</span> com o<br/> <span className='text-red-clean-type'>Mercado</span> de <span className='text-red-clean-type'>Trabalho</span></p>
                    <p className='font-light md:text-[14px] lg:text-[16px]'>Facilitamos estágios e </p>
                    <p className='font-light md:text-[14px] lg:text-[16px]'>oportunidades de emprego</p>
                    <p className='font-light md:text-[14px] lg:text-[16px]'>para nossos alunos.</p>
                </div>

            </div>
            <div className='w-full flex flex-col items-center py-10 text-sm md:text-xl lg:text-2xl font-bold '>
                <div>
                    <p>Cursos de Qualidade para Impulsionar sua</p>
                    </div>
                    <div>
                    <p>Carreira Profissional no Senai</p>
                    </div>
                </div>
        </div>
    )
}
