import React from 'react'

import RowOfTable from '../../components/RowOfTable/RowOfTable.jsx'
import { motion } from 'framer-motion'

export default function CalygamTableManagemet({ rowOfTable }) {

    return (
        <div className="w-full min-w-[800px] text-center divide-y divide-gray-300 font-poppins pt-4">
            <div className="flex items-center justify-between p-4 rounded-t-md bg-white border border-b-0 border-gray-300">
                <div className='flex items-center gap-x-2'>
                    <h2 className="text-base font-semibold text-gray-900">Times Membros</h2>

                </div>
                <button className="text-gray-500 hover:text-gray-700">

                </button>
            </div>

            <div
                className=" overflow-hidden divide-y divide-gray-300  border-2 border-gray-200 shadow-md"
                role="table"
                aria-label="Lista de membros do time"
            >

                <div
                    className="grid grid-cols-5 place-items-center text-xs gap-2 p-3 text-gray-600 bg-gray-200/50"
                    role="row"
                >

                    <div className="font-semibold" role="cell">Nome</div>
                    <div className="font-semibold" role="cell">Status</div>
                    <div className="font-semibold" role="cell">Email</div>
                    <div className="font-semibold" role="cell">Ação</div>
                </div>

                <motion.div className="divide-y-2 divide-gray-200"
                initial={{y:-3,x:-2,scale:0.6}}
                whileInView={{y:0,x:0,scale:1}}
                transition={{type:'spring'}}>
                
                    {rowOfTable?.map((oneRow, index) => (
                       
                        <RowOfTable key={oneRow.id} oneRow={oneRow} />
                     
                    ))

                    }

                </motion.div>
            </div>


            <div className="flex justify-end bg-gray-200/50 rounded-b-md space-x-2">
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                    Previous
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                    Next
                </button>
            </div>
        </div>
    )
}