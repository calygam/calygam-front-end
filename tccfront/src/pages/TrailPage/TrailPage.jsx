import React from 'react'
import Header from '../../components/Header/Header'
import arrowToHereContext from '../../assets/img/arrow-my-task.svg'
import manOld from '../../assets/img/man-grandpa.svg'
import BronzeAchiviment from '../../assets/img/bronze-achiviment.svg'
import ProgressBarAdapt from '../../components/ProgressBarAdapt/ProgressBarAdapt'
import filterByDifficulty from '../../assets/img/filter-by-difficulty.svg'
import tpMoney from '../../assets/img/tp-money.svg'
import CheckMyTasks from '../../assets/img/check-my-tasks.svg'
import friendIcons from '../../assets/img/friends-icon.svg'
export default function TrailPage() {
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
                                <ProgressBarAdapt xpInMoment={200} xpToGet={1500} />
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
                <section className='grid grid-cols-1 md:grid-cols-2 font-jersey place-items-center w-full lg:grid-cols-3'>
                    <div className='flex flex-col'>
                        <menu className='flex  w-[200px] p-4 py-6 rounded-3xl space-y-2 bg-trail-info-action'>
                            <ul className='flex flex-col items-center space-y-4 text-white justify-center w-full'>
                                <li className='flex items-center   w-full justify-between    '>
                                    <p className='flex'>Tarefas do Aluno</p>
                                    <img src={CheckMyTasks} alt="" className='w-[20px] h-[20px]' />
                                </li>
                                <li className='flex items-center w-full justify-between     '>
                                    <p className='flex '>Turmas</p>
                                    <img src={CheckMyTasks} alt="" className='w-[20px] h-[20px]' />
                                </li>
                                <li className='flex items-center  w-full justify-between   '>
                                    <p className='flex'>Todo List</p>
                                    <img src={CheckMyTasks} alt="" className='w-[20px] h-[20px]' />
                                </li>
                            </ul>
                        </menu>
                        <div className='flex md:flex-row flex-col w-full gap-x-2'>
                            <aside className='relative  md:-top-6 -top-3 md:rounded-b-full transition-all delay-150  duration-200 items-center ease-linear md:rounded-t-none my-5 md:my-0 rounded-full flex md:flex-col h-fit md:h-[375px] md:w-fit w-[200px]   bg-trail-info-action py-4 px-2'>
                                <div className='flex md:flex-col flex-col items-center text-white gap-x-2 w-full '>
                                    <div>
                                        <img src={friendIcons} alt="" className='md:w-[50px] md:h-[50px] w-[20px] h-[20px]' />
                                    </div>
                                    <div>
                                        <p>Amigos</p>
                                    </div>

                                </div>
                                <ul className='flex w-full md:w-fit md:flex-col md:space-y-3 md:border-b-2 md:border-b-gray-400/60 md:space-x-0 space-x-3 h-full  md:overflow-y-auto overflow-x-auto  scrollbar-hidden '>
                                <li className=' flex  relative rounded-full bg-red-400'>
                                        <span className='flex w-[35px] h-[35px] rounded-full p-2  '   >
                                            <div className='w-full flex '>
                                            <span className='flex w-2 h-2 bg-green-500 rounded-full absolute ml-4 -mt-1'></span>
                                            </div>
                                            <img src={friendIcons} alt="" />
                                        </span>
                                    </li>
              
                                 
                                
                                   

                                   
                                </ul>
                            </aside>
                            <aside className='relative md:mt-[20px] -mt-[30px] md:rounded-md transition-all delay-150 duration-200 items-center ease-linear md:rounded-t-none my-5 md:my-0 rounded-full flex md:flex-col h-fit md:h-[325px] md:w-fit w-[200px]   bg-trail-info-action py-4 px-2'>
                            <ul className='flex md:flex-col md:space-y-3 md:border-b-2 md:border-b-gray-400/60 md:space-x-0 space-x-3 h-full justify-center md:overflow-y-auto overflow-x-auto  scrollbar-hidden '>
                                    <div className='w-full flex justify-center rounded-full'>
                                        <span className='flex w-[35px] h-[35px] rounded-full  bg-red-500'></span>
                                    </div>
                                    <div className='w-full flex justify-center rounded-full'>
                                        <span className='flex w-[35px] h-[35px] rounded-full  bg-red-500'></span>
                                    </div>
                                    <div className='w-full flex justify-center rounded-full'>
                                        <span className='flex w-[35px] h-[35px] rounded-full  bg-red-500'></span>
                                    </div>
                                    <div className='w-full flex justify-center rounded-full'>
                                        <span className='flex w-[35px] h-[35px] rounded-full  bg-red-500'></span>
                                    </div>
                                    <div className='w-full flex justify-center rounded-full'>
                                        <span className='flex w-[35px] h-[35px] rounded-full  bg-red-500'></span>
                                    </div>
                                    <div className='w-full flex justify-center rounded-full'>
                                        <span className='flex w-[35px] h-[35px] rounded-full  bg-red-500'></span>
                                    </div>
                                    <div className='w-full flex justify-center rounded-full'>
                                        <span className='flex w-[35px] h-[35px] rounded-full  bg-red-500'></span>
                                    </div>
                                    <div className='w-full flex justify-center rounded-full'>
                                        <span className='flex w-[35px] h-[35px] rounded-full  bg-red-500'></span>
                                    </div>
                                    <div className='w-full flex justify-center rounded-full'>
                                        <span className='flex w-[35px] h-[35px] rounded-full  bg-red-500'></span>
                                    </div>
                                    <div className='w-full flex justify-center rounded-full'>
                                        <span className='flex w-[35px] h-[35px] rounded-full  bg-red-500'></span>
                                    </div>

                                    <div className='w-full flex justify-center rounded-full'>
                                        <span className='flex w-[35px] h-[35px] rounded-full  bg-red-500'></span>
                                    </div>
                                    <div className='w-full flex justify-center rounded-full'>
                                        <span className='flex w-[35px] h-[35px] rounded-full  bg-red-500'></span>
                                    </div>
                                   
                                </ul>
                            </aside>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
