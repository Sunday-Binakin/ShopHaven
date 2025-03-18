import React from 'react'
import { MoveRight, MoveLeft, Star, CircleCheck } from 'lucide-react';
import CustomersReview from './CustomersReview';

const HappyCustomers = () => {
    const customerReviews = [
        {
            name: "Sarah M.",
            review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit fuga facere repudiandae facilis quod cum dolorum iure quaerat iusto, modi sunt, consequuntur ipsam suscipit architecto quos quia error, accusamus magnam."
        },
        {
            name: "John D.",
            review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit fuga facere repudiandae facilis quod cum dolorum iure quaerat iusto."
        },
        {
            name: "Jane D.",
            review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit fuga facere repudiandae facilis quod cum dolorum iure quaerat iusto, modi sunt, consequuntur ipsam suscipit architecto quos quia error, accusamus magnam."
        },
        {
            name: "Doe J.",
            review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit fuga facere repudiandae facilis quod cum dolorum iure quaerat iusto."
        },

    ];
    return (
        <div className='mx-12 '>
            <div className='flex justify-start items-center p-10 '>
                {/* <div className='flex-1'></div> */}
                <h1 className='-ml-64 flex-1 text-center text-3xl font-bold'>Our Happy Customers</h1>
                <div className='flex gap-2 flex-1 justify-end'>
                    <MoveLeft size={40} />
                    <MoveRight size={40} />
                </div>
            </div>
            <div className=' w-full h-[20rem] md:gap-7.5 flex justify-around items-center'>
                {customerReviews.slice(0, 3).map((review, index) => (
                    <CustomersReview
                        key={index}
                        name={review.name}
                        review={review.review}
                    />
                ))}
            </div>
        </div>
    )
}

export default HappyCustomers
