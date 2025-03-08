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
import TopUsersPodium from '../../components/TopUsersPodium/TopUsersPodium.jsx'
import ButtonSocialAreaLocation from '../../components/ButtonSocialAreaLocation/ButtonSocialAreaLocation.jsx'
import ShowUserState from '../../components/ShowUserState/ShowUserState.jsx'
import LessonFeatures from '../../components/LessonFeatures/LessonFeatures.jsx'
import axios from 'axios'
import jsIconMock from '../../assets/img/js-icon-mock.svg'
import starOmega from '../../assets/img/starOmega.svg'
import lineRankingDecor from '../../assets/img/line-ranking-decor.svg'
import userKing from '../../assets/img/king-of-leasson.svg'
import comentChatIcon from '../../assets/img/coment-chat-icon.svg'
import comunityIcon from '../../assets/img/comunity-icon.svg'







export default function TrailPage() {



    const [userDataMock, setUserDataMock] = useState([])


    const numbers = [
        { id: 1, label: "olaaa", deleted: false, boss: false, locked: false },
        { id: 2, label: "olaaa", deleted: false, boss: true, locked: true },
        { id: 3, label: "olaaa", deleted: false, boss: false, locked: false },
        { id: 4, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 5, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 6, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 7, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 8, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 9, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 10, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 11, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 12, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 13, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 14, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 15, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 16, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 17, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 18, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 19, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 20, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 21, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 22, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 23, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 24, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 25, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 26, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 27, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 28, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 29, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 30, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 31, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 32, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 33, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 34, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 35, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 36, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 37, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 38, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 39, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 40, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 41, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 42, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 43, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 44, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 45, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 46, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 47, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 48, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 49, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 50, label: "olaaa", deleted: false, boss: false, locked: true },
        { id: 51, label: "olaaa", deleted: false, boss: false, locked: true },
    ];


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
                <section className='grid grid-cols-1  md:grid-cols-2 lg:gap-x-48 md:-ml-[50px] lg:-ml-0 -ml-0 font-jersey place-items-center  w-full lg:grid-cols-3'>
                    <div className='flex flex-col md:h-full'>
                        <menu className='flex  w-[200px] p-4 py-6 rounded-3xl space-y-2 bg-red-clean-type'>
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
                        <div className='md:flex flex-col justify-center space-y-3 items-center hidden lg:hidden'>
                        <ButtonSocialAreaLocation imgArea={comentChatIcon} nameArea={"Chat"}/>
                        <ButtonSocialAreaLocation imgArea={comunityIcon} nameArea={"Comunidade"}/>
                        </div>
                        <aside className='flex flex-col items-center justify-center space-y-2 w-[200px]'>
                            <div className='flex flex-col items-center justify-center mb-2'>
                                <div className='flex gap-1 mt-6 justify-center items-center'>
                                    <div className='flex justify-center items-center'>
                                        <p className='text-xl'>Ranking</p>
                                    </div>
                                    <div className='flex w-7 h-7'>
                                        <img src={starOmega} alt="" className='w-full' />
                                    </div>
                                </div>
                                <div className='flex w-[112px] -mt-[5px] justify-center items-center'>
                                <img src={lineRankingDecor} alt="" className='w-full' />
                            </div>
                            </div>

                            <div className='flex flex-col items-center justify-center space-y-4 '>
                                <TopUsersPodium userImage={userDataMock.medium} userPoints={100.34} userKing={userKing} userName={"Warren"} numberPodium={1}/>
                                <TopUsersPodium userImage={userDataMock.medium} userPoints={100.34} userKing={null} userName={"Angel"} numberPodium={2}/>
                                <TopUsersPodium userImage={userDataMock.medium} userPoints={100.34} userKing={null} userName={"Victoria"} numberPodium={3}/>
                            </div>

                        </aside>
                        {/* <div className='flex  md:flex-row transition-all delay-100 duration-300 flex-col w-full gap-x-2'> */}
                        {/* <ShowUserState roundedDelimiter={false} imgRamdomMock={userDataMock.medium} teachers={false} /> */}

                        {/* <div className=' flex-col lg:hidden hidden md:flex mt-[50px] order-2 md:order-3 '> */}
                        {/* <ShowUserState roundedDelimiter={true} imgRamdomMock={userDataMock.medium} teachers={true} /> */}
                        {/* </div>  */}






                        {/* </div> */}


                    </div>
                    <main className='flex h-full  items-center font-jersey w-full flex-col order-3 md:order-2'>
                        <div className='flex gap-1 items-center mt-2 mb-8'>
                            <h1><span className='text-yellow-300'>JAVA</span>SCRIPT  </h1>
                            <img src={jsIconMock} alt="" className='w-12 h-12' />
                        </div>


                        <LessonFeatures numbers={numbers} />

                    </main>
                    <div className='flex flex-col md:hidden md:h-full space-y-2 lg:flex order-2 md:order-3 '>
                        <ButtonSocialAreaLocation imgArea={comentChatIcon} nameArea={"Chat"}/>
                        <ButtonSocialAreaLocation imgArea={comunityIcon} nameArea={"Comunidade"}/>
                        {/* <ShowUserState roundedDelimiter={true} imgRamdomMock={userDataMock.medium} teachers={true} /> */}
                    </div>
                </section>
            </main>
        </div>
    )
}











