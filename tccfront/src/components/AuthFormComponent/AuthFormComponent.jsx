import React, { useContext, useEffect, useState } from 'react'
import emailIcon from '../../assets/img/emailicon.svg'
import passwordIcon from '../../assets/img/passwordicon.svg'
import perfilNameIcon from '../../assets/img/perfil-name-icon.svg'
import identityCard from '../../assets/img/identity-card.svg'
import eyeOpen from '../../assets/img/eye-pass-open.png'
import eyeClose from '../../assets/img/eye-pass-close.png'
import googleIcon from '../../assets/img/google-icon.svg'
import facebookIcon from '../../assets/img/facebook-icon.svg'
import { Link } from 'react-router-dom'
import { CalygamAuthContext } from '../../context/CalygamAuthContext/CalygamAuthContext'
import { targetCPF } from '../../utils/MaskCPF/MaskCPF'
import { RegexEmail } from '../../utils/RegexEmail/RegexEmail'
import { RegexPassword } from '../../utils/RegexPassword/RegexPassword'
import { motion } from 'framer-motion'


export default function AuthFormComponent({ actionName, nameRequired, cpfRequired, newUser, actionForm, handleSendFormAuth, errorTarget }) {



    const buttonVariants = {
        hover: {
            scale: 1.05,
            backgroundColor: '#f0f0f0',
            transition: { duration: 0.3 },
        },
    };

    const iconVariants = {
        hover: {
            scale: 1.2,
            rotate: 360,
            transition: { duration: 0.5 },
        },
    };

    const textVariants = {
        hover: {
            color: '#4285F4',
            transition: { duration: 0.3 },
        },
    };
    const goToGoogle = () => {
        window.location.href = "http://localhost:8080/auth/google";
    };

    const { userName, setUserName,
        userEmail, setUserEmail,
        userPassword, setUserPassword,
        userPhone, setUserPhone,
        userCpf, setUserCpf } = useContext(CalygamAuthContext)

    const [validEmail, setValidEmail] = useState("false")
    const [validPassword, setValidPassword] = useState("false")
    const [showPassword, setShowPassword] = useState(false)

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
        <motion.div className={`font-poppins flex flex-col items-center py-4  bg-white/40 rounded-2xl  w-[80%] my-10  `}
        initial={{translateX:"130vw"}}
      animate={{translateX:"0vw"} }
      transition={{type:"tween",duration:0.8,ease:"easeInOut"}}>
            <div className='w-10/12 flex flex-col '>
                <div className='w-full flex justify-between flex-wrap gap-2 my-6 '>
                    <p className='text-white font-normal text-lg text-nowrap'>Bem Vindo ao <span className='text-calygam-purple-semi-strong'>Calygam</span></p>
                    {!newUser ?
                        <div className='flex flex-col  justify-center items-center text-xs'>
                            <p className='text-black'>Possui conta?</p>
                            <p className='font-light hover:underline text-white'><Link to={"/Login"}>Entrar</Link></p>
                        </div>
                        :
                        <div className='flex flex-col  justify-center items-center text-xs'>
                            <p className='text-black'>Sem conta?</p>
                            <p className='font-light hover:underline text-white'><Link to={"/Register"}>Inscrever-se</Link></p>
                        </div>

                    }
                </div>
                <h2 className=' font-semibold text-white mt-2 text-3xl'>{actionName}</h2>

                <div className=' my-1  flex  py-4'>

                    <motion.button
                        type="button"
                        className="my-1 lg:w-8/12 w-full flex items-center bg-calygam-white-matte gap-x-2 md:px-8 px-4 rounded-lg outline-none py-3"
                        onClick={goToGoogle}
                        variants={buttonVariants}
                        whileHover="hover"
                    >
                        <motion.div
                            className="w-5 h-5 rounded-full overflow-hidden"
                            variants={iconVariants}
                        >
                            <img
                                src={googleIcon}
                                alt="Google Icon"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <motion.p
                            className="md:text-sm text-xs text-calygam-blue-semi-light font-medium"
                            variants={textVariants}
                        >
                            Entrar com o Google
                        </motion.p>
                    </motion.button>


                </div>
                <div className='flex flex-col w-full items-center mt-3  space-y-2'>

                    <p>OU</p>
                    <span className='w-[100px] md:w-[150px] lg:w-[200px] h-[2px] bg-white' ></span>
                </div>
                <form className='flex flex-col my-6 space-y-3  w-full items-center h-full' onSubmit={handleSendFormAuth}>

                    <div className='flex flex-col h-full w-full space-y-4'>
                        {nameRequired ?
                            <div className='flex flex-col gap-y-1  '>
                                <label htmlFor="register-user-name" className='font-light text-white text-sm'>Seu Usuário:</label>
                                <div className='flex items-center gap-y-2 bg-white py-2 px-4 rounded-md'>
                                    <input type="text" maxLength={15} className='bg-transparent text-xs w-full text-black placeholder:text-black/50 outline-none' id='register-user-name' name='register-user-name' value={userName} onChange={(e) => setUserName(e.target.value)} autoComplete='off' placeholder='Digite seu nome' />
                                    <img src={perfilNameIcon} alt="" className='w-5 h-5' />
                                </div>
                            </div> : null}

                        {userName.length > 15 ?
                            <div className='flex w-full'>
                                <p className='text-red-grad-bold-type font-semibold text-xs'>*usuário deve conter menos de 15 caracteres!</p>
                            </div>
                            : null
                        }
                        {userName.length == 15 ?
                            <div className='flex w-full'>
                                <p className='text-orange-600 text-xs'>*Limite de caracteres atingido!</p>
                            </div>
                            : null
                        }

                        <div className={"flex flex-col gap-y-1  "}>
                            <label htmlFor="register-user-email" className='font-light text-white text-sm'>Digite seu endereço de email:</label>
                            <div className='flex items-center gap-2 bg-white py-2 px-4 rounded-md'>
                                <input type="email" className='bg-transparent text-xs w-full text-black placeholder:text-black/50 outline-none' id='register-user-email' name='register-user-email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} autoComplete='off' placeholder='calygam@gmail.com' />
                                <img src={emailIcon} alt="" className='w-5 h-5' />
                            </div>
                        </div>


                        {
                            errorTarget.includes("Email") ?
                                <div className='flex w-full'>
                                    <p className='text-red-grad-bold-type font-semibold text-xs'>*{errorTarget}</p>
                                </div>
                                : null


                        }

                        {validEmail != '' && userEmail != '' ?
                            <div className='flex w-full'>
                                <p className='text-red-grad-bold-type font-semibold text-xs'>*{validEmail}</p>
                            </div>
                            : null
                        }

                        {cpfRequired ?
                            <div className={`flex flex-col gap-y-1    bg-transparent ${errorTarget.includes("CPF") ? 'border-red-500' : 'border-black'}  `}>
                                <label htmlFor="register-user-cpf" className='font-light text-white text-sm'>CPF:</label>
                                <div className='flex items-center gap-2 bg-white py-2 px-4 rounded-md'>
                                    <input type="text" maxLength={14} className='bg-transparent text-xs w-full text-black placeholder:text-black/50 outline-none' id='register-user-cpf' name='register-user-cpf' value={userCpf} onChange={(e) => setUserCpf(targetCPF(e.target.value))} autoComplete='off' placeholder='XXX.XXX.XXX-XX' />
                                    <img src={identityCard} alt="Campo de CPF" className='w-6 h-6' />
                                </div>
                            </div>
                            : null}


                        {cpfRequired ? errorTarget != '' && errorTarget.includes("CPF") ?
                            <div className='flex w-full'>
                                <p className='text-red-grad-bold-type font-semibold text-xs'>*{errorTarget}</p>
                            </div>
                            : null
                            : null}


                        {cpfRequired ? userCpf.length > 14 ?
                            <div className='flex w-full'>
                                <p className='text-red-grad-bold-type font-semibold text-xs'>*Volte o MaxLength ao normal :/</p>
                            </div>
                            : null : null}







                        <div className='flex flex-col gap-y-1  '>
                            <label htmlFor="register-user-password" className='font-light text-white text-sm'>Senha:</label>
                            <div className='flex items-center gap-2 bg-white py-2 px-4 rounded-md'>
                                <input type={showPassword ? "text" : "password"} className='bg-transparent text-xs w-full text-black placeholder:text-black/50 outline-none' id='register-user-password' name='register-user-password' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} autoComplete='off' placeholder='Digite uma Senha Forte' />
                                <img src={showPassword?eyeOpen:eyeClose} alt="" className='w-6 h-6 opacity-90 cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
                            </div>
                        </div>


                        {userPassword != "" && validPassword != "" ?
                            <p className='text-xs text-red-grad-bold-type font-semibold'>{RegexPassword(userPassword)}</p>
                            : null}




                    </div>

                    <div className='flex w-full justify-end mt-2 '>
                        <p className='font-normal text-sm text-white/85'>Esqueceu a senha?</p>

                    </div>

                    <div className='flex w-full h-[50px] justify-end mt-4'>
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


                            actionName == "Criar Conta" ?


                                <button type='submit' disabled={validEmail != '' || userName.length > 15 || validPassword != '' || errorTarget != "" ? true : false} className={`outline-none  w-[125px] h-[50px] px-4 py-2  text-white   border-b-4 ${validEmail != "" || validPassword != '' || userCpf.length > 14 || errorTarget != "" ? 'border-red-950/15  bg-red-950/15 hover:border-0 hover:bg-red-700/35 cursor-not-allowed' :
                                    'bg-calygam-purple-medium-light border-b-4 border-purple-800 hover:border-0 hover:bg-purple-700 '}  md:w-[175px] lg:w-[225px] rounded-b-xl rounded-md`}>
                                    {actionForm}

                                </button> : actionName == "Login" ?


                                    <button type='submit' disabled={validEmail != '' || userName.length > 15 || validPassword != '' || errorTarget != "" ? true : false} className={`outline-none w-[125px] h-[50px] px-4 py-2  text-white   border-b-4 ${validEmail != "" || validPassword != '' || errorTarget != "" ? 'border-red-950/15 bg-red-950/15  hover:border-0 hover:bg-red-700/35 cursor-not-allowed' :
                                        'bg-calygam-purple-medium-light border-b-4 border-purple-800 hover:border-0 hover:bg-purple-700 '}  md:w-[175px] lg:w-[225px] rounded-b-xl rounded-md`}>
                                        {actionForm}

                                    </button> : null

                            // actionName == "Login" ? userEmail.length == 0 || userPassword.length == 0 ?
                            //     <button type='submit' disabled={true} className='w-[125px] px-4 py-2  text-white     hover:shadow-lg  bg-red-800/35 border-b-4 border-red-950/15 hover:border-0 hover:bg-red-700/35 cursor-not-allowed  md:w-[175px] lg:[225px] rounded-b-xl rounded-md'>
                            //         {actionForm}

                            //     </button> : <button type='submit' className='w-[125px] px-4 py-2  text-white    cursor-pointer hover:shadow-lg  bg-red-retext-red-grad-bold-type font-semibold border-b-4 border-red-800 hover:border-0 hover:bg-red-700  md:w-[175px] lg:[225px] rounded-b-xl rounded-md'>
                            //         {actionForm}

                            //     </button> :null

                        }







                    </div>





                </form>
            </div>
        </motion.div>
    )
}
