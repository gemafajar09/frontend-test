import { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import http from '../action/configAxios'
import { AppContext } from '../App'

function Register() {
    let navigate = useNavigate();

    const Context = useContext(AppContext)

    useEffect(() => {
        if (Context.user === null) {
            navigate("/");
        }
        disabledBtn()
    })

    const [firstName, setFirstname] = useState('')
    const [lastName, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password1, setPassword1] = useState('')

    const [alertSuccess, setAlertSuccess] = useState(false)
    const alertConSuccess = () => {
        setAlertSuccess(!alertSuccess)
        navigate("/userlist");
    }

    const [alert, setAlert] = useState(false)
    const alertCon = () => {
        setAlert(!alert)
    }

    const [pass1, setPass1] = useState(false)
    const Cekpass = () => {
        setPass1(!pass1)
    }

    const [pass2, setPass2] = useState(false)
    const Cekpass1 = () => {
        setPass2(!pass2)
    }

    const [aktif, setAktif] = useState(false)
    const disabledBtn = () => {
        if (firstName !== '' && lastName !== '' && email !== '' && password !== '' && password1 !== '') {
            setAktif(true)
        } else {
            setAktif(false)
        }
    }


    const DaftarSekarang = () => {
        if (firstName !== '' && lastName !== '' && email !== '' && password !== '' && password1 !== '') {
            if (password === password1) {
                http.post("register", {
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    password: password
                }).then(result => {
                    console.log(result.status);
                    if (result.status === 200) {
                        setAlertSuccess(!alertSuccess)
                    }
                }).catch(err => {
                    console.log(err);
                })
            } else {
                setAlert(!alert)
            }
        } else {
            setAlert(!alert)
        }
    }

    return (
        <div>
            <div className="lg:flex justify-center">
                <div className="h-full w-full lg:mt-12 lg:w-[350px] lg:rounded-xl lg:bg-gray-100 lg:shadow-2xl">
                    <div className="flex">
                        <div className="ml-2 mt-8 lg:invisible">
                            <Link to="/userlist">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </Link>
                        </div>
                        <div className="mt-8 lg:ml-[80px] ml-24 w-full">
                            <p className="text-xl font-bold text-gray-500">Form Register</p>
                        </div>
                    </div>

                    <div className="container mx-auto mt-10">
                        <div className="ml-6 mr-6 mb-3">
                            <p className="mb-2 text-sm text-gray-400">First Name</p>
                            <input required onChange={event => setFirstname(event.target.value)} type="text" placeholder='First Name' className="p-2 lg:h-9 h-10 w-full border border-gray-400 rounded-md outline-1 outline-blue-500" />
                        </div>
                        <div className="ml-6 mr-6 mb-3">
                            <p className="mb-2 text-sm text-gray-400">Last Name</p>
                            <input required onChange={event => setLastname(event.target.value)} type="text" placeholder='Last Name' className="p-2 lg:h-9 h-10 w-full border border-gray-400 rounded-md outline-1 outline-blue-500" />
                        </div>
                        <div className="ml-6 mr-6 mb-3">
                            <p className="mb-2 text-sm text-gray-400">Email</p>
                            <input required onChange={event => setEmail(event.target.value)} type="text" placeholder='Email' className="p-2 lg:h-9 h-10 w-full border border-gray-400 rounded-md outline-1 outline-blue-500" />
                        </div>
                        <div className="ml-6 mr-6 mb-3" x-data="{ show: true }">
                            <p className="mb-2 text-sm text-gray-400">Password</p>
                            <div className="relative">
                                <input required onChange={event => setPassword(event.target.value)} type={pass1 ? 'text' : 'password'} placeholder='*****' className="p-2 lg:h-9 h-10 w-full border border-gray-400 rounded-md outline-1 outline-blue-500" />
                                <div onClick={Cekpass}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer">
                                    {
                                        pass1 ?
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                                stroke="currentColor" className="w-6 h-6  text-gray-500">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                                stroke="currentColor" className="w-6 h-6 text-gray-500">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="ml-6 mr-6 mb-3">
                            <p className="mb-2 text-sm text-gray-400">Confirm Password</p>
                            <div className="relative">
                                <input required onChange={event => setPassword1(event.target.value)} type={pass2 ? 'text' : 'password'} placeholder='*****' className="p-2 lg:h-9 h-10 w-full border border-gray-400 rounded-md outline-1 outline-blue-500" />
                                <div onClick={Cekpass1}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer">
                                    {
                                        pass2 ?
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                                stroke="currentColor" className="w-6 h-6  text-gray-500">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                                stroke="currentColor" className="w-6 h-6 text-gray-500">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="ml-6 mr-6 mb-6 mt-8">
                            <button onClick={DaftarSekarang} className={`${aktif ? '' : 'opacity-50 cursor-not-allowed'} w-full lg:h-9 h-10 outline outline-1 rounded-md bg-blue-500 text-sm text-white`}>Register</button>
                        </div>
                    </div>
                </div>
            </div>

            {
                alert ?
                    <div className="flex justify-center absolute top-24 z-20 w-full">
                        <div className="w-96 h-full p-5 mx-auto shadow-2xl outline outline-1 rounded-md outline-gray-300 bg-white">
                            <p className='text-center text-md font-bold'>oops!</p>
                            <p className='text-center'>Registration failed, please check your data.</p>

                            <div className='text-center mt-5'>
                                <button onClick={alertCon} className='rounded-md outline outline-1 outline-red-400 w-full h-9 bg-red-200 font-bold text-red-500'>OK</button>
                            </div>
                        </div>
                    </div>
                    : null
            }

            {
                alertSuccess ?
                    <div className="flex justify-center absolute top-24 z-20 w-full">
                        <div className="w-96 h-full p-5 mx-auto shadow-2xl outline outline-1 rounded-md outline-gray-300 bg-white">
                            <p className='text-center text-md font-bold'>Congratulation !</p>
                            <p className='text-center'>Registration is successful.</p>

                            <div className='text-center mt-5'>
                                <button onClick={alertConSuccess} className='rounded-md outline outline-1 outline-blue-400 w-full h-9 bg-blue-200 font-bold text-white'>Back</button>
                            </div>
                        </div>
                    </div>
                    : null
            }

        </div>
    )
}

export default Register
