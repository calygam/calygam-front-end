import React, { useContext } from 'react'
import LinkPlaceIcon from '../../assets/img/link-place-icon.svg'
import ArchiveIconFile from '../../assets/img/archive-icon-file.svg'
import ArchiveWordFile from '../../assets/img/archive-word-icon.svg'
import ArchiveExelIcon from '../../assets/img/archive-exel-icon.svg'
import closeModalPlace from '../../assets/img/close-modal-place.svg'
import PasteFileHere from '../../assets/img/paste-file-here.svg'
import ComponentToggleContext from '../../context/ComponentToggleContext/ComponentToggleContext'
export default function ModalPlaceActivity() {
    const { toggleUploadModal, setToggleUploadModal } = useContext(ComponentToggleContext)
    return (
        <div className='fixed inset-0 w-full justify-center font-poppins items-center bg-black/50 h-full '>
            <div className='flex flex-col items-center   w-[80%] md:w-[70%] h-[350px] md:h-[300px] lg:h-[250px] mx-auto mt-[10%] rounded-xl py-2  bg-trail-info-action '>
                <div className='w-full flex  justify-end pr-5'>
                    <button onClick={()=>setToggleUploadModal(false)}>
                        <img src={closeModalPlace} alt="" className='w-4 h-4' />
                    </button>
                </div>
                <div className='grid grid-cols-1 w-full lg:pr-5  text-white my-2 md:grid-cols-2 lg:grid-cols-4 justify-items-center'>
                    <div className='flex flex-col    justify-center'>
                        <div className='flex w-full  items-center gap-x-1'>
                            <div className=' flex'>
                                <p>Link</p>
                            </div>
                            <div className=' flex'>
                                <img src={LinkPlaceIcon} alt="" className='w-4 h-4' />
                            </div>
                        </div>
                        <div className='w-full flex'>
                            <div className='w-full bg-white rounded-full h-[2px]' ></div>

                        </div>
                    </div>



                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex  items-center gap-x-1'>
                            <div className='flex'>
                                <p>Arquivos</p>
                            </div>
                            <div className=' flex'>
                                <img src={ArchiveIconFile} alt="" className='w-4 h-4' />
                            </div>
                        </div>
                        <div className='w-full flex'>
                            <div className='w-full bg-white rounded-full h-[2px]' ></div>

                        </div>
                    </div>




                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex  items-center gap-x-1'>
                            <div className=' flex'>
                                <p>Arquivo word</p>
                            </div>
                            <div className=' flex'>
                                <img src={ArchiveWordFile} alt="" className='w-4 h-4' />
                            </div>
                        </div>
                        <div className='w-full flex'>
                            <div className='w-full bg-white rounded-full h-[2px]' ></div>

                        </div>
                    </div>



                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex  items-center gap-x-1'>
                            <div className=' flex'>
                                <p>Arquivo Exel</p>
                            </div>
                            <div className=' flex'>
                                <img src={ArchiveExelIcon} alt="" className='w-4 h-4' />
                            </div>
                        </div>
                        <div className='w-full flex'>
                            <div className='w-full bg-white rounded-full h-[2px]' ></div>

                        </div>
                    </div>






                </div>
                <div className='w-[95%] rounded-xl   bg-white flex justify-center items-center h-full'>
                    <div className='flex items-center gap-x-1'>
                        <button><img src={PasteFileHere} alt="" className='w-8 h-8' /></button>
                        <p className='font-black'>Cole Aqui!</p></div>
                </div>
            </div>
        </div>
    )
}
