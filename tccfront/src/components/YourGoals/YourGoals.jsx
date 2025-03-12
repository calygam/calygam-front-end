import React from 'react'

export default function YourGoals({imgBallFinalForm}) {
  return (
    <div className='w-full flex'>
        <div className='w-full flex flex-col '>
        <div className='flex flex-col w-fit  '>
                    <p className='lg:text-2xl md:text-lg text-base pr-4  font-black '><span className='w-full h-[2px] text-red-clean-type '>Metas</span> De <span className='w-full h-[2px] text-red-clean-type '>Aprendizado!</span></p>
                    <div className='w-full h-[3px] mt-1 bg-red-clean-type '></div>

                    
                </div>
                <div className='w-fit mt-2'>
                        <p>Adicione metas para melhora seu Aprendizado isso te Ajudará a </p>
                        <p>acompanhar seu Aprendizado.</p>
                        <p className='text-xs'>OBS: Se sua meta não for concluida o usuario perdera pontos</p>
                    </div>
                <div className='flex w-full flex-wrap mt-4 md:flex-nowrap justify-center md:justify-start space-y-3 md:space-y-0 gap-x-3'>
                    <div className=' p-1 lg:w-[400px] md:w-[350px] w-[300px] h-[250px] rounded-md' style={{                        backgroundImage: `url(${imgBallFinalForm})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: "cover"}}>
                            <div className='w-full flex my-2  justify-end pr-2 '>
                                <button className='rounded-lg py-1 px-2 text-xs bg-white flex items-center'>Add Metas <strong className='text-base font-normal'>+</strong></button>
                            </div>

                            <div className='flex flex-col my-16 pl-3 w-full'>
                                <p className='flex items-center gap-x-1 text-white'><span className='flex w-5 h-1 rounded-full bg-green-600'></span>Fazer os Quiz De Figma</p>
                                <p className='flex items-center gap-x-1 text-white'><span className='flex w-5 h-1 rounded-full bg-yellow-300'></span>Fazer um protótipo no Figma</p>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-3'>
                            <div className='lg:w-[400px] md:w-[350px] w-[300px] h-[100px] pl-4 py-4 rounded-md bg-black/40'>
                            <p className='flex items-center gap-x-1 text-xs text-white'><span className='flex w-2 h-2 rounded-full bg-yellow-300'></span>Sua menta: completa 2 trilhas até o final do ano</p>
                            <p className='flex items-center gap-x-1 text-xs text-white'><span className='flex w-2 h-2 rounded-full bg-green-600'></span>Você está 60% mais Proximo de dominar o Figma!</p>
</div>
                            <div className='lg:w-[400px] md:w-[350px] w-[300px] h-[100px] rounded-md space-y-2 flex flex-col items-center pt-2 text-white bg-black/40'>
                            <p className='text-xl'>Metas Concluidas:</p>
                            <p className='text-xl'>0</p>
                            </div>
                        </div>
                </div>
         
        </div>
       
      
    </div>
  )
}
