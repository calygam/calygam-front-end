import React from 'react'
import useDailyFlagsServices from '../../services/useDailyFlagsServices'
import RecourseBase from '../../components/RecourseBase/RecourseBase.jsx'
import coinSimbol from '../../assets/img/homePage/coinSimbol.svg' 
import flagIcon from '../../assets/img/flag-simbol.svg'
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile.js'
import { formatterOfTime } from '../../utils/formatterOfTime.js'
export default function UserRecourseTrail() {
    const { timeLeftRegen, setTimeLeftRegen,flagsQtd,biggestZero } = useDailyFlagsServices()
    const {dataProfile} = UseDataProfile()
    
  return (
     flagsQtd!=null?
    <div className='flex gap-2   justify-between w-full '>
       

      <RecourseBase haveIcon={coinSimbol} infoQtd={dataProfile.userMoney} />
      
      <RecourseBase haveIcon={flagIcon} infoQtd={flagsQtd}/>
      <RecourseBase haveIcon={false} infoQtd={biggestZero?formatterOfTime(timeLeftRegen):"0"} hourNeed={true}/>

    </div>: <div className='flex  w-full items-center justify-between'>
       

      <RecourseBase haveIcon={coinSimbol} infoQtd={dataProfile.userMoney} />
      <p>Carregando...</p>
      </div>
     
  )
}
