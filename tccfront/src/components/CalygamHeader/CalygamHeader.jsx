import React, { useContext, useEffect, useState } from 'react'

//images
import logoReference from '../../assets/img/icon-logo-reference.svg'
import logoImage from '../../assets/img/calygam-logo-light.svg'
import homeIcon from '../../assets/img/home-icon-menu.svg'
import loljaIcon from '../../assets/img/lolja-icon-menu.svg'
import perfilIcon from '../../assets/img/perfil-icon-menu.svg'
import moreIcon from '../../assets/img/menu-icon-trail.svg'
import menuHamburguer from '../../assets/img/menu-hamburguer-activity.svg'
import arrowIndicator from '../../assets/img/arrow-activity-indicator.svg'
//componentes
import MenuCalygamAdmin from '../MenuCalygamAdmin/MenuCalygamAdmin'
//Hook
import { UseProgressHook } from '../../hooks/UseProgressHook/UseProgressHook'
import { UseDataActivitiesPerTrailIdHook } from '../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook'
import { MockUserDataContext } from '../../context/MockUserDataContext/MockUserDataContext'



export default function CalygamHeader() {
    const { setTrailId, progress, activityUnlocked, setActivityUnlocked } = UseProgressHook()
    const { position, setPosition } = UseDataActivitiesPerTrailIdHook()
    const { userPhoto, loadingMock } = useContext(MockUserDataContext)

    const [isEnabled, setIsEnabled] = useState(false)
    useEffect(() => {
        console.log(isEnabled)
    }, [isEnabled])
    const modifyStyles = {
        selectedColorText: "text-calygam-strong-pink",
        roundedSelected: "rounded-xl rounded-bl-none"
    }

    const baseMenus = {
        home: { label: 'Inicio', icon: homeIcon, showInNav: true },
        lolja: { label: 'Turmas', icon: loljaIcon, showInNav: false },
        perfil: { label: 'Calendário', icon: perfilIcon, showInNav: true },
        mais: { label: 'Mensagens', icon: moreIcon, showInNav: false }
    };

    const createTrailSettings = (showNav) => ({
        logoImage,
        showNav,
        menus: baseMenus
    });
    return (
        <>
            {isEnabled &&
                <div className='md:hidden flex inset-0 fixed  '>
                    <MenuCalygamAdmin trailSettings={createTrailSettings(true)} modifyStyles={modifyStyles} isEnabled={isEnabled} setIsEnabled={setIsEnabled} activityUnlocked={activityUnlocked} />
                </div>
            }
            <div className='w-full font-poppins flex md:gap-x-6  md:py-4 md:px-6 md:justify-between justify-center  md:bg-purple-950/85 transition-all ease-linear duration-[1200ms]'>
                <div className='md:hidden flex items-center w-full justify-between py-8 px-6  gap-x-2'>
                    <div className='flex justify-center items-center gap-x-2'>
                        <button type='button' className='' onClick={() => setIsEnabled(!isEnabled)}>
                            <img src={menuHamburguer} alt="acesso a sidebar mobile" className='w-[35px] h-[35px]' />
                        </button>
                        <img src={arrowIndicator} alt="" className='w-[15px] h-[15px]' />
                    </div>
                    <h1>Atividade - {position}</h1>
                    <img src={userPhoto?.medium} alt="" className='w-[35px] h-[35px] rounded-full' />
                </div>
                <div className='flex items-center justify-center gap-x-6'>
                    <div className='hidden md:flex gap-x-4 items-center'>
                        <img src={logoReference} alt="" className='w-[25px] h-[25px]' />
                        <img src={logoImage} alt="" />
                    </div>
                    <nav className='hidden md:flex gap-x-4 items-center'>
                        <ul className='list-none flex items-center  gap-x-6'>
                            <li className='text-white font-light text-xs'>Inicio</li>
                            <li className='text-white font-light text-xs'>Turmas</li>
                            <li className='text-white font-light text-xs'>Calendário</li>
                            <li className='text-white font-light text-xs'>Mensagens</li>
                        </ul>
                    </nav>
                </div>
                <img src={userPhoto?.medium} alt="" className='w-[35px] hidden md:flex h-[35px] rounded-full' />
            </div>
        </>
    )
}