import React, { useContext, useEffect, useState } from 'react'

import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, useScroll } from 'framer-motion'
import MenuCalygamAdmin from '../MenuCalygamAdmin/MenuCalygamAdmin'
import { UseProgressHook } from '../../hooks/UseProgressHook/UseProgressHook'

//images
import loadingImages from '../../assets/img/loading-images.svg'
import perfilPageIcon from '../../assets/img/perfilPageIcon.png'

import calygamTrailLogo from '../../assets/img/trail-calygam-logo.svg'
import menuHamburguer from '../../assets/img/menu-hamburguer-activity.svg'
import { MockUserDataContext } from '../../context/MockUserDataContext/MockUserDataContext'
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile'
import { UseModalHook } from '../../hooks/UseModalHook/UseModalHook'
import ViewDetailsPerfil from '../modals/ViewDetailsPerfilComps/ViewDetailsPerfilModal.jsx'


export default function CalygamHeaderConfigurer({ navRoutes, baseMenus, isAnchor, adverseStyle }) {
    const location = useLocation()
    const [isAnonimous, setIsAnonimous] = useState(false)
    const { setTrailId, progress, activityUnlocked, setActivityUnlocked } = UseProgressHook()
    const [isEnabled, setIsEnabled] = useState(false)
      
    const [isImageLoading, setIsImageLoading] = useState(true);
    const { dataProfile } = UseDataProfile()
    const { modalIsOpen, contentModal, openModal } = UseModalHook()
    const { userPhoto, loadingMock } = useContext(MockUserDataContext)


    const modifyStyles = {
        selectedColorText: "text-calygam-strong-pink",
        roundedSelected: "rounded-xl rounded-bl-none"
    }


    // Função para criar trailSettings
    const createTrailSettings = (showNav) => ({
        logoImage: calygamTrailLogo,
        showNav,
        menus: baseMenus
    });



    useEffect(() => {
        if (location.pathname == "/") {
            setIsAnonimous(true)
        }
        else {
            setIsAnonimous(false)
        }
    }, [location.pathname])
    return (

        <header className={`w-[85%] mx-auto transition-all  font-poppins ${adverseStyle ? "my-0 mb-2 border-2 border-white" : "my-6"}  py-2 px-4 rounded-3xl flex items-center justify-between bg-calygam-purple-semi-strong`}>
            <AnimatePresence>
                {modalIsOpen && contentModal.includes("ViewYourDataProfile") && <ViewDetailsPerfil />}
            </AnimatePresence>
            {navRoutes ?
                <div className='flex gap-x-6 items-center w-full  justify-between'>
                    <div className='flex gap-x-6 items-center justify-center'>
                        <div className='flex space-x-4 items-center justify-center'>
                            <button type='button' className='' onClick={() => setIsEnabled(!isEnabled)}>
                                <img src={menuHamburguer} alt="acesso a sidebar mobile" className='w-[35px] md:hidden h-[35px]' />
                            </button>
                            <Link className='flex gap-x-1 items-center justify-center' to={"/home"}>
                                <img src={calygamTrailLogo} alt="Logo calygam" className='lg:w-[50px] lg:h-[50px] w-[45px] h-[45px]' />
                                <p className='md:text-lg text-sm font-bold text-white'>Calygam</p>
                            </Link>
                        </div>
                        {!isAnchor ?
                            <nav className='md:flex justify-center items-center hidden'>
                                <ul className='flex items-center font-medium text-xs text-white justify-center gap-x-2'>
                                    {navRoutes.map((navRouter, index) =>
                                        <li className='hover:underline' key={index}><Link to={navRouter.navRoute}>{navRouter.navNameRoute}</Link></li>
                                    )}

                                </ul>
                            </nav> : <nav className='md:flex justify-center items-center hidden'>
                                <ul className='flex items-center font-medium text-xs text-white justify-center gap-x-2'>
                                    {navRoutes.map((navRouter, index) =>
                                        <li key={index}><a href={`${navRouter.navRoute}`} className='hover:underline' >{navRouter.navNameRoute}</a></li>
                                    )}

                                </ul>
                            </nav>}
                        <div className="flex relative md:hidden">
                            <aside className="z-30 md:block fixed top-0 bottom-0 left-0 w-fit  text-white ">
                                <MenuCalygamAdmin trailSettings={createTrailSettings(true)} modifyStyles={modifyStyles} isEnabled={isEnabled} setIsEnabled={setIsEnabled} activityUnlocked={activityUnlocked} isAnchor={isAnchor} />
                            </aside>
                        </div>
                    </div>
                    {!isAnonimous ?
                        dataProfile.userImage ?
                            <button type='button' className='relative outline-none flex cursor-pointer' onClick={() => openModal("ViewYourDataProfile")}>
                                {isImageLoading && dataProfile.userImage != "" &&
                                    <span className='absolute flex bg-gradient-to-tr inset-0 justify-center items-center from-black via-gray-700 to-gray-700  rounded-full animate-spin'>
                                        <img src={loadingImages} alt="" className='w-[60px]  h-[60px]' />
                                    </span>
                                }
                                <img src={dataProfile.userImage} alt="Foto de Perfil" className=' object-cover w-[60px] z-10 h-[60px] rounded-full' onLoad={()=>setIsImageLoading(false)}/>

                            </button> : <button type='button' className='flex rounded-full outline-none group cursor-pointer overflow-hidden transition-all hover:rotate-6  hover:rounded-tl-md hover:rounded-br-md  bg-black/25 p-1 justify-center items-center' onClick={() => openModal("ViewYourDataProfile")}>
                                <img src={perfilPageIcon} alt="ir para perfil" className='w-[25px] group-hover:-rotate-45 transition-all h-[25px]' />
                            </button> : null}


                    {isAnonimous &&
                        <div className=' flex items-center gap-x-2'>

                            <Link to={"/Login"}><button className='py-2 px-4 border-2 outline-none text-white border-white  h-[35px] hover:translate-y-[1px] transitition-all duration-1000 ease-in-out rounded-md text-xs bg-transparent'>Entrar</button></Link>
                            <Link to={"/Register"}><button className='py-2 px-4 border-b-4 outline-none border-b-gray-300 hidden md:block hover:border-none h-[35px] hover:translate-y-[1px] transitition-all duration-1000 ease-in-out rounded-md text-xs bg-white'>Registrar</button></Link>

                        </div>
                    }


                </div> :
                <div className='flex gap-x-6  w-full justify-between items-center'>
                    <div className='flex gap-x-1 items-center justify-center'>
                        <img src={calygamTrailLogo} alt="Logo calygam" className='lg:w-[50px] lg:h-[50px] w-[25px] h-[25px]' />
                        <p className='text-lg font-bold text-white'>Calygam</p>
                    </div>
                    <nav className='flex justify-center items-center'>
                        <ul className='flex items-center font-medium text-xs text-white justify-center gap-x-2'>
                            {navRoutes?.map((navRouter, index) =>
                                <li key={navRouter.navRoute}><Link to={navRouter.navRoute}>{navRouter.navNameRoute}</Link></li>
                            )}

                        </ul>
                    </nav>

                </div>}
        </header>
    )
}
