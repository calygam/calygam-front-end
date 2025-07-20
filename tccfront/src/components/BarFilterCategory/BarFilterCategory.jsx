import React, { useEffect } from 'react'
import { useCalygamEmporium } from '../../hooks/useCalygamEmporium/useCalygamEmporium'
//components
import CalygamCheckbox from '../../components/CalygamCheckbox/CalygamCheckbox.jsx'
import { motion } from 'framer-motion'
import ButtonOrderBy from '../EmporiumProductsComponents/ButtonOrderBy.jsx'

export default function BarFilterCategory() {
  const {
    filters,
    setFilter } = useCalygamEmporium()


  return (
    <div className='w-full flex'>
      <div className='w-full font-poppins   flex flex-col'>

        <h3 className='font-semibold'>Filtros</h3>
        <p className='font-medium'>Categoria</p>
        <motion.div className='gap-y-1 flex  flex-col overflow-y-hidden '
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ type: 'tween', duration: 2, ease: 'easeInOut' }}
        >
          <CalygamCheckbox targetChecked={filters.petsChecked} setTargetChecked={(value) => setFilter("petsChecked", value)} inputCheckedId={"input-for-petChecked"} scapeTitle={"Pets"} />
          <CalygamCheckbox targetChecked={filters.skinsChecked} setTargetChecked={(value) => setFilter("skinsChecked", value)} inputCheckedId={"input-for-skinsChecked"} scapeTitle={"Skins"} />
          <CalygamCheckbox targetChecked={filters.themesChecked} setTargetChecked={(value) => setFilter("themesChecked", value)} inputCheckedId={"input-for-themesChecked"} scapeTitle={"Temas"} />
        </motion.div>
      </div>
      <div className='md:hidden w-fit bg-calygam-purple-semi-bold/5  rounded-md p-1 pb-4 flex flex-col gap-y-2'

      >
        <p className='font-semibold'>Ordenar:</p>
              <ButtonOrderBy orderByText={"Popularidade"} orderByRole="POPULAR" />
          <ButtonOrderBy orderByText={"Preço: baixo para alto"} orderByRole="ASC"/>
                  <ButtonOrderBy orderByText={"Preço: Alto para baixo"} orderByRole="DESC" />

      </div>
    </div>
  )
}
