import { motion } from 'framer-motion'
import React, { useEffect, useMemo, useState } from 'react'


import groupMembers from '../../../assets/img/group-members.svg'
import closeX from '../../../assets/img/close-x.svg'
import { RegexEmail } from '../../../utils/RegexEmail/RegexEmail'
import { UseModalHook } from '../../../hooks/UseModalHook/UseModalHook'
import api from '../../../api/api'
import { UseLoading } from '../../../hooks/UseLoading/UseLoading'
import { UseDataProfile } from '../../../hooks/UseDataProfile/UseDataProfile'
import { useNavigate } from 'react-router-dom'
import { UseProgressHook } from '../../../hooks/UseProgressHook/UseProgressHook'
import { UseDataActivitiesPerTrailIdHook } from '../../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook'


import CalygamDropDown from '../../../components/CalygamDropDown/CalygamDropDown.jsx';
import PublishTrail from '../../../components/PublishTrail/PublishTrail.jsx'
import { goToNextForm } from '../../../utils/goToNextForm/goToNextForm';
import { handleInputModify } from '../../../utils/handleInputModify/handleInputModify';
import { goToFormBack } from '../../../utils/goToFormBack/goToFormBack';
import { FormClenup } from '../../../utils/FormCleanup/FormClenup';
import broomClenup from '../../../assets/img/broom-clean.png';
import toSend from '../../../assets/img/to-send-trail.png';
import toback from '../../../assets/img/go-to-back.png';

import { UseReadAllTrailsHook } from '../../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook.js';
import { FormatCoins } from '../../../utils/FormatCoins/FormatCoins.js';
import { AuxiliaryLibraryResponse } from '../../../utils/AuxiliaryLibraryResponse/AuxiliaryLibraryResponse.js';

//imagens
import eyeOpen from '../../../assets/img/eye-pass-open.png'
import eyeClose from '../../../assets/img/eye-pass-close.png'
import trailIndicatorCreator from '../../../assets/img/trail-indicator-creating.svg'
import { HandleEnterInTrail } from '../../../utils/HandleEnterInTrail/HandleEnterInTrail.js'
import { generateRandomSecureCode } from '../../../utils/generateRandomSecureCode.js'
import PlaceImageSymbol from '../../../assets/img/place-image-symbol.svg'

