import React from 'react'
import Header from '../../components/Header/Header'
import SubHeaderArea from '../../components/SubHeaderArea/SubHeaderArea.jsx'
import BoxSendLeassonViaDocs from '../../components/BoxSendLeassonViaDocs/BoxSendLeassonViaDocs.jsx'
import SkeletonLeassonForMake from  '../../components/SkeletonLeassonForMake/SkeletonLeassonForMake.jsx'
import StatsAndPoinsOfLeasson from '../../components/StatsAndPoinsOfLeasson/StatsAndPoinsOfLeasson.jsx'
import arrowToHereContext from '../../assets/img/arrow-my-task.svg'
import MenuLocationLeasson from '../../components/MenuLocationLeasson/MenuLocationLeasson.jsx'
import CheckMyTasks from '../../assets/img/check-my-tasks.svg'
import TurmasIcon from '../../assets/img/turmas-icon.svg'
import TodoIcon from '../../assets/img/todolist-icon.svg'
export default function AboutLeassonPage() {
  return (
    <div className='font-jersey transition-all'>
      <header>
        <Header withPhoto={false}/>
      </header>
      <main className='flex    flex-col '>
          <SubHeaderArea BackToOthersPages={arrowToHereContext} PageToBack={"/Trail"} TextIndicatorPage={"Sobre a lição"}     HaveCardTeacher={true}/>
          {/* <div className='grid  grid-cols-1 my-10 md:grid-cols-2 place-items-center md:place-items-stretch justify-center lg:grid-cols-3'>
            <div className='flex ml-7'>
              <MenuLocationLeasson FirstIcon={CheckMyTasks} FirstLocationText={"Tarefas Do Aluno"} SecondIcon={TurmasIcon} SecondLocationText={"Turmas"} ThirdIcon={TodoIcon} ThirdLocationText={"Todo-List"} ColorDiferent={true} />
            </div>
            <div className='bg-blue-700'>
              <SkeletonLeassonForMake HaveTitle={true} HaveBodyLeasson={true} HaveObjective={true}/>

            </div>
          </div> */}

           <div className='flex flex-wrap justify-center md:ml-6 md:items-start   lg:justify-start items-center lg:items-start space-x-10'>
            <div className='flex flex-col space-y-4 my-5 h-full'>
            <div className='flex      '>
              <MenuLocationLeasson FirstIcon={CheckMyTasks} FirstLocationText={"Tarefas Do Aluno"} SecondIcon={TurmasIcon} SecondLocationText={"Turmas"} ThirdIcon={TodoIcon} ThirdLocationText={"Todo-List"} ColorDiferent={false} />
            </div>
            <div className='md:flex lg:hidden hidden w-[220px]  flex-col space-y-2'>
              <StatsAndPoinsOfLeasson HavePoints={null} Points={100} haveState={null} State={"Em Andamento."} HaveLine={true} ColorLine={'bg-red-600'}/>
              <BoxSendLeassonViaDocs BoxTitleDoc={"Atividades Pendentes"} BoxPossiblePlaceLeasson={true} BoxIconFor={"asd"} BoxInfoDataTime={'Marque o Horário'} BoxForSendActivity={"Entregar"}/>
            </div>
            </div>
            <div className=' lg:w-[50%] md:w-[55%]    my-5'>
              <SkeletonLeassonForMake HaveTitle={true} HaveBodyLeasson={true} HaveObjective={true}/>

            </div>
            
            <div className='md:hidden lg:flex flex flex-col  items-center  w-full lg:w-[20%] space-y-2'>
              <div className='lg:w-full w-[200px]'>
              <StatsAndPoinsOfLeasson HavePoints={true} Points={100} haveState={true} State={"Em Andamento."} HaveLine={true} ColorLine={'bg-red-600'}/>
              <BoxSendLeassonViaDocs BoxTitleDoc={"Atividades Pendentes"} BoxPossiblePlaceLeasson={true} BoxIconFor={"asd"} BoxInfoDataTime={'Marque o Horário'} BoxForSendActivity={"Entregar"}/>
              </div>
            </div>
            
          </div> 
      </main>
    </div>
  )
}
