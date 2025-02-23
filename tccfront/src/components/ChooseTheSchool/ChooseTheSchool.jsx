import React from 'react'
import ChooseIcon1 from '../../assets/img/checkedIcon.png'
import ChooseIcon2 from '../../assets/img/marcket.png'
import ChooseIcon3 from '../../assets/img/business.png'

export default function ChooseTheSchool() {
    return (
        <div className='w-full flex flex-col place-items-center mt-20 font-poppins'>
            <div className='flex justify-center mb-10'>
                <p className='lg:text-3xl md:lg:text-2xl text-lg font-bold'>"Por que escolher o SENAI?":</p>
            </div>
            <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-content-around'>

                <div className='flex flex-col text-center items-center'>
                    <div className='w-16 h-16'>
                        <img className='w-full' src={ChooseIcon1} alt="" />
                    </div>
                    <p>Qualidade dos</p>
                    <p>cursos</p>
                </div>
                <div className='flex flex-col text-center items-center'>
                    <img src={ChooseIcon2} alt="" />
                    <p>Parcerias com</p>
                    <p>Empresas</p>
                </div>
                <div className='flex flex-col text-center items-center'>
                    <img src={ChooseIcon3} alt="" />
                    <p>Profissionais</p>
                    <p>Qualificados</p>
                </div>
            </div>
        </div>
    )
}
