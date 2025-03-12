import React from 'react'
import Header from '../../components/Header/Header'
import SubHeaderArea from '../../components/SubHeaderArea/SubHeaderArea.jsx'
import FullControlOfUser from '../../components/FullControlOfUser/FullControlOfUser.jsx'
import FooterAssesment from '../../components/FooterAssessment/FooterAssesment.jsx'
import MetricsAndAnalyticsSection from '../../components/MetricsAndAnalyticsSection/MetricsAndAnalyticsSection.jsx'
import SectionOfTrails from '../../components/SectionOfTrails/SectionOfTrails.jsx'
import ObtainPointsForAchiviments from '../../components/ObtainPointsForAchiviments/ObtainPointsForAchiviments.jsx'
import TogheterInOurCommunity from '../../components/TogheterInOurCommunity/TogheterInOurCommunity.jsx'
import InviteAnFriend from '../../components/InviteAnFriend/InviteAnFriend.jsx'
import YourGoals from '../../components/YourGoals/YourGoals.jsx'
import PersonPerfil from '../../components/PersonPerfil/PersonPerfil.jsx'
import IconBadgeRankGlitter from '../../assets/img/icon-badge-rank-glitter.svg'
import bellImgSrc from '../../assets/img/bell-icon-simple.svg'
import imgShare from '../../assets/img/community-represent-group.png'
import bgActivitys from '../../assets/img/bg-blur-recently-activity.png'
import bgAnalytics from '../../assets/img/bg-blur-analytics.png'
import imgBallFinalForm from '../../assets/img/blur-ball-final-form.png'


export default function HomePage() {
  return (
    <div className='w-full font-poppins'>
      <header>
        <Header withPhoto={true} />
      </header>
      <main >
          <SubHeaderArea HaveLargeRate={true} IconBadgeRank={IconBadgeRankGlitter} BackToOthersPages={false} imgBellSrc={bellImgSrc} />
          <div className='flex flex-col mt-14 space-y-14 mx-auto w-[85%]'>
          <FullControlOfUser/>
          <MetricsAndAnalyticsSection bgActivitys={bgActivitys} bgAnalytics={bgAnalytics}/>
          <SectionOfTrails/>
          <ObtainPointsForAchiviments/>
          <TogheterInOurCommunity/>
          <InviteAnFriend imgExempleShare={imgShare}/>
          <YourGoals imgBallFinalForm={imgBallFinalForm}/>
          <PersonPerfil />
          
          </div>
        </main>
      <footer>
      <FooterAssesment/>
      </footer>
    </div>

  )
}
