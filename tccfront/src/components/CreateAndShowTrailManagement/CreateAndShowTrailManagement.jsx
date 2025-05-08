import axios from 'axios';
import React, { useEffect, useState } from 'react';

//components
import CalygamDropDown from '../../components/CalygamDropDown/CalygamDropDown.jsx'

//methods
import { goToNextForm } from '../../utils/goToNextForm/goToNextForm';
import { handleInputModify } from '../../utils/handleInputModify/handleInputModify';
import { goToFormBack } from '../../utils/goToFormBack/goToFormBack';
import { FormClenup } from '../../utils/FormCleanup/FormClenup';

//imagens
import broomClenup from '../../assets/img/broom-clean.png'
import toSend from '../../assets/img/to-send-trail.png'
import toback from '../../assets/img/go-to-back.png'
import api from '../../api/api.js';

export default function CreateAndShowTrailManagement() {
  const [step, setStep] = useState(0);
  const [selectedDifficultyOption,setSelectedDifficultyOption] = useState('')
  const [form, setForm] = useState({
    name: '',
    description: '',
    points: '',
    vacancy:0,
    password: '',
    image: '',
    activities: [],
  });


  const [difficultyToggle,setDifficultyToggle] = useState(false);
  const DifficultyOpitions = [
    
      { value: "EASY", label: "FÁCIL" },
      { value: "MEDIUM", label: "MÉDIO" },
      { value: "HARD", label: "DÍFICIL" },
      { value: "BOSS", label: "CHEFE" },
  
  ]



  const CollectDifficultyOptions = (option) => {
    setSelectedDifficultyOption(option);
    setDifficultyToggle(false);

    const updatedActivities = [...form.activities];
    if (!updatedActivities[step - 1]) {
      updatedActivities[step - 1] = {};
    }
    updatedActivities[step - 1] = { ...updatedActivities[step - 1], difficulty: option.value };
    setForm((prev) => ({ ...prev, activities: updatedActivities }));
  };

  const [imagePreview, setImagePreview] = useState('');


  useEffect(() => {
    const saved = localStorage.getItem('trailInProgress');
    if (saved) {
      setForm({ ...JSON.parse(saved), image: '' });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('trailInProgress', JSON.stringify({ ...form, image: null }));
  }, [form]);

  useEffect(() => {
    if (step > 0) {
      const currentActivity = form.activities[step - 1];
      // Atualiza a dificuldade no dropdown
      setSelectedDifficultyOption(
        currentActivity?.difficulty
          ? DifficultyOpitions.find(opt => opt.value === currentActivity.difficulty)
          : ''
      );
  
    
    }
  }, [step, form.activities]);



  const submitForm = async (e) => {
    setTimeout(() => {
      console.log(form.image)
    }, 20000);
    e.preventDefault();
    const formData = new FormData();
    formData.append('trailName', form.name);
    formData.append('trailDescription', form.description);
    formData.append('trailPrice', form.points);
    if (form.image) formData.append('trailFileImage', form.image);
    formData.append('trailPassword', form.password);
    formData.append('trailVacancies', form.vacancy);
   

    form.activities.forEach((activity, index) => {
      formData.append(`activities[${index}].activityName`, activity.name || '');
      formData.append(`activities[${index}].activityDescription`, activity.description || '');
      formData.append(`activities[${index}].activityPrice`, activity.points || 0);
      formData.append(`activities[${index}].activityDifficulty`, activity.difficulty || 'EASY');
    });

    try {
      await api.post('trail/create', formData);
      alert('Trail created successfully!');
      FormClenup(setForm, setImagePreview, setStep);
    } catch (error) {
      alert('Failed to create trail.');
    }
  };

  return (
    <div className="lg:w-[75%] md:w-[95%]  px-2 py-6 font-poppins flex flex-col items-center   bg-calygam-semi-light-red rounded-2xl ">

      <form onSubmit={submitForm} className=" flex flex-col  space-y-4">
      <div className='flex flex-col text-white my-2'>
        <h2 className="text-lg  font-semibold  ">
          {step === 0 ? 'Criar nova Trilha' : `Atividade - ${step<=9? 0+""+step:step}`}
        </h2>
        <p className='font-normal'>*Preencher os campos obrigatórios</p>
      </div>
        {step === 0 ?
          <div className=" flex flex-col space-y-4">
            <div className='flex flex-col'>
              <label className='text-white font-bold' htmlFor="nameTrail">Nome Da Trilha</label>
              <input name="name" id="nameTrail" placeholder="Nome" value={form.name} onChange={(e) => handleInputModify(e, step, setForm, form,setImagePreview)} required className="w-full p-3 focus:outline-none rounded-lg   outline-none border-none" />
            </div>
            <div >
              <label className='text-white font-bold' htmlFor="descriptionTrail">Descrição Da Trilha</label>
              <input name="description" placeholder="Trail Description" id="descriptionTrail" value={form.description} onChange={(e) => handleInputModify(e, step, setForm, form, setImagePreview)} required className="w-full p-3 focus:outline-none rounded-lg   outline-none border-none" />
            </div>
            <div className='w-full  flex flex-wrap  gap-x-2 justify-between'>
              <div className=' flex flex-col'>
                <label className='text-white font-bold' htmlFor="pointsTrail">Pontos da Trilha</label>
                <input type="number" step="1" min="0" id="pointsTrail" name="points" placeholder="points" value={form.points} onChange={(e) => handleInputModify(e, step, setForm, form, setImagePreview)} required className="lg:w-[150px] md:w-[125px] p-3 focus:outline-none rounded-lg   outline-none border-none" />
              </div>
              <div className=' flex flex-col'>
                <label className='text-white font-bold' htmlFor="vacancyTrail">vagas da Trilha</label>
                <input type="number" step="1" min="0" name="vacancy" id="vacancyTrail" placeholder="points" value={form.vacancy} onChange={(e) => handleInputModify(e, step, setForm, form, setImagePreview)} required className="lg:w-[150px] md:w-[125px] p-3 focus:outline-none rounded-lg   outline-none border-none" />
              </div>
          

              <div className='  flex  flex-col '>
                <label className='text-white font-bold' htmlFor="passwordTrail">Senha da Trilha</label>
                <input type="password" name="password" id='passwordTrail' placeholder="senha" value={form.password} onChange={(e) => handleInputModify(e, step, setForm, form, setImagePreview)} required className=" lg:w-[150px] md:w-[125px] p-3 focus:outline-none rounded-lg   outline-none border-none" />
              </div>
            </div>
            <div className='w-full '>
            <label htmlFor="imageTrail" className={`${imagePreview?"w-fit":"w-full"} mx-auto border-2 transition-all ease-in-out duration-1000  border-dashed text-white/65 border-red-400/50 rounded-lg bg-calygam-semi-strong-red/50 flex justify-center items-center text-black text-xl text-center`}>{imagePreview?<img src={imagePreview} alt={imagePreview} className='w-[100px] h-[100px] object-cover rounded-lg' />:"Nenhuma imagem anexada"}</label>
            <input type="file" name="image" id='imageTrail' onChange={(e) => handleInputModify(e, step, setForm, form, setImagePreview)} accept="image/*" className="  hidden border rounded-lg" />
            </div>
          </div>
          :
          <div className="space-y-4">
            <input name="name" placeholder="Activity Name" value={form.activities[step - 1]?.name || ''} onChange={(e) => handleInputModify(e, step, setForm, form, setImagePreview)} required className="w-full p-3 focus:outline-none rounded-lg   outline-none border-none" />

            <textarea name="description" placeholder="Activity Description" value={form.activities[step - 1]?.description || ''} onChange={(e) => handleInputModify(e, step, setForm, form, setImagePreview)} required className="w-full p-3 focus:outline-none rounded-lg   outline-none border-none" />
            <CalygamDropDown toggle={difficultyToggle} setToggle={setDifficultyToggle} options={DifficultyOpitions} selectedOption={selectedDifficultyOption} Options={CollectDifficultyOptions} SelectOneOption={"Selecione a Dificuldade"}/>
  
          </div>
        }
    

        <div className="flex flex-wrap justify-center space-y-3  mt-6">
          {step > 0 && (
         

<div className='flex flex-wrap gap-x-2 gap-y-2 justify-center items-center'>
<button type="button" onClick={() => goToFormBack(step, setStep)} className="px-6 h-[40px] bg-red-500/35  text-white rounded-lg  border-b-4 border-black/35 hover:border-b-0"><img src={toback} alt="" className='h-[35px] w-[35px]' /></button>
              <button type="button" onClick={() => goToNextForm(step, setStep, form,setForm)} className="px-6 h-[40px] bg-red-500/35  text-white rounded-lg  border-b-4 border-black/35 hover:border-b-0"  >Next</button>
              <button type="submit" className="relative group  overflow-hidden px-6 h-[40px] bg-red-500/35  text-white rounded-lg  border-b-4 border-black/35 hover:border-b-0">
              <div className='relative z-10   group-hover:translate-x-[99px] group-hover:-translate-y-[99px] transition-all duration-[1300ms] ease-in-out    justify-center items-center'>
                <img src={toSend} alt="" className='w-[25px] h-[25px]' />
              </div>
              
              <p className='absolute inset-0 mx-auto my-2 text-transparent  transition-all duration-[1300ms] ease-in-out group-hover:text-white'>Enviar</p>

              
              </button>

              <button type="button" onClick={() => FormClenup(setForm, setImagePreview, setStep)} className="px-6 h-[40px] bg-red-500/35 group  text-white rounded-lg  border-b-4 border-black/35 hover:border-b-0"><img src={broomClenup} alt="" className='h-[35px] transition-all ease-in-out duration-[1200ms]  group-hover:-rotate-45 w-[25px]' /></button>


            </div>
           
            
          )}
          {step === 0 ?
          <div className='flex w-full items-center h-[60px] justify-end gap-x-2 flex-wrap'>
            <button type="button" onClick={() => FormClenup(setForm, setImagePreview, setStep)} className="px-6 h-[40px] bg-white  text-black rounded-lg  border-b-4 border-gray-500/45 hover:border-b-0"
            >
              Limpar
            </button>
            {/* && form.image !=null */}
            {form.name!=""&& form.description!="" && form.vacancy>0 ? 
            <button type="button" onClick={() => goToNextForm(step, setStep, form,setForm)} className="px-6 h-[40px] bg-red-300 text-white rounded-lg border-b-4  border-gray-500/45 hover:border-b-0"
            >
              Next
            </button>:            <button disabled type="button" onClick={() => goToNextForm(step, setStep, form,setForm)} className="px-6 h-[40px] bg-red-300/75 cursor-not-allowed text-white/75 rounded-lg border-b-4  border-gray-500/75 "
            >
              Next
            </button>}
            </div>
            :null
          }
        </div>
      </form>
    </div>
  );
}