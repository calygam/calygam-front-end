import React, { useContext } from 'react'
import placeActivityIcon from '../../assets/img/place-activity-icon.svg'
import sendActivityIcon from '../../assets/img/send-activity-icon.svg'
import ComponentToggleContext from '../../context/ComponentToggleContext'

export default function BoxSendLeassonViaDocs({ BoxTitleDoc, BoxPossiblePlaceLeasson, BoxIconFor, BoxInfoDataTime, BoxForSendActivity }) {
    const {toggleUploadModal,setToggleUploadModal} = useContext(ComponentToggleContext)
    return (
        <div className='flex flex-col   items-center font-poppins w-full min-h-[150px] h-full rounded-xl py-2 px-2 bg-trail-info-action/50 '>
            <div className='w-full flex justify-center'>
                <p className='flex gap-x-1 text-white text-base items-center'>{BoxTitleDoc} <img src={placeActivityIcon} alt="" className='w-4 h-4' /></p>
            </div>
            <div className='flex flex-col w-full  gap-y-14 '>

                <div className='w-full my-2 '>
                    <button className='flex w-full rounded-xl gap-x-2 bg-trail-info-action py-2 px-4' onClick={()=>setToggleUploadModal(true)}>
                        <div>
                            <img src={sendActivityIcon} alt="" className='w-6 h-6 rounded-full' />
                        </div>
                        <div>
                            <p className='text-white'>Anexar Atividade</p>
                        </div>
                    </button>
                </div>

                <div className='w-full my-2 flex flex-col space-y-2   '>
                    <button className='flex w-full rounded-xl justify-center  bg-trail-info-action py-2 px-4'>
                        <p className='text-base text-white'>
                            {BoxInfoDataTime}
                        </p>
                    </button>
                    <button className='flex w-full rounded-xl justify-center  bg-trail-info-action py-2 px-4'>
                        <p className='text-base text-white'>
                            {BoxForSendActivity}
                        </p>
                    </button>
                </div>
            </div>

        </div>
    )
}
