import React from 'react'
import Image from 'next/image'
import shirt from '../../public/images/brazil.jpg'

const page = () => {
    return (
        <div>
            <h1>NEW ARRIVALS</h1>
            <div>
                <div className='bg-gray-50'>
                    <Image src={shirt} alt='shirt' className='w-[12rem] h-[14rem]' />

                </div>
            </div>
        </div>
    )
}

export default page
