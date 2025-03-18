import React from 'react'
import { Star, CircleCheck } from 'lucide-react';

const CustomersReview = ({ name, review }: { name: string; review: string }) => {
    return (
        <div className='w-[350px] lg:w-[450px] mt-4 lg:mt-6 h-[220px] lg:h-[280px] md:flex  md:gap-1  gap-1 lg:gap-2 bg-white border rounded-xl flex flex-col'>
            <div className='flex m-4 md:gap-1.5 lg:m-6'>
                <Star fill='gold' color='gold' className='lg:w-6 lg:h-6' />
                <Star fill='gold' color='gold' className='lg:w-6 lg:h-6' />
                <Star fill='gold' color='gold' className='lg:w-6 lg:h-6' />
                <Star fill='gold' color='gold' className='lg:w-6 lg:h-6' />
            </div>
            <h2 className='flex gap-0.5 lg:gap-1 mx-2 lg:mx-4 my-0.5 lg:my-1 lg:text-xl'>
                {name} <CircleCheck fill='green' color='white' className='lg:w-6 lg:h-6' />
            </h2>
            <p className='mx-2 lg:mx-4 my-0.5 lg:my-1 lg:text-lg'>{review}</p>
        </div>
    );
}

export default CustomersReview;
