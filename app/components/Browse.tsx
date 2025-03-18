import React from 'react'
import Image from 'next/image'
import casual from '../../public/images/casual.jpg'
import formal from '../../public/images/formal.jpg'
import party from '../../public/images/party.jpg'
import gym from '../../public/images/gym.jpg'

const Browse = () => {
  return (
    <div className='bg-gray-100 w-full lg:w-[80%] h-auto lg:h-[50rem] flex flex-col justify-center items-center mx-auto rounded-3xl'>
      <h1 className='text-xl lg:text-2xl font-bold mt-4'>BROWSE BY DRESS STYLE</h1>
      <div className='w-full h-auto md:h-[45%] lg:h-[55%] flex flex-col lg:flex-row gap-2.5 p-4 lg:p-8'>
        <div className='w-full lg:w-[45%] h-48 lg:h-full relative'>
          <Image
            src={casual}
            alt="casual"
            fill
            className='object-cover rounded-2xl lg:rounded-4xl'
          />
          <p className='absolute top-3 text-white font-bold text-xl lg:text-2xl ml-4'>Casual</p>
        </div>
        <div className='w-full lg:w-[60%] h-48 lg:h-full relative'>
          <Image
            src={formal}
            alt="formal"
            fill
            className='object-cover rounded-2xl lg:rounded-4xl'
          />
          <p className='absolute top-3 font-bold text-white text-xl lg:text-2xl ml-4'>Formal</p>
        </div>
      </div>
      <div className='w-full h-auto md:h-[45%] lg:h-[55%] flex flex-col lg:flex-row gap-2.5 p-4 lg:p-8'>
        <div className='w-full lg:w-[75%] h-48 lg:h-full relative'>
          <Image
            src={party}
            alt="casual"
            fill
            className='object-cover rounded-2xl lg:rounded-4xl'
          />
          <p className='absolute top-3 text-black font-bold text-xl lg:text-2xl ml-4'>Party</p>
        </div>
        <div className='w-full lg:w-[45%] h-48 lg:h-full relative'>
          <Image
            src={gym}
            alt="casual"
            fill
            className='object-cover rounded-2xl lg:rounded-4xl'
          />
          <p className='absolute top-3 text-white font-bold text-xl lg:text-2xl ml-4'>Gym</p>
        </div>
      </div>
    </div>
  )
}

export default Browse
