import React from 'react'
import sapato from '../../assets/img/sapato.svg'
import threeForest from '../../assets/img/three-forest.svg'
import grassOne from '../../assets/img/grass-one.svg'
import houseTrail from '../../assets/img/house-trail.svg'
import bookGrass from '../../assets/img/book-js.svg'
export default function CalygamTrailVillage({ trails }) {
    return (
      <div className="w-full flex flex-col items-center transition-all  space-y-6 p-4">
        {trails.map((trail, index) => {
          let group = Math.floor(index / 3);
          let curve = group % 2 === 0
            ? ["translate-x-0 ", "translate-x-[40px]", "translate-x-[80px]"]
            : ["translate-x-[80px]", "translate-x-[40px]", "translate-x-0"];
  
          return (
            <div
              key={trail.id}>


            <div
             
              className={`w-fit flex items-center justify-center  text-white font-bold    transition-all duration-300 ${curve[index % 3]}`}
            >
       {trail.id ==0 ? <img src={bookGrass} alt="" className='w-16 animate-bounce' />:       <>
                <img src={threeForest} alt="" className='w-16' />
              <img src={sapato} alt="" className='-rotate-45 w-10 h-10'/>
              <img src={grassOne} alt="" className='w-8' />

              {index % 3 === 2 && group % 2 === 0 && trail.id != trails.length &&(
                <img src={houseTrail} alt="" className="absolute -left-40 top-12 w-32 opacity-80" />
              )}
              </> }

            </div>
            </div>

            

            
          );
        })}
      </div>
    );
  }
