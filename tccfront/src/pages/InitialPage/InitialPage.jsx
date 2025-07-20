import React, { useEffect } from 'react'
import StudentWhichBook from '../../components/StudentWhitchBook/StudentWhichBook'

import SchoolSenaiName from '../../components/SchoolSenaiName/SchoolSenaiName.jsx'
import SenaiWarnings from '../../components/SenaiWarnings/SenaiWarnings.jsx'
import SenaiViewCardsCourses from '../../components/SenaiViewCardsCourses/SenaiViewCardsCourses.jsx'
import UniversityCertified from '../../components/UniversityCertified/UniversityCertified.jsx'
import BlogAnounciments from '../../components/BlogAnounciments/BlogAnounciments.jsx'
import SenaiRollCardsCourse from '../../components/SenaiRollCardsCourse/SenaiRollCardsCourse.jsx'

import ChooseTheSchool from '../../components/ChooseTheSchool/ChooseTheSchool.jsx'
import FooterAssesment from '../../components/FooterAssessment/FooterAssesment.jsx'
import Header from '../../components/Header/Header.jsx'
import LearnHappy from '../../components/LearnHappy/LearnHappy.jsx'
import GamefiedLearning from '../../components/GamefiedLearning/GamefiedLearning.jsx'
import GamefiedFunctionsExplore from '../../components/GamefiedFunctionsExplore/GamefiedFunctionsExplore.jsx'
import CalygamHeaderConfigurer from '../../components/CalygamHeaderConfigurer/CalygamHeaderConfigurer.jsx'
import InviteToStartLearn from '../../components/InviteToStartLearn/InviteToStartLearn.jsx'
import InitialSupportCalygam from '../../components/InitialSupportCalygam/InitialSupportCalygam.jsx'
import homeIcon from '../../assets/img/home-icon-menu.svg'
export default function InitialPage() {


  const navRoutes = [
    { navRoute: "#this-start", navNameRoute: "Início Rapido", routeIcon: homeIcon },
    { navRoute: "#aprendizado", navNameRoute: "Aprendizado", routeIcon: homeIcon },
    { navRoute: "#recursos", navNameRoute: "recursos", routeIcon: homeIcon },

  ]

  useEffect(() => {
    localStorage.removeItem("token")
  }, [])
  return (
    <div className='  '>
      <header className="mb-16">
        {/* <Header /> */}
        <CalygamHeaderConfigurer navRoutes={navRoutes} baseMenus={navRoutes} isAnchor={true} />

      </header>
      <div className="flex flex-col gap-y-24">
        <section>
          <LearnHappy />
        </section>

        <section id='this-start'>
          <GamefiedLearning />
        </section>

        <section id='recursos'>
          <GamefiedFunctionsExplore />
        </section>
        <section id='aprendizado'>
          <InviteToStartLearn />
        </section>
        <section >
          <InitialSupportCalygam/>
        </section>
        <section>
            <FooterAssesment />
        </section>
        {/* <StudentWhichBook />

      <SchoolSenaiName />
      <SenaiWarnings />
      <SenaiViewCardsCourses />
      <div id='this-start'>
        <UniversityCertified />
      </div>
      <BlogAnounciments />
      <SenaiRollCardsCourse />
      <ChooseTheSchool />
      <footer>
        <FooterAssesment />
      </footer> */}
      </div>
    </div>
  )
}
