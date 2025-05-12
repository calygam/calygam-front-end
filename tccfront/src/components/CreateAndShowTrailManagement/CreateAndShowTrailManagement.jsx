import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CalygamDropDown from '../../components/CalygamDropDown/CalygamDropDown.jsx';
import PublishTrail from '../../components/PublishTrail/PublishTrail.jsx'
import { goToNextForm } from '../../utils/goToNextForm/goToNextForm';
import { handleInputModify } from '../../utils/handleInputModify/handleInputModify';
import { goToFormBack } from '../../utils/goToFormBack/goToFormBack';
import { FormClenup } from '../../utils/FormCleanup/FormClenup';
import broomClenup from '../../assets/img/broom-clean.png';
import toSend from '../../assets/img/to-send-trail.png';
import toback from '../../assets/img/go-to-back.png';
import api from '../../api/api.js';
import { UseReadAllTrailsHook } from '../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook.js';
import { FormatCoins } from '../../utils/FormatCoins/FormatCoins.js';
import { AuxiliaryLibraryResponse } from '../../utils/AuxiliaryLibraryResponse/AuxiliaryLibraryResponse.js';
import { UseLoading } from '../../hooks/UseLoading/UseLoading.js';

export default function CreateAndShowTrailManagement() {
  const [step, setStep] = useState(0);
  const { trails, targetTrailId, setTargetTrailId } = UseReadAllTrailsHook();
  const [isPublish, setIsPublish] = useState(false)
  const { loading, setLoading, setLoadingText } = UseLoading()
  const [imagePreview, setImagePreview] = useState(null);
  const targetTrail = trails.find(oneTrail => oneTrail.trailId === targetTrailId);
  const [selectedDifficultyOption, setSelectedDifficultyOption] = useState('');
  const [codeTarget, setCodeTarget] = useState("")
  const [form, setForm] = useState({
    trailName: '',
    trailDescription: '',
    trailPoints: '0',
    trailVacancy: '0',
    trailPassword: '',
    trailImage: '',
    activities: [],
  });




  useEffect(() => {
    if (targetTrailId === 0) {
      setForm({
        trailName: '',
        trailDescription: '',
        trailPoints: '0',
        trailVacancy: '0',
        trailPassword: '',
        trailImage: '',
        activities: [],
      });
      localStorage.removeItem('trailInProgress');
    } else if (targetTrailId > 0 && targetTrail) {
      setForm({

        trailName: targetTrail.trailName,
        trailDescription: targetTrail.trailDescription,
        trailPoints: String(targetTrail.trailPrice),
        trailVacancy: String(targetTrail.trailVacancies),
        trailPassword: '',
        trailImage: '',
        activities: targetTrail.activities
          ? targetTrail.activities.map(activity => ({
            activityId: activity.activityId,
            activityName: activity.activityName || '',
            activityDescription: activity.activityDescription || '',
            activityPoints: String(activity.activityPrice || 0),
            activityDifficulty: activity.activityDifficulty || 'EASY',
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
    localStorage.setItem('trailInProgress', JSON.stringify({ ...form, trailImage: '' }));
  }, [form]);

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

  const submitForm = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('trailName', form.trailName.trim());
    formData.append('trailDescription', form.trailDescription.trim());
    const rawtrailPts = String(form.trailPoints).replace(/[.,]/g, '');
    formData.append('trailPrice', Number(rawtrailPts));
    if (form.trailImage) formData.append('trailFileImage', form.trailImage);
    formData.append('trailPassword', form.trailPassword.trim());
    formData.append('trailVacancies', Number(form.trailVacancy));
    form.activities.forEach((activity, index) => {
      if (activity.activityId) {
        formData.append(`activities[${index}].activityId`, String(activity.activityId));
      }
      formData.append(`activities[${index}].activityName`, activity.activityName || '');
      formData.append(`activities[${index}].activityDescription`, activity.activityDescription || '');
      const rawActPts = String(activity.activityPoints).replace(/[.,]/g, '');
      const intValue = parseInt(rawActPts);
      const validValue = isNaN(intValue) ? 0 : intValue;
      formData.append(`activities[${index}].activityPrice`, validValue);
      formData.append(`activities[${index}].activityDifficulty`, activity.activityDifficulty || 'EASY');
    });
    formData.append('calygamCode', codeTarget)
    console.log('FormData enviado:', [...formData.entries()]); // Log para inspeção
    try {
      setLoading(true);
      setLoadingText(targetTrailId ? 'Completando edição...' : 'Criando a trilha...');
      if (targetTrailId) {
        await api.put(`trail/update/${targetTrail.trailId}`, formData);
        alert('Trilha atualizada com sucesso!'); // Feedback ao usuário
      } else {
        await api.post('trail/create', formData);
        alert('Trilha criada com sucesso!');
      }
      FormClenup(setForm, setImagePreview, setStep);
    } catch (error) {
      console.error('Erro ao salvar trilha:', error.response?.data || error.message);
      alert('Erro ao salvar a trilha. Verifique os dados e tente novamente.');
    } finally {
      setLoading(false);
      setIsPublish(false)
      setTargetTrailId(0);
    }
  };

  const normalModalOnly =
    'lg:w-[75%] md:w-[95%] px-2 py-6 font-poppins flex flex-col items-center bg-calygam-semi-light-red rounded-2xl';
  const scrollableBackground =
    `fixed ${isPublish ? "overflow-hidden" : "overflow-y-auto"} pb-48 custom-scrollbar z-20 inset-0 bg-black/75 w-full flex flex-col-reverse justify-center items-center`;

  return (
    <div className={`${targetTrailId ? scrollableBackground : normalModalOnly}`}>
      {AuxiliaryLibraryResponse.map((assistance, index) =>
        assistance.fieldError === form.trailName && (
          <div key={index} className="text-white tex-2xl">
            {assistance.message}
          </div>
        )
      )}
      {isPublish &&
        <PublishTrail setIsPublish={setIsPublish} isPublish={isPublish} trailName={targetTrail.trailName} setTrailCode={setCodeTarget} trailCode={codeTarget} handleUpdate={submitForm} />}
      {targetTrailId ? (
        <button
          type="button"
          onClick={() => setTargetTrailId(0)}
          className="py-2 px-6 rounded-md mb-[200px] bg-blue-500 border-b-4 border-blue-800/25 transition-all ease-linear duration-200 hover:border-0 text-white flex justify-center items-center font-poppins"
        >
          Cancelar
        </button>
      ) : null}
      <form
        onSubmit={submitForm}
        className={`items-center ${targetTrailId && 'my-20'} md:items-stretch flex flex-col space-y-4`}
      >
        <div className="flex flex-col text-white my-2">
          <h2 className="text-lg font-semibold">
            {step === 0 ? 'Criar nova Trilha' : `Atividade - ${step <= 9 ? '0' + step : step}`}
          </h2>
          <p className="font-normal">*Preencher os campos obrigatórios</p>
        </div>
        {step === 0 ? (
          <div className="flex flex-col items gap-y-4">
            <div className="flex flex-col">
              <label className="text-white font-bold" htmlFor="nameTrail">
                Nome Da Trilha
              </label>
              <input
                name="trailName"
                id="nameTrail"
                placeholder="Nome"
                value={form.trailName}
                onChange={e => handleInputModify(e, step, setForm, form, setImagePreview)}
                required
                className="md:w-full  md:mx-0  p-3 focus:outline-none rounded-lg outline-none border-none"
              />
            </div>
            <div>
              <label className="text-white font-bold" htmlFor="descriptionTrail">
                Descrição Da Trilha
              </label>
              <input
                name="trailDescription"
                id="descriptionTrail"
                placeholder="Trail Description"
                value={form.trailDescription}
                onChange={e => handleInputModify(e, step, setForm, form, setImagePreview)}
                required
                className="w-full p-3 focus:outline-none rounded-lg outline-none border-none"
              />
            </div>
            <div className="w-full flex flex-wrap justify-center gap-x-2 md:justify-between">
              <div className="flex flex-col">
                <label className="text-white font-bold" htmlFor="pointsTrail">
                  Pontos da Trilha
                </label>
                <input
                  type="text"
                  id="pointsTrail"
                  name="trailPoints"
                  placeholder="points"
                  value={form.trailPoints}
                  onChange={e => handleInputModify(e, step, setForm, form, setImagePreview)}
                  required
                  className="lg:w-[150px] md:w-[125px] w-fit p-3 focus:outline-none rounded-lg outline-none border-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white font-bold" htmlFor="vacancyTrail">
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
                  className="lg:w-[150px] md:w-[125px] p-3 focus:outline-none rounded-lg outline-none border-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white font-bold" htmlFor="passwordTrail">
                  Senha da Trilha
                </label>
                <input
                  type="password"
                  name="trailPassword"
                  id="passwordTrail"
                  placeholder="senha"
                  value={form.trailPassword}
                  onChange={e => handleInputModify(e, step, setForm, form, setImagePreview)}
                  required
                  className="lg:w-[150px] md:w-[125px] p-3 focus:outline-none rounded-lg outline-none border-none"
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="imageTrail"
                className={`${imagePreview ? 'w-fit' : 'w-full'} mx-auto border-2 transition-all ease-in-out duration-1000 border-dashed text-white/65 border-red-400/50 rounded-lg bg-calygam-semi-strong-red/50 flex justify-center items-center text-black text-xl text-center`}
              >
                {imagePreview ? (
                  <img src={imagePreview} alt={imagePreview} className="w-[100px] h-[100px] object-cover rounded-lg" />
                ) : (
                  'Nenhuma imagem anexada'
                )}
              </label>
              <input
                type="file"
                name="trailImage"
                id="imageTrail"
                onChange={e => handleInputModify(e, step, setForm, form, setImagePreview)}
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <input
              name="activityName"
              placeholder="Activity Name"
              value={form.activities[step - 1]?.activityName || ''}
              onChange={e => handleInputModify(e, step, setForm, form, setImagePreview)}
              required
              className="w-full p-3 focus:outline-none rounded-lg outline-none border-none"
            />
            <textarea
              name="activityDescription"
              placeholder="Activity Description"
              value={form.activities[step - 1]?.activityDescription || ''}
              onChange={e => handleInputModify(e, step, setForm, form, setImagePreview)}
              required
              className="w-full p-3 focus:outline-none rounded-lg outline-none border-none"
            />
            <input
              type="text"
              name="activityPoints"
              placeholder="Activity Points"
              value={form.activities[step - 1]?.activityPoints || ''}
              onChange={e => handleInputModify(e, step, setForm, form, setImagePreview)}
              required
              className="w-full p-3 focus:outline-none rounded-lg outline-none border-none"
            />
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
        <div className="flex flex-wrap justify-center space-y-3 mt-6">
          {step > 0 && (
            <div className="flex flex-wrap gap-x-2 gap-y-2 justify-center items-center">
              <button type="button" onClick={() => goToFormBack(step, setStep)} className="px-6 h-[40px] bg-red-500/35 text-white rounded-lg border-b-4 border-black/35 hover:border-b-0">
                <img src={toback} alt="" className="h-[35px] w-[35px]" />
              </button>
              <button type="button" onClick={() => goToNextForm(step, setStep, form, setForm)} className="px-6 h-[40px] bg-red-500/35 text-white rounded-lg border-b-4 border-black/35 hover;border-b-0">
                Próximo
              </button>
              
              <button type="submit" className="relative group overflow-hidden px-6 h-[40px] bg-red-500/35 text-white rounded-lg border-b-4 border-black/35 hover;border-b-0">
                <div className="relative z-10 group-hover:translate-x-[99px] group-hover:-translate-y-[99px] transition-all duration-[1300ms] ease-in-out">
                  <img src={toSend} alt="" className="w-[25px] h-[25px]" />
                </div>
                <p className="absolute inset-0 mx-auto my-2 text-transparent group-hover:text-white transition-all duration-[1300ms] ease-in-out">
                  Enviar
                </p>
              </button>
              <button type="button" onClick={() => FormClenup(setForm, setImagePreview, setStep)} className="px-6 h-[40px] bg-red-500/35 text-white rounded-lg border-b-4 border-black/35 hover;border-b-0">
                <img src={broomClenup} alt="" className="h-[35px] transition-all ease-in-out duration-[1200ms] group-hover:-rotate-45 w-[25px]" />
              </button>
            </div>
          )}
          {step === 0 && (
            <div className="flex w-full items-center h-[60px] justify-end gap-x-2 flex-wrap">
              <button type="button" onClick={() => FormClenup(setForm, setImagePreview, setStep)} className="px-6 h-[40px] bg-white text-black rounded-lg border-b-4 border-gray-500/45 hover:border-b-0">
                Limpar
              </button>

              {form.trailName !== '' && form.trailDescription !== '' && form.trailVacancy > 0 && form.trailVacancy < 60 ? (
                <button type="button" onClick={() => goToNextForm(step, setStep, form, setForm)} className="px-6 h-[40px] bg-red-300 text-white rounded-lg border-b-4 border-gray-500/45 hover:border-b-0">
                  Próximo
                </button>
              ) : (
                <button disabled type="button" className="px-6 h-[40px] bg-black/15 cursor-not-allowed text-white/75 rounded-lg border-b-4 border-black/15">
                  Próximo
                </button>
              )}
              {targetTrailId && !targetTrail.trailStatus.includes("ENABLE") ?
                <button type="button" onClick={() => setIsPublish(true)} className="px-6 h-[40px] bg-green-300 outline-none hover:bg-green-700 text-black transition-all ease-linear saturate-200 hover:text-white rounded-lg border-b-4 border-gray-500/45 hover:border-b-0">
                  Publicar
                </button> : null}
              {targetTrailId && targetTrail.trailStatus.includes("ENABLE") ?
                <button type="button" disabled onClick={() => setIsPublish(true)} className="px-6 h-[40px] bg-green-300/50 outline-none  cursor-not-allowed text-black transition-all ease-linear saturate-200  rounded-lg border-b-4 border-gray-500/45 hover:border-b-0">
                  Publicada
                </button> : null}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
