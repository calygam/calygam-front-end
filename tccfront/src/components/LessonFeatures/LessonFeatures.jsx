import React from 'react'



export default function LessonFeatures() {
 
  const numbers = [
    { id: 1, label: "olaaa", deleted: null, boss: true },
    { id: 2, label: "olaaarrr", deleted: null, boss: null },
    { id: 3, label: "olaaa3re", deleted: null, boss: true },
    { id: 4, label: "olaaa3re", deleted: true, boss: null },
    { id: 5, label: "olaaa3re", deleted: null, boss: true },
    { id: 6, label: "olaaa3re", deleted: true, boss: null },
    { id: 7, label: "olaaa3re", deleted: null, boss: true },
    { id: 8, label: "olaaa3re", deleted: null, boss: null },
    { id: 9, label: "olaaa3re", deleted: null, boss: true },
    { id: 10, label: "olaaa3re", deleted: true, boss: null },
    { id: 11, label: "olaaa3re", deleted: null, boss: true },
    { id: 12, label: "olaaa3re", deleted: null, boss: null },
    { id: 13, label: "olaaa3re", deleted: null, boss: true },
    { id: 14, label: "olaaa3re", deleted: null, boss: null },
    { id: 15, label: "olaaa3re", deleted: null, boss: true },
    { id: 16, label: "olaaa3re", deleted: null, boss: null },
    { id: 17, label: "olaaa3re", deleted: null, boss: true },
    { id: 18, label: "olaaa3re", deleted: null, boss: null },
    { id: 19, label: "olaaa3re", deleted: null, boss: true },
    { id: 20, label: "olaaa3re", deleted: null, boss: null },
    { id: 21, label: "olaaa3re", deleted: null, boss: true },
    { id: 22, label: "olaaa3re", deleted: true, boss: null },
    { id: 23, label: "olaaa3re", deleted: null, boss: true },
    { id: 24, label: "olaaa3re", deleted: null, boss: null },
    { id: 25, label: "olaaa3re", deleted: null, boss: true },
    { id: 26, label: "olaaa3re", deleted: true, boss: null },
    { id: 27, label: "olaaa3re", deleted: null, boss: true },
    { id: 28, label: "olaaa3re", deleted: true, boss: null },
    { id: 29, label: "olaaa3re", deleted: null, boss: true },
    { id: 30, label: "olaaa3re", deleted: true, boss: true },
    { id: 31, label: "olaaa3re", deleted: null, boss: true },
    { id: 32, label: "olaaa3re", deleted: null, boss: null },
    { id: 33, label: "olaaa3re", deleted: null, boss: true },
    { id: 34, label: "olaaa3re", deleted: null, boss: null },
    { id: 35, label: "olaaa3re", deleted: null, boss: true },
    { id: 36, label: "olaaa3re", deleted: true, boss: null },
    { id: 37, label: "olaaa3re", deleted: null, boss: true },
    { id: 38, label: "olaaa3re", deleted: null, boss: null },
    { id: 39, label: "olaaa3re", deleted: null, boss: true },
    { id: 40, label: "olaaa3re", deleted: true, boss: null },
    { id: 41, label: "olaaa3re", deleted: null, boss: true },
    { id: 42, label: "olaaa3re", deleted: null, boss: true },
    { id: 43, label: "olaaa3re", deleted: true, boss: true },
    { id: 44, label: "olaaa3re", deleted: null, boss: null },
    { id: 45, label: "olaaa3re", deleted: null, boss: true },
    { id: 46, label: "olaaa3re", deleted: true, boss: null },
    { id: 47, label: "olaaa3re", deleted: null, boss: true },
    { id: 48, label: "olaaa3re", deleted: null, boss: null },
    { id: 49, label: "olaaa3re", deleted: null, boss: true },
    { id: 50, label: "olaaa3re", deleted: null, boss: null }
  ];
    

  return (
<div className='flex flex-col items-center w-full h-[400px] transition-all px-5 md:px-0'>
<div className='flex flex-col items-center w-[325px] px-4 overflow-y-auto    scrollbar-hidden scrollbar-calygam  '>
      {
        numbers.map(iter =>(
          iter.deleted?
          <div  className={`flex ${iter.id%2==0?"justify-start":"justify-end"} my-4 w-full`} key={iter.id}><span className='w-[75px] flex justify-center items-center h-[75px] bg-black/25 rounded-full'>X</span></div>
          :iter.boss?
          <div  className={`flex ${iter.id%2==0?"justify-start":"justify-end"} my-4 w-full`} key={iter.id}><span className='w-[100px] flex justify-center items-center h-[100px] bg-black/55 rounded-full'>BOSS</span></div>
          : <div  className={`flex ${iter.id%2==0?"justify-start":"justify-end"} my-4 w-full`} key={iter.id}><span className='w-[75px] flex justify-center items-center h-[75px] bg-black/55 rounded-full'> {iter.id}</span></div>
         
        ))
      }


   
 
      </div>
     
    </div>
  )
}

