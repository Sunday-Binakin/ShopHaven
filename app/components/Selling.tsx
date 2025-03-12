import React from 'react';
import Image from 'next/image';
// import shirt from '../../public/images/brazil.jpg';
import Selling1 from '../../public/images/selling1.jpg';
import Selling2 from '../../public/images/selling2.jpg';
import Selling3 from '../../public/images/selling3.jpg';
import Selling4 from '../../public/images/selling4.jpg';
import { Star } from 'lucide-react';

const Selling = () => {
    const newArrivals = [
        { image: Selling1, name: "T-Shirt with Tape Details", rating: 4.5, price: 212 }, 
        { image: Selling3, name: "T-Shirt with Tape Details", rating: 5.0, price: 145 },
        { image: Selling2, name: "T-Shirt with Tape Details", rating: 4.0, price: 80 },
        { image: Selling4, name: "T-Shirt with Tape Details", rating: 5.0, price: 210 },
    ];

    return (
        <div className='m-10'>
            <h1 className='flex justify-center mt-4 text-4xl font-bold'>Top Selling</h1>
            <div className='flex flex-wrap justify-center items-center gap-10 p-8'>
                {newArrivals.map((item, index) => (
                    <div key={index} className='bg-gray-50'>
                        <Image src={item.image} alt={item.name} className='w-[14rem] h-[14rem]' />
                        <p>{item.name}</p>
                        <p className="flex items-center">
                            {[...Array(5)].map((_, i) => {
                                const starPosition = i + 1;
                                const displayRating = item.rating === 5 ? 4.5 : item.rating;
                                const maxStars = Math.floor(displayRating);
                                
                                if (starPosition <= maxStars) {
                                    return <Star key={i} color='gold' fill='gold' />;
                                } else if (item.rating === 5 && starPosition === Math.ceil(displayRating)) {
                                    return (
                                        <div key={i} className="relative inline-block">
                                            <Star color='gold' fill='none' />
                                            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: 'inset(0 50% 0 0)' }}>
                                                <Star color='gold' fill='gold' />
                                            </div>
                                        </div>
                                    );
                                } else if (starPosition <= 5) {
                                    return <Star key={i} color='gold' fill='none' />;
                                }
                            })}  {item.rating === 5 ? '4.5' : item.rating}/5.0
                        </p>
                        <p className='font-semibold'>${item.price}</p>
                    </div>
                ))}
                
            </div>
            <div className="flex justify-center w-full">
                <button className='text-black text-2xl w-[10rem] rounded-3xl  px-6 py-2 hover:bg-gray-800 border border-gray-600'>View All</button>
            </div>
        </div>
    );
};

export default Selling;