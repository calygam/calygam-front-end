import React from 'react'


//hooks
import UseTrailDataHook from '../../../hooks/UseTrailDataHook/UseTrailDataHook'
import { UseReadAllTrailsHook } from '../../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook'
//components
import TrailContainerSmall from '../TrailContainerVariants/TrailContainerSmall'
import TrailContainerMedium from '../TrailContainerVariants/TrailContainerMedium'
import { UseDataActivitiesPerTrailIdHook } from '../../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook'


export default function TrailsAvailableManager() {

  const { trails,loading } = UseReadAllTrailsHook()

  //   const { trails,targetTrail, targetTrailId, setTargetTrailId,modelIsOpen,setModelIsOpen } = UseReadAllTrailsHook();
  return (
    <div className='flex flex-col w-[85%] mx-auto font-poppins'>
      <h3>{!loading?trails.filter((filterStats) => filterStats.trailStatus.includes("ENABLE")).length>0?"Trilhas Disponiveis":"Mais Trilhas Em breve":"Carregando..."}</h3>

      <div className='grid md:grid-cols-2  grid-cols-1
                     max-h-[400px]
                     my-6 gap-x-16 gap-y-8
                    font-poppins
                    custom-scrollbar overflow-y-auto'>



        {trails ? trails.filter((filterStats) => filterStats.trailStatus.includes("ENABLE")).map((trail) => (
          <TrailContainerMedium key={trail.trailId} trail={trail} />
        )) : <p>Não temos nenhuma trilha disponivel</p>}

      </div>
    </div>
  )
}
