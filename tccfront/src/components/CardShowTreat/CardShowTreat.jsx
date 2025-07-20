import React, { useEffect } from 'react'

export default function CardShowTreat({ treat, treatType = "pets",index }) {
    const treatVisualizer = treat?.outfits[index]
    useEffect(() => { console.log(treat) }, [treat])
    return (
        <div className='w-[200px]   bg-gradient-to-tr font-poppins from-orange-500/50 via-orange-700/50 p-2 to-orange-600/50  shadow-lg shadow-purple-600/50 rounded-md '>

            {treatType == "pets" && treatVisualizer ?
                <div className=' flex flex-col gap-y-2'>
                    <div className='w-full flex bg-white rounded-md justify-center'>
                        <img src={treatVisualizer?.petUrlImage} alt="" className='w-[200px] rounded-md h-auto max-h-[150px]' />
                    </div>
                    <p className='text-sm'>Apelido: <span className='text-black font-bold'>{treat.petName}</span></p>
                    <p className='text-sm'>Traje: <span className='text-black font-bold  '>{treatVisualizer?.petOutfitName}</span></p>

                </div> : null}



        </div>
    )
}
