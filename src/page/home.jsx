import {useContext, useEffect, useState} from 'react'
import Template from './template'
import {AppContext} from '../App'
import { useNavigate, Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Home() {

  const [mobile, setMobile] = useState(false)
  
  const Context = useContext(AppContext)
  let navigate = useNavigate();
  useEffect(() =>{
    if(Context.user === null){
      navigate("/");
    }
  })

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <Template>
      <div className="fixed w-full z-10 bg-white">
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

      <div className="container mx-auto p-5 pt-28">
        <div className="relative">
          <input type="text" placeholder='Search' className="p-2 w-full h-9 outline outline-1 outline-gray-300 shadow-md rounded-md" />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer">
              
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-gray-400 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-gray-400 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>

            </div>
        </div>
      </div>

      <div className='container mx-auto p-5 rounded-md'>
        <Carousel responsive={responsive} showDots={true} transitionDuration={500}>
        <div>
          <div className="lg:h-96 mb-5 h-36 rounded-md bg-gray-500 flex justify-center items-center">
            <p className="texy-center text-2xl fornt-bold text-white">Slide 1</p>
          </div>
        </div>
        <div>
          <div className="lg:h-96 mb-5 h-36 rounded-md bg-gray-500 flex justify-center items-center">
            <p className="texy-center text-2xl fornt-bold text-white">Slide 2</p>
          </div>
        </div>
        <div>
          <div className="lg:h-96 mb-5 h-36 rounded-md bg-gray-500 flex justify-center items-center">
            <p className="texy-center text-2xl fornt-bold text-white">Slide 3</p>
          </div>
        </div>
        <div>
          <div className="lg:h-96 mb-5 h-36 rounded-md bg-gray-500 flex justify-center items-center">
            <p className="texy-center text-2xl fornt-bold text-white">Slide 4</p>
          </div>
        </div>
      </Carousel>
      </div>

      <div className="container mx-auto grid grid-cols-3 gap-5 p-10">

        <div className='rounded-lg shadow-xl bg-gray-200'>
          <div className="flex justify-center h-20 items-center">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="card_giftcard_24px">
                <path id="icon/action/card_giftcard_24px" fillRule="evenodd" clipRule="evenodd" d="M25 8.125H22.275C22.4125 7.7375 22.5 7.3125 22.5 6.875C22.5 4.8 20.825 3.125 18.75 3.125C17.4375 3.125 16.3 3.8 15.625 4.8125L15 5.65L14.375 4.8C13.7 3.8 12.5625 3.125 11.25 3.125C9.175 3.125 7.5 4.8 7.5 6.875C7.5 7.3125 7.5875 7.7375 7.725 8.125H5C3.6125 8.125 2.5125 9.2375 2.5125 10.625L2.5 24.375C2.5 25.7625 3.6125 26.875 5 26.875H25C26.3875 26.875 27.5 25.7625 27.5 24.375V10.625C27.5 9.2375 26.3875 8.125 25 8.125ZM18.75 5.625C19.4375 5.625 20 6.1875 20 6.875C20 7.5625 19.4375 8.125 18.75 8.125C18.0625 8.125 17.5 7.5625 17.5 6.875C17.5 6.1875 18.0625 5.625 18.75 5.625ZM12.5 6.875C12.5 6.1875 11.9375 5.625 11.25 5.625C10.5625 5.625 10 6.1875 10 6.875C10 7.5625 10.5625 8.125 11.25 8.125C11.9375 8.125 12.5 7.5625 12.5 6.875ZM5 24.375V21.875H25V24.375H5ZM5 10.625V18.125H25V10.625H18.65L21.25 14.1625L19.225 15.625L15 9.875L10.775 15.625L8.75 14.1625L11.35 10.625H5Z" fill="#2492F4" />
              </g>
            </svg>
          </div>
        </div>

        <div className='rounded-lg shadow-xl bg-gray-200'>
          <div className="flex justify-center h-20 items-center">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="build_24px">
                <path id="icon/action/build_24px" fillRule="evenodd" clipRule="evenodd" d="M16.9698 12.387L28.3198 23.737C28.8198 24.237 28.8198 25.0245 28.3198 25.4995L25.4448 28.3745C24.9573 28.862 24.1698 28.862 23.6823 28.3745L12.2948 16.987C9.39479 18.0745 6.00729 17.462 3.68229 15.137C0.807294 12.2745 0.544794 7.78698 2.86979 4.61198L7.65729 9.39948L9.43229 7.63698L4.63229 2.82448C7.81979 0.499479 12.2948 0.76198 15.1698 3.63698C17.5323 6.01198 18.1323 9.46198 16.9698 12.387ZM12.7448 13.912L24.5698 25.737L25.6698 24.6245L13.8573 12.812C14.4323 12.0745 14.8073 11.2495 14.9573 10.362C15.2698 8.62448 14.7573 6.76198 13.4073 5.41198C12.2198 4.23698 10.6573 3.68698 9.10729 3.77448L12.9698 7.63698L7.66979 12.937L3.80729 9.07448C3.71979 10.6245 4.26979 12.1995 5.45729 13.3745C6.75729 14.6745 8.54479 15.187 10.2448 14.937C11.1323 14.812 11.9823 14.4745 12.7448 13.912Z" fill="#2492F4" />
              </g>
            </svg>
          </div>
        </div>

        <div className='rounded-lg shadow-xl bg-gray-200'>
          <div className="flex justify-center h-20 items-center">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="perm_data_setting_24px">
                <path id="icon/action/perm_data_setting_24px" fillRule="evenodd" clipRule="evenodd" d="M22.4875 14.4625H25V0L0 25H14.45V22.5H6.0375L22.4875 6.0375V14.4625ZM29.7125 25.4L28.375 24.3625C28.4 24.1625 28.425 23.9625 28.425 23.75C28.425 23.5375 28.4125 23.3375 28.375 23.1375L29.7 22.1C29.8125 22 29.85 21.8375 29.775 21.7L28.525 19.5375C28.45 19.4 28.2875 19.35 28.1375 19.4L26.5875 20.025C26.2625 19.775 25.9125 19.5625 25.525 19.4125L25.2875 17.7625C25.275 17.6125 25.1375 17.5 24.9875 17.5H22.4875C22.3375 17.5 22.2 17.6125 22.175 17.7625L21.9375 19.4125C21.5625 19.575 21.2 19.775 20.875 20.025L19.325 19.4C19.1875 19.35 19.025 19.4 18.9375 19.5375L17.6875 21.7C17.6125 21.8375 17.6375 22 17.7625 22.1L19.0875 23.1375C19.0625 23.3375 19.05 23.5375 19.05 23.75C19.05 23.9625 19.0625 24.1625 19.0875 24.3625L17.7625 25.4C17.65 25.5 17.6125 25.6625 17.6875 25.8L18.9375 27.9625C19.0125 28.1 19.175 28.15 19.325 28.1L20.875 27.475C21.2 27.725 21.55 27.9375 21.9375 28.0875L22.175 29.7375C22.2 29.8875 22.325 30 22.4875 30H24.9875C25.1375 30 25.275 29.8875 25.3 29.7375L25.5375 28.0875C25.9125 27.925 26.275 27.725 26.5875 27.475L28.15 28.1C28.2875 28.15 28.45 28.1 28.5375 27.9625L29.7875 25.8C29.8625 25.6625 29.825 25.5 29.7125 25.4ZM21.8625 23.75C21.8625 24.7875 22.7 25.625 23.7375 25.625C24.775 25.625 25.6125 24.7875 25.6125 23.75C25.6125 22.7125 24.775 21.875 23.7375 21.875C22.7 21.875 21.8625 22.7125 21.8625 23.75Z" fill="#2492F4" />
              </g>
            </svg>
          </div>
        </div>

        <div className='rounded-lg shadow-xl bg-gray-200'>
          <div className="flex justify-center h-20 items-center">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="layers_24px">
                <path id="icon/maps/layers_24px" fillRule="evenodd" clipRule="evenodd" d="M15.25 20.5L24.45 13.3375L26.5 11.75L15.25 3L4 11.75L6.0375 13.3375L15.25 20.5ZM15.2375 23.675L6.025 16.5125L4 18.0875L15.25 26.8375L26.5 18.0875L24.4625 16.5L15.2375 23.675ZM22.425 11.75L15.25 6.1625L8.075 11.75L15.25 17.3375L22.425 11.75Z" fill="#2492F4" />
              </g>
            </svg>
          </div>
        </div>

        <div className='rounded-lg shadow-xl bg-gray-200'>
          <div className="flex justify-center h-20 items-center">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="layers_24px">
                <path id="icon/maps/layers_24px" fillRule="evenodd" clipRule="evenodd" d="M15.25 20.5L24.45 13.3375L26.5 11.75L15.25 3L4 11.75L6.0375 13.3375L15.25 20.5ZM15.2375 23.675L6.025 16.5125L4 18.0875L15.25 26.8375L26.5 18.0875L24.4625 16.5L15.2375 23.675ZM22.425 11.75L15.25 6.1625L8.075 11.75L15.25 17.3375L22.425 11.75Z" fill="#2492F4" />
              </g>
            </svg>
          </div>
        </div>

        <div className='rounded-lg shadow-xl bg-gray-200'>
          <div className="flex justify-center h-20 items-center pl-4">
            <svg width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="category_24px">
                <path id="icon/maps/category_24px" fillRule="evenodd" clipRule="evenodd" d="M4.375 11.25L11.25 0L18.125 11.25H4.375ZM13.6625 8.75L11.25 4.8L8.825 8.75H13.6625ZM18.125 13.75C15.0125 13.75 12.5 16.2625 12.5 19.375C12.5 22.4875 15.0125 25 18.125 25C21.2375 25 23.75 22.4875 23.75 19.375C23.75 16.2625 21.2375 13.75 18.125 13.75ZM15 19.375C15 21.1 16.4 22.5 18.125 22.5C19.85 22.5 21.25 21.1 21.25 19.375C21.25 17.65 19.85 16.25 18.125 16.25C16.4 16.25 15 17.65 15 19.375ZM0 24.375H10V14.375H0V24.375ZM7.5 16.875H2.5V21.875H7.5V16.875Z" fill="#2492F4" />
              </g>
            </svg>
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

export default Home
