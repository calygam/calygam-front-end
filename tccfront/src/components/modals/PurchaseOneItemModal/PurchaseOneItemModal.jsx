import { easeInOut, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

//imagens
import groupMembers from '../../../assets/img/group-members.svg'
import closeX from '../../../assets/img/close-x.svg'
import { RegexEmail } from '../../../utils/RegexEmail/RegexEmail'
import { UseModalHook } from '../../../hooks/UseModalHook/UseModalHook'
import api from '../../../api/api'
import { UseLoading } from '../../../hooks/UseLoading/UseLoading'
import { UseDataProfile } from '../../../hooks/UseDataProfile/UseDataProfile'
import CardTreatStock from '../../EmporiumProductsComponents/CardTreatStock/CardTreatStock'
import { useCalygamEmporium } from '../../../hooks/useCalygamEmporium/useCalygamEmporium'

export default function PurchaseOneItemModal({ pet }) {
    const [hasAnimated, setHasAnimated] = useState(false)
    const { dataProfile, dataTeachers, searchDataTeachers, targetTeacher,searchDataProfile, setTargetTeacher } = UseDataProfile()
    const { loading, setLoading, setLoadingText } = UseLoading()
    const { closeModal } = UseModalHook()
    const { setPurchase,filters,setStockData, purchase,getStockInEmporium } = useCalygamEmporium()

    useEffect(()=>{
console.log("vindo de purchase")
console.log(pet)
    },[pet])


    const handleFinishPurchase = async () => {
         setLoading(true)
        try {
           
            setLoadingText(`Comprando o ${pet?.petName}`)
            const response = await api.post(`/emporium/purchase/obtain/item/${pet.petBoostMoney?pet.petId:pet.petOutfitId}/type/${pet.emporiumItemCatalogType}`)
            closeModal(`Você agora possuí um novo item`, "")
            console.log(response.data)
        
             searchDataProfile()
        }
        catch (e) {

            closeModal("", e?.response?.data)
        }
        finally {
            setLoading(false)
            setLoadingText("")
            searchDataProfile()
            getStockInEmporium(setLoading,setLoadingText,setStockData,filters.orderByMinMax)
            setPurchase('itemCapture', null)
            setPurchase("confirmQuestion", 0)
            getStockInEmporium(setLoading,setLoadingText,setStockData,filters.orderByMinMax)
             
        }
    }








    useEffect(() => {
        if (!hasAnimated) {
            setHasAnimated(true)
        }
    }, [hasAnimated])
    return (
        <motion.div className='w-full h-full font-poppins fixed inset-0 z-30 bg-calygam-purple-semi-bold/50 backdrop-blur-md flex justify-center items-center'
            initial={hasAnimated ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
               transition={{ type: 'tween',duration:0.7, ease:'easeInOut' }}>
            <motion.div
                initial={hasAnimated ? false : { scale: 0 }}
                animate={{ scale: 1 }}
                   transition={{ type: 'tween',duration:0.7, ease:'easeInOut' }}
                className='lg:w-[500px] md:w-[325px] w-[250px] rounded-md divide-y divide-gray-200 bg-white min-h-[150px] pb-4 '
            >
                <div className='w-full flex justify-between p-4 items-center'>
                    <div className='flex items-center justify-center gap-x-1'>
                        <img src={groupMembers} alt="membros" className='md:w-[25px] w-[15px]' />
                        <p className='text-black md:text-base text-xs font-medium'>{pet?.petId ? `Adiquirir - ${pet.petName}` : "batata"}</p>
                    </div>
                    <button className='flex outline-none justify-center items-center' onClick={() => {
                        setPurchase('itemCapture', null)
                        closeModal("", "")
                        setPurchase("confirmQuestion", 0)
                    }}>
                        <img src={closeX} alt="fechar" className='md:w-[20px] w-[15px] ' />
                    </button>

                </div>
                <div className='w-full flex flex-col items-center px-4 gap-y-2 my-1 py-2 pb-4'>

                    <CardTreatStock pet={pet} />
                </div>
                <div className='flex justify-around w-full flex-wrap gap-y-2 md:flex-nowrap gap-x-4 p-4 pb-0 items-center'>
                    <button className='py-2 px-4 bg-gradient-to-tr outline-none from-gray-200 via-gray-400 to-gray-500 text-black  flex justify-center border-b-4 h-[35px] hover:border-none hover:translate-y-1 transition-all ease-in-out border-gray-700/25 rounded-lg items-center' onClick={() => {
                        setPurchase('itemCapture', null)
                        closeModal("", "")
                        setPurchase("confirmQuestion", 0)
                    }}>Cancelar</button>
                    {purchase.confirmQuestion == 0 ?
                        <button className='py-2 px-4 bg-gradient-to-tr outline-none from-green-200 via-green-400 to-green-500 text-black  flex justify-center border-b-4 h-[35px] hover:border-none hover:translate-y-1 transition-all ease-in-out border-green-700/25 rounded-lg items-center' onClick={() => {
                            setPurchase("confirmQuestion", 1)
                        }}>Comprar</button>
                        : <motion.button className='py-2 px-4 bg-gradient-to-tr outline-none font-semibold from-green-400 via-green-600 to-green-800 text-black  flex justify-center border-b-4 h-[35px] hover:border-none hover:translate-y-1 transition-all ease-in-out border-green-700/25 rounded-lg items-center' onClick={() => {
                            handleFinishPurchase()
                            setPurchase("confirmQuestion", 0)

                        }}
                        initial={{rotateY:90,rotateX:100,scale:1.15}}
                        animate={{rotateX:0,rotateY:0,scale:1.00}}
                        transition={{type:'spring',stiffness:200}}
                        
                        >Confirma?</motion.button>}
                </div>



            </motion.div>

        </motion.div>
    )


}
