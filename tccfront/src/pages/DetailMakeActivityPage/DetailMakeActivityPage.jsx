import React from 'react'
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
import DeleteModal from '../../components/modals/DeleteModal/DeleteModal.jsx';



export default function DetailMakeActivityPage() {
  const { setToken } = useAuth();
  const { dataProfile } = UseDataProfile()
  const {contentModal,modalIsOpen} = UseModalHook()
  
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
        <div className='  w-full flex flex-wrap gap-x-4 gap-y-6 md:gap-y-0 md:justify-between justify-center '>

          <CalygamActivityDetail />
        
          <div className='flex flex-col gap-y-3  items-center w-[250px] '>
            <div className='border p-2 border-calygam-purple-semi-strong w-full backdrop-blur-2xl rounded-md'>
              <p className='text-xs font-bold'>Feedback</p>
            </div>
            <div className='border p-4 flex  gap-x-2 border-calygam-purple-semi-strong w-full bg-green-500/5 backdrop-blur-2xl rounded-md'>
              <img src={sendFeedBack} alt="" className='w-[40px] '/>
              <div className='flex flex-col space-y-1'>
                <p className='text-xs'>Nota</p>
                <p className='text-calygam-purple-semi-strong text-xs'>Nenhuma nota</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
