import React, { useEffect, useRef } from 'react'

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
//presentations
import LinuxPresentation from '../../assets/img/linux-presentation.png'
import AdobeIlustratorPresentation from '../../assets/img/adobe-ilustrator-presentation.png'
import codeExemplePresentation from '../../assets/img/code-exemplo-presentation.png'

export default function HomePage() {


  const location = useLocation();
  const navigate = useNavigate()
    const nextSectionRef = useRef(null);


  const { dataProfile } = UseDataProfile()
  const { searchtrailsOfThisUser, trailsWithThisUser } = UseReadAllTrailsHook()
  const { modalIsOpen, contentModal } = UseModalHook()
  const { loading } = UseLoading()
  const recentlyInteractIds = JSON.parse(localStorage.getItem("trailsRecentlyAcess")) || [];

  //DESCOMENTAR ESSA LINHA PARA VOLTAR O LOGIN
  const { setToken } = useAuth();

    const scrollToNextSection = () => {
    const el = nextSectionRef.current;
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {

      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });

    }
  };

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
      {modalIsOpen && ["showInventory", "SkinsOfPet"].includes(contentModal) &&
        <AnimatePresence>
          <ShowInventoryModal />
        </AnimatePresence>}

      <header className='relative'>
        <FlorestGradientBackground dataProfile={dataProfile} />
              
   {/* <button
        onClick={scrollToNextSection}
        className="absolute p-4 w-fit h-fit opacity-75 border-2 border-white hover:opacity-100 outline-none rounded-full bg-white/45   inset-0 left-[90%] top-[50%] z-[188] cursor-pointer animate-bounce text-white flex text-4xl select-none"
      >
        ↓
      </button> */}
      </header>
   
      <main className='w-full space-y-14'>
        
        {recentlyInteractIds.length > 0 ?
          <div className='flex flex-col mt-6 items-center font-poppins w-full space-y-2 mx-auto ' ref={nextSectionRef}>
            <p className='font-medium'>Caminhos</p>
            <p className='lg:text-3xl md:text-xl text-lg font-semibold'>Acessados Recentemente</p>
            {loading ? <p>Recuperando seus Passos...</p> : <YourTrailsManager withRecentlyTrails={true} />}

            <Link to={"/Trilhas"} className='py-2 px-4 rounded-xl bg-gradient-to-tr font-medium w-fit flex items-center text-sm  text-black text-center gap-x-2'>Ver Mais <span className='text-lg'>{">"}</span>  </Link>
          </div> : <section className='flex flex-col mt-6 items-center gap-2 font-poppins w-full space-y-2 mx-auto '>
            <p className='font-medium'>Caminhos</p>
            <div className='flex-col items-center text-center gap-y-3'>
              <p className='lg:text-3xl md:text-xl text-lg font-semibold text-wrap'>Explore seus Caminhos de </p>
              <p className='lg:text-3xl md:text-xl text-lg font-semibold text-wrap'>Aprendizagem</p>
            </div>
            <div className='flex-col items-center text-center gap-y-3'>
              <p className='text-sm text-wrap'>Descubra os caminhos de aprendizagem que você está seguindo. Acompanhe seu progresso e</p>
              <p className='text-sm text-wrap'>avance em sua jornada educacional.</p>
            </div>
            <div className='flex gap-8 flex-wrap py-12 justify-center items-center'>
              <div className='w-[300px]'><img src={LinuxPresentation} alt="" /></div>
              <div className='w-[300px]' > <img src={AdobeIlustratorPresentation}/></div>
              <div className='w-[300px]'> <img src={codeExemplePresentation}/></div>
            </div>
            <Link to={"/Trilhas"} className='py-2 px-4 rounded-xl bg-gradient-to-tr font-medium w-fit flex items-center text-sm  text-black text-center gap-x-2'>Ver Mais <span className='text-lg'>{">"}</span>  </Link>
          </section>}

        <PetSectionManager />
      </main>
      <section className='my-6 mb-12'>
        <InitialSupportCalygam />
      </section>
      <footer>
        <FooterAssesment />
      </footer>
    </div>

  )
}
