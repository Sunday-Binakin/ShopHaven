import React from 'react'
import { Mail } from 'lucide-react';


const Subscribe = () => {
    return (
        <div className='bg-black text-white w-[90%] h-[20rem] flex gap-[10rem] m-16 rounded-3xl'>
            <div className='flex flex-col items-center mt-8 text-6xl font-bold'>
                <h1>STAY UPTO DATE ABOUT</h1>
                <h1>OUR LATEST OFFERS</h1>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 mt-8'>
                <div className='relative'>
                    <Mail className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400' />
                    <input
                        type="text"
                        placeholder="Enter your email address"
                        className='w-[20rem] pl-12 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-black'
                    />
                </div>
                <button className='w-[20rem] text-white px-8 py-3 border border-white rounded-xl hover:bg-gray-800 transition-colors'>
                    Subscribe to Newsletter
                </button>
            </div>
        </div>
    )
}

export default Subscribe
