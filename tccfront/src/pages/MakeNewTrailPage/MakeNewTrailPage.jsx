import React, { useEffect } from 'react'

import UserInfoViewManagement from '../../components/UserInfoViewManagement/UserInfoViewManagement.jsx'
import CreateAndShowTrailManagement from '../../components/CreateAndShowTrailManagement/CreateAndShowTrailManagement.jsx'
import ViewTrails from '../../components/ViewTrails/ViewTrails.jsx'
import CreateNewJourneyModal from '../../components/modals/CreateNewJourneyModal/CreateNewJourneyModal.jsx'


import useAuth from '../../hooks/UseJwtChecked/UseJwtChecked.js';
import { UseReadAllTrailsHook } from '../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook.js';
import CalygamHeaderConfigurer from '../../components/CalygamHeaderConfigurer/CalygamHeaderConfigurer.jsx';
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile.js';

//images
import homeIcon from '../../assets/img/home-icon-menu.svg'
import loljaIcon from '../../assets/img/lolja-icon-menu.svg'
import perfilIcon from '../../assets/img/perfil-icon-menu.svg'
import moreIcon from '../../assets/img/menu-icon-trail.svg'
import CalygamTableManagemet from '../../components/CalygamTableManagemet/CalygamTableManagemet.jsx';
import { UseModalHook } from '../../hooks/UseModalHook/UseModalHook.js'
import { AnimatePresence, motion } from 'framer-motion'

export default function MakeNewTrailPage() {
  const { setToken } = useAuth();
  const {trails,targetTrailId,setTargetTrailId} = UseReadAllTrailsHook()
   const { dataProfile } = UseDataProfile()
   const{modalIsOpen,openModal,contentModal}=UseModalHook()
     
   
       const targetTrail = trails.find((oneTrail)=>oneTrail.trailId === targetTrailId)
    const navRoutes = [
      ["ADMIN", "COORDENADOR"].includes(dataProfile.userRole) &&
      { navRoute: "/Coordenacao", navNameRoute: "Equipe", routeIcon: homeIcon },
      ["ADMIN", "INSTRUTOR", "COORDENADOR"].includes(dataProfile.userRole) &&
      { navRoute: "/Trail/Criar", navNameRoute: "Oficina", routeIcon: homeIcon },
      { navRoute: "/", navNameRoute: "Trilhas", routeIcon: homeIcon }
  
    ]
   

   useEffect(() => {
    if (targetTrailId) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }
   },[targetTrailId])

  return (
    <div className='flex  flex-col items-center font-poppins   h-full transition-all duration-[2000ms] ease-linear'>
  <AnimatePresence>
        {modalIsOpen && contentModal.includes("CreateAnewTrail") && (
          <motion.div
          
            key="modal-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0,display:"none" }}
            className="z-40"
          >
            <CreateNewJourneyModal />
          </motion.div>
        )}
      </AnimatePresence>
 
      <CalygamHeaderConfigurer navRoutes={navRoutes} baseMenus={navRoutes} />
      <div className='w-[90%] '>
        <div className='w-full flex md:justify-between flex-wrap  md:items-center  text-start'>
          <h1 className='font-semibold self-start  text-start'>Gerenciar Trilhas de Aprendizagem</h1>
          <button type='button' className='bg-calygam-blue-semi-strong text-xs h-[35px] self-end md:self-auto  flex items-center justify-center  text-white py-4 px-6 rounded-md border-b-4 border-b-blue-800 outline-none hover:border-0' onClick={()=>openModal("CreateAnewTrail")}>Criar Trilha</button>
        </div>
        {/* <UserInfoViewManagement /> */}
        {/* <div className={`w-full transition-all ease-linear duration-[3000ms]  gap-x-4 ${targetTrailId?"flex justify-center":"grid lg:grid-cols-2 my-16 md:grid-cols-2 justify-center"}   md:space-y-0 space-y-3  grid-cols-1`}>

          <CreateAndShowTrailManagement />



           {trails.map(imgs=>(
          <a href={imgs.trailImage} key={imgs.trailId}  alt="" className=' bg-gray-500  object-cover' >Baixar -{imgs.trailId}</a>
        ))} 
          <ViewTrails />





        </div> */}
        {trails&&
         <div className='mt-4 mb-16  border pb-2 border-calygam-purple-semi-strong/50  mx-auto  rounded-xl'>
                   <div className=" w-full  pb-6   ">
                     <div className="">
                       <CalygamTableManagemet rowOfTable={trails} />
                     </div>
                   </div>
                 </div>
        }
      </div>
    </div>
  )
}
