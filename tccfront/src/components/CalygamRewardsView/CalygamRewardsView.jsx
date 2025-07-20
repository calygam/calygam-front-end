import React, { useEffect } from 'react'
import calyCoin from '../../assets/img/rewards/caly-coin.svg'
import calyFood from '../../assets/img/rewards/frango-food.svg'
import calyXp from '../../assets/img/rewards/xp-icon.svg'
import api from '../../api/api'
import { ReadAllRewards } from '../../utils/ReadAllRewards/ReadAllRewards'
import { UseLoading } from '../../hooks/UseLoading/UseLoading'
import { UseModalHook } from '../../hooks/UseModalHook/UseModalHook'
export default function CalygamRewardsView({ rewards,setRewards }) {
     const { loading, setLoading, setLoadingText } = UseLoading()
     const{modalIsOpen,openModal,contentModal}=UseModalHook()
      const { closeModal } = UseModalHook()
    const pa = [
        { id: 1, money: 30, xp: 20, food: 30 },
        { id: 2, money: 30, xp: 20, food: 30 },
        { id: 3, money: 30, xp: 20, food: 30 },
        { id: 4, money: 30, xp: 20, food: 30 },
    ]

    useEffect(()=>{
        ReadAllRewards(setLoading,setLoadingText,closeModal,setRewards)
    },[])


    return (
        <div className='w-[85%] font-poppins justify-center min-h-[300px] mx-auto rounded-2xl bg-gradient-to-tl from-purple-500 via-purple-600 to-purple-600/50'>
            <div className='flex w-ful justify-center gap-x-4 py-2'>
                <h1 className='text-white text-2xl font-semibold'>Recompensas</h1>
                <button type='button' className='py-2 px-4 rounded-md outline-none text-xs border-b-4 hover:border-b-0 transition-all border-gray-900 bg-calygam-black-semi-strong text-white' onClick={()=>openModal("CreateAnewReward")}>Criar</button>

            </div>
            <ul className=' flex flex-col flex-wrap gap-2 items-center w-[70%] mx-auto justify-center'>
                {rewards?.map(rwd => (
                    <li key={rwd.rewardPackageId} className='flex bg-slate-200 px-2 gap-2 flex-wrap justify-center min-w-full  md:w-fit py-2 items-center  my-1 rounded-xl '>
                        <div className='flex bg-purple-600 p-1 rounded-full  items-center gap-x-1'>
                            <img src={calyCoin} alt="" className='w-[35px]' />
                            <p className=' font-medium text-white/75 '>Moedas: {rwd.rewardPackageMoney}</p>
                        </div>
                       <div className='flex bg-blue-900 p-1 rounded-full  items-center gap-x-1'>
                            <img src={calyXp} alt="" className='w-[35px]' />
                            <p className='font-medium text-white/75 '>Experiência: {rwd.rewardPackageXp}</p>
                        </div>
                                   <div className='flex bg-orange-600 p-1 rounded-full  items-center gap-x-1'>
                            <img src={calyFood} alt="" className='w-[35px]' />
                            <p className=' font-medium text-white/75'>Comida: {rwd.rewardPackageFood}</p>
                        </div>
                        <div className='flex items-center rounded-full p-1 px-6 bg-black gap-x-1'>
                 
                            <p className='  font-semibold  text-white/75 p-1'>Dificuldade: {rwd.rewardActivityDifficultyName}</p>
                        </div>
                    </li>
                ))

                }
            </ul>

        </div>
    )
}
