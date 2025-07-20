import React, { useEffect, useState } from 'react'
import CalygamHeaderConfigurer from '../../components/CalygamHeaderConfigurer/CalygamHeaderConfigurer'
import { UseModalHook } from '../../hooks/UseModalHook/UseModalHook';
import useAuth from '../../hooks/UseJwtChecked/UseJwtChecked';
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile';
import homeIcon from '../../assets/img/home-icon-menu.svg'
import CreateNewPetModal from '../../components/modals/CreateNewPetModal/CreateNewPetModal';
import CardBoxViewPets from "../../components/CardBoxViewPets/CardBoxViewPets.jsx"
import { UseLoading } from '../../hooks/UseLoading/UseLoading.js';
import { ReadPetsUtil } from '../../utils/ReadPetsUtil/ReadPetsUtil.js';

export default function PetManagementPage() {
        const { setToken } = useAuth();
         const { loading, setLoading, setLoadingText } = UseLoading()
     const { dataProfile,} = UseDataProfile()
     const [pets,setPets] = useState([])
     const [targetPet,setTargetPet] = useState({})
       const{modalIsOpen,openModal,contentModal}=UseModalHook()
        const navRoutes = [
            ["ADMIN", "COORDENADOR"].includes(dataProfile.userRole) &&
            { navRoute: "/Coordenacao", navNameRoute: "Equipe",routeIcon:homeIcon },
            ["ADMIN","INSTRUTOR", "COORDENADOR"].includes(dataProfile.userRole) &&
            { navRoute: "/Trail/Criar", navNameRoute: "Oficina",routeIcon:homeIcon },
           
            { navRoute: "/home", navNameRoute: "Home",routeIcon:homeIcon },
            { navRoute: "/Emporio", navNameRoute: "Empório - Calygam",routeIcon:homeIcon },
              { navRoute: "/Biblioteca", navNameRoute: "Biblioteca",routeIcon:homeIcon },
              
        
          ]

useEffect(()=>{
  ReadPetsUtil(setPets,setLoading,setLoadingText);
},[])
useEffect(()=>{
  console.log(targetPet)
},[targetPet])

  return (
    <div className=''>
      <CalygamHeaderConfigurer navRoutes={navRoutes} baseMenus={navRoutes}/>
      <div className='w-[85%] mx-auto flex justify-end py-2'>
      <button className='py-2 px-4  bg-purple-500 rounded-md border-b-4 border-calygam-purple-medium-light/50 hover:translate-y-1 transition-all    hover:border-0 text-white font-poppins outline-none' onClick={()=>{
                    openModal("CreateANewPet")
                    setTargetPet(null)}}>Abrir</button>
      </div>
      {modalIsOpen&& ["CreateANewPet"].includes(contentModal)&&
      <CreateNewPetModal targetTreat={targetPet?targetPet:null}/>
     
}
 <CardBoxViewPets treats={pets} setTargetTrait={setTargetPet}/>
    </div>
  )
}
