import React, { useEffect } from 'react'
import sapato from '../../assets/img/sapato.svg'
import threeForest from '../../assets/img/three-forest.svg'
import grassOne from '../../assets/img/grass-one.svg'
import starProgress from '../../assets/img/star-progress-identifier.svg'
import planetSaturn from '../../assets/img/planet-saturn.svg'
import alienPlanet from  '../../assets/img/purple-planet-alien.svg'
import aquaPlanet from  '../../assets/img/planet-aqua-florest.svg'
import rocketOpenActivity from '../../assets/img/rocket-activity-open.svg'
import lockedActivity from '../../assets/img/locked-activity-space.svg'

//import houseactivity from '../../assets/img/house-activity.svg'
import bookGrass from '../../assets/img/book-js.svg'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { UseDataActivitiesPerTrailIdHook } from '../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook'
export default function CalygamactivityVillage({ Activities,progress }) {
  const myPlanets = [planetSaturn,alienPlanet,aquaPlanet]
  const {targetActivityId,setTargetActivityId,position,setPosition} = UseDataActivitiesPerTrailIdHook() 
  const navigation = useNavigate()
 
  const handlePositionAndIdentifier = (positionIndex,identifier,statusAtv)=>{
    if(statusAtv==="ENABLE"){
    setPosition(positionIndex)
    setTargetActivityId(identifier)
    if(positionIndex>0 && identifier>0){
      navigation("/Atividade")
    }
  }
  }

    return (
      <div className="md:w-[70%] w-full lg:w-full  flex flex-col items-center lg:items-center md:items-end   transition-all gap-y-3  py-12">
        {Activities.map((activity, index) => {
          let findTargetProgress = progress.progressList?.find(targetProgress=> targetProgress.activityId ===activity.activityId )
        
          let group = Math.floor(index / 3);
     
          let curve = group % 2 === 0
            ? ["translate-x-0 ", "translate-x-[40px]", "translate-x-[80px]"]
            : ["translate-x-[80px]", "translate-x-[40px]", "translate-x-0"];
            let curveTwo = group % 2 === 0
            ? ["translate-x-[20px] rotate-[90deg] my-6 ", "translate-x-[60px]  rotate-[90deg] my-6", "translate-x-[90px] rotate-[100deg] my-6"]
            : ["translate-x-[70px] rotate-[20deg] my-6", "translate-x-[30px] rotate-[30deg] my-6", "translate-x-[0px] rotate-[100deg] my-6"];
  
          return (
            <div
              key={activity.activityId}>
                         
            {/* <p className={`${curve[index % 3]} text-white`}>{activity.activityName}</p> */}

            <div
             
              className={`w-fit flex items-center justify-center  text-white font-bold    transition-all duration-300 ${curve[index % 3]}`}
            >
       {activity.id ==0 ? <img src={bookGrass} alt="" className='w-16 animate-bounce' />:       <>
             <button type='button' onClick={()=>handlePositionAndIdentifier(index+1,activity.activityId,findTargetProgress?.activityStatus)} className={`flex w-[90px] outline-none  h-[90px] bg-gradient-to-br overflow-hidden  rounded-[32px] relative text-black ${findTargetProgress?.activityStatus ==="ENABLE"?"bg-blue-300  ":"bg-white/50 "} group justify-center items-center  border-b-8 border-black/50 cursor-pointer hover:border-b-4`}><img src={findTargetProgress?.activityStatus ==="ENABLE"?rocketOpenActivity:lockedActivity} alt='Trancada ou liberada' className={`${findTargetProgress?.activityStatus ==="ENABLE"?"transition-all duration-[1200ms] ease-linear group-hover:translate-x-24  group-hover:-translate-y-24 ring-offset-slate-400 absolute z-0":"transition-all ease-linear group-hover:scale-125"} w-[50px] h-[50px]`}></img></button>

              {index % 3 === 2 && group % 2 === 0 && index !== Activities.length - 1 && (
               
      <img src={myPlanets[group % myPlanets.length]} alt="" className="absolute -left-40 top-12 w-24 opacity-80" />
           
          
               

              )}
             
                     {index % 3 === 2 && group % 2 === 0 && index !== Activities.length - 1 && (
                <img src={planetSaturn} alt="" className="absolute hidden md:block -right-16 lg:-top-[250px] md:-top-[230px] w-44 opacity-80" />
              )}
              </> }
              

            </div>
            
             <div
             
             className={` flex items-center justify-center  text-white font-bold my-2   transition-all duration-300 ${curveTwo[index % 3]}`}
           >
      {activity.activityId ==0 ||  index+1==Activities.length ?null:       <>
            <span className='flex  bg-gradient-to-br  rounded-full rounded-br-sm  rounded-tl-sm text-white to-gray-700 justify-center items-center    cursor-pointer '><img src={starProgress} alt="" className='w-8 bg-cover' /></span>

              {/* {index % 3 === 2 && group % 2 === 0 && activity.id != activity.length &&(
               <img src={bookGrass} alt="" className="absolute -left-40 top-12 w-32 opacity-80" />
             )}  */}
              </> } 

            </div> 
            </div>

            

            
          );
        })}
      </div>
    );
  }
