import senaiLogo    from '../../assets/img/senaiLogo.png'
import MenuRed      from '../../assets/img/MenuRed.svg'
import SearchRed    from '../../assets/img/SearchRed.svg'
import Search       from '../../assets/img/search-white.svg'
import SearchBack   from '../../assets/img/search-black.svg'
import alunoSupport from '../../assets/img/perfilPageIcon.png'
import engenheiro   from '../../assets/img/engenheiro.png'

import { Link }     from 'react-router-dom'
import { useState } from 'react'

export default function Header({withPhoto}) {
  const [searching,setSearching] = useState(false)
  return (
    <div className='flex flex-col items-center font-poppins text-[16px] text-nowrap'>
      <div className="transition-all flex justify-between md:justify-around     items-end pb-5 px-5   w-full h-[116px] bg-white md:bg-red-600">
        <div className='flex flex-col space-y-2 md:space-x-0 md:flex-row w-full border-b-2 md:justify-around justify-between gap-x-5 md:pb-3 items-center  border-b-white'>
          <div className='flex items-center w-full justify-between  md:hidden'>
          <div >
            <img src={MenuRed} alt="" />
          </div>
          { withPhoto?
          <div className="flex gap-x-2 md:gap-x-2 justify-center items-center  mr-0 md:mr-4   ">
  <span className=" rounded-full "> <img src={engenheiro} alt="" className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full  object-cover' /></span>
  <p className='text-xs md:text-base text-wrap md:text-white text-black '>Usuário</p>
</div>:null}
          </div>
          <div className='shadow-lg shadow-black/25'>
            <Link to={"/"}><img className='w-[145px] md:w-[180px] ' src={senaiLogo} alt="" /></Link>
          </div>
          <nav className='hidden transition-all md:flex  md:w-[75%] items-center   md:justify-between'>
            <ul className='flex gap-5 text-white'>
              <li className='transition-colors border-b pt-1 border-transparent  hover:border-white'><Link to={"/trail"}>Trilha</Link></li>

              <li className='transition-colors border-b pt-1 border-transparent  hover:border-white'><Link to={"/quiz"}>Quiz</Link></li>
              <li className='transition-colors border-b  pt-1 border-transparent  hover:border-white'><Link to={"/AboutLeasson"}>Sobre a Lição</Link></li>

            </ul>
            <div className='hidden lg:flex items-center group  cursor-pointer w-[50%] justify-end' onMouseEnter={()=> setSearching(true)} onClick={()=> setSearching(true)}  onMouseMove={()=> setSearching(true)} onMouseOut={()=>setSearching(false)}  >
              <div className='flex transition-all  duration-300 ease-linear w-[55px] group-hover:bg-white    group-hover:pl-2   group-hover:rounded-l-full group-hover:rounded-r-full    justify-end  items-center  group-hover:w-full'>
                <div className='flex   group-hover:w-full'>
                  <input type="text" className=' w-0  group-hover:w-full  group-hover:bg-transparent h-[25px]  outline-none ' />
                </div>
                <div className=' p-2 cursor-pointer  '>
                  <img src={searching?SearchBack:Search} alt="" className='h-[25px] w-[25px]' />
                </div>

              </div>
            </div>
          </nav>
          { !withPhoto?
          <div className='flex items-center'>
            {/* <div className='md:hidden'>
              <img src={SearchRed} alt="" />
            </div> */}
            <Link to={"/Login"} className='hidden md:flex items-center transition-all text-white'>
              <div className='flex gap-2 w-[25px]'>
                <img src={alunoSupport} alt="" className=' w-full ' />
              </div>
              <div>
                <p>Alunos</p>
              </div>
            </Link>
          </div>
:
<div className="hidden md:flex lg:flex gap-0 md:gap-x-2 justify-center items-center  mr-0 md:mr-4   ">
  <span className="w-full rounded-full "> <img src={engenheiro} alt="" className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full  object-cover' /></span>
  <p className='text-xs md:text-base text-wrap md:text-white text-black '>Usuário</p>
</div>}
        </div>
      </div>


      <div className='lg:hidden flex bg-red-600 items-center group py-2  cursor-pointer w-full justify-end' onMouseEnter={()=> setSearching(true)} onMouseMove={()=> setSearching(true)} onMouseOut={()=>setSearching(false)}  >

              <div className='lg:hidden flex transition-all  duration-300 ease-linear w-[55px] group-hover:bg-white    group-hover:pl-2   group-hover:rounded-l-full group-hover:rounded-r-full mr-[15%]    justify-end  items-center  group-hover:w-[70%]'>
                <div className='flex   group-hover:w-full'>
                  <input type="text" className=' w-0  group-hover:w-full  group-hover:bg-transparent h-[25px]  outline-none ' />
                </div>
                <div className=' p-2 cursor-pointer  '>
                  <img src={searching?SearchBack:Search} alt="" className='h-[25px] w-[25px]' />
                </div>

              </div>
            
            </div>




      {/* <div className='lg:hidden flex bg-red-500 w-full cursor-pointer justify-center py-2' onMouseEnter={()=> setSearching(true)} onMouseMove={()=> setSearching(true)} onMouseOut={()=>setSearching(false)}>
        <div className='lg:hidden flex items-center group w-[70%]  justify-end'>
          <div className='flex w-[55px]  group-hover:bg-white transition-all ease-out   duration-200 group-hover:pl-2   group-hover:rounded-l-full group-hover:rounded-r-full    justify-end  items-center  group-hover:w-full'>
            <div className='flex transition-all w-full  '>
              <input type="text" className=' w-0  group-hover:w-full group-hover:pr-2  group-hover:bg-transparent h-[25px]  outline-none ' />
            </div>
            <div className=' p-2 cursor-pointer  '>
                  <img src={searching?SearchBack:Search} alt="" className='h-[25px] w-[25px]' />
                </div>

          </div>
        </div>

      </div> */}
    </div>
  )
}
