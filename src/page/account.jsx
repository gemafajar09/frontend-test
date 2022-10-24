import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'
import { useNavigate } from 'react-router-dom'
import Template from './template'

function Account() {

    const [mobile, setMobile] = useState(false)
    const Context = useContext(AppContext)
    console.log(Context.user);
    let navigate = useNavigate();

    useEffect(() => {
        if (Context.user === null) {
            navigate("/");
        }
    })
    return (
        
        <Template>
            <div className="fixed w-full z-10 lg:block hidden bg-white">
                <div className="flex flex-col lg:flex-row lg:shadow-xl">
                    <div className="flex items-center justify-between px-4 lg:border-b-0">
                        <button onClick={() => setMobile(!mobile)} className="focus:outline-none block text-black lg:hidden">

                            <svg xmlns="http://www.w3.org/2000/svg" className='block h-5 w-5' fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                        <div className="w-52">
                            <a href="/template" className="lg:px-10 px-5 lg:pl-5 pl-2 font-mono uppercase text-black">
                                <img src={process.env.PUBLIC_URL + '/assets/LogoApps.png'} className="w-20" alt="icon" />
                            </a>
                        </div>
                    </div>
                    {/* menu */}
                    <div className="lg:bloc hidden lg:flex flex-col lg:flex-row justify-between w-full py-8 lg:py-4 lg:border-gray-500">
                        <div className="flex flex-col lg:flex-row">
                            <Link to="/home">
                                <p className="hover:text-pink-600 block px-4 py-2 text-black lg:py-5">Home</p>
                            </Link>
                            <Link to="/home">
                                <p className="hover:text-pink-600 block px-4 py-2 text-black lg:py-5">Cart</p>
                            </Link>
                            <Link to="/account">
                                <p className="hover:text-pink-600 block px-4 py-2 text-black lg:py-5">Account</p>
                            </Link>
                            <Link to="/userlist">
                                <p className="hover:text-pink-600 block px-4 py-2 text-black lg:py-5">User List</p>
                            </Link>
                            <Link to="/account">
                                <p className="hover:text-pink-600 block px-4 py-2 text-black lg:py-5">Log Out</p>
                            </Link>
                        </div>
                    </div>
                    {/* menu1 */}
                    <div className={`${mobile ? 'bloc' : 'hidden'} mt-20 ml-5 z-10 bg-white absolute w-28 h-32 outline outline-1 outline-gray-100 shadow-md rounded-md p-2`}>
                        <ul>
                            <li>
                                <Link to="/userlist">
                                    <p className="hover:text-pink-600 block px-4 py-2 text-black lg:py-5">User List</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <p className="hover:text-pink-600 block px-4 py-2 text-black lg:py-5">Log Out</p>
                                </Link>
                            </li>
                        </ul>
                        <div className='mt-5 b-1'>
                            <p className='text-sm'>V.1.0.0</p>
                        </div>
                    </div>
                </div>
            </div >

            <div className="lg:flex justify-center container mx-auto lg:pt-28">
                <div className="h-full lg:w-full lg:mt-12 w-[350px] lg:rounded-xl  lg:bg-gray-100 lg:shadow-2xl">
                    <div className="flex">
                        <div className="ml-2 mt-8 lg:hidden">
                            <Link to="/home">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </Link>
                        </div>
                        <div className="mt-8 flex justify-center w-full">
                            <p className="text-xl text-center font-bold text-gray-500">My Acount</p>
                        </div>
                    </div>

                    <div className="container mx-auto relative mt-10 mb-12">
                        <div className="w-full flex justify-center h-40">
                            <div className="rounded-full w-40 h-40 bg-gray-500 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-center ">
                            <p className='text-2xl font-bold text-gray-500'>{Context.user?.first_name} {Context.user?.last_name}</p>
                        </div>
                        <div className='flex justify-center'>
                            <p className='text-xs text-gray-300'>{Context.user?.email}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed bg-white bottom-0 w-full outline outline-t-0 outline-gray-100 p-1 lg:hidden">
                <div className="grid grid-cols-3 gap-2">
                    <div className='flex justify-center mt-1'>
                        <Link to="/home">
                            <div className='grid grid-rows-2'>
                                <div className='flex justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                </div>
                                <div>
                                    <p className='text-sm'>Home</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='flex justify-center mt-1'>
                        <Link to="/home">
                            <div className='grid grid-rows-2'>
                                <div className='flex justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm">Cart</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='flex justify-center mt-1'>
                        <Link to="/account">
                            <div className='grid grid-rows-2'>
                                <div className='flex justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>

                                </div>
                                <div>
                                    <p className="text-sm">Account</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </Template>
    )
}

export default Account
