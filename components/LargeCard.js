import React from 'react'
import Image from 'next/image'

const LargeCard = ({img,title,description,buttonText}) => {
  return (
    <div>
        <section className='relative py-16 cursor-pointer'>
            <div className='relative min-w-[300px] h-96 '>
                <Image src={img} layout="fill" objectFit='cover' className='rounded-2xl' />

            </div>

            <div className=' absolute top-32 left-12'>

                <h3 className='text-4xl font-semibold mb-3 w-64'>{title}</h3>

                <p className='font-medium'>{description}</p>

                <button className='text-lg text-white bg-gradient-to-r from-orange-500 to-yellow-300 px-6 py-3 rounded-full mt-6 hover:scale-110 transform duration-300 transition-all  '>{buttonText}</button>

            </div>
        </section>
    </div>
  )
}

export default LargeCard