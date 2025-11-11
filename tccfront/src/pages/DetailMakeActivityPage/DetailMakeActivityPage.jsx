import React, { useState } from 'react'
//componentes
import CalygamHeader from '../../components/CalygamHeader/CalygamHeader.jsx'
import CalygamActivityDetail from '../../components/CalygamActivityDetail/CalygamActivityDetail.jsx'
import CalygamHeaderConfigurer from '../../components/CalygamHeaderConfigurer/CalygamHeaderConfigurer.jsx';

import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile.js';
//Hooks
import { UseDataActivitiesPerTrailIdHook } from '../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook.js'
import useAuth from '../../hooks/UseJwtChecked/UseJwtChecked.js';
//images
import homeIcon from '../../assets/img/home-icon-menu.svg'
import backToTrail from '../../assets/img/arrow-activity-indicator.svg'
import sendFeedBack from '../../assets/img/send-feedback-hat.svg'
import { Link } from 'react-router-dom';
import { UseModalHook } from '../../hooks/UseModalHook/UseModalHook.js';
import { getRoutesByRole } from '../../utils/navRoutesUtil.js';
import loadingImages from '../../assets/img/loading-images.svg'
import DeleteModal from '../../components/modals/DeleteModal/DeleteModal.jsx';
import { UseReadAllTrailsHook } from '../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook.js';



export default function DetailMakeActivityPage() {
  const { setToken } = useAuth();
  const { dataProfile } = UseDataProfile()
  const { contentModal, modalIsOpen } = UseModalHook()
  const { targetTrail } = UseReadAllTrailsHook()
  const [isImageLoading, setIsImageLoading] = useState(true);
  const navRoutes = [
    ["ADMIN", "COORDENADOR"].includes(dataProfile.userRole) &&
    { navRoute: "/Coordenacao", navNameRoute: "Equipe", routeIcon: homeIcon },
    ["ADMIN", "INSTRUTOR", "COORDENADOR"].includes(dataProfile.userRole) &&
    { navRoute: "/Trail/Criar", navNameRoute: "Oficina", routeIcon: homeIcon },
    { navRoute: "/", navNameRoute: "Trilhas", routeIcon: homeIcon }

  ]
  return (
    <div className='w-full flex flex-col font-poppins '>

      <CalygamHeaderConfigurer navRoutes={getRoutesByRole(dataProfile)} baseMenus={getRoutesByRole(dataProfile)} />

      <div className='flex flex-col mx-auto items-center gap-y-6 mt-4 w-[80%]'>
        <Link to={"/Trilha"} className='w-full flex group items-center gap-x-1'>
          <img src={backToTrail} alt="voltar para trilha" className='w-[15px] group-hover:-translate-x-[4px] transition-all ease-linear h-[15px] opacity-75' />
          <p className='text-xs font-semibold group-hover:scale-110 transition-all ease-linear'>Trilha</p>
        </Link>
        <div className='  w-full flex flex-wrap gap-x-4 gap-y-6 md:gap-y-0   '>

          <CalygamActivityDetail />

          {/* <div className={`flex flex-col gap-y-3    items-center w-[350px] `}>
            {targetTrail?.trailPassword ?
              <p className='p-2 rounded-full text-white text-center truncate text-2xl border-4 border-yellow-800/55 font-bold w-full  bg-zinc-700'>{targetTrail.trailPassword.length>9?"Descartar": targetTrail.trailPassword}</p>
              : isImageLoading &&
              <span className='absolute flex bg-gradient-to-tr -z-10   rounded-full '>
                <p className='bg-zinc-700 text-white font-semibold text-2xl'>Carregando...</p>
              </span>
            }
          
          </div> */}
        </div>
      </div>


    </div>
  )
}
