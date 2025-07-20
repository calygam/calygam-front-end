import React from 'react'
import searchEmporiumIcon from '../../assets/img/emporiumPage/search-emporium.svg'
import { useCalygamEmporium } from '../../hooks/useCalygamEmporium/useCalygamEmporium'

export default function SearchTreats() {
    const {filters,setFilter} = useCalygamEmporium()
    return (
        <div className='flex w-full md:justify-between gap-4 items-center justify-between mt-2 font-poppins flex-wrap md:flex-nowrap'>
            <div className='flex flex-col gap-y-1'>
                <h1 className='lg:text-2xl   text-lg font-semibold'>Todos os Produtos</h1>
                <p className='text-calygam-gray-light text-wrap text-xs'>Explore nossa coleção completa de produtos</p>
            </div>
            <label htmlFor="input-for-search-treats">
                <div className='flex    px-2 pl-4 bg-slate-200/80 py-2 rounded-md'>
                    <img src={searchEmporiumIcon} alt="" className='w-[15px] ' />
                    <input type="text" id="input-for-search-treats" name="input-for-search-treats" className='border-none bg-transparent w-[85%] md:w-[250px]  transition-all text-calygam-gray-light placeholder:text-sm text-sm  outline-none pl-2 ' placeholder='Buscar'
                    value={filters.serchingProducts}
                    onChange={(e)=>setFilter('serchingProducts',e.target.value)} />
                </div>
            </label>

        </div>
    )
}
