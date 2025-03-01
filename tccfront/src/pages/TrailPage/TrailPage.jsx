import React from 'react'
import Header from '../../components/Header/Header'
import arrowToHereContext from '../../assets/img/arrow-my-task.svg'
import manOld from '../../assets/img/man-grandpa.svg'
import BronzeAchiviment from '../../assets/img/bronze-achiviment.svg'
import ProgressBarAdapt from '../../components/ProgressBarAdapt/ProgressBarAdapt'
export default function TrailPage() {
    return (
        <div className='flex flex-col w-full font-jersey font-bold text-base md:text-lg '>
            <header>
                <Header withPhoto={true}/>

            </header>
          <main>
            <section className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-2 justify-center place-items-center  my-10 px-2 '>
                <div className='flex  gap-x-2  '>
                    <div className='flex w-[14px]'>
                        <img src={arrowToHereContext} alt="" className='w-full' />
                    </div>
                    <div className='flex flex-col '>
                        <h3 className='text-base'>Minha Trilha</h3>
                        <hr  className='w-full rounded-full bg-red-600 h-[3px]'/>
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
                        <ProgressBarAdapt xpInMoment={345} xpToGet={500}/>
                        </div>
                    </div>

                </div>

            </section>
          </main>
        </div>
    )
}
