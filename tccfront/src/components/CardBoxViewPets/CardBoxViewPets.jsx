import React, { useEffect } from 'react'
import CardShowTreat from '../../components/CardShowTreat/CardShowTreat.jsx'
import { UseModalHook } from '../../hooks/UseModalHook/UseModalHook.js'

export default function CardBoxViewPets({ treats, setTargetTrait }) {
    const { openModal } = UseModalHook()
    useEffect(() => {
        console.log(treats)
    }, [treats])
    return (
        <div className=' mx-auto grid lg:grid-cols-4 gap-y-4 place-items-center md:grid-cols-2 grid-cols-1  w-[85%] rounded-md'>
            {treats?.map(treat =>
                treat.outfits?.filter(tgSkin=> !tgSkin.petOutfitSkinMode.includes("PEXHAUSTED")).map((skin, index) => (
                    <div
                    className='cursor-pointer'
                        key={`${treat.petId}-${index}`}
                        onClick={() => {
                            openModal("CreateANewPet");
                            skin.petOutfitPackageSkin.includes("DEFAULT")?
                            setTargetTrait(treat)
                            :setTargetTrait(skin)
                        }}
                    >
                        <CardShowTreat treat={treat} index={index} />
                    </div>
                ))
            )}
        </div>
    )
}
