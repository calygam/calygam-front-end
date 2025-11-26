import React, { useEffect, useState } from 'react';
import sendActivityArchive from '../../assets/img/send-activity-archive.png';
import api from '../../api/api';
import { motion } from 'framer-motion';
import { UseDataActivitiesPerTrailIdHook } from '../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook';
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile';
import { UseProgressHook } from '../../hooks/UseProgressHook/UseProgressHook';
import { Link, useNavigate, useNavigation, useSearchParams } from 'react-router-dom';
import { UseModalHook } from '../../hooks/UseModalHook/UseModalHook';
import SubmitActivityForTeacherModal from '../../components/modals/SubmitActivityForTeacherModal/SubmitActivityForTeacherModal.jsx'


import closeX from '../../assets/img/close-enter-to-trail.svg'
import { ExplorerProcessFilesUtil } from '../../utils/HandleChangeDragDropUtil/ExplorerProcessFilesUtil.js';
import { HandleDeleteSubmit } from '../../utils/HandleDeleteSubmit/HandleDeleteSubmit.js';
import LinkActivityArea from '../LinkActivityArea/LinkActivityArea.jsx';
import AddNewLinkModal from '../modals/AddNewLinkModal/AddNewLinkModal.jsx';
export default function SendActivityArea({ viewSubmissions, setViewSubmissions }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { dataProfile, searchDataProfile } = UseDataProfile()
  const [hasAnimated, setHasAnimated] = useState(false);
  const [arrayLinks,setArrayLinks] = useState([])
  const [isDragging, setIsDragging] = useState(false);
  const { modalIsOpen, openModal, contentModal } = UseModalHook()
  const [isDeleting, setIsDeleting] = useState(false)
  const { submissionBaggage, ListenerOfDowloadableArchivesSubmited } = UseProgressHook()
  const [sending, setSending] = useState(false)
  const navigation = useNavigate()
  const [obtainFile, setSObtainFile] = useState({})

  const { activities, setTrailId, trailId, targetActivityId, setTargetActivityId, position, setPosition, targetActivity, readActivitiesByTrailId } = UseDataActivitiesPerTrailIdHook()

  const [searchParams] = useSearchParams();
  const progressId = searchParams.get("progressId");

  const deletingMode = {
    isDeleting: isDeleting,
    setIsDeleting: setIsDeleting,
    obtainFile: obtainFile,
    progressId: progressId,

  }



  const handleRemoveFile = (idx) =>
    setSelectedFiles((files) => files.filter((_, i) => i !== idx));



  useEffect(() => {
    if (!isDeleting) {
      ListenerOfDowloadableArchivesSubmited(progressId)
    }
  }, [progressId, isDeleting])
  const handleFileChange = (event) => {
    if (!(event.target.files)) {
      return;
    }
    ExplorerProcessFilesUtil(event.target.files, setSelectedFiles)
  };
  



  useEffect(() => {
    if (selectedFiles.length === 0) {
      setHasAnimated(false);
    } else {
      setHasAnimated(true);
    }
  }, [selectedFiles]);

  useEffect(() => {
    if (!modalIsOpen) {
      setIsDeleting(false)
    }
  }, [modalIsOpen])
  useEffect(()=>{
    console.log(submissionBaggage?.submissions)
  },[submissionBaggage?.submissions])

  return (
    <div className='flex flex-col w-full items-end min-h-[300px] ' >
         {
        modalIsOpen && "addLinkToSubmit" === contentModal?
        <AddNewLinkModal setStringLinkSetter={setArrayLinks} stringLinkGetter={arrayLinks}  />:null
      }
      {
        modalIsOpen && ["submitActivityModal"].includes(contentModal) &&
        <SubmitActivityForTeacherModal sending={sending} selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} trailId={trailId} targetActivityId={targetActivityId} setSending={setSending} deletingMode={deletingMode} progressId={progressId} links={arrayLinks} SetArrayLinks={setArrayLinks}/>
      }

      <div className='  group w-full h-[300px] font-poppins  rounded-xl overflow-hidden relative justify-center flex    bg-calygam-purple-tone-3'
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true)
        }}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false)
          if (e.dataTransfer.files) {
            ExplorerProcessFilesUtil(
              e.dataTransfer.files,
              setSelectedFiles

            );
          }
        }}
      >

        <div className='w-full h-full  justify-center group text-center flex flex-col rounded-2xl absolute backdrop-blur-sm'>

          {selectedFiles.length === 0 && submissionBaggage?.submissions?.length === 0 ? (


            <>
              <label htmlFor="file-do-input-submit" className='text-white cursor-pointer lg:block hidden py-4 px-0 border border-dashed transition-all ease-linear duration-[900ms] border-white font-semibold rounded-lg'>
                Clique para selecionar arquivos
              </label>
              <label htmlFor="file-do-input-submit" className='text-white cursor-pointer lg:hidden block py-4 px-0 border border-dashed transition-all ease-linear duration-[900ms] border-calygam-purple-semi-strong font-semibold rounded-lg'>
                Toque para selecionar arquivos
              </label>
            </>
          ) : (
            <div className='w-full h-full flex flex-col p-2 justify-start text-center rounded-2xl absolute bg-calygam-purple-tone-3 overflow-y-auto custom-scrollbar max-h-full'>
              {viewSubmissions &&
                <span className='bg-purple-800 border-b-4 py-2 px-4  rounded-xl shadow-md shadow-purple-600/50 my-2 font-semibold border-b-purple-700 text-center text-white font-jersey'>
                  <p>Entregues</p>
                </span>
              }
              {submissionBaggage?.submissions.length > 0 && viewSubmissions && submissionBaggage.submissions.map((file, index) => (
                file.activityOriginalFileName != null && (
                <div
                  key={index}

                  className=''
                >
                  <div

                    className='w-full rounded-md bg-purple-600  px-4 py-2 border-b-4 border-purple-700 flex justify-between items-center mb-2'

                  >
                    <div className='flex items-center gap-x-2'>
                      <span className='rounded-md p-2 hidden md:block border-l border-gray-600  bg-gray-500'>
                        <p className='text-white '>.{file?.activitySubmitedFile.split('.').pop()}</p>
                      </span>
                      <p className=' md:max-w-[70px] max-w-[80px]   md:block text-white truncate'>{file?.activityOriginalFileName.split('.').slice(0, -1).join('.')}</p>

                    </div>
                    <div className=' items-center flex gap-x-2'>
                      <Link to={file.activitySubmitedFile} className='outline-none px-4 py-2 bg-purple-900 border-b border-purple-950 text-xs text-white rounded-full'>Baixar</Link>
                      <button className='bg-red-500/65 outline-none rounded-full border-2 border-purple-800 overflow-hidden flex justify-center items-center' onClick={() => {
                        setIsDeleting(true);
                        openModal("submitActivityModal");

                        setSObtainFile(file);
                      }}  > <img src={closeX} alt="Deletar arquivo" className='w-[25px]' /></button>
                    </div>
                  </div>
                </div>
              )))}
              {!(viewSubmissions) &&
                <span className='bg-purple-800 border-b-4 py-2 px-4  rounded-xl shadow-md shadow-purple-600/50 mb-6 font-semibold border-b-purple-700 text-center text-white font-jersey'>
                  <p>Área de Entrega</p>
                </span>
              }
              { selectedFiles?.map((file, index) => (
                <div
                  key={index}
                  className='w-full rounded-md bg-purple-600 p-1   border-black flex justify-between items-center mb-2'
              
                >
                  <div className='flex items-center gap-x-1'>
                    <span className='rounded-md p-2 border border-gray-800 bg-gray-500'>
                      <p className='text-white'>.{file?.name.split('.').pop()}</p>
                    </span>
                    <p className='max-w-[120px] text-white truncate'>{file?.name.split('.').slice(0, -1).join('.')}</p>

                  </div>
                  <button
                    onClick={() => handleRemoveFile(index)}
                    className='bg-red-500/65 outline-none rounded-md p-1 flex items-center justify-center'
                  >
                    <img src={closeX} alt='Remover arquivo' className='w-[20px]' />
                  </button>
                </div>
              ))}
              
                <label htmlFor="file-do-input-submit" className='w-full h-[35px] rounded-md px-6 py-4 items-center cursor-pointer  text-white/85  justify-between bg-white/15 border flex border-white/75'>
                  <p>+</p>
                  <p>Adicionar</p>

                </label>
              
            </div>
          )}
        </div>
        <div className='w-full rounded-2xl flex  justify-center items-center cursor-pointer'>
          <input
            type="file"
            id='file-do-input-submit'
            onChange={(e) => handleFileChange(e)}
            accept="application/*,text/*"
            multiple
            className="hidden"
          />
         
        </div>
      </div>
      <LinkActivityArea ArrayLinks={arrayLinks} setArrayLinks={setArrayLinks} yourLinks={submissionBaggage} viewSubmissions={viewSubmissions}/>

      <div className='flex flex-wrap gap-x-4 gap-y-4  my-2 '>
        {submissionBaggage?.submissions?.length>0&&
          <button type='button' className='bg-green-800 outline-none py-2 px-4 h-[35px] rounded-md border-b-4 p-0 border-green-900 text-xs  font-medium hover:border-none text-white' onClick={() => setViewSubmissions(!viewSubmissions)}>Modo Feito</button>
        }
        {selectedFiles.length > 0 || arrayLinks.length>0 ?
          < button className='outline-none py-2 px-4  border-0 border-b-4 hover:border-b-0 h-[35px]  border-purple-950  font-medium rounded-md text-xs text-white bg-calygam-purple-semi-strong' disabled={sending} type='button' onClick={() => openModal("submitActivityModal")}>Preparar</button>
          : < button className='outline-none py-2  px-4 border-0 border-b-4 hover:border-b-0 h-[35px]  border-gray-600/50 font-medium   rounded-md text-xs text-white/75 cursor-not-allowed bg-calygam-purple-semi-strong/50' disabled={true} type='button'>Preparar</button>
        }
      </div>
            
    </div >
  );
}
