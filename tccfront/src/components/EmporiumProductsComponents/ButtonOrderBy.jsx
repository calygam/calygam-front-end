import React, { useEffect } from 'react'
import { useEmporiumStockReducer } from '../../utils/ContextReducers/EmporiumReducers/useEmporiumStockReducer'
import { useCalygamEmporium } from '../../hooks/useCalygamEmporium/useCalygamEmporium'

export default function ButtonOrderBy({orderByText,orderByRole}) {
     const {
        filters,
        setFilter } = useCalygamEmporium()

  return (
    <div className='flex font-poppins items-center'>
            <button  className=' rounded-md p-1 border-b-4 text-nowrap w-full lg:w-fit hover:border-none transition-all hover:translate-y-1 border-gray-400/50 px-4 pr-8 outline-none text-xs font-medium bg-calygam-gray-light/15  '
             onClick={()=>{setFilter("orderByMinMax",orderByRole)}}>{orderByText}</button>
    </div>
  )
}
