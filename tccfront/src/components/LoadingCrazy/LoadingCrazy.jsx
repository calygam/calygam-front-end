import React from 'react'

export default function LoadingCrazy() {
  return (
    <div className={`fixed z-50 flex flex-col font-Poppins justify-center space-y-5 bg-black/25 items-center -inset-0`}>
    <div className=' flex items-center animate-pulse gap-2 justify-center w-full'>
        <p className={` text-black font-black`}>Carregando </p>
        <span className={`flex w-2 h-2 justify-center items-center rounded-tl rounded-br animate-spinningCleanMediumRage   bg-black`}> </span> 
        <span className={`flex w-2 h-2 justify-center items-center rounded-tl rounded-br animate-spinningCleanMediumRage   bg-black`}> </span> 
        <span className={`flex w-2 h-2 justify-center items-center rounded-tl rounded-br animate-spinningCleanMediumRage    bg-black`}> </span> 
    </div>
    <div >

        <span className={`flex w-20 h-20 justify-center items-center rounded-lg animate-spinningClean bg-black`}>
            <span className={`flex w-10/12 h-5/6 justify-center items-center rounded-lg animate-spinningCleanRage bg-white`}>
                <span className={`flex w-10/12 h-5/6 justify-center items-center rounded-lg animate-spinningCleanSuperRage  bg-black`}>
                    <span className={`flex  w-10/12 h-5/6 rounded-md justify-center items-center animate-spinningCleanRage bg-white`}>
                    <span className={`flex  w-10/12 h-5/6 rounded-full justify-center items-center  animate-spinningCleanMediumRage bg-black `}>
                        <span className={`flex  w-10/12 h-5/6 rounded-full   animate-spinningCleanSuperRage bg-white`}>
                            <span className={`flex  w-10/12 h-5/6 rounded-full  justify-center items-center animate-spinningClean bg-black`}>
                                <span className={`flex  w-10/12 h-5/6 rounded-full   animate-spinningCleanRage bg-white`}>

                                    <span className={`flex  w-10/12 h-5/6 rounded-full animate-spinningCleanMediumRage justify-center items-center bg-black`}>
                                        <span className={`flex  w-10/12 h-5/6 rounded-full animate-spinningCleanSuperRage bg-white`}>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </span>
                </span>
            </span>
        </span>
    </div>
    <div className=' flex items-center animate-pulse gap-2 justify-center w-full'>
        <p className={`text-black font-black`}>Espero que conquiste algo hoje :o </p>
        </div>
</div>
  )
}
