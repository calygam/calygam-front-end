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
import CalygamHeaderConfigurer from '../../components/CalygamHeaderConfigurer/CalygamHeaderConfigurer.jsx'

export default function InitialPage() {
  const navRoutes=[
    {navRoute:"/Login",navNameRoute:"Entrar"},
    {navRoute:"/Register",navNameRoute:"Criar Conta"},
    {navRoute:"/",navNameRoute:"Home"},

  ]
  
 useEffect(()=>{
    localStorage.removeItem("token")
  },[])
  return (
    <div>
      <header>
        {/* <Header /> */}
        <CalygamHeaderConfigurer navRoutes={navRoutes}/>

      </header>
      <StudentWhichBook />

      <SchoolSenaiName />
      <SenaiWarnings />
      <SenaiViewCardsCourses />
      <UniversityCertified />
      <BlogAnounciments />
      {/* <SenaiRollCardsCourse /> */}
      <ChooseTheSchool />
      <footer>
        <FooterAssesment />
      </footer>
    </div>
  )
}
