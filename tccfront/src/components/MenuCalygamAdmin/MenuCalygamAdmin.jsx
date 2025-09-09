import React, { useEffect, useState } from 'react'
import senaiLogo from '../../assets/img/senaiLogo.png'
import homeCoordinator from '../../assets/img/home-coordinator.svg'
import dashCoordinator from '../../assets/img/dash-coordinator.svg'
import configsCoordinator from '../../assets/img/configs-coordinator.svg'
import quitCoordinator from '../../assets/img/quit-coordinator.svg'
import AdminButtonDasnboard from '../../components/AdminButtonDasnboard/AdminButtonDasnboard.jsx'
import { Link, useLocation } from 'react-router-dom'

import StaticTooltipActivity from '../../components/StaticTooltipActivity/StaticTooltipActivity.jsx'
import { UseDataActivitiesPerTrailIdHook } from '../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook.js'
import { UseReadAllTrailsHook } from '../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook.js'
import trailMenuFirst from '../../assets/img/trail-menu-first.png'
import trailMenuSecond from '../../assets/img/trail-menu-second.png'
// import CalygamNavBar from '../../components/CalygamNavBar/CalygamNavBar.jsx'
export default function MenuCalygamAdmin({ trailSettings, isEnabled, setIsEnabled, modifyStyles, progress, activityUnlocked, inverse,isAnchor }) {
    const [objTrail, setObjTrail] = useState({})
    const { activities, trailId } = UseDataActivitiesPerTrailIdHook()
    const { targetTrail, searchtrailsById, targetTrailId } = UseReadAllTrailsHook()

    const location = useLocation()
    useEffect(() => {
        if (trailSettings) {
            setObjTrail(trailSettings)
        }
    }, [trailSettings])







    const [selectedButton, setSelectedButton] = useState(-1)
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
        <div className={`lg:w-fit  bg-cover bg-no-repeat    lg:block ${!isEnabled ? "hidden md:block" : "block"}  outline-none        font-poppins ${trailSettings ?!inverse? " lg:min-w-[240px] md:min-w-[260px] lg:max-w-[240px] border-white/20": "lg:w-[250px] border-white/20"   : "border-none fixed lg:sticky w-[75%]  inset-0"}    min-h-lvh h-full transition-all delay-75 duration-[10000ms] z-20 ease-in-out bg-transparent `}
        style={{backgroundImage:`url(${!inverse?trailMenuFirst:trailMenuSecond})`}}>
            {isEnabled &&

                <div className={`flex ${trailSettings ? "md:hidden fixed -z-10 " : "lg:hidden fixed -z-10"}  w-full h-full    bg-purple-600/50 `}></div>}
            <menu className={`w-full min-w-[250px] md:min-w-full flex ${inverse&&"justify-center"} flex-col   ${["/Trilha", "/Atividade"].includes(location.pathname) ? "":""}  overflow-y-auto  custom-scrollbar  pt-0 h-full`}>
                <div className={`w-full ${trailSettings ? "md:hidden" : "lg:hidden"} flex justify-end pr-5 text-black  font-black text-xl`}>
                    <button className='text-white font-bold' onClick={() => setIsEnabled(!isEnabled)}> {isEnabled ? "X" : "/"}</button></div>
                <div className={`w-full flex   ${trailSettings ? "border-none" : "border-b"} border-gray-400/50 lg:py-7 w-[150px]  p-5  `}>
                    {!inverse ?
                        <Link to={"/home"}><img src={location.pathname == "/Trilha" || "/Atividade" && !inverse ? objTrail?.logoImage : senaiLogo} alt="" className={`${location.pathname == "/Atividade" ? "w-full object-contain" : trailSettings ? "shadow-none w-[100px] h-auto max-h-[100px]" : "shadow-xl w-[150px] lg:w-full shadow-black/50"} hover:object-cover bg-black rounded-full border-4 border-purple-950 `} /></Link>
                        : <img src={targetTrail.trailImage?targetTrail.trailImage:senaiLogo} alt="" className={`${targetTrail.trailImage?"w-[150px] mx-auto h-auto max-h-[200px] object-contain  rounded-md border border-white/15 shadow-sm shadow-purple-500/50 hover:scale-110 overflow-hidden transition-all ":"hidden"}  `} />
                    }
                </div>
                {trailSettings?.showNav &&
                    <nav className='w-[95%] space-y-5 flex flex-col py-3'>
                        <ul>
                            {trailSettings?.menus?.map((info, index) => (
                                info.navRoute && 
                                <li key={index} className='my-3'>
                                    <AdminButtonDasnboard iconAreaDash={info.routeIcon} textAreaDash={info.navNameRoute} identifier={index} isEnabled={isEnabled} setIsEnabled={setIsEnabled} selectedButton={selectedButton} setSelectedButton={setSelectedButton} modifyStyles={modifyStyles} navRoute={info.navRoute}/>
                                </li>
                                
                            ))

                            }
                        </ul>
                    </nav>}
                {progress && activityUnlocked &&targetTrail.trailName? 
                    <div className={`flex  w-full ${trailSettings?.showNav ? "lg:hidden" : ""}  items-center px-2 flex-col`}>
                       
                        <div className=' flex flex-col w-full my-1 items-center space-y-4'>
                            <StaticTooltipActivity comumInfo={activityUnlocked} tooltipInfo={false} />

                        </div>
                    </div>
                :location.pathname == "/Trilha" &&inverse?<p className='px-4 text-purple-300 font-bold'>Carregando...</p>:null}
                {progress && 
                    <div className={`flex w-full ${trailSettings?.showNav ? "lg:hidden" : ""}  items-center px-2 flex-col`}>
                     
                        <div className=' flex flex-col w-full my-1 items-center space-y-4'>
                            <StaticTooltipActivity comumInfo={false} tooltipInfo={activityUnlocked} />
                        </div>
                    </div>
                }
            </menu>
        </div>
    )
}