export default function CreateNewJourneyModal() {
  const [hasAnimated, setHasAnimated] = useState(false)
  const { dataProfile, searchDataProfile } = UseDataProfile()
  const { submissionBaggage, ListenerOfDowloadableArchivesSubmited } = UseProgressHook()
  const { loading, setLoading, setLoadingText } = UseLoading()
  const [withPassword,setWithPassword] = useState(true)
  const [randomPassword, setRandomPassword] = useState("")
  const { closeModal } = UseModalHook()
  const [step, setStep] = useState(0);


  const { setTrailId } = UseDataActivitiesPerTrailIdHook()
  // const {setTrailId} = UseDataActivitiesPerTrailIdHook()


  const { setProgressTrailId } = UseProgressHook()



  const navigate = useNavigate()





  const { trails, targetTrailId, setTargetTrailId, searchtrails } = UseReadAllTrailsHook();
  const [formErrors, setFormErrors] = useState(targetTrailId ? false : { trailName: "vazio" });

  const [eyeIsOpen, setEyeIsOpen] = useState(false)
  const [isPublish, setIsPublish] = useState(false)

  const [imagePreview, setImagePreview] = useState(null);
  const targetTrail = trails.find(oneTrail => oneTrail.trailId === targetTrailId);



  const [selectedDifficultyOption, setSelectedDifficultyOption] = useState('');
  const [codeTarget, setCodeTarget] = useState("")
  const savedForm = localStorage.getItem('trailInProgress');
  const initialForm = savedForm ? JSON.parse(savedForm) : {
    trailName: '',
    trailDescription: '',
    trailVacancy: '0',
    trailPassword: '',
    trailImage: '',
    activities: [],
  };
  const [form, setForm] = useState(initialForm);

  const [detectedFormCorrectlyValues, setDetectedFormCorrectlyValues] = useState(false)


  const normalModalOnly =
    'lg:w-[75%] md:w-[95%] px-2 py-6 font-poppins flex flex-col items-center bg-calygam-semi-light-red rounded-2xl';
  const scrollableBackground =
    `fixed ${isPublish ? "overflow-hidden" : "overflow-y-auto"} pb-48 custom-scrollbar z-20 inset-0 bg-black/75 w-full flex flex-col-reverse justify-center items-center`;

  const isFormValid = useMemo(() => {
    console.log(formErrors.trailName)
    const abc = form?.trailName &&
      form?.trailDescription &&
      form?.trailVacancy > 0 &&
      form?.trailVacancy < 1000
    if (!targetTrailId) {
      return abc;
    } else {
      return (
        form?.trailName &&
        form?.trailDescription &&
        form?.trailVacancy > 0 &&
        form?.trailVacancy < 1000
      );
    }
  }, [form, formErrors]);

  const isFormValidSecondTier = useMemo(() => {
    console.log(formErrors.trailName)
    const abcTwo =
      form.activities[step - 1]?.activityName?.length > 0 &&
        form.activities[step - 1]?.activityDescription?.length > 0 &&

        targetTrailId ? form.activities[step - 1]?.activityName?.length > 0 && form.activities[step - 1]?.activityDescription?.length > 0 ? true : form.activities[step - 1]?.activityDifficulty?.length > 0 : form.activities[step - 1]?.activityDifficulty?.length > 0

    return abcTwo;

  }, [form, formErrors, step]);

  const clenupFormAndCloseModal = () => {
    closeModal("", "")
    setTargetTrailId(0)
    setStep(0)
    if (targetTrailId > 0) {
      setForm({
        trailName: "",
        trailDescription: "",
        trailVacancy: "0",
        trailImage: "",
        activities: [],
      });
      setImagePreview("")
    }
  }

  const isValidActivity = useMemo(() => {
    if (!targetTrailId) {
      return (
        form?.activities[step - 1]?.activityName &&
        form?.activities[step - 1]?.activityDescription &&
        form?.activities[step - 1]?.activityDifficulty

      );
    }

  }, [form, formErrors]);



  useEffect(() => {
    if (targetTrailId > 0 && targetTrail) {
      console.log(targetTrail.activities)
      setForm({

        trailName: targetTrail.trailName,
        trailDescription: targetTrail.trailDescription,
        trailVacancy: String(targetTrail.trailVacancies),
        trailPassword: '',
        trailImage: '',
        activities: targetTrail.activities
          ? targetTrail.activities.map(activity => ({
            activityId: activity.activityId,
            activityName: activity.activityName || '',
            activityDescription: activity.activityDescription || '',

            activityDifficulty: activity?.activityDifficulty || 'EASY',
          }))
          : [],
      });
      setImagePreview(targetTrail.trailImage);
    } else {
      const saved = localStorage.getItem('trailInProgress');
      if (saved) {
        setForm({ ...JSON.parse(saved), trailImage: '' });
      }
    }
  }, [targetTrailId, targetTrail]);

  useEffect(() => {
    if (!targetTrailId) {
      localStorage.setItem('trailInProgress', JSON.stringify({
        ...form,
        trailPassword: ""
      }));
    }
  }, [form, targetTrailId]);
  const [difficultyToggle, setDifficultyToggle] = useState(false);
  const DifficultyOpitions = [
    { value: 'EASY', label: 'FÁCIL' },
    { value: 'MEDIUM', label: 'MÉDIO' },
    { value: 'HARD', label: 'DÍFICIL' },
    { value: 'BOSS', label: 'CHEFE' },
  ];

  const CollectDifficultyOptions = option => {
    setSelectedDifficultyOption(option);
    setDifficultyToggle(false);
    const updatedActivities = [...form.activities];
    updatedActivities[step - 1] = {
      ...updatedActivities[step - 1],
      activityDifficulty: option.value,
    };
    setForm(prev => ({ ...prev, activities: updatedActivities }));
  };

  useEffect(() => {
    if (step > 0) {
      const currentActivity = form.activities[step - 1] || {};
      setSelectedDifficultyOption(
        currentActivity.activityDifficulty
          ? DifficultyOpitions.find(opt => opt.value === currentActivity.activityDifficulty)
          : ''
      );
    }
  }, [step, form.activities]);

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('trailName', form.trailName?.trim());
    formData.append('trailDescription', form.trailDescription?.trim());

    if (form.trailImage) formData.append('trailFileImage', form.trailImage);
    formData.append('trailPassword', isPublish ? "" : randomPassword?.trim());
    formData.append('trailVacancies', Number(form.trailVacancy));
    form.activities.forEach((activity, index) => {
      if (activity.activityId) {
        formData.append(`activities[${index}].activityId`, String(activity.activityId));
      }
      formData.append(`activities[${index}].activityName`, activity.activityName.trim() || '');
      formData.append(`activities[${index}].activityDescription`, activity.activityDescription.trim() || '');
      const rawActPts = String(activity.activityPoints).replace(/[.,]/g, '');
      const intValue = parseInt(rawActPts);
      const validValue = isNaN(intValue) ? 0 : intValue;

      formData.append(`activities[${index}].activityDifficulty`, activity.activityDifficulty || 'EASY');
    });
    formData.append('calygamCode', codeTarget)
    console.log('FormData enviado:', [...formData.entries()]);
    try {
      setLoading(true);
      setLoadingText(targetTrailId ? 'Completando edição...' : 'Criando a trilha...');
      if (targetTrailId) {
        if (isPublish) {
          setTrailId(targetTrail.trailId)

          setTargetTrailId(targetTrail.trailId)
          setProgressTrailId(targetTrail.trailId)

        }
        await api.put(`trail/update/${targetTrail.trailId}`, formData);
        closeModal("Trilha atualizada com sucesso!", "")
        FormClenup(setForm, setImagePreview, setStep)

      } else {
        await api.post('trail/create', formData);
        closeModal("Trilha criada com sucesso!", "")
        FormClenup(setForm, setImagePreview, setStep)
      }
      FormClenup(setForm, setImagePreview, setStep);
    } catch (error) {
      console.error('Erro ao salvar trilha:', error.response?.data || error.message);
      closeModal("", error.response.data)
    } finally {
      setLoading(false);
      setIsPublish(false)
      setTargetTrailId(0);
      searchtrails()

    }
  };

  useEffect(() => {
    if(withPassword){
    generateRandomSecureCode(setLoading, setLoadingText)
      .then(password => setRandomPassword(password))
      .catch(console.error)
    }else{
      setRandomPassword('')
    }


  }, [withPassword])

  if (isPublish) {
    return (<PublishTrail setIsPublish={setIsPublish} trailPassword={targetTrail.trailPassword} isPublish={isPublish} trailName={targetTrail.trailName} setTrailCode={setCodeTarget} trailCode={codeTarget} handleUpdate={submitForm} trailId={targetTrail.trailId} searchTrails={searchtrails} />)
  } else {

    return (

      <motion.div className={`w-full  font-poppins    fixed inset-0 z-30 ${isPublish ? "overflow-hidden" : "overflow-y-auto"} bg-calygam-purple-semi-bold/50 pb-2 custom-scrollbar backdrop-blur-md flex justify-center  items-start`}
        key={step}
        initial={hasAnimated ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}

        exit={{ opacity: 0 }}
        transition={{ type: 'tween', duration: 0.7, ease: 'easeInOut' }}>
        <motion.div
          key={step}
          initial={hasAnimated ? false : { scale: 0, rotateX: -50, rotateY: 35 }}
          exit={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, rotateX: 0, rotateY: 0 }}
          transition={{ type: 'tween', duration: 0.7, ease: 'easeInOut' }}
          className='lg:w-[600px] md:w-[425px] w-[300px] bg-white pb-4 mt-4 rounded-md divide-y divide-gray-200 pb-4mt-16 mb-8'
        >
          <div className='w-full flex justify-between p-4 items-center'>
            <div className='flex items-center justify-center gap-x-2'>
              <span className='p-2 rounded-md border border-gray-400'>
                <img src={trailIndicatorCreator} alt="" className='w-[25px] h-[25px]' />
              </span>
              <p className='text-black md:text-base text-xs font-medium'>{step === 0 ? targetTrailId > 0 ? "Editando Trilha" : 'Criar nova Trilha' : `Atividade - ${step <= 9 ? '0' + step : step}`}</p>
            </div>
            <button className='flex outline-none justify-center items-center' onClick={() => clenupFormAndCloseModal()}>
              <img src={closeX} alt="fechar" className='md:w-[20px] w-[15px] ' />
            </button>

          </div>
          {step === 0 ? (
            <div className="flex flex-col items px-4  ">
              <div className="flex items-center gap-x-4  my-2 justify-between">
                <label className="text-gray-700 text-nowrap  font-medium text-xs " htmlFor="nameTrail">
                  Nome Da Trilha
                </label>
                <input
                  name="trailName"
                  id="nameTrail"
                  placeholder="Ex.Figma"
                  value={form.trailName}
                  onChange={e => handleInputModify(e, step, setForm, form, setImagePreview, setFormErrors)}
                  required
                  autoComplete='off'
                  className="w-[65%]  border rounded-md   p-3 focus:outline-none  outline-none "
                />
              </div>

              <div className="flex flex-col">
                {!targetTrailId &&
                  <div className='flex w-full items-center justify-between'>
                    <label className="text-gray-700 text-nowrap  font-semibold text-xs " htmlFor="passwordTrail">
                      Senha da Trilha
                    </label>
                    <div className='flex w-[45%]  gap-2  self-end flex-col'>
                      <div className='flex gap-2 '>
                        <div className=" border rounded-md md:mx-0  mb-2 flex justify-end w-full    focus:outline-none  outline-none ">
                          {withPassword&&
                          <>
                          <input
                            type={eyeIsOpen ? "text" : "password"}
                            name="trailPassword"
                            id="passwordTrail"
                            placeholder="senha"
                            value={withPassword?randomPassword:""}
                            disabled={true}

                            // onChange={e => handleInputModify(e, step, setForm, form, setImagePreview, setFormErrors)}
                            required
                            className="  focus:outline-none  w-full   pl-2 py-3 bg-transparent outline-none border-none"
                          />

                          <button type='button' className='bg-white pr-2  outline-none rounded-r-lg' onClick={() => setEyeIsOpen(!eyeIsOpen)}>
                            <img src={eyeIsOpen ? eyeOpen : eyeClose} alt="" className='w-[25px]  outline-none object-cover ' />
                          </button></>}

                        </div>
                        <button type='button' className='font-poppins pr-2  outline-none rounded-r-lg' onClick={() => setWithPassword(!withPassword)}>
                          {withPassword?"-":"+"}
                        </button>
                      </div>
                      {/* {formErrors && <p className='text-red-500 transition-all ease-in-out duration-1000 text-[10px] my-2 font-bold  rounded-md'>{formErrors.trailPassword ? "*" + formErrors.trailPassword : ""}</p>} */}
                    </div>

                  </div>}


              </div>
              <span className='w-full h-[2px] rounded-full bg-gray-200 flex mb-2 '></span>

              <div className="w-full flex flex-wrap md:flex-nowrap gap-x-4 justify-center md:justify-between items-center my-2">
                <label htmlFor="imageTrail" id="image-label-title" className="self-start my-2 text-xs text-gray-700 font-semibold cursor-pointer">
                  Inserir imagem
                </label>
                <div className="w-[65%] flex justify-between">
                  <span className="w-[40px] h-[40px] hidden  bg-gray-400/20 opacity-70 p-1 md:flex rounded-full">
                    <img src={PlaceImageSymbol} alt="" />
                  </span>
                  <div className="flex-col md:w-[75%] w-full items-center text-center">
                    <label
                      id="image-label-main"
                      htmlFor="imageTrail"
                      className={`w-full border-2 cursor-pointer transition-all group overflow-hidden text-xs ease-in-out duration-1000 text-wrap border-gray-400/50 rounded-md bg-transparent flex justify-center items-center text-gray-800 font-medium text-center
        ${imagePreview ? "p-0" : "p-4 min-h-[150px]"}`}
                    >
                      {imagePreview ? (
                        <img src={imagePreview} alt="Pré-visualização" className="w-full max-h-[300px] group-hover:scale-[1.15] transition-all object-cover " />
                      ) : (
                        "Toque ou clique para selecionar uma imagem - Limite de 1MB"
                      )}
                    </label>
                    <p id="image-desc" className="text-gray-600 text-xs font-bold my-2">Imagem (Max: 1MB)</p>
                  </div>
                </div>
                <input
                  type="file"
                  name="trailImage"
                  id="imageTrail"
                  onChange={e => handleInputModify(e, step, setForm, form, setImagePreview, setFormErrors)}
                  accept="image/*"
                  className="hidden"
                  aria-labelledby="image-label-title image-label-main"
                  aria-describedby="image-desc"
                />
              </div>
              <span className='w-full h-[2px] rounded-full bg-gray-200 flex mb-2 '></span>
              <div className="w-full flex flex-wrap  justify-center gap-x-2 my-2 md:justify-between">


                <div className='w-full flex items-start justify-between'>
                  <label className="text-gray-700 font-semibold text-xs mt-2" htmlFor="descriptionTrail">
                    Descrição
                  </label>
                  <textarea
                    name="trailDescription"
                    id="descriptionTrail"
                    placeholder="Ex: Essa trilha é de Java!"
                    value={form.trailDescription}
                    onChange={e => handleInputModify(e, step, setForm, form, setImagePreview)}
                    required
                    className="w-[65%]  p-3 border rounded-md focus:outline-none outline-none resize-none overflow-y-auto text-sm leading-relaxed"
                    style={{
                      resize: 'none',
                      height: '100px',
                      maxHeight: '150px',
                      minHeight: '100px'
                    }}
                  />
                </div>


              </div>
              <div className="flex justify-between mb-2 items-center">
                <label className="text-gray-700 text-xs  font-semibold" htmlFor="vacancyTrail">
                  vagas da Trilha
                </label>
                <input
                  type="number"
                  name="trailVacancy"
                  id="vacancyTrail"
                  placeholder="vagas"
                  value={form.trailVacancy}
                  onChange={e => handleInputModify(e, step, setForm, form, setImagePreview)}
                  required
                  className="border w-[45%]  rounded-md p-3 focus:outline-none  outline-none "
                />
              </div>

            </div>
          ) : (

            <div className="flex flex-col items px-4  ">
              <div className="flex items-center gap-x-4  my-2 justify-between">
                <label className="text-gray-700 text-nowrap  font-medium text-xs " htmlFor="activityName">
                  Nome da atividade
                </label>
                <input
                  name="activityName"
                  id='activityName'
                  placeholder="Ex. Lógica de Programação"
                  value={form.activities[step - 1]?.activityName || ''}
                  onChange={e => handleInputModify(e, step, setForm, form, setImagePreview)}
                  required
                  autoComplete='off'
                  className="w-[65%]  border rounded-md   p-3 focus:outline-none  outline-none "
                />
              </div>
              <div className="flex items-center gap-x-4  my-2  justify-between ">
                <label className="text-gray-700 font-semibold text-xs mt-2" htmlFor="activityDescription">
                  Descrição
                </label>
                <textarea
                  name="activityDescription"
                  id='activityDescription'
                  placeholder="Activity Description"
                  value={form.activities[step - 1]?.activityDescription || ''}
                  onChange={e => handleInputModify(e, step, setForm, form, setImagePreview)}
                  required
                  className="w-[65%]  p-3 border rounded-md focus:outline-none outline-none resize-none overflow-y-auto text-sm leading-relaxed"
                  style={{
                    resize: 'none',
                    height: '100px',
                    maxHeight: '150px',
                    minHeight: '100px'
                  }}
                />
              </div>

              <CalygamDropDown
                toggle={difficultyToggle}
                setToggle={setDifficultyToggle}
                options={DifficultyOpitions}
                selectedOption={selectedDifficultyOption}
                Options={CollectDifficultyOptions}
                SelectOneOption={'Selecione a Dificuldade'}
              />
            </div>
          )}



          <div className={`flex  w-full flex-wrap gap-y-2 md:flex-nowrap ${step === 0 ? "gap-x-4 justify-end" : "gap-x-0"}  p-4 pb-0 items-center`}>
            {step === 0 && (
              <>
                <div className='gap-x-1 flex items-center'>
                  {form?.activities.length > 1 &&
                    <button type='button' disabled={!(isFormValid) || !imagePreview} className={`outline-none py-2 h-[45px] px-4 ${!(isFormValid) || !imagePreview ? "bg-purple-700/25 cursor-not-allowed text-white/45 border-none" : "bg-purple-500 border-purple-600"} border-b-4 hover:translate-y-[2px] transition-all   rounded-md text-white  text-black/35 hover:border-b-0`} onClick={() => setStep(form?.activities.length)}>{"Ultima atividade"}</button>
                  }
                  {isFormValid && imagePreview &&
                    <button type='button' className={`outline-none h-[45px]  py-2 px-4 ${!(isFormValid) || !imagePreview ? "bg-purple-700/25 cursor-not-allowed text-white/45 border-none" : "bg-purple-500 border-purple-600"} border-b-4 hover:translate-y-[2px] transition-all   rounded-md text-white  text-black/35 hover:border-b-0`} onClick={() => goToNextForm(step, setStep, form, setForm)}>{"Avançar >"}</button>
                  }
                </div>
                {targetTrailId && !targetTrail?.trailStatus.includes("ENABLE") ?
                  <button type="button" onClick={() => setIsPublish(true)} className={`outline-none py-2 px-4  h-[45px] ${!(isFormValid) || !imagePreview ? "bg-purple-600/45 cursor-not-allowed text-white/45 border-none" : "bg-purple-600 border-purple-700/40"} border-b-8  rounded-md text-white border-0 text-black/35 hover:border-b-0`}>
                    Publicar ^
                  </button> : null}
              </>)}
            {step > 0 && (
              <div className='flex w-full justify-between flex-wrap items-center gap-y-2 '>
                <div className='flex gap-x-2 items-center flex-wrap gap-y-1 justify-center'>
                  <button type='button' disabled={!(isFormValid) || !imagePreview} className={`outline-none py-2 px-4  h-[45px] ${!(isFormValid) || !imagePreview ? "bg-purple-700/25 cursor-not-allowed text-white/45 border-none" : "bg-blue-700 border-blue-800"} border-b-4 hover:translate-y-[2px] transition-all  rounded-md text-white  text-black/35 hover:border-b-0`} onClick={() => setStep(0)}>{"< Trilha"}</button>
                  <button type='button' disabled={!(isFormValid) || !imagePreview} className={`outline-none py-2 px-4  h-[45px] ${!(isFormValid) || !imagePreview ? "bg-purple-700/25 cursor-not-allowed text-white/45 border-none" : "bg-purple-500 border-purple-600"} border-b-4 hover:translate-y-[2px] transition-all  rounded-md text-white  text-black/35 hover:border-b-0`} onClick={() => goToFormBack(step, setStep)}>{"< Voltar"}</button>
                  {isFormValidSecondTier &&
                    <button type='button' disabled={!(isFormValid) || !imagePreview} className={`outline-none py-2 px-4  h-[45px] ${!(isFormValid) || !imagePreview ? "bg-purple-700/25 cursor-not-allowed text-white/45 border-none" : "bg-purple-500 border-purple-600"} border-b-4 hover:translate-y-[2px] transition-all   rounded-md text-white  text-black/35 hover:border-b-0`} onClick={() => goToNextForm(step, setStep, form, setForm)}>{"Avançar >"}</button>
                  }

                </div>
                {step >= 10 || form?.activities.length >= 10 ?
                  <button type='button' disabled={!(isFormValid || isValidActivity) || !imagePreview} className={`outline-none py-2 px-4  h-[45px] ${!(isFormValid || isValidActivity) || !imagePreview ? "bg-purple-600/45 cursor-not-allowed text-white/45 border-none" : "bg-purple-600 border-purple-700"} border-b-4 hover:translate-y-[2px] transition-all   rounded-md text-white text-black/35  hover:border-b-0`} onClick={(e) => submitForm(e)}>Enviar</button>
                  : <p className='text-xs text-orange-500 font-bold'>*Para Enviar mínimo: 10 Atividades</p>}





              </div>
            )}

          </div>



        </motion.div>

      </motion.div>
    )
  }
}
