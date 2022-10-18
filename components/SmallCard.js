import React from 'react'
import Image from 'next/image'

const SmallCard = ({img,location,distance}) => {
  return (
    <div className='flex items-center mt-5 m-2 space-x-4 rounded-xl cursor-pointer
    hover:bg-slate-300 hover:scale-110 transition-all ease-in-out px-4 py-2'>
        
        <div className='relative h-16 w-16'>
            <Image src={img} layout='fill' className='rounded-lg' />
        </div>

        <div>

            <h2 className='font-semibold text-xl'>{location}</h2>
            <h3 className='font-medium text-md'>{distance}</h3>

        </div>
    </div>
  )
}

export default SmallCard