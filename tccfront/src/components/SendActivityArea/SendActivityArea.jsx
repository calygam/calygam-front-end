import React from 'react'
import sendActivityArchive from '../../assets/img/send-activity-archive.png'
import api from '../../api/api';

export default function SendActivityArea() {
      const handleFileChange = async (event) => {
    const file = event.target.files[0];
    
    if (!file) return;

    // Bloqueia imagens
    if (file.type.startsWith("image/")) {
      alert("Somente arquivos que não sejam imagens são permitidos.");
      return;
    }

    const formData = new FormData();
    formData.append("activityFile", file); 

    try {
      const response = await api.post(
        "progress/submit/trail/1/activity/1",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      alert("Arquivo enviado com sucesso!");
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao enviar o arquivo:", error);
      alert("Erro ao enviar o arquivo.");
    }
  };
  return (
    <div className=' border border-dashed group  font-poppins rounded-xl overflow-hidden relative justify-center flex bg-black/50 border-calygam-purple-semi-strong '>
        <div className='w-full h-full bg-calygam-purple-semi-strong/10 group text-center items-center flex justify-center rouneded-2xl absolute backdrop-blur-sm'>
      <p className='text-calygam-purple-semi-strong'>Entregar</p>
      </div>
      <div className='w-full rouneded-2xl '>
        <img src={sendActivityArchive} alt="" className='w-full group-hover:object-contain group-hover:scale-125 transition-all ease-linear duration-[5000]  rouneded-2xl ' />
      </div>
    </div>
  )
}
