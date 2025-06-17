import React from 'react'

export default function CalygamTableManagemet() {
    return (
        <div className="w-full max-w-4xl text-center font-poppins mx-auto p-4">
            <div className="flex items-center justify-between mb-4">
                <div className='flex items-center gap-x-2'>
                    <h2 className="text-base font-semibold text-gray-900">Times Membros</h2>
                    <span className="text-purple-600 font-medium">5 Usuários</span>
                </div>
                <button className="text-gray-500 hover:text-gray-700">

                </button>
            </div>

            <div
                className=" overflow-hidden border-2 border-gray-200 shadow-md"
                role="table"
                aria-label="Lista de membros do time"
            >

                <div
                    className="grid grid-cols-5 place-items-center text-base gap-2 p-3 text-gray-600/50 bg-gray-100/50"
                    role="row"
                >

                    <div className="font-semibold" role="cell">Nome</div>
                    <div className="font-semibold" role="cell">Status</div>
                    <div className="font-semibold" role="cell">Email</div>
                    <div className="font-semibold" role="cell">Ação</div>
                </div>

                <div className="divide-y-2 divide-gray-200">
                    <div className="grid grid-cols-5 gap-2 p-3 place-items-center hover:bg-gray-50 transition-colors" role="row">

                        <div className="flex items-center  space-x-2" role="cell">

                            <div>
                                <div className="font-medium text-gray-900">Olivia Rhyne</div>
                                <div className="text-gray-500 text-sm">@olivia</div>
                            </div>
                        </div>
                        <div role="cell">
                            <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                                Active
                            </span>
                        </div>
                        <div className="text-gray-600" role="cell">olivia@untitledui.com</div>
                        <div className="flex space-x-2 justify-center" role="cell">
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-2 p-3 place-items-center hover:bg-gray-50 transition-colors" role="row">

                        <div className="flex items-center space-x-2" role="cell">

                            <div>
                                <div className="font-medium text-gray-900">Phoenix Baker</div>
                                <div className="text-gray-500 text-sm">@phoenixBaker</div>
                            </div>
                        </div>
                        <div role="cell">
                            <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                                Active
                            </span>
                        </div>
                        <div className="text-gray-600" role="cell">phoenix@untitledui.com</div>
                        <div className="flex space-x-2 justify-center" role="cell">
                        </div>
                    </div>

                </div>
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
