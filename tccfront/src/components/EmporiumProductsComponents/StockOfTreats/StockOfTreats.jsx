import React, { useEffect } from 'react'
import { useCalygamEmporium } from '../../../hooks/useCalygamEmporium/useCalygamEmporium'
import CardTreatStock from '../../../components/EmporiumProductsComponents/CardTreatStock/CardTreatStock.jsx'

export default function StockOfTreats() {
    const {stock,filters} = useCalygamEmporium()
    useEffect(()=>{
        console.log("treats ------------------ ")
        console.log(stock.treats)
        console.log("treats ------------------")
    },[stock])
  return (
    <div className='w-full grid lg:grid-cols-5 justify-center place-items-center gap-4 md:grid-cols-3 grid-cols-1'>
        {stock.treats.pets?.filter((targetPet=> targetPet.petName.toUpperCase().includes(filters.serchingProducts.toUpperCase()))).map((pet)=>(
            <CardTreatStock key={pet.petId} pet={pet}/>
        ))}
         {stock.treats.skins?.filter((targetPet=> targetPet.petOutfitName.toUpperCase().includes(filters.serchingProducts.toUpperCase()))).map((skin)=>(
            <CardTreatStock key={skin.petOutfitId} pet={skin}/>
        ))}
      
    </div>
  )
}
