import React from 'react'
//images
import lockedPurpleRank from '../../../assets/img/emporiumPage/locked-purple-rank.svg'
export default function EmporiumRankIsRequired({pet}) {
  return (
    <div className='absolute flex flex-col gap-2 cursor-zoom-in items-center justify-center text-center bg-purple-600/5 inset-0 rounded-lg backdrop-blur-sm w-full h-full'>
                <span className='rounded-full p-2  bg-gray-500/50 flex items-center justify-center'>
                    <img src={lockedPurpleRank} alt="" className='w-[60px]' />
                </span>
                <p className='font-semibold text-xs'>Nível para comprar</p>
                <p className={`${pet.emporiumItemRankRequired?.includes("BRONZE") ? "bg-yellow-800 border-2 border-yellow-950/50"
                    : pet.emporiumItemRankRequired?.includes("SILVER") ? "bg-gray-500 border-2 border-gray-500/50"
                        : pet.emporiumItemRankRequired?.includes("GOLD") ? "text-yellow-400"
                            : pet.emporiumItemRankRequired?.includes("PLATINUM") ? "text-teal-300"
                                : pet.emporiumItemRankRequired?.includes("DIAMOND") ? "text-sky-300"
                                    : pet.emporiumItemRankRequired?.includes("ASCENDENT") ? "text-fuchsia-600" : "bg-purple-500/50"} bg-black rounded-full px-3 p-1`}>{pet.emporiumItemRankRequired}</p>

            </div>
  )
}
