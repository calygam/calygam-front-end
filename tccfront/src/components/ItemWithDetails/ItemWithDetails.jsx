import React from 'react'

export default function ItemWithDetails({ itemImage, itemName, itemData, itemVacancies }) {
    const formatDayMonth = ([year, month, day]) => {
        const date = new Date(year, month - 1, day);
        const monthName = date.toLocaleString('pt-BR', { month: 'long' });

        return `${day} ${monthName.charAt(0).toUpperCase() + monthName.slice(1)}`;
    };

  
    return (
        <div className='grid w-full   transition-all ease-linear duration-[2000ms] lg:grid-cols-4 md:grid-cols-2 grid-cols-2 font-poppins   ' >
            <div className='flex items-center md:justify-center justify-start w-full  gap-x-2  gap-y-3  order-1'>
                {!itemImage?
                <p>Opa</p>:
                <img src={itemImage} alt='imagem  da trilha' className='w-[48px] h-[48px] rounded-lg object-center object-cover' />
                }

                <p className='text-xs font-medium'> {itemName}</p>

            </div>
            <div className='flex flex-col items-end w-full gap-x-2 flex-wrap gap-y-6 justify-center order-4 md:order-2'>
                <p>Data</p>
                <p className='text-calygam-gray-semi-strong text-xs'>{formatDayMonth(itemData)}</p>
            </div>
            <div className='flex flex-col items-start md:items-center w-full gap-x-2 flex-wrap gap-y-6 justify-center order-3'>
                <p>Vagas</p>
                <p className='text-calygam-gray-semi-strong text-center text-xs'>{itemVacancies}</p>
            </div>
            <div className='flex  items-center w-full   justify-end order-2 md:order-4'>
                <p>...</p>
            </div>

        </div>
    )
}
