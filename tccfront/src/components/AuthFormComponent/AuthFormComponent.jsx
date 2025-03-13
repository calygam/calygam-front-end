import React, { useContext } from 'react'
import emailIcon from '../../assets/img/emailicon.svg'
import passwordIcon from '../../assets/img/passwordicon.svg'
import perfilNameIcon from '../../assets/img/perfil-name-icon.svg'
import googleIcon from '../../assets/img/google-icon.svg'
import facebookIcon from '../../assets/img/facebook-icon.svg'
import { Link } from 'react-router-dom'
import { CalygamAuthContext } from '../../context/CalygamAuthContext/CalygamAuthContext'

export default function AuthFormComponent({ actionName,nameRequired,newUser,actionForm,handleSendFormAuth }) {

    const { userName, setUserName,
            userEmail,setUserEmail,
            userPassword, setUserPassword,
            userPhone, setUserPhone,
            userCpf, setUserCpf} = useContext(CalygamAuthContext)


    return (
        <div className={` w-[250px] md:w-[300px] lg:w-[400px] font-poppins    lg flex flex-col bg-white/50 mx-auto min-h-[350px] h-full rounded-md `}>
            <h2 className='text-center font-semibold mt-5 text-3xl'>{actionName}</h2>
            <form className='flex flex-col  w-full items-center h-full' onSubmit={handleSendFormAuth}>

                <div className='flex flex-col h-full w-10/12 space-y-8'>
                    {nameRequired?
                    <div className='flex flex-col   border-b bg-transparent border-black'>
                        <label htmlFor="register-user-name" className='font-light text-sm'>Nome:</label>
                        <div className='flex items-center gap-2'>
                            <input type="text" className='bg-transparent w-full outline-none' id='register-user-name' name='register-user-name' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                            <img src={perfilNameIcon} alt="" className='w-5 h-5' />
                        </div>
                    </div>:null}

                    <div className='flex flex-col   border-b bg-transparent border-black'>
                        <label htmlFor="register-user-email" className='font-light text-sm'>Email:</label>
                        <div className='flex items-center gap-2'>
                            <input type="email" className='bg-transparent w-full outline-none' id='register-user-email' name='register-user-email' value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} />
                            <img src={emailIcon} alt="" className='w-5 h-5' />
                        </div>
                    </div>

                    <div className='flex flex-col  border-b bg-transparent border-black'>
                        <label htmlFor="register-user-password" className='font-light text-sm'>Senha:</label>
                        <div className='flex items-center gap-2'>
                            <input type="password" className='bg-transparent w-full outline-none' id='register-user-password' name='register-user-password' value={userPassword} onChange={(e)=>setUserPassword(e.target.value)} />
                            <img src={passwordIcon} alt="" className='w-5 h-5' />
                        </div>
                    </div>

                    <div className='flex flex-col  border-b bg-transparent border-black'>
                        <label htmlFor="register-user-tel" className='font-light text-sm'>Telefone:</label>
                        <div className='flex items-center gap-2'>
                            <input type="tel" className='bg-transparent w-full outline-none' id='register-user-tel' name='register-user-tel' value={userPhone} onChange={(e)=>setUserPhone(e.target.value)} />
                            <img src={passwordIcon} alt="" className='w-5 h-5' />
                        </div>
                    </div>

                    <div className='flex flex-col  border-b bg-transparent border-black'>
                        <label htmlFor="register-user-cpf" className='font-light text-sm'>CPF:</label>
                        <div className='flex items-center gap-2'>
                            <input type="password" className='bg-transparent w-full outline-none' id='register-user-cpf' name='register-user-cpf' value={userCpf} onChange={(e)=>setUserCpf(e.target.value)} />
                            <img src={passwordIcon} alt="" className='w-5 h-5' />
                        </div>
                    </div>
                </div>

                <div className='flex w-10/12 mt-2 '>
                    <p className='font-light text-sm text-red-button-send-feedback'>Esqueceu a senha?</p>

                </div>

                <div className='flex w-full justify-center mt-4'>
                    <button type='submit' className='w-[125px] px-4 py-2 text-white transition-all cursor-pointer hover:shadow-lg hover:shadow-red-clean-type/50 bg-red-clean-type md:w-[175px] lg:[225px] rounded-md'>
                        {actionForm}

                    </button>



                </div>
                <div className='flex flex-col w-full items-center mt-3  space-y-2'>
                    {newUser?
                    <p className='font-light text-sm text-red-button-send-feedback'>primeira vez? <Link to={"/Register"}>Cadastre-se</Link></p>
                    :null}
                    <p>OU</p>
                    <hr className='w-[100px] md:w-[150px] lg:w-[200px] h-[2px] bg-black' />
                </div>

                <div className='w-full justify-center my-4 flex gap-3'>
                    <button type='button' className='group w-10 h-10  rounded-full transition-all'>
                        <img src={facebookIcon} alt="" className=' w-full rounded-full group-hover:object-cover  transition-all group-hover:shadow-xl group-hover:shadow-blue-500/50' />
                    </button>
                    <button type='button' className='group w-10 h-10  rounded-full transition-all'>
                        <img src={googleIcon} alt="" className=' w-full rounded-full group-hover:object-cover  transition-all group-hover:shadow-xl group-hover:shadow-yellow-500/50' />
                    </button>

                </div>


            </form>
        </div>
    )
}
