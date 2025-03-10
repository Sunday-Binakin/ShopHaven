import Image from 'next/image';
import shop from '../../public/images/shop.png';
import { ShoppingCart, CircleUserRound, Search,ChevronDown  } from 'lucide-react';


export default function Navbar() {
    return (
        <div className='md:flex md:justify-between md:items-center md:px-10 md:py-5'>
            <Image  src={shop} alt="shop Haven" className='md:w-[4rem] md:h-[4rem]' />
            <div>
                <nav>
                    <ul className='md:flex justify-around gap-5.5'>
                        <li className='relative group'>
                            <a className='flex' href="#">Shop<ChevronDown className='mt-1' /></a>
                            <ul className='absolute hidden group-hover:block bg-white shadow-lg'>
                                <li><a href="#" className='block px-4 py-2'>Men</a></li>
                                <li><a href="#" className='block px-4 py-2'>Women</a></li>
                                <li><a href="#" className='block px-4 py-2'>Kids</a></li>
                            </ul>
                             
                        </li>
                        <li><a href="#">On Sale</a></li>
                        <li><a href="#">New Arrivals</a></li>
                        <li><a href="#">Brands</a></li>
                    </ul>
                </nav>
            </div>
            <div className='relative w-[45rem]'>
                <input type="text" placeholder='Search for Products' className='w-full h-10 bg-gray-200 rounded-2xl pl-10' />
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
            </div>
            <div className='md:flex gap-5'>
                <ShoppingCart />
                <CircleUserRound />
            </div>
        </div>

    );
}