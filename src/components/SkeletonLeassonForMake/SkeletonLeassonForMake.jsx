import React from 'react'
import TextAdaptForStepLeasson from '../../components/TextAdaptForStepLeasson/TextAdaptForStepLeasson.jsx'
import SpecifiedGuide from '../SpecifiedGuide/SpecifiedGuide.jsx'
export default function SkeletonLeassonForMake({HaveTitle,HaveObjective,HaveBodyLeasson}) {
  return (
    <div className='flex flex-col items-center space-y-16 md:items-stretch w-full '>
        <div className='flex flex-col  px-4 lg:px-0 w-full items-center justify-center'>
        <TextAdaptForStepLeasson TitleStep={"Tarefa"} TextStep={""}/>
       
        <TextAdaptForStepLeasson TitleStep={"Objetivo"} TextStep={"Criar um contador simples que conta o número de vezes que um usuário clica em um botão. O contador deve ser exibido na página e atualizar em tempo real toda vez que o botão for pressionado."}/>
        </div>
        <div className='flex flex-col  px-4 lg:px-0 w-full  items-center justify-center'>
            <SpecifiedGuide HaveObjective={HaveObjective} HaveBodyLeasson={HaveBodyLeasson}/>
        </div>
    </div>
  )
}
