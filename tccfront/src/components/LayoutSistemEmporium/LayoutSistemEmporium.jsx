import React from 'react'

//components
import BarFilterCategory from '../../components/BarFilterCategory/BarFilterCategory.jsx'
import StockLayoutManagement from '../../components/EmporiumProductsComponents/StockLayoutManagement.jsx'

export default function LayoutSistemEmporium() {
  return (
    <div className='flex   w-[85%] mx-auto'>
        {/* <div className='w-full  '>
            <BarFilterCategory/>
        </div> */}
        <div className='w-full min-h-[600px] '>
          <StockLayoutManagement/>
        </div>
      
    </div>
  )
}
