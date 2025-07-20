import React from 'react'
import SearchTreats from '../../components/EmporiumProductsComponents/SearchTreats.jsx'
import ShortcutValues from '../../components/EmporiumProductsComponents/ShortcutValues/ShortcutValues.jsx'
import StockOfTreats from '../../components/EmporiumProductsComponents/StockOfTreats/StockOfTreats.jsx'

export default function StockLayoutManagement() {
  return (
    <div className='w-full flex gap-y-2 flex-col'>
      <SearchTreats/>
      <ShortcutValues/>
      <StockOfTreats/>
    </div>
  )
}
