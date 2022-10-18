import React from 'react'
import Image from 'next/image'
import logo from './images/airbnbRed.png'
import {SearchIcon,GlobeAltIcon,MenuIcon,UsersIcon,UserCircleIcon} from '@heroicons/react/solid'



const Header = () => {
  return (
    <header className=' sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>



        {/* left */}

        <div className='flex relative items-center h-10 cursor-pointer my-auto'>
            <Image src={logo} layout='fill' objectFit='contain' 
            objectPosition="left" />
        </div>



        {/* middle */}

        <div className='flex pr-8'>

            <div className='flex md:shadow-xl items-center border-2 rounded-full px-4 py-2 w-full '>

                <input type='text' placeholder='Start Your Search' className=' bg-transparent text-gray-600 placeholder-gray-400 border-none outline-none w-full px-2' />


                <SearchIcon className='h-8 bg-orange-400 p-1 rounded-full text-white text-xl cursor-pointer hidden md:inline-flex mx-auto md:mx-2 hover:scale-125 transition-all ease-in-out duration-300' />

                
            </div>

            

        </div>



        {/* right */}

        <div className='flex space-x-8 items-center justify-end ml-5 '>
            <div className='border-2 space-x-2 px-4 py-2 rounded-full hover:scale-125 transition-all ease-in-out cursor-pointer duration-300 hidden md:inline-flex'>
                <p className='text-gray-500 font-semibold'>Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />
            </div>


            <div className='flex border-2 px-4 py-2 rounded-full space-x-3 hover:scale-125 transition-all ease-in-out duration-300'>
                <MenuIcon className='h-6 cursor-pointer' />
                <UsersIcon className='h-6 cursor-pointer' />
            </div>

        </div>
        

    </header>



  )
}

export default Header