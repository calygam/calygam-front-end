import React, { useEffect, useState } from 'react'
import CalygamHeaderConfigurer from '../../components/CalygamHeaderConfigurer/CalygamHeaderConfigurer'
import CalygamRewardsView from '../../components/CalygamRewardsView/CalygamRewardsView.jsx'

import useAuth from '../../hooks/UseJwtChecked/UseJwtChecked';
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile';

import homeIcon from '../../assets/img/home-icon-menu.svg'
import CreateNewRewardModal from '../../components/modals/CreateNewRewardModal/CreateNewRewardModal';
import { useLocation } from 'react-router-dom';
import { UseModalHook } from '../../hooks/UseModalHook/UseModalHook';

export default function CalygamRewardPackagePage() {
    const { setToken } = useAuth();
     const { dataProfile, loading, dataTeachers, searchDataTeachers,targetTeacher,setTargetTeacher } = UseDataProfile()
       const{modalIsOpen,openModal,contentModal}=UseModalHook()
       const [rewards,setRewards] = useState([])
    const location = useLocation()
      useEffect(()=>{
          if (!dataProfile?.userRole) return;
        if(!["ADMIN"].includes(dataProfile.userRole)){
          localStorage.removeItem("token")
        }
      },[location.pathname])
    
      const navRoutes = [
        ["ADMIN", "COORDENADOR"].includes(dataProfile.userRole) &&
        { navRoute: "/Coordenacao", navNameRoute: "Equipe",routeIcon:homeIcon },
        ["ADMIN","INSTRUTOR", "COORDENADOR"].includes(dataProfile.userRole) &&
        { navRoute: "/Trail/Criar", navNameRoute: "Oficina",routeIcon:homeIcon },
       
        { navRoute: "/home", navNameRoute: "Home",routeIcon:homeIcon },
        { navRoute: "/Emporio", navNameRoute: "Empório - Calygam",routeIcon:homeIcon },
          { navRoute: "/Biblioteca", navNameRoute: "Biblioteca",routeIcon:homeIcon },
          
    
      ]
  return (
    <div>
      <CalygamHeaderConfigurer navRoutes={navRoutes} baseMenus={navRoutes}/>
      {modalIsOpen && contentModal.includes("CreateAnewReward")&&
      <CreateNewRewardModal setRewards={setRewards}/>
}   
    <CalygamRewardsView rewards={rewards} setRewards={setRewards}/>
    </div>
  )
}
