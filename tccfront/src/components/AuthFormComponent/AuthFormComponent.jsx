import React, { useContext, useEffect, useState } from 'react'
import emailIcon from '../../assets/img/emailicon.svg'
import passwordIcon from '../../assets/img/passwordicon.svg'
import perfilNameIcon from '../../assets/img/perfil-name-icon.svg'
import googleIcon from '../../assets/img/google-icon.svg'
import facebookIcon from '../../assets/img/facebook-icon.svg'
import { Link } from 'react-router-dom'
import { CalygamAuthContext } from '../../context/CalygamAuthContext/CalygamAuthContext'
import { targetCPF } from '../../utils/MaskCPF/MaskCPF'
import { RegexEmail } from '../../utils/RegexEmail/RegexEmail'
import { RegexPassword } from '../../utils/RegexPassword/RegexPassword'


export default function AuthFormComponent({ actionName, nameRequired, cpfRequired, newUser, actionForm, handleSendFormAuth, errorTarget }) {

    const { userName, setUserName,
        userEmail, setUserEmail,
        userPassword, setUserPassword,
        userPhone, setUserPhone,
        userCpf, setUserCpf } = useContext(CalygamAuthContext)

    const [validEmail, setValidEmail] = useState("false")
    const [validPassword, setValidPassword] = useState("false")

    useEffect(() => {
        userEmail != '' ?
            setValidEmail(RegexEmail(userEmail)) : setValidEmail("false")
    }, [userEmail])

    useEffect(() => {
        userPassword != '' ?
            setValidPassword(RegexPassword(userPassword)) : setValidPassword("false")
    }, [userPassword])


    // useEffect(() => {
    //     console.log("CPF atual:", userCpf);
    //     console.log("Erro atual:", errorTarget);
    // }, [userCpf, errorTarget]);

    return (
        <div className={` w-[250px] md:w-[300px] lg:w-[400px] font-poppins my-4    lg flex flex-col bg-white/50 mx-auto min-h-[350px] h-full rounded-md `}>
            <h2 className='text-center font-semibold mt-2 text-3xl'>{actionName}</h2>

            <form className='flex flex-col  w-full items-center h-full' onSubmit={handleSendFormAuth}>

                <div className='flex flex-col h-full w-10/12 space-y-2'>
                    {nameRequired ?
                        <div className='flex flex-col   border-b bg-transparent border-black'>
                            <label htmlFor="register-user-name" className='font-light text-sm'>Nome:</label>
                            <div className='flex items-center gap-2'>
                                <input type="text" className='bg-transparent text-xs w-full text-black placeholder:text-black/50 outline-none' id='register-user-name' name='register-user-name' value={userName} onChange={(e) => setUserName(e.target.value)} autoComplete='off' placeholder='Digite seu nome' />
                                <img src={perfilNameIcon} alt="" className='w-5 h-5' />
                            </div>
                        </div> : null}

                    <div className={`flex flex-col   border-b bg-transparent ${validEmail != "" && userEmail.length > 0 ? 'border-red-clean-type' : "border-black"}`}>
                        <label htmlFor="register-user-email" className='font-light text-sm'>Email:</label>
                        <div className='flex items-center gap-2'>
                            <input type="email" className='bg-transparent text-xs w-full text-black placeholder:text-black/50 outline-none' id='register-user-email' name='register-user-email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} autoComplete='off' placeholder='calygam@gmail.com' />
                            <img src={emailIcon} alt="" className='w-5 h-5' />
                        </div>
                    </div>


                    {
                        errorTarget.includes("Email") ?
                            <div className='flex w-full'>
                                <p className='text-red-clean-type text-xs'>*{errorTarget}</p>
                            </div>
                            : null


                    }

                    {validEmail != '' && userEmail != '' ?
                        <div className='flex w-full'>
                            <p className='text-red-clean-type text-xs'>*{validEmail}</p>
                        </div>
                        : null
                    }

                    {cpfRequired ?
                        <div className={`flex flex-col   border-b bg-transparent ${errorTarget.includes("CPF") ? 'border-red-500' : 'border-black'}  `}>
                            <label htmlFor="register-user-cpf" className='font-light text-sm'>CPF:</label>
                            <div className='flex items-center gap-2'>
                                <input type="text" maxLength={14} className='bg-transparent text-xs w-full text-black placeholder:text-black/50 outline-none' id='register-user-cpf' name='register-user-cpf' value={userCpf} onChange={(e) => setUserCpf(targetCPF(e.target.value))} autoComplete='off' placeholder='XXX.XXX.XXX-XX' />
                                <p >C</p>
                            </div>
                        </div>
                        : null}


                    {cpfRequired ? errorTarget != '' && errorTarget.includes("CPF") ?
                        <div className='flex w-full'>
                            <p className='text-red-clean-type text-xs'>*{errorTarget}</p>
                        </div>
                        : null
                        : null}


                    {cpfRequired ? userCpf.length > 14 ?
                        <div className='flex w-full'>
                            <p className='text-red-clean-type text-xs'>*Volte o MaxLength ao normal :/</p>
                        </div>
                        : null : null}







                    <div className='flex flex-col  border-b bg-transparent border-black'>
                        <label htmlFor="register-user-password" className='font-light text-sm'>Senha:</label>
                        <div className='flex items-center gap-2'>
                            <input type="password" className='bg-transparent text-xs w-full text-black placeholder:text-black/50 outline-none' id='register-user-password' name='register-user-password' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} autoComplete='off' placeholder='Digite uma Senha Forte' />
                            <img src={passwordIcon} alt="" className='w-5 h-5' />
                        </div>
                    </div>


                    {userPassword != "" && validPassword != "" ?
                        <p className='text-xs text-orange-600'>{RegexPassword(userPassword)}</p>
                        : null}




                </div>

                <div className='flex w-10/12 mt-2 '>
                    <p className='font-light text-sm text-red-button-send-feedback'>Esqueceu a senha?</p>

                </div>

                <div className='flex w-full h-[50px] justify-center mt-4'>
                    {
                        // validEmail != '' ?
                        //     <button type='submit' disabled={true} className='w-[125px] px-4 py-2  text-white     hover:shadow-lg  bg-red-800/35 border-b-4 border-red-950/15 hover:border-0 hover:bg-red-700/35 cursor-not-allowed  md:w-[175px] lg:[225px] rounded-b-xl rounded-md'>
                        //         {actionForm}

                        //     </button>
                        //     :
                        //     validPassword != "" ?

                        //         <button type='submit' disabled={true} className='w-[125px] px-4 py-2  text-white     hover:shadow-lg  bg-red-800/35 border-b-4 border-red-950/15 hover:border-0 hover:bg-red-700/35 cursor-not-allowed  md:w-[175px] lg:[225px] rounded-b-xl rounded-md'>
                        //             {actionForm}

                        //         </button> :cpfRequired ? userCpf.length > 14 ? <button type='submit' disabled={true} className='w-[125px] px-4 py-2  text-white     hover:shadow-lg  bg-red-800/35 border-b-4 border-red-950/15 hover:border-0 hover:bg-red-700/35 cursor-not-allowed  md:w-[175px] lg:[225px] rounded-b-xl rounded-md'>
                        //             {actionForm}

                        //         </button>:null:



                        //         errorTarget != '' ? <button type='submit' disabled={true} className='w-[125px] px-4 py-2  text-white     hover:shadow-lg  bg-red-800/35 border-b-4 border-red-950/15 hover:border-0 hover:bg-red-700/35 cursor-not-allowed  md:w-[175px] lg:[225px] rounded-b-xl rounded-md'>
                        //             {actionForm}

                        //         </button> :


                        actionName == "Cadastre-se" ?


                            <button type='submit' disabled={validEmail != '' || validPassword != '' || errorTarget != "" ? true : false} className={`w-[125px] px-4 py-2  text-white   border-b-4 ${validEmail != "" || validPassword != '' || userCpf.length > 14 || errorTarget != "" ? 'border-red-950/15 bg-red-950/15 hover:border-0 hover:bg-red-700/35 cursor-not-allowed' :
                                'bg-red-clean-type border-b-4 border-red-800 hover:border-0 hover:bg-red-700 '}  md:w-[175px] lg:w-[225px] rounded-b-xl rounded-md`}>
                                {actionForm}

                            </button> : actionName == "Login" ?


                                <button type='submit' disabled={validEmail != '' || validPassword != '' || errorTarget != "" ? true : false} className={`w-[125px] px-4 py-2  text-white   border-b-4 ${validEmail != "" || validPassword != '' || errorTarget != "" ? 'border-red-950/15 bg-red-950/15 hover:border-0 hover:bg-red-700/35 cursor-not-allowed' :
                                    'bg-red-clean-type border-b-4 border-red-800 hover:border-0 hover:bg-red-700 '}  md:w-[175px] lg:w-[225px] rounded-b-xl rounded-md`}>
                                    {actionForm}

                                </button> : null

                        // actionName == "Login" ? userEmail.length == 0 || userPassword.length == 0 ?
                        //     <button type='submit' disabled={true} className='w-[125px] px-4 py-2  text-white     hover:shadow-lg  bg-red-800/35 border-b-4 border-red-950/15 hover:border-0 hover:bg-red-700/35 cursor-not-allowed  md:w-[175px] lg:[225px] rounded-b-xl rounded-md'>
                        //         {actionForm}

                        //     </button> : <button type='submit' className='w-[125px] px-4 py-2  text-white    cursor-pointer hover:shadow-lg  bg-red-clean-type border-b-4 border-red-800 hover:border-0 hover:bg-red-700  md:w-[175px] lg:[225px] rounded-b-xl rounded-md'>
                        //         {actionForm}

                        //     </button> :null

                    }







                </div>
                <div className='flex flex-col w-full items-center mt-3  space-y-2'>
                    {newUser ?
                        <p className='font-light text-sm text-red-button-send-feedback'>primeira vez? <Link to={"/Register"}>Cadastre-se</Link></p>
                        : null}
                    <p>OU</p>
                    <hr className='w-[100px] md:w-[150px] lg:w-[200px] h-[2px] bg-black' />
                </div>

                <div className='w-full justify-center my-1 flex gap-3 py-4'>
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
