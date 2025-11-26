import React, { useEffect, useState } from 'react'
import { UseProgressHook } from '../../hooks/UseProgressHook/UseProgressHook'
import dropdown from '../../assets/img/dropdown.svg'
import loadingImages from '../../assets/img/loading-images.svg'

//images
import perfilPageIcon from '../../assets/img/perfilPageIcon.png'
import { Link } from 'react-router-dom'
export default function UserSubmittedArchives({usr}) {
    const [isOpen,setIsOpen] = useState(false)
     const [isImageLoading, setIsImageLoading] = useState(true);
   useEffect(()=>{
    console.log("))()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()(")
    console.log(usr)
   })
  return (
    <div className='flex flex-col gap-y-1  w-full font-poppins'>
      <div className='rounded-lg p-1 bg-gradient-to-tr items-center flex justify-between  from-calygam-purple-tone-2 to-calygam-purple-semi-strong'>
        <div className='flex items-center gap-2'>
         {usr.userArchiveUrl != "" && usr.userArchiveUrl != null ? isImageLoading &&
                                <div className='flex self-start bg-gradient-to-tr w-[45px]   justify-center items-center from-black via-gray-700 to-gray-700  rounded-full animate-spin'>
                                    <img src={loadingImages} alt="" className='' />
                                </div>
                                : <button type='button' className='flex rounded-full outline-none group cursor-pointer overflow-hidden transition-all    bg-black/25 p-1 justify-center items-center'>
                                    <img src={perfilPageIcon} alt="ir para perfil" className='w-[25px] transition-all h-[25px]' />
                                </button>}
                            {usr.userArchiveUrl != null && usr.userArchiveUrl != "" ?

                                <img src={usr.userArchiveUrl} alt="Foto de Perfil" className={`w-[35px] h-[35px] object-cover rounded-full ${isImageLoading ? "hidden" : "block"}`} onLoad={() => setIsImageLoading(false)} /> : null}
        <p className='text-sm text-white font-semibold line-clamp-2'>{usr?.userName?.split("").map((teste,index)=>{
          let testev2 =""
          if(index<16){
            testev2 +=teste
          } 
          return testev2})}</p>
          </div>
        <button className={`text-black outline-none text-xs font-semibold flex items-center justify-center transition-all   rounded-full h-[15px] w-[15px] ${isOpen?"rotate-180":""}`} onClick={()=>setIsOpen(!isOpen)}><img className='w-[25px] h-[25px]' src={dropdown}></img></button>
      </div>
      <div className={`rounded-lg p-1 bg-gradient-to-tr gap-y-2 items-center flex flex-col  from-calygam-purple-tone-2 text-wrap to-calygam-purple-semi-strong transition-all ease-in-out  overflow-hidden duration-[1100ms] ${isOpen?"w-full h-full scale-100":" h-0 scale-0 relative   opacity-0"}`}>
        {usr?.submissions?.map((sub,index)=>(
          sub?.submissionLink!=null? <div key={index} className='rounded-md p-2 text-wrap w-full flex gap-1 bg-purple-500'>
            <span className='rounded-md p-1 bg-gray-500 text-white font-semibold'>#</span>
            {sub?.submissionLink?.length>10?
                        <Link to={sub?.submissionLink} className='rounded-md p-1 text-black  font-semibold text-wrap'>{sub?.submissionLink?.slice(0,15) +"..."}</Link>
                        :                        <Link to={sub?.submissionLink} className='rounded-md p-1 text-black  font-semibold text-wrap'>{sub?.submissionLink?.slice(0,15)}</Link>}
          </div>:
          <div key={index} className='rounded-md p-2 text-wrap w-full flex gap-1 bg-purple-500'>
            <span className='rounded-md p-1 bg-gray-500 text-white font-semibold'>{sub?.submissionOriginalName?.split('.')[1]}</span>
            {sub?.submissionOriginalName?.length>10?
                        <Link to={sub?.submissionArchiveUrl} className='rounded-md p-1 text-black  font-semibold text-wrap'>{sub?.submissionOriginalName?.split('.')[0].slice(0,14) +"..."}</Link>
                        :                        <Link to={sub?.submissionArchiveUrl} className='rounded-md p-1 text-black  font-semibold text-wrap'>{sub?.submissionOriginalName?.split('.')[0].slice(0,14)}</Link>}
          </div>
        ))}
      </div>
    </div>
  )
}
