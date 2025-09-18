import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import arrowToHereContext from '../../assets/img/arrow-my-task.svg'
import manOld from '../../assets/img/man-grandpa.svg'
import BronzeAchiviment from '../../assets/img/bronze-achiviment.svg'
import ProgressBarAdapt from '../../components/ProgressBarAdapt/ProgressBarAdapt'
import filterByDifficulty from '../../assets/img/filter-by-difficulty.svg'
import tpMoney from '../../assets/img/tp-money.svg'
import CheckMyTasks from '../../assets/img/check-my-tasks.svg'
import TurmasIcon from '../../assets/img/turmas-icon.svg'
import TodoIcon from '../../assets/img/todolist-icon.svg'
import TopUsersPodium from '../../components/TopUsersPodium/TopUsersPodium.jsx'
import ButtonSocialAreaLocation from '../../components/ButtonSocialAreaLocation/ButtonSocialAreaLocation.jsx'
import SubHeaderArea from '../../components/SubHeaderArea/SubHeaderArea.jsx'
import ShowUserState from '../../components/ShowUserState/ShowUserState.jsx'
import MenuLocationLeasson from '../../components/MenuLocationLeasson/MenuLocationLeasson.jsx'
import CalygamTrailVillage from '../../components/CalygamTrailVillage/CalygamTrailVillage.jsx'

import LessonFeatures from '../../components/LessonFeatures/LessonFeatures.jsx'
import useAuth from '../../hooks/UseJwtChecked/UseJwtChecked.js'
import axios from 'axios'
import jsIconMock from '../../assets/img/js-icon-mock.svg'
import IconBadgeRankGlitter from '../../assets/img/icon-badge-rank-glitter.svg'
import starOmega from '../../assets/img/starOmega.svg'
import lineRankingDecor from '../../assets/img/line-ranking-decor.svg'
import userKing from '../../assets/img/king-of-leasson.svg'
import comentChatIcon from '../../assets/img/coment-chat-icon.svg'
import logoImage from '../../assets/img/trail-calygam-logo.svg'
import comunityIcon from '../../assets/img/comunity-icon.svg'
import { MockUserDataContext } from '../../context/MockUserDataContext/MockUserDataContext.jsx'
import { UseDataActivitiesPerTrailIdHook } from '../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook.js'
import UserInfoDisplay from '../../components/UserInfoDisplay/UserInfoDisplay.jsx'
import { DisplayCleaner } from '../../stylebase/DisplayStyle/DisplayStyle.js'
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile.js'
import MenuCalygamAdmin from '../../components/MenuCalygamAdmin/MenuCalygamAdmin.jsx'

import { UseProgressHook } from '../../hooks/UseProgressHook/UseProgressHook.js'
//images
 import homeIcon from '../../assets/img/home-icon-menu.svg'
 import loljaIcon from '../../assets/img/lolja-icon-menu.svg'
 import perfilIcon from '../../assets/img/perfil-icon-menu.svg'
 import moreIcon from '../../assets/img/menu-icon-trail.svg'
import { recentlyAcess } from '../../utils/recentlyAcess.js'
import { getRoutesByRole } from '../../utils/navRoutesUtil.js'
import UseTrailDataHook from '../../hooks/UseTrailDataHook/UseTrailDataHook.js'
 








