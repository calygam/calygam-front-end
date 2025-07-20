import React, { useState } from 'react';
import { motion } from 'framer-motion';

import closeX from '../../../assets/img/close-x.svg'
import { UseModalHook } from '../../../hooks/UseModalHook/UseModalHook';
import PetCalygamInput from '../../PetCalygamInput/PetCalygamInput';
import CalygamDropDown from '../../CalygamDropDown/CalygamDropDown';
import api from '../../../api/api';
import { UseLoading } from '../../../hooks/UseLoading/UseLoading';
import AddItemToEmporiumModal from '../AddItemToEmporiumModal/AddItemToEmporiumModal';

export default function CreateNewPetModal({ targetTreat }) {
  const [currentPage, setCurrentPage] = useState(!targetTreat ? 1 : 2);
  const [imagePreview, setImagePreview] = useState(null);
  const { loading, setLoading, setLoadingText } = UseLoading()
  const { closeModal } = UseModalHook()
  const [addToShop, setAddToShop] = useState(false)

  const EmotionOptions = [
    { value: 'EXHAUSTED', label: 'EXAUSTO' },
    { value: 'HAPPY', label: 'FELIZ' },

  ];


  //caio<- carcaça
  const [petName, setPetName] = useState(targetTreat ? targetTreat.petName : "")
  const [petBoostMoney, setPetBoostMoney] = useState(null)
  const [petBoostXp, setPetBoostXp] = useState(null)
  const [petBoostFood, setPetBoostFood] = useState(null)
  const [petMinEnergy, setPetMinEnergy] = useState(null)
  const [petDefaultEnergy, setPetDefaultEnergy] = useState(null)
  const [petMaxEnergy, setPetMaxEnergy] = useState(null)
  const [selectedNotHeadOption, setSelectedNotHeadOption] = useState({});

  //caio<- estado emocional da skin padrão - SEM SABER QUEM É O CORPO -estratégia
  const [emotionPetNotHeadToggle, setEmotionPetNotHeadToggle] = useState(false);

  const CollectNotHeadEmotionOptions = option => {
    setSelectedNotHeadOption(option);
    setEmotionPetNotHeadToggle(false);
  };

  //caio<- agora definindo a carcaça sabendo quem é a cabeça
  const [petOutfitName, setPetOutfitName] = useState("")
  const [imageFile, setImageFile] = useState(null);
  const [petBoostOutfitMoney, setPetBoostOutfitMoney] = useState(null)
  const [petBoostOutfitXp, setPetBoostOutfitXp] = useState(null)
  const [petBoostOutfitFood, setPetBoostOutfitFood] = useState(null)
  const [emotionPetHeadToggle, setEmotionPetHeadToggle] = useState(false);
  const [selectedHeadOption, setSelectedHeadOption] = useState({});
  const [petOutfitPackageSkin, setPetOutfitPackageSkin] = useState("")

  //caio<-Definindo necessario para mandar o item para a loja
  const [selectedTypeItem, setSelectedTypeItem] = useState({});

  const CollectHeadEmotionOptions = option => {
    setSelectedHeadOption(option);
    setEmotionPetHeadToggle(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 400 * 1024) {
        closeModal("", "imagem muito grande")
        return;
      }
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const goToNextPage = () => setCurrentPage((prev) => prev + 1);
  const goToPreviousPage = () => setCurrentPage((prev) => prev - 1);

  const CreateANewPet = async () => {
    try {
      setLoading(true)
      setLoadingText("Criando novo companheiro...")
      const formDataPost = new FormData()
      //Pet sem a cabeça
      formDataPost.append("petName", petName)
      formDataPost.append("petBoostMoney", petBoostMoney)
      formDataPost.append("petBoostXp", petBoostXp)
      formDataPost.append("petBoostFood", petBoostFood)
      formDataPost.append("petMinEnergy", petMinEnergy)
      formDataPost.append("petDefaultEnergy", petDefaultEnergy)
      formDataPost.append("petMaxEnergy", petMaxEnergy)
      formDataPost.append("petStatusEnergy", selectedNotHeadOption?.value)
      formDataPost.append("petOutfitName", petOutfitName)
      formDataPost.append("petOutfitImage", imageFile)
      formDataPost.append("petPlusMoney", petBoostOutfitMoney)
      formDataPost.append("petPlusXp", petBoostOutfitXp)
      formDataPost.append("petPlusFood", petBoostOutfitFood)
      formDataPost.append("petOutfitMode", selectedHeadOption?.value)
      formDataPost.append("petOutfitPackageSkin", petOutfitPackageSkin)

      await api.post("/pet/admin/creating", formDataPost)
    } catch (e) {
      console.log(e)
    }
    finally {
      setLoading(false)
      setLoadingText("")
    }
  }

  const CreateMoreSkins = async () => {

    try {
      setLoading(true)
      setLoadingText("Criando nova skin...")
      const formDataPut = new FormData()
      formDataPut.append("petOutfitName", petOutfitName)
      formDataPut.append("petOutfitImage", imageFile)
      formDataPut.append("petPlusMoney", petBoostOutfitMoney)
      formDataPut.append("petPlusXp", petBoostOutfitXp)
      formDataPut.append("petPlusFood", petBoostOutfitFood)
      formDataPut.append("petOutfitMode", selectedHeadOption?.value)
      formDataPut.append("petOutfitPackageSkin", petOutfitPackageSkin)
      await api.put(`/pet/admin/creating/new/skin/${targetTreat.petId}`, formDataPut)
    } catch (e) {
      console.log(e)
    }
    finally {
      setLoading(false)
      setLoadingText("")
    }

  }

  return (
    <motion.div
      className="fixed inset-0 z-30 bg-calygam-purple-semi-bold/45 backdrop-blur-lg flex custom-scrollbar justify-center items-start overflow-y-auto pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {!addToShop ?
        <motion.div
          key={currentPage}
          initial={{ scale: 0, rotateX: -50, rotateY: 35 }}
          animate={{ scale: 1, rotateX: 0, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: 'spring', stiffness: 250, mass: 1 }}
          className="bg-white rounded-md shadow-md p-6 w-[90%] max-w-md"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Criar Novo Pet</h2>
            <button onClick={() => closeModal("", "")} className="text-gray-500 hover:text-black text-xl">     <img src={closeX} alt="fechar" className='md:w-[20px] w-[15px] ' /></button>
          </div>

          {currentPage === 1 && !targetTreat && (
            <div className="space-y-4 flex flex-col divide-y">
              <p className="text-sm text-gray-700/50">Definir a carcaça do pet</p>
              <PetCalygamInput inputId={"input-for-name"} inputValue={petName} inputSetValue={setPetName} inputPlaceholder={"gato pufo"} inputLabel={"nome do pet"} />
              <PetCalygamInput inputId={"input-for-boost-money"} inputValue={petBoostMoney} inputSetValue={setPetBoostMoney} inputPlaceholder={"Boost de coins"} inputLabel={"Boost Coins"} inputType={"number"} />
              <PetCalygamInput inputId={"input-for-boost-xp"} inputValue={petBoostXp} inputSetValue={setPetBoostXp} inputPlaceholder={"Boost de xp"} inputLabel={"Boost em xp"} inputType={"number"} />
              <PetCalygamInput inputId={"input-for-boost-food"} inputValue={petBoostFood} inputSetValue={setPetBoostFood} inputPlaceholder={"Boost de comida"} inputLabel={"Boost em comida"} inputType={"number"} />
              <PetCalygamInput inputId={"input-for-min-energy"} inputValue={petMinEnergy} inputSetValue={setPetMinEnergy} inputPlaceholder={"25"} inputLabel={"minimo energia"} inputType={"number"} />
              <PetCalygamInput inputId={"input-for-default-energy"} inputValue={petDefaultEnergy} inputSetValue={setPetDefaultEnergy} inputPlaceholder={"25"} inputLabel={"energia padrão"} inputType={"number"} />
              <PetCalygamInput inputId={"input-for-max-energy"} inputValue={petMaxEnergy} inputSetValue={setPetMaxEnergy} inputPlaceholder={"25"} inputLabel={"máximo de energia"} inputType={"number"} />
              <CalygamDropDown
                toggle={emotionPetNotHeadToggle}
                setToggle={setEmotionPetNotHeadToggle}
                options={EmotionOptions}
                selectedOption={selectedNotHeadOption}
                Options={CollectNotHeadEmotionOptions}
                SelectOneOption={'Selecione a Emoção'}

              />

              <button
                onClick={goToNextPage}
                className="w-full py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
              >
                avançar
              </button>
            </div>
          )}

          {currentPage === 2 && (
            <div className="space-y-4">
              <PetCalygamInput inputId={"input-for-outfit-name"} inputValue={petOutfitName} inputSetValue={setPetOutfitName} inputPlaceholder={"pufo dorme"} inputLabel={"nome da skin"} />

              <label htmlFor="petImage" className="flex flex-col items-center gap-2">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Pré-visualização"
                    className="w-32 h-32 object-cover rounded-full border"
                  />
                ) : (
                  <div className="w-32 h-32 flex items-center justify-center border border-dashed rounded-md transition-all text-gray-400">
                    Sem imagem
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  id="petImage"
                  name='petImage'
                  onChange={handleImageUpload}
                  className="text-sm hidden"
                />
                <p className="text-xs text-gray-500">Tamanho máximo: 400kb</p>
              </label>
              <PetCalygamInput inputId={"input-for-oufit-boost-money"} inputValue={petBoostOutfitMoney} inputSetValue={setPetBoostOutfitMoney} inputPlaceholder={"123"} inputLabel={"Boost somatico de coins (skin)"} inputType={"number"} />
              <PetCalygamInput inputId={"input-for-oufit-boost-xp"} inputValue={petBoostOutfitXp} inputSetValue={setPetBoostOutfitXp} inputPlaceholder={"123"} inputLabel={"Boost somatico de xp (skin)"} inputType={"number"} />
              <PetCalygamInput inputId={"input-for-oufit-boost-food"} inputValue={petBoostOutfitFood} inputSetValue={setPetBoostOutfitFood} inputPlaceholder={"123"} inputLabel={"Boost somatico de comida (skin)"} inputType={"number"} />
              <CalygamDropDown
                toggle={emotionPetHeadToggle}
                setToggle={setEmotionPetHeadToggle}
                options={EmotionOptions}
                selectedOption={selectedHeadOption}
                Options={CollectHeadEmotionOptions}
                SelectOneOption={'Selecione a Emoção da skin'}

              />
              <PetCalygamInput inputId={"input-for-oufit-package-skin"} inputValue={petOutfitPackageSkin} inputSetValue={setPetOutfitPackageSkin} inputPlaceholder={"nome do pacote"} inputLabel={"pacote de skin"} />
              <button
                onClick={targetTreat ? CreateMoreSkins : CreateANewPet}
                className="w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"

              >
                Criar
              </button>

              <button
                onClick={goToPreviousPage}
                className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"

              >
                voltar
              </button>
              <button className='py-2 px-4  bg-purple-500 rounded-md border-b-4 border-calygam-purple-medium-light/50 hover:translate-y-1 transition-all    hover:border-0 text-white font-poppins outline-none' onClick={() => setAddToShop(true)}>Abrir</button>
            </div>
          )}






        </motion.div>
        : <AddItemToEmporiumModal itemId={targetTreat?.petId?targetTreat?.petId:targetTreat.petOutfitId} />}
    </motion.div>
  );
}
