import React from 'react'

export default function CardAnnouncesPlayPoints({ imgForAnnounce,AnnounceAlertMessage, AnnounceMsgOne, AnnounceMsgTwo, AnnounceMsgThree, AnnounceMsgFour,plusMsgOne,plusMsgTwo }) {
    
    
    return (
        <div className='flex flex-col  w-[185px] text-center animate-calygamScaleClean   border border-white rounded-md bg-calygam-semi-light-pink' onMouseMoveCapture={()=>setShowInvites(true)}>
            <div className='w-full flex-col space-y-2 h-[200px] justify-center flex items-center'>
                <img src={imgForAnnounce} alt="" className='w-8' />
                <p className='text-base text-white font-bold'>{AnnounceAlertMessage}</p>
                <span className='w-[35%] h-[2px] bg-red-bold-type rounded-full flex'></span>
                <div className='w-full flex flex-col text-center text-white text-xs font-extralight'>
                    <p>{AnnounceMsgOne}</p>
                    <p>{AnnounceMsgTwo}</p>
                    <p>{AnnounceMsgThree}</p>
                    <p>{AnnounceMsgFour}</p>
                    {plusMsgOne !=''?  <p>{plusMsgOne}</p>:null }
                    {plusMsgTwo !=''?  <p>{plusMsgTwo}</p>:null }
                </div>

            </div>


        </div>
    )
}
