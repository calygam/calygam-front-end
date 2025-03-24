import React from 'react'

import ObtainMoney from '../../assets/img/obtain-money.svg'
import EarnRewards from '../../assets/img/earn-rewards.svg'
import ExploreNewTrails from '../../assets/img/explore-new-trails.svg'
import SakuraTrailAnnounces from '../../assets/img/sakura-trail-announces.png'
import PraticeSakuraTrail from '../../assets/img/pratice-sakura-trail.svg'
import iconMockJs from '../../assets/img/icon-mock-js.svg'
import siteDevelopExemple from '../../assets/img/site-develop-exemple.png'

import CardAnnouncesPlayPoints from '../../components/CardAnnouncesPlayPoints/CardAnnouncesPlayPoints.jsx'
import CalygamCarouselOfTrails from '../../components/CalygamCarouselOfTrails/CalygamCarouselOfTrails.jsx'
import CardDevelopProject from '../../components/CardDevelopProject/CardDevelopProject.jsx'


export default function ObtainPointsForAchiviments({ isSakuraActive,isTrailsActive,isDevelopmentActive }) {

  const trails = [
    {
      id: 1, trailImage:iconMockJs, trailName: "Lógica de Programação", trailDescription:
        "Desbloquei o JavaScript: trilha de JavaScript e uma linguagem muito usada expanda seu conhecimento",
    },
    {
      id: 2, trailImage:iconMockJs, trailName: "Lógica de Programação", trailDescription:
        "Desbloquei o JavaScript: trilha de JavaScript e uma linguagem muito usada expanda seu conhecimento",
    },
    {
      id: 3, trailImage:iconMockJs, trailName: "Lógica de Programação", trailDescription:
        "Desbloquei o JavaScript: trilha de JavaScript e uma linguagem muito usada expanda seu conhecimento",
    },
    {
      id: 4, trailImage:iconMockJs, trailName: "Lógica de Programação", trailDescription:
        "Desbloquei o JavaScript: trilha de JavaScript e uma linguagem muito usada expanda seu conhecimento",
    },    {
      id: 5, trailImage:iconMockJs, trailName: "Lógica de Programação", trailDescription:
        "Desbloquei o JavaScript: trilha de JavaScript e uma linguagem muito usada expanda seu conhecimento",
    }
    ,    {
      id: 6, trailImage:iconMockJs, trailName: "Lógica de Programação", trailDescription:
        "Desbloquei o JavaScript: trilha de JavaScript e uma linguagem muito usada expanda seu conhecimento",
    }
  ]
  return (
    <div className={`w-full flex flex-col items-center font-poppins   ${isTrailsActive||isDevelopmentActive?"bg-transparent":"bg-calygam-semi-strong-pink"}`}>
      {isSakuraActive ?
        <>
          <div className='w-[85%]  flex flex-col space-y-2'>
            <div className='flex flex-col py-4  w-fit'>
              <h3 className='text-white font-bold lg:text-3xl md:text-2xl text-lg pl-1 py-1 '>Conheça Nossas Trilhas</h3>

              <div className='h-[2px] w-full   bg-white rounded-full  flex '></div>
              {/* <p className='font-light md:ext-base text-xs mt-2 text-white'>O programa Play Points oferece recompensas exclusivas para seus usuários. Ganhe pontos a cada compra e troque por</p>
              <p className='font-light md:ext-base text-xs text-white'>prêmios incríveis!</p> */}
            </div>
          

          </div>

          <div className='w-[85%]  flex flex-col space-y-2'>
            <div className='flex flex-col   w-fit'>

              <p className='font-light md:ext-base text-xs mt-2 text-white'>Descubra nossas trilhas de cursos, cuidadosamente elaboradas para te guiar em uma jornada de aprendizado </p>
              <p className='font-light md:ext-base text-xs text-white'>completa, do início ao avançado, com conteúdos práticos e teóricos para você se destacar em sua área!</p>
            </div>
          

          </div>

            {isDevelopmentActive?
            <div>
              abcd
            </div>: 
            <div className='w-[85%] grid  lg:grid-cols-3 my-5 md:grid-cols-2 grid-cols-1 place-items-center  gap-x-10 gap-y-20'>
              <img src={SakuraTrailAnnounces} alt={SakuraTrailAnnounces} className='lg:w-[325px] md:w-[300px] w-[250px]' />
              <CardAnnouncesPlayPoints imgForAnnounce={PraticeSakuraTrail} AnnounceAlertMessage={"Prático"} AnnounceMsgOne={"Essas trilhas foram"} AnnounceMsgTwo={"criadas para fixar o"} AnnounceMsgThree={"conteudo ensinado"} AnnounceMsgFour={"ao aluno de uma"} plusMsgOne={"forma prática"}/>
              <CardAnnouncesPlayPoints imgForAnnounce={PraticeSakuraTrail} AnnounceAlertMessage={"Benefícios"} AnnounceMsgOne={"As Trilhas são"} AnnounceMsgTwo={"desenvolvidas"} AnnounceMsgThree={"para o"} AnnounceMsgFour={"desenvolvimento"} plusMsgOne={"de habilidades e "} plusMsgTwo={"praticas"} />
          </div>}
         </> :isTrailsActive || isDevelopmentActive?        <>
          <div className='w-[85%]  flex flex-col space-y-2'>
            <div className='flex flex-col my-2  w-fit'>
              {isTrailsActive?<h3 className='text-black font-bold lg:text-2xl md:text-xl text-lg pl-1 py-1 '>Veja Nossas <span className='text-red-bold-type'>Trilhas</span> Disponiveis!</h3>:isDevelopmentActive?<h3 className='text-black font-bold lg:text-2xl md:text-xl text-lg pl-1 py-1 '>Desenvolva Grandes <span className='text-red-bold-type'>Projetos</span>!</h3>:""}

              <div className='h-[2px] w-full   bg-red-clean-type rounded-full  flex '></div>
              {/* <p className='font-light md:ext-base text-xs mt-2 text-white'>O programa Play Points oferece recompensas exclusivas para seus usuários. Ganhe pontos a cada compra e troque por</p>
              <p className='font-light md:ext-base text-xs text-white'>prêmios incríveis!</p> */}
            </div>
          

          </div>

          <div className='w-[85%]  flex flex-col space-y-2'>
          {isTrailsActive && 
            <div className='flex flex-col    w-fit'>

            <p className='font-light md:ext-base text-xs  text-black'>Conheça nossas Trilhas preparando indivíduos para enfrentar os desafios do mercado de</p>
              <p className='font-light md:ext-base text-xs text-black'>trabalho com competência e confiança.</p>
            </div>}
            {isDevelopmentActive && 
            <div className='flex flex-col    w-fit'>

            <p className='font-light md:ext-base text-xs  text-black'>Tenha uma variedade de projetos desafiadores e práticos, que permitirão aplicar todo o conhecimento</p>
              <p className='font-light md:ext-base text-xs text-black'>adquirido em situações reais.</p>
            </div>}
          

          </div>
          {isTrailsActive && 
                <div className='w-full flex justify-end  my-10  '>
                <CalygamCarouselOfTrails Trails={trails} />
                </div>}
          {isDevelopmentActive &&
          <div className='w-[83%] grid md:grid-cols-2 grid-cols-1 gap-x-10 my-10 gap-y-14 md:place-items-start place-items-center'>
            <div className='flex flex-col space-y-8 mt-10'>
              <CardDevelopProject FirstCard={true} titleCard={"Mobile"} TextCard={'Desenvolva seu próprio projeto mobile e aprenda a criar aplicativos do zero, aplicando as melhores práticas e tecnologias do mercado!'} />
              <CardDevelopProject FirstCard={false} titleCard={"Web"} TextCard={'Desenvolva seu projeto Web e aprenda a criar novas Web Sites do zero, aplicando as melhores práticas e tecnologias do mercado!'} />
              <CardDevelopProject FirstCard={false} titleCard={"Responsividade"} TextCard={'Desenvolva seu projeto Web e aprenda a criar novas Web Sites do zero, aplicando as melhores práticas e tecnologias do mercado!'} />
            </div>
            <div className='px-8 pt-2 border lg:w-[525px] md:w-[325px] md:h-[400px] w-[80%] rounded-xl flex md:justify-start justify-center border-calygam-yellow-semi-strong bg-calygam-extra-light-pink'>
              <div className='flex w-[55%] '>
                  <img src={siteDevelopExemple} alt="" className='w-full'  />
              </div>
            </div>
          </div>

          }
          </>:



        <>
          <div className='w-[85%]  flex flex-col space-y-2'>
            <div className='flex flex-col py-4  w-fit'>
              <h3 className='text-white font-bold lg:text-3xl md:text-2xl text-lg pl-1 py-1 '>Descubra as <span className='text-calygam-semi-light-pink'>Vantagens</span> do Play Points</h3>

              <div className='h-[2px] lg:w-[90%]   bg-white rounded-full  flex '></div>
              <p className='font-light md:ext-base text-xs mt-2 text-white'>O programa Play Points oferece recompensas exclusivas para seus usuários. Ganhe pontos a cada compra e troque por</p>
              <p className='font-light md:ext-base text-xs text-white'>prêmios incríveis!</p>
            </div>

          </div>
          <div className='w-[85%] grid  lg:grid-cols-3 my-5 md:grid-cols-2 grid-cols-1 place-items-center  gap-x-10 gap-y-5'>
            <CardAnnouncesPlayPoints imgForAnnounce={ObtainMoney} AnnounceAlertMessage={"Ganhe Pontos!"} AnnounceMsgOne={"Ganhe prêmios"} AnnounceMsgTwo={"exclusivos ao"} AnnounceMsgThree={"completar"} AnnounceMsgFour={"desafios!"} />
            <CardAnnouncesPlayPoints imgForAnnounce={EarnRewards} AnnounceAlertMessage={"Troque por recompensas!"} AnnounceMsgOne={"receba"} AnnounceMsgTwo={"recompensas"} AnnounceMsgThree={"incriveis por suas"} AnnounceMsgFour={"conquistas!"} />
            <CardAnnouncesPlayPoints imgForAnnounce={ExploreNewTrails} AnnounceAlertMessage={"Desbloqueie novos cursos!"} AnnounceMsgOne={"desbloqueie"} AnnounceMsgTwo={"cursos exclusivos e"} AnnounceMsgThree={"expanda seu"} AnnounceMsgFour={"conhecimento!"} />
          </div></>}
    </div>
  )
}
