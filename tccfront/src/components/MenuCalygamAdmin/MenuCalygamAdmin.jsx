import React, { useEffect, useState } from 'react'
import senaiLogo from '../../assets/img/senaiLogo.png'
import homeCoordinator from '../../assets/img/home-coordinator.svg'
import dashCoordinator from '../../assets/img/dash-coordinator.svg'
import configsCoordinator from '../../assets/img/configs-coordinator.svg'
import quitCoordinator from '../../assets/img/quit-coordinator.svg'
import AdminButtonDasnboard from '../../components/AdminButtonDasnboard/AdminButtonDasnboard.jsx'
import { useLocation } from 'react-router-dom'

import StaticTooltipActivity from '../../components/StaticTooltipActivity/StaticTooltipActivity.jsx'
import { UseDataActivitiesPerTrailIdHook } from '../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook.js'
// import CalygamNavBar from '../../components/CalygamNavBar/CalygamNavBar.jsx'
export default function MenuCalygamAdmin({ trailSettings, isEnabled, setIsEnabled, modifyStyles, progress,activityUnlocked }) {
    const [objTrail, setObjTrail] = useState({})
    const { activities, trailId } = UseDataActivitiesPerTrailIdHook()
    const location = useLocation()
    useEffect(() => {
        if (trailSettings) {
            setObjTrail(trailSettings)
        }
    }, [trailSettings])




    const [selectedButton, setSelectedButton] = useState(1)
    //Trail:
    //  logoImage:logoImage,
    //  menus:{
    //    home:'Home',
    //    lolja:'Lolja',
    //    perfil:'Perfil',
    //    mais:'mais'
    //  }
    const infoAdminButton = [
        {
            image: trailSettings?.menus?.home?.icon ?? homeCoordinator,
            areaDash: trailSettings?.menus?.home?.label ?? 'Home'
        },
        {
            image: trailSettings?.menus?.lolja?.icon ?? dashCoordinator,
            areaDash: trailSettings?.menus?.lolja?.label ?? 'Dashboard'
        },
        {
            image: trailSettings?.menus?.perfil?.icon ?? configsCoordinator,
            areaDash: trailSettings?.menus?.perfil?.label ?? 'Configurações'
        },
        {
            image: trailSettings?.menus?.mais?.icon ?? quitCoordinator,
            areaDash: trailSettings?.menus?.mais?.label ?? 'Sair'
        }
    ];







    return (
        <div className={`lg:w-fit  lg:block ${!isEnabled ? "hidden md:block" : "block"}  outline-none        font-poppins ${trailSettings ? "border-r-2  border-white/20" : "border-none fixed lg:sticky w-[75%] inset-0"}    min-h-lvh h-full transition-all delay-75 duration-[10000ms] z-20 ease-in-out `}>
            {isEnabled &&
            
                <div className={`flex ${trailSettings ? "md:hidden fixed -z-10 " : "lg:hidden fixed -z-10"}  w-full h-full    bg-black/50 `}></div>}
            <menu className={`w-full flex flex-col items-end  ${["/Trilha","/Atividade"].includes(location.pathname)? "bg-calygam-purple-semi-bold md:bg-calygam-purple-light" : "bg-calygam-purple-semi-bold"} lg:pt-8 overflow-y-auto  pt-0 h-full`}>
                <div className={`w-full ${trailSettings ? "md:hidden" : "lg:hidden"} flex justify-end pr-5 text-black  font-black text-xl`}>
                    <button className='text-white font-bold' onClick={() => setIsEnabled(!isEnabled)}> {isEnabled ? "X" : "/"}</button></div>
                <div className={`w-full flex justify-center ${trailSettings ? "border-none" : "border-b"} border-gray-400/50 lg:py-7  p-5  `}>
                    <img src={location.pathname == "/Trilha"||"/Atividade" ? objTrail?.logoImage : senaiLogo} alt="" className={`${location.pathname =="/Atividade"?"w-full object-cover":trailSettings ? "shadow-none w-[150px] h-[50px]" : "shadow-xl w-[150px] lg:w-full shadow-black/50"}  `} />
                </div>
                {trailSettings?.showNav &&
                    <nav className='w-[95%] space-y-5 flex flex-col py-3'>
                        <ul>
                            {trailSettings?.menus?.map((info, index) => (
                                <li key={index} className='my-3'>
                                    <AdminButtonDasnboard iconAreaDash={info.routeIcon} textAreaDash={info.navNameRoute} identifier={index} selectedButton={selectedButton} setSelectedButton={setSelectedButton} modifyStyles={modifyStyles} />
                                </li>
                            ))

                            }
                        </ul>
                    </nav>}
                {progress &&
                    <div className={`flex w-full ${trailSettings?.showNav?"lg:hidden":""}  items-center px-2 flex-col`}>
                        <div className='my-1 flex flex-col items-center'>
                            <h3 className=''>Painel da Atividade</h3>
                            <div className='h-[2px] rounded-full space-y-4 w-full bg-white'></div>
                        </div>
                        <div className=' flex flex-col w-full my-4 items-center space-y-4'>
                            <StaticTooltipActivity comumInfo={activityUnlocked} tooltipInfo={activityUnlocked} />
                            <StaticTooltipActivity comumInfo={false} tooltipInfo={false} />
                        </div>
                    </div>
                }
            </menu>
        </div>
    )
}
