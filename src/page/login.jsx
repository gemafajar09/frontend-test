import { useState, useContext } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../App'
import http from '../action/configAxios'

function Login() {
    let navigate = useNavigate();
    const Context = useContext(AppContext)
    const [pass, setPass] = useState(false)
    const Cekpass = () => {
        setPass(!pass)
    }

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const Proseslogin = () => {
        http.post('login', {
            email: email,
            password: password,
        })
            .then(res => {
                if (res.status === 201) {
                    Context.setUser(res.data)
                    navigate("/home")
                } else {
                    console.log(res)
                }
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="container mx-auto">
            <div className="flex justify-center">
                <div className="w-80 mt-32 h-[400px] lg:bg-gray-100 lg:rounded-xl lg:shadow-xl">
                    <div className="flex justify-center mb-5">
                        <img src={process.env.PUBLIC_URL + '/assets/LogoApps.png'} className="w-20 mt-4" alt="" />
                    </div>
                    <div className="pl-3 pr-3 mb-4">
                        <p className="text-sm mb-2 text-gray-500">Email</p>
                        <input onChange={event => setEmail(event.target.value)} type="text" placeholder="Email"
                            className="w-full h-9 rounded-md outline outline-1 outline-gray-300 p-2 text-gray-500 focus:outline-blue-500" />
                    </div>
                    <div className="pl-3 pr-3 mb-4" x-data="{ show: true }">
                        <p className="text-sm mb-2 text-gray-600">Password</p>
                        <div className="relative">
                            <input onChange={event => setPassword(event.target.value)} placeholder="*******" type={pass ? 'text' : 'password'}
                                className="focus:outline-blue-500 w-full h-9 rounded-md outline outline-1 outline-gray-300 p-2 text-gray-500" />
                            <div onClick={Cekpass}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer">
                                {
                                    pass ?
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
                    <div className="flex justify-between pl-3 pr-3">
                        <div>
                            <p className="text-blue-400 text-sm text-center">Forgot Password</p>
                        </div>
                        <div>
                            <button onClick={Proseslogin} className="h-8 w-20 rounded-md bg-blue-500 text-white">Log In</button>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-center">
                        <div className="grid grid-rows-2">
                            <div className="flex justify-center">
                                <p className="text-sm lg:text-gray-500">Don't have an acount</p>
                            </div>
                            <div className="flex justify-center">
                                <Link to="/register" className="text-blue-500 text-center">Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login