import senaiLogo from '../../assets/img/senaiLogo.png'
import MenuRed from '../../assets/img/MenuRed.svg'

import SearchRed from '../../assets/img/SearchRed.svg'
import Search from '../../assets/img/searchIcon.png'
import alunoSupport from '../../assets/img/perfilPageIcon.png'

import { Link } from 'react-router-dom'

export default function Header() {
  return (

    <div className="transition-all flex justify-between md:justify-around  items-end pb-5 px-5   w-full h-[116px] bg-white md:bg-red-600">
      <div className='flex w-full border-b-2 justify-around gap-5 pb-2  border-b-white'>
        <div className='md:hidden'>
          <img src={MenuRed} alt="" />
        </div>
        <div>
          <Link to={"/"}><img className='w-[140px]' src={senaiLogo} alt="" /></Link>
        </div>
        <nav className='hidden transition-all md:flex md:w-[75%]   md:justify-between'>
          <ul className='flex gap-5 text-white'>
            <li><Link to={"/cursos"}>Cursos</Link></li>

            <li><Link to={"/processoSeletivo"}>Processo Seletivo</Link></li>
            <li><Link to={"/faleConosco"}>fale Conosco</Link></li>

          </ul>
          <div className='flex items-center'>
            <div>
              <img src={Search} alt="" />
            </div>
          </div>
        </nav>
        <div className='md:hidden'>
          <img src={SearchRed} alt="" />
        </div>
        <Link to={"/Login"} className='hidden md:flex items-center transition-all text-white'>
          <div className='flex gap-2'>
            <img src={alunoSupport} alt="" />
          </div>
          <div>
            <p>Alunos</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
