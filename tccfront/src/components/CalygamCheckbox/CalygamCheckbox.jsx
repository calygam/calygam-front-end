import React from 'react'
import { useCalygamEmporium } from '../../hooks/useCalygamEmporium/useCalygamEmporium'
import checkBoxIcon from '../../assets/img/emporiumPage/checked-box-icon.svg' 


export default function CalygamCheckbox({targetChecked,setTargetChecked,inputCheckedId,scapeTitle}) {
  
  return (
    <div className='flex items-center '>
        <label htmlFor={inputCheckedId} className='gap-x-1 flex items-center' >
        <div className={`flex justify-center items-center border-2 rounded-full  border-gray-500  outline-purple-500 transition-all   ease-in-out ${targetChecked?"bg-purple-700/40 border border-white/25":""}`}>
            <img src={checkBoxIcon} alt="" className={`w-[14px] h-[14px] ${targetChecked?"opacity-60":""}`} />
        </div>
        <div>
            <p className={`text-sm line ${targetChecked?"line-through decoration-purple-950":""}`}>{scapeTitle}</p>
        </div>

        </label>
        
        <input type="checkbox" id={inputCheckedId} name={inputCheckedId} checked={targetChecked} className='hidden' onChange={(e)=>setTargetChecked(e.target.checked)} />
       
      
    </div>
  )
}
