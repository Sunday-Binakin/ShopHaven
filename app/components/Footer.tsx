import Image from 'next/image';
import shop from '../../public/images/shop.png';
import Socials from './Socials';

export default function Footer() {
    return (
        <div className="flex gap-5 md:h-10 md:w-[100%] px-8 my-2">
            <div className=" flex flex-col gap-3.5  h-[9rem] w-[20%]">
                <Image src={shop} alt="shop Haven" className='md:w-[6rem] md:h-[4rem]' />
                <p className='text-xl'>
                    Shop Haven is a clothing store where
                    we have clothes that suit your style and which you're Products.From women to men
                </p>
                <Socials />
            </div>
            <div className="  w-[20%] flex flex-col gap-3.5 text-xl">
                <h1  className='font-semibold'>Shop Haven</h1>
                <p>About</p>
                <p>Features</p>
                <p>Works</p>
                <p>Careers</p>
            </div>
            <div className="  w-[20%] flex flex-col gap-3.5 text-xl  font-">
                <h1  className='font-semibold'>Help</h1>
                <p>Customer Support</p>
                <p>Delivery Details</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
            <div className="  w-[20%] flex flex-col gap-3 text-xl">
                <h1 className='font-semibold'>FAQ</h1>
                <p>Account</p>
                <p>Manage Deliveries</p>
                <p>Orders</p>
                <p>Payment</p>
            </div>
            <div className=" w-[20%]  flex flex-col gap-3 text-xl">
                <h1 className='font-semibold'>
                    Resources
                </h1>
                <p>Free eBook</p>
                <p>Development Tutorials</p>
                <p>How to-Blog</p>
                <p>Youtube Playlist</p>
            </div>
        </div>
    );
}