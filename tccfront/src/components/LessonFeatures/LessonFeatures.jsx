import React from 'react';
import LeassonLocked from '../../assets/img/locked-leasson.svg';

export default function LessonFeatures() {
  const numbers = [
    { id: 1, label: "olaaa", deleted: null, boss: true },
    { id: 2, label: "olaaa", deleted: true, boss: false },
    { id: 3, label: "olaaa", deleted: null, boss: true },
    { id: 4, label: "olaaa", deleted: null, boss: true },
    { id: 5, label: "olaaa", deleted: true, boss: false },
    { id: 6, label: "olaaa", deleted: null, boss: true },
  ];
  const filteredNumbers = numbers.filter(item => item.deleted === null);
  return (
    <div className='flex flex-col items-center w-full h-[400px] transition-all px-5 md:px-0'>
      <div className='flex flex-col items-center w-[325px] px-4 overflow-y-auto scrollbar-hidden scrollbar-calygam'>
       
        {filteredNumbers.map((iter, index) => (
          <div 
            className={`flex text-black/50 ${index % 2 === 0 ? "justify-end" : "justify-start"} my-4 w-full`} 
            key={iter.id}
          >
            {iter.boss ? <span className='w-[100px] flex justify-center items-center h-[100px] bg-black/80 rounded-full z-10'>{iter.id}</span>
             : <span className='w-[75px] flex justify-center items-center h-[75px] bg-black/80 rounded-full z-10'>
                <img src={LeassonLocked} alt="" className='w-5 h-5' />
              </span>
            }
          </div>
        ))}
      </div>
    </div>
  );
}