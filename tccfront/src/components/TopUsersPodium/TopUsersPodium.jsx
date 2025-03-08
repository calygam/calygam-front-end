import React from 'react'

export default function TopUsersPodium({ userImage, userPoints, userKing, userName, numberPodium }) {
    return (
        <div className='flex flex-col items-center font-jersey justify-center w-[200px] pb-1 min-h-12 h-auto rounded-md bg-red-clean-type'>
            <div className='flex justify-center items-center w-6 h-6   rounded-full bg-red-700 -mt-2 -ml-40'>
                <p className='text-base text-white'>{numberPodium}°</p>

            </div>
            <div className='flex w-full justify-around items-center'>
                <div className='flex justify-center items-center bg-blue-600 w-10 h-10 rounded-full'>
                    <img src={userImage} alt="" className='rounded-full' />
                </div>
                <div className='flex justify-center items-center '>
                    <p className='text-base text-white'>{userName}</p>
                </div>
                {userKing != null ?
                    <div className='flex justify-center items-center  w-5 h-5 '>
                        <img src={userKing} alt="" />
                    </div> :
                     <div className='flex justify-center items-center bg-transparent w-5 h-5 '>
                    </div>}
            </div>
            <div className='flex w-full justify-center items-center'>
                <p className='text-xs text-white'>Pontos:{userPoints}</p>
            </div>
        </div>
    )
}
