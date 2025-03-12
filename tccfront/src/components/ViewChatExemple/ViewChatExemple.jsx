import React from 'react'

export default function ViewChatExemple({ viewFirstExemple, viewSecondExemple }) {
    return (
        <div className='flex flex-col w-full space-y-3 '>
            {viewFirstExemple ?
                <div className='flex  w-[55%]'>
                    <button className='py-2 px-4 w-full flex flex-col justify-center  border rounded-xl text-xs text-black bg-salmon-calygam-clean '>
                        <div className='flex w-full justify-between items-center'>
                            <div className='flex gap-x-2 items-center'>
                                <div className=''><img src={viewFirstExemple} alt="" className='w-[30px] h-[30px] rounded-full bg-center bg-cover' /></div>
                                <div className='flex  '>
                                    <p>Olá Tudo bem?</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-gray-600 -mb-[20px]'>17:35</p>
                            </div>
                        </div>

                    </button>
                </div> : null}

            {viewSecondExemple ?
               <div className='flex  w-[55%]'>
                    <button className='py-2 px-4 w-full flex flex-col justify-center  border rounded-xl text-xs text-black bg-salmon-calygam-clean '>
                        <div className='flex w-full flex-row-reverse justify-between items-center'>

                            <div className='flex gap-x-2 items-center'>
                                <div className=''><img src={viewSecondExemple} alt="" className='w-[30px] h-[30px] rounded-full bg-center bg-cover' /></div>

                            </div>
                            <div className='flex  '>
                                    <p>Olá Tudo Sim!</p>
                                </div>
                            <div>
                                <p className='text-gray-600 -mb-[20px]'>17:35</p>
                            </div>
                        </div>

                    </button>
                </div> : null}

        </div>

    )
}
