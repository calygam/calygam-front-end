import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useAddToEmporiumForm } from '../../../utils/FormsReducers/AddToEmporiumReducerUtil/UseAddToEmporiumForm.js';
import closeX from '../../../assets/img/close-x.svg'
import { UseLoading } from '../../../hooks/UseLoading/UseLoading';
import { UseModalHook } from '../../../hooks/UseModalHook/UseModalHook';
import PetCalygamInput from '../../PetCalygamInput/PetCalygamInput';
import CalygamDropDown from '../../CalygamDropDown/CalygamDropDown';
import api from '../../../api/api';
export default function AddItemToEmporiumModal({ itemId }) {
    const { state, emporiumUpdateField, emporiumResetForm } = useAddToEmporiumForm()
    const { loading, setLoading, setLoadingText } = UseLoading()

    const { closeModal } = UseModalHook()
    const [typeItemToggle, setTypeItemToggle] = useState(false)
    const [rankRequiredToggle, setRankRequiredToggle] = useState(false)
    const [haveStockToggle, setHaveStockToggle] = useState(false)


    const AddItemToEmporiumSubmit = async () => {

        try {
            setLoading(true)
            setLoadingText("Criando nova skin...")

            await api.post(`/emporium/add/item`, {
                emporiumItemId: state.emporiumItemId,
                emporiumItemCatalogType: state.emporiumItemCatalogType.value,
                emporiumItemGoldCost: state.emporiumItemGoldCost,
                emporiumItemRankRequired: state.emporiumItemRankRequired.value,
                emporiumItemSelling: state.emporiumItemSelling.value,
                emporiumItemQtd: state.emporiumItemQtd
            })
        } catch (e) {
            closeModal("","eroo")
        }
        finally {
            setLoading(false)
            setLoadingText("")
            closeModal("","")
        }

    }


    //Options
    const ItemShopOptions = [
        { value: 'PET', label: 'PET' },
        { value: 'SKIN', label: 'SKIN' },
        { value: 'THEME', label: 'TEMA' },


    ];
    const StockOptions = [
        { value: 'false', label: 'NÃO DEVE ESTAR' },
        { value: 'true', label: 'VENDER AGORA' },



    ];
    const RankOptions = [
        { value: 'BRONZEI', label: 'BRONZE-I' },
        { value: 'BRONZEII', label: 'BRONZE-II' },
        { value: 'BRONZEIII', label: 'BRONZE-III' },

        { value: 'SILVERI', label: 'SILVER-I' },
        { value: 'SILVERII', label: 'SILVER-II' },
        { value: 'SILVERIII', label: 'SILVER-III' },

        { value: 'GOLDI', label: 'GOLD-I' },
        { value: 'GOLDII', label: 'GOLD-II' },
        { value: 'GOLDIII', label: 'GOLD-III' },

        { value: 'PLATINUMI', label: 'PLATINUM-I' },
        { value: 'PLATINUMII', label: 'PLATINUM-II' },
        { value: 'PLATINUMIII', label: 'PLATINUM-III' },

        { value: 'DIAMOND', label: 'DIAMOND-I' },
        { value: 'DIAMONDII', label: 'DIAMOND-II' },
        { value: 'DIAMONDIII', label: 'DIAMOND-III' },

        { value: 'ASCENDENT', label: 'ASCENDENT-I' },
        { value: 'ASCENDENTII', label: 'ASCENDENT-II' },
        { value: 'ASCENDENTIII', label: 'ASCENDENT-III' }
    ];

    const CollectEmporiumItemCatalogType = (option) => {
        emporiumUpdateField("emporiumItemCatalogType", option);
        setTypeItemToggle(false);
    };
    const CollectRankRequiredOption = (option) => {
        emporiumUpdateField("emporiumItemRankRequired", option);
        setRankRequiredToggle(false);
    }
    const CollectHaveStock = (option) => {
        emporiumUpdateField("emporiumItemSelling", option);
        setHaveStockToggle(false);
    }






    useEffect(() => {
        console.log(itemId)
        emporiumUpdateField("emporiumItemId", itemId)
        emporiumUpdateField("emporiumItemQtd", -1)
    }, [itemId])
    


    return (

        <motion.div
            key={"a"}
            initial={{ scale: 0, rotateX: -50, rotateY: 35 }}
            animate={{ scale: 1, rotateX: 0, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0 }}
       transition={{ type: 'tween',duration:0.7, ease:'easeInOut' }}
            className="bg-white rounded-md shadow-md p-6 w-[90%] max-w-md"
        >
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Adicionar Item - Empório</h2>
                <button onClick={() => closeModal("", "")} className="text-gray-500 hover:text-black text-xl">     <img src={closeX} alt="fechar" className='md:w-[20px] w-[15px] ' /></button>
            </div>
            <div className="space-y-4 flex flex-col divide-y">
                <p className="text-sm text-gray-700/50">item novo</p>
                <PetCalygamInput inputId={"input-for-item-id"} inputValue={state.emporiumItemId} inputSetValue={(value) => emporiumUpdateField("emporiumItemId", value)} inputPlaceholder={"id do item"} inputLabel={"id"} inputType='number' />
                <CalygamDropDown
                    toggle={typeItemToggle}
                    setToggle={setTypeItemToggle}
                    options={ItemShopOptions}
                    selectedOption={state.emporiumItemCatalogType}
                    Options={CollectEmporiumItemCatalogType}
                    SelectOneOption={'Selecione o tipo'}

                />
                <PetCalygamInput inputId={"input-for-item-cost"} inputValue={state.emporiumItemGoldCost} inputSetValue={(value) => emporiumUpdateField("emporiumItemGoldCost", value)} inputPlaceholder={"preço em coins"} inputLabel={"preço do item"} inputType='number' />
                <CalygamDropDown
                    toggle={rankRequiredToggle}
                    setToggle={setRankRequiredToggle}
                    options={RankOptions}
                    selectedOption={state.emporiumItemRankRequired}
                    Options={CollectRankRequiredOption}
                    SelectOneOption={'Selecione o rank necessario'}

                />
                <CalygamDropDown
                    toggle={haveStockToggle}
                    setToggle={setHaveStockToggle}
                    options={StockOptions}
                    selectedOption={state.emporiumItemSelling}
                    Options={CollectHaveStock}
                    SelectOneOption={'Selecione se deseja vender'}

                />

                <PetCalygamInput inputId={"input-for-item-qtd"} inputValue={state.emporiumItemQtd} inputSetValue={(value) => emporiumUpdateField("emporiumItemQtd", value)} inputPlaceholder={"quantidade do item"} inputLabel={"quantidade"} inputType='number' />


                <button
                type='button'
                    onClick={AddItemToEmporiumSubmit}
                    className="w-full py-2 outline-none bg-purple-600 text-white rounded hover:bg-purple-700 transition"

                >
                    Criar
                </button>


            </div>
        </motion.div>
    )
}
