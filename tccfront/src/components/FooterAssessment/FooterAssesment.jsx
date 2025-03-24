import React from 'react'
import accountsgroup from '../../assets/img/accountsgroup.svg'
import discord from '../../assets/img/discord.svg'
import instagram from '../../assets/img/instagram.svg'
import facebook from '../../assets/img/facebook.svg'
import linkedin from '../../assets/img/linkedin.svg'

export default function FooterAssesment() {
    return (
        <div className=' flex mt-10 justify-center items-center transition-all py-3 w-full h-full font-poppins bg-red-clean-type rounded-t-lg'>
            <div className='flex flex-col w-full border-b border-white/50 min-h-36 h-full'>
                <div className='flex flex-col justify-center text-white items-center px-10 space-y-24    py-10'>
                    <div className='w-full grid md:grid-cols-2 gap-x-72 transition-all grid-cols-1 space-y-3  place-items-center  '>
                        <div className='grid grid-cols-1 space-y-3    md:grid-cols-1 lg:grid-cols-3  lg:gap-x-48  lg:pl-52   '>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='flex gap-2 items-center justify-center text-xl font-medium'>Comunidade </p>
                                <p className='flex gap-2 items-center justify-center text-base font-light '>Blog <img src={accountsgroup} alt="conta grupo" className='w-5 h-5' /></p>
                                <p className='flex gap-2 items-center justify-center text-base font-light'>Discord <img src={discord} alt="conta grupo" className='w-5 h-5' /></p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='flex gap-2 items-center justify-center text-xl font-medium'>Serviços</p>
                                <p className='flex gap-2 items-center justify-center text-nowrap font-light text-base '>Telefone: 4672-382</p>
                                <p className='flex gap-2 items-center justify-center text-nowrap font-light  text-base '>WhatsApp: 33624-2826</p>
                            </div>
                        </div>
                        <form className='flex flex-col lg:pr-2' >
                            <div>
                                <label htmlFor='env-feedback' className='flex justify-center text-base font-light '>Mandar seu Feedback</label>
                                <div className='flex mt-2'>
                                    <input type="text" className='rounded-l py-2 text-black placeholder:font-light px-2 outline-none' autoComplete='off' id='env-feedback' placeholder='Email' />
                                    <button className='px-2 py-2 bg-red-button-send-feedback rounded-r-xl text-xs font-light' type='submit'>Enviar</button>
                                </div>
                            </div>

                        </form>
                    </div>

                    {/* Caio:<- etapa de redes sociais no footer   */}

                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-x-80 lg:gap-5 place-items-center px-10'>
                
                        <div className='flex gap-2 items-center'>
                            <p className='text-xs'>@Calygam</p>
                            <p className='text-xs whitespace-nowrap cursor-pointer'>Políticas e Privacidades</p>
                        </div>

                  
                        <div className='flex flex-col items-center'>
                            <p className='text-xs cursor-pointer'>Termos de Uso</p>
                        </div>

                      
                        <div className='flex flex-wrap justify-center gap-2'>
                        <p>Nossas Redes</p>
                        <img src={instagram} alt="conta grupo" className='w-5 h-5 cursor-pointer' />
                        <img src={facebook} alt="conta grupo" className='w-5 h-5 cursor-pointer' />
                        <img src={linkedin} alt="conta grupo" className='w-5 h-5 cursor-pointer' />
                      

                        </div>
                    </div>



                </div>

            </div>

        </div>
    )
}
