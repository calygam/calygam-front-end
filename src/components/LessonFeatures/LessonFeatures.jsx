import React, { useRef, useState } from 'react';
import LeassonLocked from '../../assets/img/locked-leasson.svg';
import starBoss from '../../assets/img/star-boss.svg'
import baloonBoss from '../../assets/img/baloon-boss.png'

import jsIconMock from '../../assets/img/js-icon-mock.svg'

import { Swiper, SwiperSlide } from 'swiper/react';






import { FreeMode, Mousewheel } from 'swiper/modules';

export default function LessonFeatures({numbers}) {
  const [myCardShow, setMyCardShow] = useState(false)
  const [idLeasson, setIdLeasson] = useState(0)

  const filteredNumbers = numbers.filter(item => item.deleted === null || item.deleted === false);


  const setAnimationCard = (id, onAnimation) => {
    setMyCardShow(onAnimation)
    setIdLeasson(id)
  }

  return (
    <div className='flex flex-col items-center w-full h-[500px] transition-all mb-20  md:px-0'>

      <div
   
        className='relative flex flex-col items-center w-[280px]  py-10  ' >
        {filteredNumbers.map((iter, index) => (
          <div
            className=' w-full min-h-[150px] '
            key={iter.id}
          >
            <div className={`flex text-black/50 ${index % 2 === 0 ? "justify-end " : "justify-start"}  w-full`} onMouseOver={() => setAnimationCard(iter.id, true)} onMouseEnter={() => setAnimationCard(iter.id, true)} onMouseOut={() => setAnimationCard(0, false)}>
              {iter.boss ?
                <div className=' flex flex-col items-center justify-center' >


                  {
                    index == filteredNumbers.length - 1 ? null : index % 2 === 0 ? <div className='absolute transition-all  -mb-[133px]  -ml-40 w-[220px] h-[2px] -z-20 -rotate-[43deg] rounded-full   bg-black/55'></div> : <div className='absolute -mb-[175px]   -mr-56 transition-all -z-20 w-[220px] h-[2px] rotate-[43deg] rounded-full bg-black/55'></div>}

                  <span className=' w-[100px] flex justify-center items-center h-[100px] bg-black text-white rounded-full' onMouseOver={() => setAnimationCard(iter.id, true)} onMouseEnter={() => setAnimationCard(iter.id, true)} onMouseOut={() => setAnimationCard(0, false)}>
                    <img src={LeassonLocked} className=' z-30 flex  w-5 h-5' alt="" />
                    {


index % 2 === 0 ?

<span className={`absolute text-pink-600 -z-30 flex justify-center items-center  w-0 py-2 px-4  transition-all ease-in-out duration-500 delay-100 ${myCardShow && iter.id === idLeasson ? "-translate-x-40 w-[50px] h-[25px]" : "translate-x-0 w-0 h-0 "}`}><div className='px-4 py-1 rounded-md bg-gray-600'><p className='text-xs text-white'>{iter.id}</p></div></span> :

<span className={`absolute text-pink-600 -z-30 flex justify-center items-center  w-0 py-2 px-4  transition-all ease-in-out duration-500 delay-100 ${myCardShow && iter.id === idLeasson ? "translate-x-40 w-[50px] h-[25px]" : "translate-x-0 w-0 h-0 "}`}><div className='px-4 py-1 rounded-md bg-gray-600'><p className='text-xs text-white'>{iter.id}</p></div></span>}</span>
                  <p className=' flex items-center text-xs gap-x-1 text-black'> <span className='w-2 h-2 rounded-full bg-red-500'></span>Difícil</p>
                  <span className='absolute z-10 -mt-[172px]  flex flex-col h-10 w-10 space-y-1 justify-center items-center'   style={{
    backgroundImage: `url(${baloonBoss})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}>

                      <div className='flex items-center justify-center  w-5 h-5'>

                    
                      <img src={starBoss} alt="" className={`flex w-full transition-all  ease-in-out duration-1000 delay-100 ${iter.id === idLeasson && myCardShow?"rotate-[450deg]":"rotate-0"}`}   />
                      </div>
                  
                      <div className='relative   translate-y-3 w-1 h-1 bg-blue-400 rounded-full'></div>
                  </span>
                
                </div>

                :iter.locked ?

                <div className=' flex flex-col items-center justify-center'>
                  {

                    index == filteredNumbers.length - 1 ? null : index % 2 === 0 ? <div className='absolute transition-all  -mb-[123px]  -ml-52 w-[300px] h-[2px] -z-10 -rotate-[35deg] rounded-full  bg-black/55'></div> : <div className='absolute -mb-[150px]  -mr-56 transition-all w-[300px] h-[2px] rotate-[35deg] rounded-full -z-20 bg-black/55'></div>}

                  <span className=' w-[75px] flex justify-center items-center h-[75px] bg-black rounded-full' onMouseEnter={() => setAnimationCard(iter.id, true)} onMouseOut={() => setAnimationCard(0, false)}>
                  {index % 2 === 0 ?

<span className={`absolute text-pink-600 -z-30 flex justify-center items-center  w-0 py-2 px-4  transition-all ease-in-out duration-500 delay-100 ${myCardShow && iter.id === idLeasson ? "-translate-x-40 w-[50px] h-[25px]" : "translate-x-0 w-0 h-0 "}`}><div className='px-4 py-1 rounded-md bg-gray-600'><p className='text-xs text-white'>{iter.id}</p></div></span> :

<span className={`absolute text-pink-600 -z-30 flex justify-center items-center  w-0 py-2 px-4  transition-all ease-in-out duration-500 delay-100 ${myCardShow && iter.id === idLeasson ? "translate-x-40 w-[50px] h-[25px]" : "translate-x-0 w-0 h-0 "}`}><div className='px-4 py-1 rounded-md bg-gray-600'><p className='text-xs text-white'>{iter.id}</p></div></span> }
                    <img src={LeassonLocked} className='flex justify-center items-center w-5 h-5' alt="" /></span>
                </div>:


                <div className=' flex flex-col items-center justify-center'>
                  <p className='absolute z-20 text-black -mb-[110px] -ml-2 text-xs'>Lógica de <span className='text-yellow-400'>Programação*</span></p>
                {

                  index == filteredNumbers.length - 1 ? null : index % 2 === 0 ? <div className='absolute transition-all  -mb-[123px]  -ml-52 w-[300px] h-[2px] -z-10 -rotate-[35deg] rounded-full  bg-black/55'></div> : <div className='absolute -mb-[150px]  -mr-56 transition-all w-[300px] h-[2px] rotate-[35deg] rounded-full -z-20 bg-black/55'></div>}

                <span className=' w-[75px] flex justify-center items-center h-[75px] bg-pending-leasson rounded-full' onMouseEnter={() => setAnimationCard(iter.id, true)} onMouseOut={() => setAnimationCard(0, false)}>
                {index % 2 === 0 ?
                  <span className={`absolute text-pink-600 -z-30 flex justify-center items-center  w-0 py-2 px-4  transition-all ease-in-out duration-500 delay-100 ${myCardShow && iter.id === idLeasson ? "-translate-x-40 w-[50px] h-[25px]" : "translate-x-0 w-0 h-0 "}`}><div className='px-4 py-1 rounded-md bg-green-500'><p className='text-xs text-white'>{iter.id}</p></div></span> :
                  <span className={`absolute text-pink-600 -z-30 flex justify-center items-center  w-0 py-2 px-4  transition-all ease-in-out duration-500 delay-100 ${myCardShow && iter.id === idLeasson ? "translate-x-40 w-[50px] h-[25px]" : "translate-x-0 w-0 h-0 "}`}><div className='px-4 py-1 rounded-md bg-green-500'><p className='text-xs text-white'>{iter.id}</p></div></span>}
                  <div className='flex flex-col justify-center items-center'>
                  <p className='text-xs text-white'>Pendente</p>
                  <img src={jsIconMock} className='flex justify-center items-center w-8 h-8' alt="" />
                  </div>
                  </span>
                </div>



                // : <span className='w-[75px] flex justify-center items-center h-[75px] bg-black/80 rounded-full '>
                //   <img src={LeassonLocked} alt="" className='w-5 h-5' />
                // </span>
              }
              
            </div>
          </div>

        ))}
      </div>



    </div>

  );
}