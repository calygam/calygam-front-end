import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import SubHeaderArea from '../../components/SubHeaderArea/SubHeaderArea.jsx'
import FullControlOfUser from '../../components/FullControlOfUser/FullControlOfUser.jsx'
import FooterAssesment from '../../components/FooterAssessment/FooterAssesment.jsx'
import ViewAdventureOfUser from '../../components/ViewAdventureOfUser/ViewAdventureOfUser.jsx'
import MetricsAndAnalyticsSection from '../../components/MetricsAndAnalyticsSection/MetricsAndAnalyticsSection.jsx'
import SectionOfTrails from '../../components/SectionOfTrails/SectionOfTrails.jsx'
import ObtainPointsForAchiviments from '../../components/ObtainPointsForAchiviments/ObtainPointsForAchiviments.jsx'
import TogheterInOurCommunity from '../../components/TogheterInOurCommunity/TogheterInOurCommunity.jsx'
import InviteAnFriend from '../../components/InviteAnFriend/InviteAnFriend.jsx'
import YourGoals from '../../components/YourGoals/YourGoals.jsx'
import PersonPerfil from '../../components/PersonPerfil/PersonPerfil.jsx'
import InviteToCommunity from '../../components/InviteToCommunity/InviteToCommunity.jsx'
import DevelopBigProjects from '../../components/DevelopBigProjects/DevelopBigProjects.jsx'
import IconBadgeRankGlitter from '../../assets/img/icon-badge-rank-glitter.svg'
import bellImgSrc from '../../assets/img/bell-icon-simple.svg'
import imgShare from '../../assets/img/community-represent-group.png'
import bgActivitys from '../../assets/img/bg-blur-recently-activity.png'
import bgAnalytics from '../../assets/img/bg-blur-analytics.png'
import imgBallFinalForm from '../../assets/img/blur-ball-final-form.png'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/UseJwtChecked/UseJwtChecked.js'
import CalygamHeaderConfigurer from '../../components/CalygamHeaderConfigurer/CalygamHeaderConfigurer.jsx'
import FlorestGradientBackground from '../../components/FlorestGradientBackground/FlorestGradientBackground.jsx'
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile.js'

//imagens
import homeIcon from '../../assets/img/home-icon-menu.svg'
import loljaIcon from '../../assets/img/lolja-icon-menu.svg'
import perfilIcon from '../../assets/img/perfil-icon-menu.svg'
import moreIcon from '../../assets/img/menu-icon-trail.svg'

export default function HomePage() {


  const location = useLocation();
  const navigate = useNavigate()
  const { dataProfile, loading } = UseDataProfile()



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

  const navRoutes = [
    ["ADMIN"].includes(dataProfile.userRole) &&
    { navRoute: "/Calygam/Admin/Reward/Create", navNameRoute: "Recompensas", routeIcon: homeIcon },
    ["ADMIN", "COORDENADOR"].includes(dataProfile.userRole) &&
    { navRoute: "/Coordenacao", navNameRoute: "Equipe", routeIcon: homeIcon },
    ["ADMIN", "INSTRUTOR", "COORDENADOR"].includes(dataProfile.userRole) &&
    { navRoute: "/Trail/Criar", navNameRoute: "Oficina", routeIcon: homeIcon },

    { navRoute: "/home", navNameRoute: "Home", routeIcon: homeIcon },
    { navRoute: "/Biblioteca", navNameRoute: "Biblioteca", routeIcon: homeIcon },
    ["ADMIN"].includes(dataProfile.userRole) &&
    { navRoute: "/Pet/Create", navNameRoute: "Pets", routeIcon: homeIcon }, 
    { navRoute: "/Emporium/Stock", navNameRoute: "empório", routeIcon: homeIcon }

  ]


  return (
    <div className='w-full font-poppins  transition-all delay-100 duration-200 ease-in-out'>

      <header>
        <FlorestGradientBackground navRoutes={navRoutes} dataProfile={dataProfile} />


      </header>
      <main className='w-full space-y-14'>

        <div className='flex flex-col mt-6 space-y-14 mx-auto w-[85%]'>

          <ViewAdventureOfUser />
        </div>
        <div className='w-full flex flex-col space-y-14  mt-4'>
          <ObtainPointsForAchiviments />
          <InviteToCommunity />
          <ObtainPointsForAchiviments isSakuraActive={true} />
          <ObtainPointsForAchiviments isTrailsActive={true} />


        </div>
        <div className='flex flex-col mt-2 space-y-14  w-full'>
          <DevelopBigProjects />
        </div>
        {/* <div className='flex flex-col mt-14 space-y-14 mx-auto w-[85%]'> */}

        {/* <FullControlOfUser/>
          <MetricsAndAnalyticsSection bgActivitys={bgActivitys} bgAnalytics={bgAnalytics}/>
          <SectionOfTrails/>
          
          <TogheterInOurCommunity/>
          <InviteAnFriend imgExempleShare={imgShare}/>
          <YourGoals imgBallFinalForm={imgBallFinalForm}/>
          <PersonPerfil /> */}

        {/* </div> */}
      </main>
      <footer>
        <FooterAssesment />
      </footer>
    </div>

  )
}
