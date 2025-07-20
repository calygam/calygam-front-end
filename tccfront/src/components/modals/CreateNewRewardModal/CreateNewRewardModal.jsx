import { motion } from 'framer-motion'
import React, { useEffect, useMemo, useState } from 'react'


import groupMembers from '../../../assets/img/group-members.svg'
import closeX from '../../../assets/img/close-x.svg'
import { RegexEmail } from '../../../utils/RegexEmail/RegexEmail'
import { UseModalHook } from '../../../hooks/UseModalHook/UseModalHook'
import api from '../../../api/api'
import { UseLoading } from '../../../hooks/UseLoading/UseLoading'
import { UseDataProfile } from '../../../hooks/UseDataProfile/UseDataProfile'
import { useNavigate } from 'react-router-dom'
import { UseProgressHook } from '../../../hooks/UseProgressHook/UseProgressHook'
import { UseDataActivitiesPerTrailIdHook } from '../../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook'


import CalygamDropDown from '../../../components/CalygamDropDown/CalygamDropDown.jsx';
import PublishTrail from '../../../components/PublishTrail/PublishTrail.jsx'
import { goToNextForm } from '../../../utils/goToNextForm/goToNextForm';
import { handleInputModify } from '../../../utils/handleInputModify/handleInputModify';
import { goToFormBack } from '../../../utils/goToFormBack/goToFormBack';
import { FormClenup } from '../../../utils/FormCleanup/FormClenup';
import broomClenup from '../../../assets/img/broom-clean.png';
import toSend from '../../../assets/img/to-send-trail.png';
import toback from '../../../assets/img/go-to-back.png';

import { UseReadAllTrailsHook } from '../../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook.js';
import { FormatCoins } from '../../../utils/FormatCoins/FormatCoins.js';
import { AuxiliaryLibraryResponse } from '../../../utils/AuxiliaryLibraryResponse/AuxiliaryLibraryResponse.js';

//imagens
import eyeOpen from '../../../assets/img/eye-pass-open.png'
import eyeClose from '../../../assets/img/eye-pass-close.png'
import trailIndicatorCreator from '../../../assets/img/trail-indicator-creating.svg'


