import React, { useEffect, useState } from 'react'
import senaiLogo from '../../assets/img/senaiLogo.png'
import homeCoordinator from '../../assets/img/home-coordinator.svg'
import dashCoordinator from '../../assets/img/dash-coordinator.svg'
import configsCoordinator from '../../assets/img/configs-coordinator.svg'
import quitCoordinator from '../../assets/img/quit-coordinator.svg'
import AdminButtonDasnboard from '../../components/AdminButtonDasnboard/AdminButtonDasnboard.jsx'
export default function MenuCalygamAdmin({trailSettings,isEnabled,setIsEnabled}) {
    const [objTrail,setObjTrail] = useState({})
    useEffect(()=>{
        if(trailSettings){
        setObjTrail(trailSettings)
        }
    },[trailSettings])

     

    const [selectedButton,setSelectedButton] = useState(1)
    //Trail:
    //  logoImage:logoImage,
    //  menus:{
    //    home:'Home',
    //    lolja:'Lolja',
    //    perfil:'Perfil',
    //    mais:'mais'
    //  }
    const infoAdminButton = [
        { image: homeCoordinator, areaDash: trailSettings?objTrail?.menus?.home:'Home' },
        { image: dashCoordinator, areaDash: trailSettings?objTrail?.menus?.lolja:'Dashboard' },
        { image: configsCoordinator, areaDash: trailSettings?objTrail?.menus?.perfil:'Configurações' },
        { image: quitCoordinator, areaDash: trailSettings?objTrail?.menus?.mais:'Sair' },
   ]

    return (
        <div className={`lg:w-fit lg:block ${!isEnabled?"hidden md:block":"block"} outline-none        font-poppins ${trailSettings?"border-r-2  border-white/20":"border-none fixed lg:sticky w-[75%] inset-0"}    min-h-lvh h-full transition-all delay-75 duration-[10000ms] z-20 ease-in-out `}>
          {trailSettings&&
            <div className={`flex ${trailSettings?"md:hidden":"lg:hidden fixed -z-10"}  w-full h-full    bg-black/50 `}></div>}
            <menu className={`w-full flex flex-col items-end  ${trailSettings?"bg-purple-950 md:bg-calygam-purple-light":"bg-calygam-brown-semi-light"} lg:pt-8 overflow-y-auto pt-0 h-full`}>
            <div className={`w-full ${trailSettings?"md:hidden":"lg:hidden"} flex justify-end pr-5 text-black  font-black text-xl`}>
                <button onClick={()=>setIsEnabled(!isEnabled)}> {isEnabled?"X":"/"}</button></div>
                <div className={`w-full flex justify-center ${trailSettings?"border-none":"border-b"} border-gray-400/50 lg:py-7  p-5  `}>
                    <img src={trailSettings?objTrail?.logoImage:senaiLogo} alt="" className={`${trailSettings?"shadow-none w-[150px] h-[50px]":"shadow-xl w-[150px] lg:w-full shadow-black/50"}  `}/>
                </div>
                <nav className='w-[95%] space-y-5 flex flex-col py-3'>
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
