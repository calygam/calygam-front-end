import React, { useEffect, useState } from 'react'
//view
//components
import CalygamHeaderConfigurer from '../../components/CalygamHeaderConfigurer/CalygamHeaderConfigurer'
import AnalyticsInfoAction from '../../components/AnalyticsInfoAction/AnalyticsInfoAction.jsx'
import CalygamTableManagemet from '../../components/CalygamTableManagemet/CalygamTableManagemet.jsx'
//Hooks
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile'

//images
import homeIcon from '../../assets/img/home-icon-menu.svg'
import loljaIcon from '../../assets/img/lolja-icon-menu.svg'
import perfilIcon from '../../assets/img/perfil-icon-menu.svg'
import moreIcon from '../../assets/img/menu-icon-trail.svg'

import turmasIcon from '../../assets/img/turmas-icon.svg'
import { motion } from 'framer-motion'
import useAuth from '../../hooks/UseJwtChecked/UseJwtChecked.js'
//modals
import AssignPositionModal from '../../components/modals/AssignPositionModal/AssignPositionModal.jsx'
import { UseModalHook } from '../../hooks/UseModalHook/UseModalHook.js'
export default function AdminManagementPage() {
  const { setToken } = useAuth();
  const { dataProfile, loading, dataTeachers, searchDataTeachers,targetTeacher,setTargetTeacher } = UseDataProfile()
 const{modalIsOpen,openModal,contentModal}=UseModalHook()
  useEffect(() => {
    searchDataTeachers(0, "userName,desc")
  }, [])
   useEffect(() => {
    if(!modalIsOpen && targetTeacher.length>0){
      setTargetTeacher("")
    }
  }, [modalIsOpen])

    useEffect(()=>{
            if (!dataProfile?.userRole) return;
          if(!["ADMIN","COORDENADOR"].includes(dataProfile.userRole)){
            localStorage.removeItem("token")
          }
        },[location.pathname,modalIsOpen])



  const navRoutes = [
    ["ADMIN", "COORDENADOR"].includes(dataProfile.userRole) &&
    { navRoute: "/Coordenacao", navNameRoute: "Equipe", routeIcon: homeIcon },
    ["ADMIN", "INSTRUTOR", "COORDENADOR"].includes(dataProfile.userRole) &&
    { navRoute: "/Trail/Criar", navNameRoute: "Oficina", routeIcon: homeIcon },
    { navRoute: "/", navNameRoute: "Trilhas", routeIcon: homeIcon }

  ]




  // const attackAnalisis = [
  //   { idAnalisis: 1, titleAnalisis: "Total de Professores", numberAnalisis: 2500 },
  //   { idAnalisis: 2, titleAnalisis: "Trilhas Ativas", numberAnalisis: 5500 },
  //   { idAnalisis: 3, titleAnalisis: "Total de Professores", numberAnalisis: 10500 },
  // ]
  return (
    <div className='flex flex-col min-h-[1200px] md:min-h-full gap-y-2 '>
      {modalIsOpen&&contentModal.includes("AssignTeacher")&&
      <AssignPositionModal/>
}
      <div className='gap-y-14 font-poppins'>
        <header>
          <CalygamHeaderConfigurer navRoutes={navRoutes} baseMenus={navRoutes} />
        </header>
        <div className='w-fit flex flex-col mx-auto  items-center justify-center gap-y-8'>
          <AnalyticsInfoAction />

          <button type='button' className='rounded-md flex outline-none justify-center self-end border-b-8 border-b-pink-600/10 hover:border-b-0 h-[50px]  bg-calygam-strong-pink items-center py-2 px-4 gap-2' onClick={()=>openModal("AssignTeacher")}>

            <img src={turmasIcon} alt="" className='w-[20px] h-[20px]' />
            <p className='text-white'>Adicionar Professor</p>
          </button>



        </div>
         <div className='mt-4 mb-16 w-[90%] border pb-2 border-calygam-purple-semi-strong/50  mx-auto  rounded-xl'>
          <div className=" w-full  pb-6   ">
            <div className="">
              <CalygamTableManagemet rowOfTable={dataTeachers} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}