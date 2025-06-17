import React from 'react'

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
export default function AdminManagementPage() {
  // const { setToken } = useAuth();
  const { dataProfile, loading } = UseDataProfile()
  const navRoutes = [
    ["ADMIN", "INSTRUTOR", "COORDENADOR"].includes(dataProfile.userRole) &&
    { navRoute: "/Coordenacao", navNameRoute: "Equipe", routeIcon: homeIcon },
    ["INSTRUTOR", "COORDENADOR"].includes(dataProfile.userRole) &&
    { navRoute: "/Trail/Criar", navNameRoute: "Oficina", routeIcon: homeIcon },
    { navRoute: "/", navNameRoute: "Trilhas", routeIcon: homeIcon }

  ]




  const attackAnalisis = [
    { idAnalisis: 1, titleAnalisis: "Total de Professores", numberAnalisis: 2500 },
    { idAnalisis: 2, titleAnalisis: "Trilhas Ativas", numberAnalisis: 5500 },
    { idAnalisis: 3, titleAnalisis: "Total de Professores", numberAnalisis: 10500 },
  ]
  return (
    <div className='flex flex-col gap-y-2 '>

      <div className='gap-y-14 font-poppins'>
        <header>
          <CalygamHeaderConfigurer navRoutes={navRoutes} baseMenus={navRoutes} />
        </header>
        <div className='w-fit flex flex-col mx-auto  items-center justify-center gap-y-8'>
          <AnalyticsInfoAction attackAnalisis={attackAnalisis} />

          <button type='button' className='rounded-md flex outline-none justify-center self-end border-b-8 border-b-pink-600/10 hover:border-b-0 h-[50px]  bg-calygam-strong-pink items-center py-2 px-4 gap-2'>

            <img src={turmasIcon} alt="" className='w-[20px] h-[20px]' />
            <p className='text-white'>Adicionar Professor</p>
          </button>



        </div>
        <div className='w-[400px] overflow-x-auto'>
          <section className='w-[800px]  overflow-x-auto  mx-auto'>
            <CalygamTableManagemet />
          </section>
        </div>
      </div>
    </div>
  )
}