export default function CreateNewRewardModal({setRewards}) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const navigation = useNavigate()
  const { loading, setLoading, setLoadingText } = UseLoading()
  const { closeModal } = UseModalHook()
  const [userCoins, setUserCoins] = useState(0)
  const [userXp, setUserXp] = useState(0)
  const [userFood, setUserFood] = useState(0)




  const [selectedDifficultyOption, setSelectedDifficultyOption] = useState('');

  useEffect(()=>{
    console.log(selectedDifficultyOption)
  },[selectedDifficultyOption])

  const [difficultyToggle, setDifficultyToggle] = useState(false);
  const DifficultyOpitions = [
    { value: 'EASY', label: 'FÁCIL' },
    { value: 'MEDIUM', label: 'MÉDIO' },
    { value: 'HARD', label: 'DÍFICIL' },
    { value: 'BOSS', label: 'CHEFE' },
  ];

  const CollectDifficultyOptions = option => {
    setSelectedDifficultyOption(option);
    setDifficultyToggle(false);
  };

  const CreateANewReward = async () => {
    try {
      setLoading(true)
      setLoadingText("Adicionando professor...")
      const response = await api.post(`/reward/create`)
      if (response.status === 200) {
        closeModal(response.data?.responseMsg, "")
      }
      else {
        closeModal("", "")
      }
    }
    catch (e) {

      closeModal("", e.response.data)
    }
    finally {
      setLoading(false)
      setLoadingText("")
    }
  }





  return (
    <motion.div className={`w-full  font-poppins   fixed inset-0 z-30  bg-calygam-purple-semi-bold/50 overflow-y-auto pb-2 custom-scrollbar backdrop-blur-md flex justify-center  items-start`}
      key={"a"}
      initial={hasAnimated ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}

      exit={{ opacity: 0 }}
      transition={{ type: 'spring', stiffness: 200, mass: 2 }}>
      <motion.div
        key={"b"}
        initial={hasAnimated ? false : { scale: 0, rotateX: -50, rotateY: 35 }}
        exit={{ opacity: 0, scale: 0 }}
        animate={{ scale: 1, rotateX: 0, rotateY: 0 }}
        transition={{ type: 'spring', stiffness: 250, mass: 1 }}
        className='lg:w-[600px] md:w-[425px] w-[300px]
             bg-white rounded-md divide-y divide-gray-200 pb-4
               mt-16 mb-8'
      >
        <div className='w-full flex justify-between p-4 items-center'>
          <div className='flex items-center justify-center gap-x-2'>
            <span className='p-2 rounded-md border border-gray-400'>
              <img src={trailIndicatorCreator} alt="" className='w-[25px] h-[25px]' />
            </span>
            <p className='text-black md:text-base text-xs font-medium'>Criando Recompensa</p>
          </div>
          <button className='flex outline-none justify-center items-center' onClick={() => closeModal("","")}>
            <img src={closeX} alt="fechar" className='md:w-[20px] w-[15px] ' />
          </button>

        </div>
        <div>
          <div className='flex justify-between w-[85%] mx-auto my-2 items-center'>
            <label htmlFor="input-for-coins" className='text-gray-500 text-xs  font-medium'>Coins:</label>
            <div className='border rounded-md w-[75%] border-gray-600'>
              <input type="number" className='bg-transparent outline-none w-full text-xs pl-2 py-2 ' id='input-for-coins' name='input-for-coins' placeholder='moedas' autoComplete='off' value={userCoins} onChange={(e) => setUserCoins(e.target.value)} />
            </div>

          </div>
          <div className='flex justify-between w-[85%] mx-auto my-2 items-center'>
            <label htmlFor="input-for-xp" className='text-gray-500 text-xs  font-medium'>Xp:</label>
            <div className='border rounded-md w-[75%] border-gray-600'>
              <input type="number" className='bg-transparent outline-none w-full text-xs pl-2 py-2 ' id='input-for-xp' name='input-for-xp' placeholder='xp' autoComplete='off' value={userXp} onChange={(e) => setUserXp(e.target.value)} />
            </div>

          </div>
          <div className='flex justify-between w-[85%] mx-auto my-2 items-center'>
            <label htmlFor="input-for-food" className='text-gray-500 text-xs  font-medium'>Food:</label>
            <div className='border rounded-md w-[75%] border-gray-600'>
              <input type="number" className='bg-transparent outline-none w-full text-xs pl-2 py-2 ' id='input-for-food' name='input-for-food' placeholder='moedas' autoComplete='off' value={userFood} onChange={(e) => setUserFood(e.target.value)} />
            </div>

          </div>

        </div>
        <div className='w-full flex justify-center'>
          <div className='w-[85%]'>
            <CalygamDropDown
              toggle={difficultyToggle}
              setToggle={setDifficultyToggle}
              options={DifficultyOpitions}
              selectedOption={selectedDifficultyOption}
              Options={CollectDifficultyOptions}
              SelectOneOption={'Selecione a Dificuldade'}
            />
          </div>
        </div>




        <div className={`flex  w-full flex-wrap gap-y-2 md:flex-nowrap  p-4 pb-0 items-center`}>


          <div className='flex w-full justify-between flex-wrap items-center gap-y-2 '>
            <div className='flex gap-x-2 items-center flex-wrap gap-y-1 justify-center'>


            </div>

            <button type='button' className={`outline-none py-2 px-4  h-[45px] bg-purple-600 rounded-lg border-b-4 hover:border-b-0 border-blue-900/20 text-white`} onClick={(e) => CreateANewReward(e)}>Enviar</button>






          </div>


        </div>



      </motion.div>

    </motion.div>
  )
}
