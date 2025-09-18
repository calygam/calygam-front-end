import React, { useEffect, useRef } from 'react';
import sapato from '../../assets/img/sapato.svg';
import threeForest from '../../assets/img/three-forest.svg';
import grassOne from '../../assets/img/grass-one.svg';
import starProgress from '../../assets/img/star-progress-identifier.svg';
import planetSaturn from '../../assets/img/planet-saturn.svg';
import alienPlanet from '../../assets/img/purple-planet-alien.svg';
import aquaPlanet from '../../assets/img/planet-aqua-florest.svg';
import rocketOpenActivity from '../../assets/img/rocket-activity-open.svg';
import lockedActivity from '../../assets/img/locked-activity-space.svg';
import spaceAlien from '../../assets/img/space-alien-completed.svg';
import rocketForMarte from '../../assets/img/space-game-rocket-purple.svg';
import bookGrass from '../../assets/img/book-js.svg';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { UseDataActivitiesPerTrailIdHook } from '../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook';
import { motion } from 'framer-motion';
import { UseProgressHook } from '../../hooks/UseProgressHook/UseProgressHook';

export default function CalygamactivityVillage({ Activities, progress }) {
   const myPlanets = [planetSaturn, alienPlanet, aquaPlanet];
   const difficulties = ["FÁCIL", "MÉDIO", "DIFÍCIL", "CHEFE"]
  const { targetActivityId, setTargetActivityId,trailId, position, setPosition,readActivitiesByTrailId } = UseDataActivitiesPerTrailIdHook();
    const {ListenerOfDowloadableArchivesSubmited,searchProgressByUser} = UseProgressHook()
  const navigation = useNavigate();
  
  const activityRefs = useRef([]);

  useEffect(()=>{

    searchProgressByUser()
  },[Activities,trailId])
 
  useEffect(() => {
    const firstEnabledActivity = progress.progressList?.find(
      (targetProgress) => targetProgress.activityStatus === 'ENABLE'
    );

    if (firstEnabledActivity) {
      const index = Activities.findIndex(
        (activity) => activity.activityId === firstEnabledActivity.activityId
      );
      if (index !== -1 && activityRefs.current[index]) {
        activityRefs.current[index].scrollIntoView({
          behavior: 'smooth',
          block: 'center', 
        });
      }
    }
  }, [Activities, progress]);

  const handlePositionAndIdentifier = (positionIndex, identifier, statusAtv,progressId) => {
    if (['ENABLE', 'COMPLETE'].includes(statusAtv)) {
      
      setPosition(positionIndex);
      
      setTargetActivityId(identifier);
      if (positionIndex > 0 && identifier > 0) {
        navigation(`/Atividade?progressId=${progressId}`);
      }
    }
  };

  return (
    <div className="md:w-[65%] w-full lg:w-full flex flex-col items-center lg:items-center md:items-end transition-all gap-y-3 py-12">
      {Activities?.map((activity, index) => {
        let findTargetProgress = progress.progressList?.find(
          (targetProgress) => targetProgress.activityId === activity.activityId
        );

        let group = Math.floor(index / 3);
        let curve =
          group % 2 === 0
            ? ['translate-x-0 ', 'translate-x-[40px]', 'translate-x-[80px]']
            : ['translate-x-[80px]', 'translate-x-[40px]', 'translate-x-0'];
        let curveTwo =
          group % 2 === 0
            ? ['translate-x-[20px] rotate-[90deg] my-6 ', 'translate-x-[60px] rotate-[90deg] my-6', 'translate-x-[90px] rotate-[100deg] my-6']
            : ['translate-x-[70px] rotate-[20deg] my-6', 'translate-x-[30px] rotate-[30deg] my-6', 'translate-x-[0px] rotate-[100deg] my-6'];

        return (
          <div
            key={activity.activityId}
            ref={(el) => (activityRefs.current[index] = el)}
          >
            <div
              className={`w-fit flex items-center  justify-center text-white font-bold transition-all duration-300 ${curve[index % 3]}`}
            >
              {activity.activityId === 0 ? (
                <img src={bookGrass} alt="" className="w-16 animate-bounce" />
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      handlePositionAndIdentifier(index + 1, activity.activityId, findTargetProgress?.activityStatus,findTargetProgress?.progressId)
                    }
                    
                    className={`flex w-[100px] outline-none group h-[100px] bg-gradient-to-br overflow-hidden rounded-[32px] relative text-black 
                       ${activity.activityDifficulty?.includes('EASY') ? "border-4 border-b-8 hover:border-0 hover:border-l-4 rounded-full transition-all border-green-400/50 " :
              activity.activityDifficulty?.includes("MEDIUM") ? "border-4 border-b-8 hover:border-0 hover:border-l-4 rounded-2xl transition-all border-orange-400/50 " :
                activity.activityDifficulty?.includes("HARD") ? "border-4 border-b-8 hover:border-0 hover:border-l-4 rounded-2xl transition-all border-red-600/50 " :
                  activity.activityDifficulty?.includes("BOSS") ? "border-4  border-b-8  hover:border-0 hover:border-l-4   rounded-3xl transition-all border-black " :
                    "bg-transparent"}
                    ${
                      findTargetProgress?.activityStatus === 'ENABLE'
                        ? 'bg-gradient-to-tr from-violet-500/40 to-pink-400/30'
                        : findTargetProgress?.activityStatus === 'COMPLETE'
                        ? 'bg-gradient-to-tr from-green-950/15 to-green-500/50'
                        : 'from-blue-900/20 to-gray-600/40'
                    } group justify-center items-center cursor-pointer `}
                  >
                    <img
                      src={
                        findTargetProgress?.activityStatus === 'ENABLE'
                          ? rocketForMarte
                          : findTargetProgress?.activityStatus === 'COMPLETE'
                          ? spaceAlien
                          : lockedActivity
                      }
                      alt="Trancada ou liberada"
                      className={`${
                        findTargetProgress?.activityStatus === 'ENABLE'
                          ? 'transition-all duration-[1200ms] ease-linear ring-offset-slate-400'
                          : 'transition-all ease-linear'
                      } w-[50px] h-[50px]`}
                    ></img>
                  </button>

                  {index % 3 === 2 && group % 2 === 0 && index !== Activities.length - 1 && (
                    <img
                      src={myPlanets[group % myPlanets.length]}
                      alt=""
                      className="absolute -left-40 top-12 w-24 opacity-80"
                    />
                  )}

                  {index % 3 === 2 && group % 2 === 0 && index !== Activities.length - 1 && (
                    <img
                      src={planetSaturn}
                      alt=""
                      className="absolute hidden md:block -right-16 lg:-top-[250px] md:-top-[230px] w-44 opacity-80"
                    />
                  )}
                </>
              )}
            </div>

            <div
              className={`flex items-center justify-center text-white font-bold my-2 transition-all duration-300 ${curveTwo[index % 3]}`}
            >
              {activity.activityId === 0 || index + 1 === Activities.length ? null : (
                <>
                  <span className="flex bg-gradient-to-br rounded-full rounded-br-sm rounded-tl-sm text-white to-gray-700 justify-center items-center cursor-pointer">
                    <img src={starProgress} alt="" className="w-8 bg-cover" />
                  </span>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}