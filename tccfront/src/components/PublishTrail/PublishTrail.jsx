import React, { useState } from 'react'

export default function PublishTrail({ setIsPublish, isPublish, trailName, setTrailCode, trailCode,handleUpdate }) {

  

    const codeHandleChange =(e)=>{
        const input = e.target.value
        if(input.length>16){
            return
        }
        else{
            setTrailCode(input)
        }

    }

    return (
        <form className='fixed inset-0 z-10 transition-all ease-linear duration-1000 font-poppins  bg-black/75 w-full min-h-[2000px] ' onSubmit={handleUpdate}>
            <div className='w-[250px] md:w-[300px] lg:w-[350px] flex flex-col gap-y-1 mx-auto mt-16 shadow-2xl shadow-white/50  bg-slate-600/75 rounded-md p-4 '>

                <div className='flex items-center justify-between'>
                    <h4 className='text-white text-lg'>Publicando trilha</h4>
                    <button onClick={() => setIsPublish(false)} className='text-white text-lg'>X</button>

                </div>


                    <p className='text-white text-lg bg-gray-400/45 rounded-md w-fit px-2 mt-2'>{trailName}</p>

    
                <div className='flex flex-col bg-black/45 h-fit  p-2 rounded-md mt-2 '>
                    <p className='text-white  text-xs'>Digite o código abaixo para confirmar</p>

                    <p className='text-white text-xs bg-gray-400/45 rounded-md w-fit px-2 mt-2'>calygam up trail</p>

                    <input type="text" name="" id="" value={trailCode} onChange={(e)=>codeHandleChange(e)} className=' text-xs mt-1 text-white outline-none border-b-2 border-white bg-transparent' />

                </div>
                {trailCode.length>0 && trailCode.includes("calygam up trail") && trailCode == "calygam up trail"?
                <div className='flex   h-fit justify-center   mt-2 '>
                <button type='submit' className='outline-none bg-green-500 hover:bg-green-600 rounded-md py-2 px-4 text-center text-white'>Tornar publica</button>

                </div>
: <div className='flex   h-fit justify-center   mt-2 '>
                <button type='button' disabled className='outline-none bg-green-500/50 cursor-not-allowed hover:bg-green-600/50 rounded-md py-2 px-4 text-center text-white'>Tornar publica</button>

                </div>}
        
            </div>
        </form>
    )
}
