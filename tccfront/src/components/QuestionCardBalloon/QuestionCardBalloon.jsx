import React from 'react'

export default function QuestionCardBalloon({NumberQuestion,TextQuestion}) {
  return (
    <div className='flex w-full bg-white border-2 font-poppins shadow-lg shadow-black/50 border-black rounded-md px-4 p-4'>
        <p className=''>{NumberQuestion}. {TextQuestion}?</p>
    </div>
  )
}
