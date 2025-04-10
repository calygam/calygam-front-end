import React from 'react'
import sapato from '../../assets/img/sapato.svg'
import threeForest from '../../assets/img/three-forest.svg'
import grassOne from '../../assets/img/grass-one.svg'
import houseTrail from '../../assets/img/house-trail.svg'
import bookGrass from '../../assets/img/book-js.svg'
export default function CalygamTrailVillage({ trails }) {
    return (
      <div className="w-full flex flex-col items-center transition-all space-y-3  p-4">
        {trails.map((trail, index) => {
          let group = Math.floor(index / 3);
          let curve = group % 2 === 0
            ? ["translate-x-0 ", "translate-x-[40px]", "translate-x-[80px]"]
            : ["translate-x-[80px]", "translate-x-[40px]", "translate-x-0"];
            // let curveTwo = group % 2 === 0
            // ? ["translate-x-[40px] rotate-[40deg] my-6 ", "translate-x-[80px]  rotate-[40deg] my-6", "translate-x-[105px] rotate-[50deg] my-6"]
            // : ["translate-x-[90px] rotate-[60deg] my-6", "translate-x-[50px] rotate-[60deg] my-6", "translate-x-[20px] rotate-[40deg] my-6"];
  
          return (
            <div
              key={trail.id}>


            <div
             
              className={`w-fit flex items-center justify-center  text-white font-bold    transition-all duration-300 ${curve[index % 3]}`}
            >
       {trail.id ==0 ? <img src={bookGrass} alt="" className='w-16 animate-bounce' />:       <>
             <span className='flex w-28 h-28 bg-gradient-to-br from-green-500 via-green-600 rounded-full text-white to-green-700 justify-center items-center  border-b-8 border-black/50 cursor-pointer hover:border-b-4'>{trail.id}</span>

              {/* {index % 3 === 2 && group % 2 === 0 && trail.id != trails.length &&(
                <img src={houseTrail} alt="" className="absolute -left-40 top-12 w-32 opacity-80" />
              )} */}
              </> }

            </div>
            {/* <div
             
             className={`w-fit flex items-center justify-center  text-white font-bold my-2   transition-all duration-300 ${curveTwo[index % 3]}`}
           >
      {trail.id ==0 ? null:       <>
            <span className='flex w-14 h-14 bg-gradient-to-br from-gray-500 via-gray-600 rounded-full rounded-br-sm  rounded-tl-sm text-white to-gray-700 justify-center items-center  border-b-8 border-black/50 cursor-pointer hover:border-b-4'>{trail.id}</span>

             {/* {index % 3 === 2 && group % 2 === 0 && trail.id != trails.length &&(
               <img src={houseTrail} alt="" className="absolute -left-40 top-12 w-32 opacity-80" />
             )} */}
             {/* </> } */}

           {/* </div> */} 
            </div>

            

            
          );
        })}
      </div>
    );
  }
