import React from 'react'
import TextAdaptForStepLeasson from '../TextAdaptForStepLeasson/TextAdaptForStepLeasson'

export default function SpecifiedGuide({TextObjetive, BodyLeasson}) {
  return (
    <div className='flex flex-col w-full text-xs font-poppins   '>
      <TextAdaptForStepLeasson TitleStep={"Desafio Adicional(opcional)"} TextStep={''}/>
      <div className='flex w-full flex-col'>
        <ul className='flex lg:w-[65%] flex-col pl-6 space-y-3 font-light '>
          <li className='list-disc'>Adicionar um Botão de Reset: Crie um segundo botão para zerar o contador.</li>
          <li className='list-disc'>Limitar o Número de Cliques: Faça com que o contador não ultrapasse 10 cliques, exibindo uma mensagem quando o limite for alcançado.</li>
        </ul>
        <div className='mt-2'>
        
        <TextAdaptForStepLeasson TitleStep={''} TextStep={'Esse exercício simples ajuda a praticar manipulação de eventos, manipulação do DOM (Document Object Model), e a lógica de controle de estado em JavaScript.'}/>
        </div>
      </div>
    </div>
  )
}
