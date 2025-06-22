import React, { useEffect, useState } from 'react'
import RowOfTable from '../../components/RowOfTable/RowOfTable.jsx'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile.js'

import arrowSearchBack from '../../assets/img/back-page.svg'
import arrowSearchAdvanced from '../../assets/img/arrow-advanced-search.svg'

export default function CalygamTableManagemet({ rowOfTable }) {
    const { dataProfile, loading, dataTeachers, searchDataTeachers } = UseDataProfile()
    const [page, setPage] = useState(0)
    const [dimension, setDimension] = useState("userId,desc")
    const [EnableButton, setEnableButton] = useState(false)
    const [roundedCount, setRoundedCount] = useState(10)

    const count = useMotionValue(10)
    const rounded = useTransform(count, (value) => Math.round(value))

    useEffect(() => {
        const unsubscribe = rounded.on("change", (latest) => {
            setRoundedCount(latest)
        })
        return () => unsubscribe()
    }, [])

    useEffect(() => {
        searchDataTeachers(page, dimension)
        if (page > 0) setEnableButton(true)

        const timeout = setTimeout(() => {
            setEnableButton(false)
        }, 10000)

        return () => clearTimeout(timeout)
    }, [page, dimension])

    useEffect(() => {
        if (EnableButton) {
            count.set(10)
            const controls = animate(count, 0, { duration: 10, ease: "linear" })
            return () => controls.stop()
        }
    }, [EnableButton])

    return (
        <div className="w-full divide-y divide-gray-300 font-poppins pt-4">
            <div className="flex items-center justify-between px-4 py-2 bg-white border-gray-300">
                <div className='flex items-center gap-x-2'>
                    <h2 className="text-base font-semibold text-gray-900">Times Membros</h2>
                </div>
                <button className="text-gray-500 hover:text-gray-700"></button>
            </div>
 {rowOfTable?.length > 0 ? (
            <div className="overflow-x-auto max-full custom-scrollbar divide-gray-300 border-gray-200 shadow-md" role="table" aria-label="Lista de membros do time">
                <div className="grid grid-cols-[1.5fr_1fr_2fr_1fr] min-w-max border-b border-gray-400/50 text-xs gap-2 p-3 text-gray-600 bg-gray-200/50" role="row">
                    <div className="font-semibold w-[100px]" role="cell">Nome</div>
                    <div className="font-semibold w-[100px]" role="cell">Status</div>
                    <div className="font-semibold lg:w-[180px]" role="cell">Email</div>
                    <div className="font-semibold lg:w-[100px] w-[180px]" role="cell">Ação</div>
                </div>

                <div className="divide-y-2 text-center divide-gray-200">
                   
                     
                 
                    {rowOfTable?.map((oneRow) => (
                        <RowOfTable key={oneRow.userId} oneRow={oneRow} />
                    ))}
                </div>
            </div>
               ):   <div className="p-4 text-gray-500 text-sm text-center">Nenhum membro encontrado.</div>}

            <div className="flex justify-end bg-white py-4 pr-2 space-x-2">
                {page > 0 &&
                    <div className="flex gap-x-1 border-2 shadow-black/50 border-gray-400/50 rounded-lg items-center justify-center">
                        <button
                            type="button"
                            disabled={EnableButton}
                            onClick={() => setPage(page - 1)}
                            className="relative flex flex-col items-center p-2 justify-center text-xs text-gray-700 rounded-md outline-none overflow-hidden "
                        >
                            <div className={`absolute inset-0 ${EnableButton ? "bg-black/55" : "bg-transparent"} backdrop-blur-md`} />
                            {EnableButton &&
                                <span style={{ fontWeight: 400, fontSize: 16, color: "#FFFFFF" }} className="absolute z-10">
                                    {roundedCount}
                                </span>}
                            <div className=" flex justify-center items-center gap-x-1 relative">
                                                                <img src={arrowSearchBack} alt="" className='w-[15px]  -rotate-1 h-[15px]' />
                                <p className='font-semibold'>Voltar</p>
</div>
                        </button>
                    </div>
                }

                {rowOfTable?.length > 0 &&
                    <div className="flex gap-x-1 border-2 shadow-black/50 border-gray-400/50 rounded-lg items-center justify-center">
                        <button
                            type="button"
                            disabled={EnableButton}
                            onClick={() => setPage(page + 1)}
                            className="relative flex flex-col items-center p-2 justify-center text-xs text-gray-700 rounded-md outline-none overflow-hidden "
                        >
                            <div className={`absolute inset-0 ${EnableButton ? "bg-black/55" : "bg-transparent"} backdrop-blur-md`} />
                            {EnableButton &&
                                <span style={{ fontWeight: 400, fontSize: 16, color: "#FFFFFF" }} className="absolute z-10">
                                    {roundedCount}
                                </span>}
                            <div className=" flex justify-center items-center gap-x-1 relative">
                                
                                <p className='font-semibold'>Próximo</p>
                                <img src={arrowSearchAdvanced} alt="" className='w-[10px] -rotate-1 h-[10px]' /></div>
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}
