import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProgressBarAdapt from '../ProgressBarAdapt/ProgressBarAdapt.jsx'
import LeassonProgressStage from '../LeassonProgressStage/LeassonProgressStage.jsx'
import RankingViewProgress from '../RankingViewProgress/RankingViewProgress.jsx'
import TeacherInfoInLeasson from '../TeacherInfoInLeasson/TeacherInfoInLeasson.jsx'
import { MockUserDataContext } from '../../context/MockUserDataContext/MockUserDataContext.jsx'
export default function SubHeaderArea({ BackToOthersPages, PageToBack, TextIndicatorPage, RepresentativeIcon, IconBadgeRank, NameRank, FilterAdd, TextFilter, IconMoney, QtdMoney, infoMonetaryOrFilter, lvlProgressLeasson,HaveCardTeacher }) {
    const {userPhoto} = useContext(MockUserDataContext)
    return (
        <div className={`flex items-center lg:justify-between transition-all delay-100 duration-300 px-12 mt-4 w-full gap-10 justify-center flex-wrap  `}>
            <div className='flex  gap-x-2  '>
                <Link className='flex w-[14px] ' to={PageToBack}>
                    {/* <img src={arrowToHereContext} alt="" className='w-full' /> */}
                    <img src={BackToOthersPages} alt="" className='w-full' />
                </Link>
                <div className='flex flex-col '>
                    {/* <h3 className='text-base'>Minha Trilha</h3> */}
                    <h3 className='text-base font-bold'>{TextIndicatorPage}</h3>
                    <hr className='w-full rounded-full bg-red-600 h-[3px]' />
                </div>
                {HaveCardTeacher?
                null:
                <div className='flex  w-[28px]'>
                    {/* <img src={manOld} alt="" className='w-full' /> */}
                    <img src={RepresentativeIcon} alt="" className='w-full' />
                </div>}
            </div>
            {!HaveCardTeacher?
            <>
            <div className={`flex items-center ${lvlProgressLeasson?" gap-x-9 flex-wrap space-y-3 justify-center":"gap-x-0 space-y-0"}`}>
                <div className='flex    '>
                    {/* <div className='flex flex-col  w-[250px] justify-center items-center rounded-[30px] p-3 bg-gradient-to-r from-rank-achiviment-bronze-one-first to-rank-achiviment-bronze-one-second/80'>
                        <div className='flex items-center'>
                            <span className='flex'>
                               
                                <img src={IconBadgeRank} alt="" className='w-[40px] h-[40px]' />
                            </span>
                            <div className='flex text-base text-white'>
                               
                                <p className='text-xl'>{NameRank}</p>
                            </div>
                        </div>
                        <div className='flex w-full items-center'>
                            <ProgressBarAdapt xpInMoment={3} xpToGet={15} rangeBar={false} rangerBarRank={true} />
                        </div>
                    </div> */}
                    <RankingViewProgress IconBadgeRank={IconBadgeRank} NameRank={'Bronze'} />
                </div>
                {lvlProgressLeasson ?
                <RankingViewProgress IconBadgeRank={null} NameRank={null} />:null}
                {/* {lvlProgressLeasson ?
                <div className='flex bg-black rounded-lg w-[135px] px-3 pr-10 py-1 gap-2 justify-center  items-center'>

                    <ProgressBarAdapt xpInMoment={4} xpToGet={5} rangeBar={true} rangerBarRank={false} />
                    <div className='text-white text-xs'>Tarefas</div>
                </div> : null} */}
            </div>

            {infoMonetaryOrFilter ?
                <div className='flex items-center gap-x-10'>
                    {FilterAdd != null ?
                        <div className='flex flex-col items-center'>
                            <div className='flex'>
                                <img src={FilterAdd} alt="" className='w-[15px] h-[15px]' />
                            </div>
                            <div className='flex'>
                                <p className='text-xs'>{TextFilter}</p>
                            </div>
                        </div>
                        : null}
                    <div className='flex items-center gap-x-2'>
                        <div className='flex'>
                            {/* <p>0</p> */}
                            <p>{QtdMoney}</p>

                        </div>
                        <div className='flex'>
                            {/* <img src={tpMoney} alt="" className='w-[40px] h-[40px]' /> */}
                            <img src={IconMoney} alt="" className='w-[40px] h-[40px]' />
                        </div>

                    </div>
                </div> : null}

                {lvlProgressLeasson ?
                <div className='flex bg-white  w-[5px]'>

                   
                </div> : null}

                </>:<TeacherInfoInLeasson ImgTeacher={userPhoto.medium} ActivityTeacher={"Design"} NameActivityTeacher={'Atividade Design'} NameTeacher={'Professora Claúdia'} NameDataExpires={"Data de Entrega: "} ExpiresDataLeasson={"20/03/2025"}/>}

        </div>
    )
}
