import senaiLogo from '../../assets/img/senaiLogo.png'
import MenuRed from '../../assets/img/MenuRed.svg'

import SearchRed from '../../assets/img/SearchRed.svg'
import Search from '../../assets/img/searchIcon.png'
import alunoSupport from '../../assets/img/perfilPageIcon.png'

import { Link } from 'react-router-dom'

export default function Header() {
  return (

    <div className="transition-all flex justify-between md:justify-around    items-end pb-5 px-5   w-full h-[116px] bg-white md:bg-red-600">
      <div className='flex w-full border-b-2 justify-around gap-x-5 pb-3 items-center  border-b-white'>
        <div className='md:hidden'>
          <img src={MenuRed} alt="" />
        </div>
        <div className='shadow-lg shadow-black/25'>
          <Link to={"/"}><img className='w-[180px]' src={senaiLogo} alt="" /></Link>
        </div>
        <nav className='hidden transition-all md:flex md:w-[75%] items-center   md:justify-between'>
          <ul className='flex gap-5 text-white'>
            <li><Link to={"/cursos"}>Cursos</Link></li>

            <li><Link to={"/processoSeletivo"}>Processo Seletivo</Link></li>
            <li><Link to={"/faleConosco"}>fale Conosco</Link></li>

          </ul>
          <div className='flex items-center group'>
            <div className='flex  group-hover:bg-white transition-all ease-out   duration-200 group-hover:pl-2   group-hover:rounded-l group-hover:rounded-r    justify-end  items-center  group-hover:w-full'>
              <div className='flex transition-all'>
                <input type="text" className=' w-0  group-hover:w-full  group-hover:bg-transparent h-[25px]  outline-none ' />
              </div>
              <div className='group-hover:bg-black p-1 transition-none group-hover:rounded-r '>
                <img src={Search} alt="" className='h-[25px] w-[25px]'/>
              </div>

            </div>
          </div>
        </nav>
        <div className='flex items-center'>
        <div className='md:hidden'>
          <img src={SearchRed} alt="" />
        </div>
        <Link to={"/Login"} className='hidden md:flex items-center transition-all text-white'>
          <div className='flex gap-2'>
            <img src={alunoSupport} alt="" className='h-[25px] w-[25px]' />
          </div>
          <div>
            <p>Alunos</p>
          </div>
        </Link>
      </div>
      </div>
    </div>
  )
}
