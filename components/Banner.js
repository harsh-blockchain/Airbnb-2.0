import React from 'react'
import banner from './images/hero1.jpg'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className=' relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] '>
        <Image src={banner} alt="banner" layout='fill' objectFit='cover'  />

        <div className='absolute space-y-4 top-1/2 w-full text-center '>
            <p className='text-orange-800 text-2xl font-semibold flex items-center justify-center'>Not Sure Where To Go ? Perfect...</p>

            <button className='bg-white px-6 py-3 text-2xl font-semibold rounded-full hover:bg-orange-400 hover:text-green-500 hover:scale-125 transition-all ease-in-out duration-300 hover:shadow-2xl'>I am Flexible</button>
        </div>
    </div>
  )
}

export default Banner