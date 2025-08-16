import React, { useEffect } from 'react'

import FooterAssesment from '../../components/FooterAssessment/FooterAssesment.jsx'

import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/UseJwtChecked/UseJwtChecked.js'
import CalygamHeaderConfigurer from '../../components/CalygamHeaderConfigurer/CalygamHeaderConfigurer.jsx'
import FlorestGradientBackground from '../../components/FlorestGradientBackground/FlorestGradientBackground.jsx'
import PetSectionManager from '../../components/PetComponents/PetSectionManager.jsx'
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile.js'

//imagens
import homeIcon from '../../assets/img/home-icon-menu.svg'
import loljaIcon from '../../assets/img/lolja-icon-menu.svg'
import perfilIcon from '../../assets/img/perfil-icon-menu.svg'
import moreIcon from '../../assets/img/menu-icon-trail.svg'
import YourTrailsManager from '../../components/LibraryOfPathsComponents/TrailManagers/YourTrailsManager.jsx'
import { UseLoading } from '../../hooks/UseLoading/UseLoading.js'
import { UseReadAllTrailsHook } from '../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook.js'
import InitialSupportCalygam from '../../components/InitialSupportCalygam/InitialSupportCalygam.jsx'
import { UseModalHook } from '../../hooks/UseModalHook/UseModalHook.js'
import ShowInventoryModal from '../../components/modals/ShowInventoryModal/ShowInventoryModal.jsx'
import { AnimatePresence } from 'framer-motion'

export default function HomePage() {


  const location = useLocation();
  const navigate = useNavigate()
  const { dataProfile } = UseDataProfile()
  const { searchtrailsOfThisUser, trailsWithThisUser } = UseReadAllTrailsHook()
  const {modalIsOpen,contentModal} = UseModalHook()
  const { loading } = UseLoading()

  //DESCOMENTAR ESSA LINHA PARA VOLTAR O LOGIN
  const { setToken } = useAuth();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const urlToken = searchParams.get("token");

    if (urlToken) {
      localStorage.setItem("token", urlToken);
      setToken(urlToken);
      navigate("/home");

    }

  }, [location.search]);

  useEffect(() => {

    searchtrailsOfThisUser()

  }, [])




  return (
    <div className='w-full font-poppins  transition-all delay-100 duration-200 ease-in-out'>
        {modalIsOpen && ["showInventory","SkinsOfPet"].includes(contentModal)&&
        <AnimatePresence>
        <ShowInventoryModal/>
        </AnimatePresence>}

      <header>
        <FlorestGradientBackground dataProfile={dataProfile} />


      </header>
      <main className='w-full space-y-14'>

        <div className='flex flex-col mt-6 items-center font-poppins w-full space-y-2 mx-auto '>
          <p className='font-medium'>Caminhos</p>
          <p className='lg:text-3xl md:text-xl text-lg font-semibold'>Acessados Recentemente</p>
          {loading ? <p>Recuperando seus Passos...</p> : <YourTrailsManager withRecentlyTrails={true} />}

          <Link to={"/Biblioteca"} className='py-2 px-4 rounded-xl bg-gradient-to-tr font-medium w-fit flex items-center text-sm  text-black text-center gap-x-2'>Ver Mais <span className='text-lg'>{">"}</span>  </Link>
        </div>
      
        <PetSectionManager/>
      </main>
      <section  className='my-6 mb-12'>
        <InitialSupportCalygam />
      </section>
      <footer>
        <FooterAssesment />
      </footer>
    </div>

  )
}
