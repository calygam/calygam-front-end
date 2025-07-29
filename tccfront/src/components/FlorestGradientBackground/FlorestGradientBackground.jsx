import React from 'react'
import CalygamHeaderConfigurer from '../CalygamHeaderConfigurer/CalygamHeaderConfigurer'

import florestBgPurple from '../../assets/img/homePage/florest-strategy.png'
import RankingViewProgress from '../RankingViewProgress/RankingViewProgress'
import IconBadgeRankGlitter from '../../assets/img/icon-badge-rank-glitter.svg'
import bellImgSrc from '../../assets/img/bell-icon-simple.svg'
import SubHeaderArea from '../SubHeaderArea/SubHeaderArea'
import { motion } from 'framer-motion'
import { getRoutesByRole } from '../../utils/navRoutesUtil'

export default function FlorestGradientBackground({  dataProfile }) {
    return (
        <div className='bg-gradient-to-b inset-0 lg:min-h-[800px] md:min-h-[700px] min-h-[550px] flex flex-col relative  from-calygam-purple-semi-strong via-orange-500 to-orange-500'>
            <div className='flex flex-col gap-y-2 my-2'>

                <CalygamHeaderConfigurer navRoutes={getRoutesByRole(dataProfile)} baseMenus={getRoutesByRole(dataProfile)} adverseStyle={true} />
                <div className='w-[85%] mx-auto flex'>
                
                                          <SubHeaderArea HaveLargeRate={true} IconBadgeRank={IconBadgeRankGlitter} BackToOthersPages={false} imgBellSrc={bellImgSrc} />
                                          
            </div>
            </div>

            <div className='w-full absolute bottom-0 z-10'>
                <div className='w-full justify-center -z-10 absolute  md:-mt-28 group hover:md:-mt-32 -mt-32 transition-all  flex '>
                    <motion.div className='md:min-w-[300px] md:min-h-[300px]  min-h-[200px] min-w-[200px] flex justify-center items-center bg-gradient-to-b  from-yellow-200 via-yellow-300/75 shadow-lg shadow-yellow-300 backdrop-blur-sm to-yellow-400 rounded-full'
                    initial={{marginTop:200}}
                    animate={{marginTop:0}}
                    transition={{type:'tween',duration:1,ease:'easeInOut'}}>
                        <div className='w-[75%]'>
                            <RankingViewProgress IconBadgeRank={dataProfile.userRank} LargeRange={false} NameRank={'true'} sunOn={true} />
                        </div>
                    </motion.div>
                </div>
                <img src={florestBgPurple} alt="" className='w-full max-h-[600px] md:h-[500px] h-[325px]' />
            </div>
        </div>
    )
}
