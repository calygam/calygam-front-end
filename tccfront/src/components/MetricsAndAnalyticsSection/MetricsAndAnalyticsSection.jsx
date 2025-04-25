import React from 'react'

export default function MetricsAndAnalyticsSection({ bgActivitys, bgAnalytics }) {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5    place-items-center justify-items-center  font-poppins'>
            <div className='flex  gap-x-2 items-center  -mt-[21px]'>
                <div className='flex flex-col  items-center w-[300px] md:w-[375px]   justify-center'>
                    <p className='text-second-pending-leasson text-xl font-bold'>Atividades Recentes</p>



                    <div className='w-full flex flex-col items-center text-white space-y-2 rounded-xl px-6 h-[175px] justify-center ' style={{
                        backgroundImage: `url(${bgActivitys})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: "cover"
                    }}>
                        <p className='text-lg'>Ultimas <span className='text-red-clean-type'>Atividades</span></p>
                        <div className='flex w-full flex-col space-y-1 '>
                            <p className='flex gap-x-1 items-center'><span className='flex w-2 h-2 bg-green-500 rounded-full'></span>Quiz na Trilha de Java Script</p>
                            <p className='flex gap-x-1 items-center'><span className='flex w-2 h-2 bg-yellow-300 rounded-full'></span>Tarefa JavaScrpt</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className='flex flex-col  '>
                    <p>Veja a onde você parou</p>
                    <p>nas suas Atividaes!</p>
                </div>


                <div className='relative flex justify-center  gap-x-2  items-center flex-nowrap'>
                <div className='flex flex-col  items-center w-[300px] md:w-[375px]   justify-center'>
                    <p className='text-yellow-300 text-xl font-bold'>Estatisticas</p>



                    <div className='w-full flex flex-col items-center text-white space-y-2 rounded-xl px-6 h-[175px] justify-center ' style={{
                        backgroundImage: `url(${bgAnalytics})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: "cover"
                    }}>

                        <div className='flex w-full flex-col space-y-1 '>
                            <p className='flex gap-x-1 items-center'><span className='flex w-2 h-2 bg-green-500 rounded-full'></span>Você Ja fez 1 trilha</p>
                            <p className='flex gap-x-1 items-center'><span className='flex w-2 h-2 bg-green-500 rounded-full'></span>Seu tempo Medio de uso</p>
                            <p className='flex gap-x-1 items-center'>esta semana:  3h 45min</p>
                            <p className='flex gap-x-1 items-center'><span className='flex w-2 h-2 bg-green-500 rounded-full'></span>Você alcançou 20% da </p>
                            <p className='flex gap-x-1 items-center'>sua meta</p>
                        </div>
                        
                    </div>

                    <div className='flex flex-col justify-center items-center  w-full '>
                    <p>Veja a onde você parou</p>
                    <p>nas suas Atividaes!</p>
                </div>
                </div>

            </div>




            
        </div>
    )
}
