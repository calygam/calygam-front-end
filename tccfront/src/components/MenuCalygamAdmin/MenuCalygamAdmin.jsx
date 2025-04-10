import React, { useEffect, useState } from 'react'
import senaiLogo from '../../assets/img/senaiLogo.png'
import homeCoordinator from '../../assets/img/home-coordinator.svg'
import dashCoordinator from '../../assets/img/dash-coordinator.svg'
import configsCoordinator from '../../assets/img/configs-coordinator.svg'
import quitCoordinator from '../../assets/img/quit-coordinator.svg'
import AdminButtonDasnboard from '../../components/AdminButtonDasnboard/AdminButtonDasnboard.jsx'
export default function MenuCalygamAdmin({isEnabled,setIsEnabled}) {
    const [selectedButton,setSelectedButton] = useState(1)
 
    const infoAdminButton = [
        { image: homeCoordinator, areaDash: 'Home' },
        { image: dashCoordinator, areaDash: 'Dashboard' },
        { image: configsCoordinator, areaDash: 'Configurações' },
        { image: quitCoordinator, areaDash: 'Sair' },]

    return (
        <div className={`lg:w-fit lg:block ${!isEnabled?"hidden":"block"}  lg:sticky w-[75%] fixed inset-0 font-poppins    min-h-lvh h-full transition-all delay-75 duration-[10000ms] ease-in-out `}>
          
            <div className='lg:hidden flex w-full h-full fixed -z-50   bg-black/50 '></div>
            <menu className='w-full flex flex-col items-end  bg-calygam-brown-semi-light lg:pt-8 pt-0 h-full'>
            <div className='w-full lg:hidden flex justify-end pr-5 text-black py-4 font-black text-xl'>
                <button onClick={()=>setIsEnabled(!isEnabled)}> {isEnabled?"X":"/"}</button></div>
                <div className='w-full flex justify-center border-b border-gray-400/50  p-5'>
                    <img src={senaiLogo} alt="" className='shadow-xl shadow-black/50' />
                </div>
                <nav className='w-[85%] space-y-5 flex flex-col py-6'>
                    <ul>
                        {infoAdminButton.map((info, index) => (
                            <li key={index} className='my-3'>
                                <AdminButtonDasnboard iconAreaDash={info.image} textAreaDash={info.areaDash} identifier={index} selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
                            </li>
                        ))

                        }
                    </ul>
                </nav>
            </menu>
        </div>
    )
}
