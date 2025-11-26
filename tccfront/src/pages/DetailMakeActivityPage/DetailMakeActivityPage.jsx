import React, { useEffect, useState } from 'react'
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
        </div>
      </div>


    </div>
  )
}