export default function TrailPage() {
  const { activities,trailId } = UseDataActivitiesPerTrailIdHook()
  
  const {setTrailId,progress,activityUnlocked,setActivityUnlocked} = UseProgressHook()


     const { dataProfile } = UseDataProfile()
      const navRoutes = [
        ["ADMIN", "COORDENADOR"].includes(dataProfile.userRole) &&
        { navRoute: "/Coordenacao", navNameRoute: "Equipe", routeIcon: homeIcon },
        ["ADMIN", "INSTRUTOR", "COORDENADOR"].includes(dataProfile.userRole) &&
        { navRoute: "/Trail/Criar", navNameRoute: "Oficina", routeIcon: homeIcon },
        { navRoute: "/", navNameRoute: "Trilhas", routeIcon: homeIcon }
    
      ]

// const UseProgr
   const { setToken } = useAuth();
  const { userPhoto } = useContext(MockUserDataContext)
  const [userDataMock, setUserDataMock] = useState([])
  const [isEnabled,setIsEnabled] = useState(false)



  const modifyStyles = {
    selectedColorText:"text-calygam-strong-pink",
    roundedSelected:"rounded-xl rounded-bl-none"
}


// Função para criar trailSettings
const createTrailSettings = (showNav) => ({
    logoImage,
    showNav,
    menus: getRoutesByRole(dataProfile)
});




  useEffect(() => {
    const getUsersMock = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/")

        setUserDataMock(response.data.results[0].picture)
      } catch (e) {
        console.log("erro tentando consumer a randuser " + e)
      }
    }

    getUsersMock()
  }, [])

  useEffect(()=>{
    recentlyAcess(trailId)
  },[])



  return (
    <div className='w-full font-poppins min-h-screen h-full outline-none    bg-calygam-purple-semi-bold '>
      <div className="flex relative">
        <aside className="z-30 md:block fixed top-0 bottom-0 left-0 w-fit  text-white ">
 
        <MenuCalygamAdmin trailSettings={createTrailSettings(true)} progress={progress} modifyStyles={modifyStyles} isEnabled={isEnabled} setIsEnabled={setIsEnabled} activityUnlocked={activityUnlocked}/>

        </aside>

        <aside className="hidden lg:block fixed top-0 bottom-0 right-0 w-fit  text-white">
           <MenuCalygamAdmin progress={progress} trailSettings={createTrailSettings(false)}   isEnabled={isEnabled} setIsEnabled={setIsEnabled} activityUnlocked={activityUnlocked} inverse={true}/>
     
        </aside>
      </div>
      <div className='w-full relative flex flex-col'>
      <div className='flex flex-col  md:left-[15%] outline-none  bg-calygam-purple-semi-bold  lg:left-0 left-0 right-0 fixed mx-auto z-10 py-5  items-center   lg:w-[45%] md:w-[70%] w-full px-4 md:px-0  '>
{/* 
        <UserInfoDisplay displayStyle={DisplayCleaner('bg-calygam-purple-semi-light/30', "30px", false, "4", "white")} setIsEnabled={setIsEnabled} isEnabled={isEnabled}  activities={activities} /> */}
        <UserInfoDisplay isEnabled={isEnabled} setIsEnabled={setIsEnabled} />

        {/*CAIO<- USAR ESTRATEGIA DE CONTROLE TOTAL DE COMPONENTE A PERTIR DE AGORA */}
      </div>
      <div className='mt-[200px]  '>
        <CalygamTrailVillage Activities={activities} progress={progress} />
      </div>
      </div>


    </div>


  )


  // useEffect(() => {
  //     const getUsersMock = async () => {
  //         try {
  //             const response = await axios.get("https://randomuser.me/api/")
  //             console.log(response.data.results[0].picture)
  //             setUserDataMock(response.data.results[0].picture)
  //         } catch (e) {
  //             console.log("erro tentando consumer a randuser " + e)
  //         }
  //     }
  //     getUsersMock()
  // }, [])
  // return (
  //     <div className='flex flex-col w-full font-jersey font-bold text-base md:text-lg '>
  //         <header>
  //             <Header withPhoto={true} />

  //         </header>
  //         <main>
  //                                 <SubHeaderArea BackToOthersPages={arrowToHereContext} PageToBack={"/Home"} TextIndicatorPage={"Minha Trilha"} RepresentativeIcon={manOld} IconBadgeRank={BronzeAchiviment} NameRank={'Bronze'} FilterAdd={filterByDifficulty} TextFilter={'Filtros'} IconMoney={tpMoney} QtdMoney={300} lvlProgressLeasson={false} infoMonetaryOrFilter={true}/>
  //             <section className='w-full transition-all grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-2  place-items-center  my-10 px-2 '>





  //             </section>
  //             {/*caio<- sessão destinada a visualização da trilha  */}
  //             <section className='grid grid-cols-1  md:grid-cols-2 lg:gap-x-48 md:-ml-[50px] lg:-ml-0 -ml-0 font-jersey place-items-center  w-full lg:grid-cols-3'>
  //                 <div className='flex flex-col md:h-full'>

  //                     <MenuLocationLeasson FirstIcon={CheckMyTasks} FirstLocationText={"Tarefas Do Aluno"} SecondIcon={TurmasIcon} SecondLocationText={"Turmas"} ThirdIcon={TodoIcon} ThirdLocationText={"Todo-List"}/>
  //                     <div className='md:flex flex-col justify-center space-y-3 items-center hidden lg:hidden'>
  //                     <ButtonSocialAreaLocation imgArea={comentChatIcon} nameArea={"Chat"}/>
  //                     <ButtonSocialAreaLocation imgArea={comunityIcon} nameArea={"Comunidade"}/>
  //                     </div>
  //                     <aside className='flex flex-col items-center justify-center space-y-2 w-[200px]'>
  //                         <div className='flex flex-col items-center justify-center mb-2'>
  //                             <div className='flex gap-1 mt-6 justify-center items-center'>
  //                                 <div className='flex justify-center items-center'>
  //                                     <p className='text-xl'>Ranking</p>
  //                                 </div>
  //                                 <div className='flex w-7 h-7'>
  //                                     <img src={starOmega} alt="" className='w-full' />
  //                                 </div>
  //                             </div>
  //                             <div className='flex w-[112px] -mt-[5px] justify-center items-center'>
  //                             <img src={lineRankingDecor} alt="" className='w-full' />
  //                         </div>
  //                         </div>

  //                         <div className='flex flex-col items-center justify-center space-y-4 '>
  //                             <TopUsersPodium userImage={userPhoto.medium} userPoints={100.34} userKing={userKing} userName={"Warren"} numberPodium={1}/>
  //                             <TopUsersPodium userImage={userPhoto.medium} userPoints={100.34} userKing={null} userName={"Angel"} numberPodium={2}/>
  //                             <TopUsersPodium userImage={userPhoto.medium} userPoints={100.34} userKing={null} userName={"Victoria"} numberPodium={3}/>
  //                         </div>

  //                     </aside>
  //                     {/* <div className='flex  md:flex-row transition-all delay-100 duration-300 flex-col w-full gap-x-2'> */}
  //                     {/* <ShowUserState roundedDelimiter={false} imgRamdomMock={userDataMock.medium} teachers={false} /> */}

  //                     {/* <div className=' flex-col lg:hidden hidden md:flex mt-[50px] order-2 md:order-3 '> */}
  //                     {/* <ShowUserState roundedDelimiter={true} imgRamdomMock={userDataMock.medium} teachers={true} /> */}
  //                     {/* </div>  */}






  //                     {/* </div> */}


  //                 </div>
  //                 <main className='flex h-full  items-center font-jersey w-full flex-col order-3 md:order-2'>
  //                     <div className='flex gap-1 items-center  md:mb-4 my-8 md:mt-0'>
  //                         <h1><span className='text-yellow-300'>JAVA</span>SCRIPT  </h1>
  //                         <img src={jsIconMock} alt="" className='w-12 h-12' />
  //                     </div>


  //                     <LessonFeatures numbers={numbers} />

  //                 </main>
  //                 <div className='flex flex-col md:hidden md:h-full space-y-2 lg:flex order-2 md:order-3 '>
  //                     <ButtonSocialAreaLocation imgArea={comentChatIcon} nameArea={"Chat"}/>
  //                     <ButtonSocialAreaLocation imgArea={comunityIcon} nameArea={"Comunidade"}/>
  //                     {/* <ShowUserState roundedDelimiter={true} imgRamdomMock={userDataMock.medium} teachers={true} /> */}
  //                 </div>
  //             </section>
  //         </main>
  //     </div>
  // )
}











