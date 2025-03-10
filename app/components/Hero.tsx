import React from 'react'
import Image from 'next/image'
import hero from '../../public/images/shaven.jpg';
import HeroStats from './HeroStats';

const Hero = () => {
    return (
        <div className='flex   h-[60vh] '>
            <div className='w-[50%] flex flex-col p-10'>
                <div>
                    <h1 className='font-bold text-7xl'>FIND CLOTHES</h1>
                    <h1 className='font-bold text-7xl'>THAT MATCHES</h1>
                    <h1 className='font-bold text-7xl'>YOUR STYLE</h1>
                </div>
                <p className='text-lg  mt-4'>Browse thought our diverse range of meticulous garments,designed to bring out your individuality and cater for your sense of style</p>
                <button className='bg-black text-white h-12 w-[220px] rounded-xl mt-4'>Shop Now</button>
                <div className='flex justify-around mt-20'>
                    <HeroStats number="200+" text="International Brands" />
                    <div className='h-12 w-[2px] bg-gray-300'></div>
                    <HeroStats number="2,000+" text="High-Quality Products" />
                    <div className='h-12 w-[2px] bg-gray-300'></div>
                    <HeroStats number="30,000+" text="Happy Customers" />
                </div>
            </div>
            <div className='w-[50%] h-[100%]'>
                <Image
                    src={hero}
                    alt='Hero Image'
                    className='w-[100%] h-[100%] object-cover'
                    quality={100}
                    priority={true}
                />

            </div>

        </div>
    )
}

export default Hero
