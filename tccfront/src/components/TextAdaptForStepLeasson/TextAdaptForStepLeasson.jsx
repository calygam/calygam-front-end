import React from 'react'

export default function TextAdaptForStepLeasson({ TitleStep, TextStep }) {
    return (
        <div className='flex w-full  font-poppins '>
            <div className='flex '>
                <h3 className='font-light text-xs'>{TitleStep != '' ? <strong className='font-bold'>{TitleStep}:</strong> : null} {TextStep != '' ? TextStep : null} </h3>
            </div>

        </div>
    )
}
