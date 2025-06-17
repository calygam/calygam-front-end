import React from 'react'

//components
import CalygamHeaderConfigurer from '../../components/CalygamHeaderConfigurer/CalygamHeaderConfigurer'
import AnalyticsInfoAction from '../../components/AnalyticsInfoAction/AnalyticsInfoAction.jsx'
//Hooks
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile'

//images
import homeIcon from '../../assets/img/home-icon-menu.svg'
import loljaIcon from '../../assets/img/lolja-icon-menu.svg'
import perfilIcon from '../../assets/img/perfil-icon-menu.svg'
import moreIcon from '../../assets/img/menu-icon-trail.svg'

import turmasIcon from '../../assets/img/turmas-icon.svg'
export default function AdminManagementPage() {
  const { dataProfile, loading } = UseDataProfile()
  const navRoutes = [
    ["ADMIN", "INSTRUTOR", "COORDENADOR"].includes(dataProfile.userRole) &&
    { navRoute: "/Coordenacao", navNameRoute: "Equipe",routeIcon:homeIcon },
    ["INSTRUTOR", "COORDENADOR"].includes(dataProfile.userRole) &&
    { navRoute: "/Trail/Criar", navNameRoute: "Oficina",routeIcon:homeIcon },
    { navRoute: "/", navNameRoute: "Trilhas",routeIcon:homeIcon }

  ]




  const attackAnalisis =[
    {idAnalisis:1,titleAnalisis:"Total de Professores",numberAnalisis:2500},
    {idAnalisis:2,titleAnalisis:"Trilhas Ativas",numberAnalisis:5500},
    {idAnalisis:3,titleAnalisis:"Total de Professores",numberAnalisis:10500},
  ]
  return (
    <div className='gap-y-14 font-poppins'>
      <header>
        <CalygamHeaderConfigurer navRoutes={navRoutes} baseMenus={navRoutes}/>
      </header>
      <section className='w-[85%] mx-auto flex flex-col items-center gap-y-4'>
        <AnalyticsInfoAction attackAnalisis={attackAnalisis}/>
      

        <div className='w-[76%] flex my-8 justify-end'>
          <button type='button' className='rounded-md flex outline-none justify-center bg-calygam-strong-pink items-center py-2 px-4 gap-2'>
            <img src={turmasIcon} alt="" className='w-[20px] h-[20px]'/>
            <p className='text-white'>Adicionar Professor</p>
          </button>
        </div>
      </section>

    </div>
  )
}
