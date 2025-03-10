import React from 'react';
import Image from 'next/image';
import shirt from '../../public/images/brazil.jpg';
import Arrival1 from '../../public/images/arrival1.jpg';
import Arrival2 from '../../public/images/arrivals2.jpg';
import Arrival3 from '../../public/images/arrival3.jpg';
import { Star } from 'lucide-react';

const Arrivals = () => {
    const newArrivals = [
        { image: Arrival1, name: "T-Shirt with Tape Details", rating: 4.5, price: 120 }, 
        { image: Arrival2, name: "T-Shirt with Tape Details", rating: 5.0, price: 240 },
        { image: Arrival3, name: "T-Shirt with Tape Details", rating: 4.0, price: 180 },
        { image: shirt, name: "T-Shirt with Tape Details", rating: 5.0, price: 130 },
    ];

    return (
        <div>
            <h1 className='flex justify-center mt-4 text-4xl font-bold'>NEW ARRIVALS</h1>
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
        </div>
    );
};

export default Arrivals;