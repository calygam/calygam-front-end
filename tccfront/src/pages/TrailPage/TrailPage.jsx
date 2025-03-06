import React, { useEffect, useState } from 'react'
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
import ShowUserState from '../../components/ShowUserState/ShowUserState.jsx'
import LessonFeatures from '../../components/LessonFeatures/LessonFeatures.jsx'
import axios from 'axios'








export default function TrailPage() {

    const [userDataMock, setUserDataMock] = useState([])
    useEffect(() => {
        const getUsersMock = async () => {
            try {
                const response = await axios.get("https://randomuser.me/api/")
                console.log(response.data.results[0].picture)
                setUserDataMock(response.data.results[0].picture)
            } catch (e) {
                console.log("erro tentando consumer a randuser " + e)
            }
        }
        getUsersMock()
    }, [])
    return (
        <div className='flex flex-col w-full font-jersey font-bold text-base md:text-lg '>
            <header>
                <Header withPhoto={true} />

            </header>
            <main>
                <section className='w-full transition-all grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-2  place-items-center  my-10 px-2 '>
                    <div className='flex  gap-x-2  '>
                        <div className='flex w-[14px]'>
                            <img src={arrowToHereContext} alt="" className='w-full' />
                        </div>
                        <div className='flex flex-col '>
                            <h3 className='text-base'>Minha Trilha</h3>
                            <hr className='w-full rounded-full bg-red-600 h-[3px]' />
                        </div>
                        <div className='flex  w-[28px]'>
                            <img src={manOld} alt="" className='w-full' />
                        </div>
                    </div>

                    <div className='flex    '>
                        <div className='flex flex-col  w-[250px] justify-center items-center rounded-[30px] p-3 bg-gradient-to-r from-rank-achiviment-bronze-one-first to-rank-achiviment-bronze-one-second/80'>
                            <div className='flex items-center'>
                                <span className='flex'>
                                    <img src={BronzeAchiviment} alt="" className='w-[40px] h-[40px]' />
                                </span>
                                <div className='flex text-base text-white'>
                                    <p className='text-xl'>Bronze</p>
                                </div>
                            </div>
                            <div className='flex w-full items-center'>
                                <ProgressBarAdapt xpInMoment={3} xpToGet={15} />
                            </div>
                        </div>
                    </div>


                    <div className='flex items-center gap-x-10'>
                        <div className='flex flex-col items-center'>
                            <div className='flex'>
                                <img src={filterByDifficulty} alt="" className='w-[15px] h-[15px]' />
                            </div>
                            <div className='flex'>
                                <p className='text-xs'>Filtros</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-x-2'>
                            <div className='flex'>
                                <p>0</p>

                            </div>
                            <div className='flex'>
                                <img src={tpMoney} alt="" className='w-[40px] h-[40px]' />
                            </div>

                        </div>
                    </div>



                </section>
                {/*caio<- sessão destinada a visualização da trilha  */}
                <section className='grid grid-cols-1 md:grid-cols-2 lg:gap-x-48 md:-ml-[50px] lg:-ml-0 -ml-0 font-jersey place-items-center  w-full lg:grid-cols-3'>
                    <div className='flex flex-col'>
                        <menu className='flex  w-[200px] p-4 py-6 rounded-3xl space-y-2 bg-trail-info-action'>
                            <ul className='flex flex-col items-center space-y-4 text-white justify-center w-full'>
                                <li className='flex items-center   w-full justify-between    '>
                                    <p className='flex'>Tarefas do Aluno</p>
                                    <img src={CheckMyTasks} alt="" className='w-[20px] h-[20px]' />
                                </li>
                                <li className='flex items-center w-full justify-between     '>
                                    <p className='flex '>Turmas</p>
                                    <img src={TurmasIcon} alt="" className='w-[20px] h-[20px]' />
                                </li>
                                <li className='flex items-center  w-full justify-between   '>
                                    <p className='flex'>Todo List</p>
                                    <img src={TodoIcon} alt="" className='w-[20px] h-[20px]' />
                                </li>
                            </ul>
                        </menu>
                        <div className='flex  md:flex-row transition-all delay-100 duration-300 flex-col w-full gap-x-2'>
                            <ShowUserState roundedDelimiter={false} imgRamdomMock={userDataMock.medium} teachers={false} />

                                              <div className=' flex-col lg:hidden hidden md:flex mt-[50px] order-2 md:order-3 '>
                        <ShowUserState roundedDelimiter={true} imgRamdomMock={userDataMock.medium} teachers={true} />
                    </div> 
                    




                    
                        </div>


                    </div>
                    <main className='flex h-full mx-5  items-center w-full flex-col order-3 md:order-2'>
                                <h1>Título da Trílha [imagem]</h1>
                    
                   
                            <LessonFeatures />
                    
                    </main>
                    <div className='flex flex-col md:hidden lg:flex order-2 md:order-3 '>
                        <ShowUserState roundedDelimiter={true} imgRamdomMock={userDataMock.medium} teachers={true} />
                    </div>
                </section>
            </main>
        </div>
    )
}











