import React from 'react'

export default function PetCalygamInput({
    inputLabel,
    inputId,
    inputType="text",
    inputValue,
    inputSetValue,
    inputPlaceholder
    
}) {
  return (
    <div className='flex justify-between py-2 items-center'>
                            <label htmlFor={inputId} className='text-gray-500 text-xs  font-medium'>{inputLabel}</label>
                            <div className='border rounded-md w-[75%] border-gray-600'>
                                <input type={inputType} className='bg-transparent outline-none w-full text-xs pl-2 py-2 ' id={inputId} name={inputId} placeholder={inputPlaceholder} autoComplete='off' value={inputValue === null ? "" : inputValue} onChange={(e) => inputSetValue(e.target.value)} />
                            </div>

                        </div>
  )
}
