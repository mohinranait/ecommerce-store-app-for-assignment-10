
import { HiOutlineHome } from "react-icons/hi2";
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhoneAlt, FaTelegramPlane, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-secondary'>
            <div className=' container px-5 lg:px-0 pt-24 pb-10'>
                <div className='grid lg:grid-cols-3 '>
                    <div className=' lg:col-span-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 '>
                        <div className="mb-7">
                            <p className='text-lg font-bold text-gray-300'>My Account</p>
                            <ul className='space-y-2 mt-5'>
                                <li><a href="#" className='text-gray-400 text-sm hover:text-primary transition-all duration-300 flex items-center gap-2 group '> <span className='w-[6px] h-[6px] rounded-full border inline-block group-hover:bg-primary group-hover:border-primary'></span> About</a></li>
                                <li><a href="#" className='text-gray-400 text-sm hover:text-primary transition-all duration-300 flex items-center gap-2 group '> <span className='w-[6px] h-[6px] rounded-full border inline-block group-hover:bg-primary group-hover:border-primary'></span> History</a></li>
                                <li><a href="#" className='text-gray-400 text-sm hover:text-primary transition-all duration-300 flex items-center gap-2 group '> <span className='w-[6px] h-[6px] rounded-full border inline-block group-hover:bg-primary group-hover:border-primary'></span> Community</a></li>
                                <li><a href="#" className='text-gray-400 text-sm hover:text-primary transition-all duration-300 flex items-center gap-2 group '> <span className='w-[6px] h-[6px] rounded-full border inline-block group-hover:bg-primary group-hover:border-primary'></span> Contact</a></li>
                                <li><a href="#" className='text-gray-400 text-sm hover:text-primary transition-all duration-300 flex items-center gap-2 group '> <span className='w-[6px] h-[6px] rounded-full border inline-block group-hover:bg-primary group-hover:border-primary'></span> Logical</a></li>
                            </ul>
                        </div>
                        <div className="mb-7">
                            <p className='text-lg font-bold text-gray-300'>Information</p>
                            <ul className='space-y-2 mt-5'>
                                <li><a href="#" className='text-gray-400 text-sm hover:text-primary transition-all duration-300 flex items-center gap-2 group '> <span className='w-[6px] h-[6px] rounded-full border inline-block group-hover:bg-primary group-hover:border-primary'></span> About</a></li>
                                <li><a href="#" className='text-gray-400 text-sm hover:text-primary transition-all duration-300 flex items-center gap-2 group '> <span className='w-[6px] h-[6px] rounded-full border inline-block group-hover:bg-primary group-hover:border-primary'></span> History</a></li>
                                <li><a href="#" className='text-gray-400 text-sm hover:text-primary transition-all duration-300 flex items-center gap-2 group '> <span className='w-[6px] h-[6px] rounded-full border inline-block group-hover:bg-primary group-hover:border-primary'></span> Community</a></li>
                                <li><a href="#" className='text-gray-400 text-sm hover:text-primary transition-all duration-300 flex items-center gap-2 group '> <span className='w-[6px] h-[6px] rounded-full border inline-block group-hover:bg-primary group-hover:border-primary'></span> Contact</a></li>
                                <li><a href="#" className='text-gray-400 text-sm hover:text-primary transition-all duration-300 flex items-center gap-2 group '> <span className='w-[6px] h-[6px] rounded-full border inline-block group-hover:bg-primary group-hover:border-primary'></span> Logical</a></li>
                            </ul>
                        </div>
                        <div className="mb-7">
                            <p className='text-lg font-bold text-gray-300'>Our Services</p>
                            <ul className='space-y-2 mt-5'>
                                <li><a href="#" className='text-gray-400 text-sm hover:text-primary transition-all duration-300 flex items-center gap-2 group '> <span className='w-[6px] h-[6px] rounded-full border inline-block group-hover:bg-primary group-hover:border-primary'></span> About</a></li>
                                <li><a href="#" className='text-gray-400 text-sm hover:text-primary transition-all duration-300 flex items-center gap-2 group '> <span className='w-[6px] h-[6px] rounded-full border inline-block group-hover:bg-primary group-hover:border-primary'></span> History</a></li>
                                <li><a href="#" className='text-gray-400 text-sm hover:text-primary transition-all duration-300 flex items-center gap-2 group '> <span className='w-[6px] h-[6px] rounded-full border inline-block group-hover:bg-primary group-hover:border-primary'></span> Community</a></li>
                                <li><a href="#" className='text-gray-400 text-sm hover:text-primary transition-all duration-300 flex items-center gap-2 group '> <span className='w-[6px] h-[6px] rounded-full border inline-block group-hover:bg-primary group-hover:border-primary'></span> Contact</a></li>
                                <li><a href="#" className='text-gray-400 text-sm hover:text-primary transition-all duration-300 flex items-center gap-2 group '> <span className='w-[6px] h-[6px] rounded-full border inline-block group-hover:bg-primary group-hover:border-primary'></span> Logical</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <p className='text-lg font-bold text-gray-300'>Contact Us</p>
                            <ul className='space-y-2 mt-5'>
                                <li className='flex gap-2 text-white '> <HiOutlineHome /> <p className='text-gray-400 text-sm   '>  <span className='font-bold'>Address:</span>  <span>1702 Los Angeles, California, American</span></p></li>
                                <li className='flex gap-2 text-white '> <FaTelegramPlane /> <p className='text-gray-400 text-sm   '>  <span className='font-bold'>Mail us:</span>  <span>demo@clickboom.com</span></p></li>
                                <li className='flex gap-2 text-white '> <FaPhoneAlt /> <p className='text-gray-400 text-sm   '>  <span className='font-bold'>Phone:</span>  <a href='tel:01728068200' className='text-white'>1-888-345-6789</a></p></li>
                                <li>
                                    <ul className="flex flex-wrap items-center gap-4 mt-4">
                                        <li><a className="social-btn" href="#"> <FaFacebookF className='z-10' /> </a></li>
                                        <li><a className="social-btn" href="#"> <FaLinkedin className='z-10' /> </a></li>
                                        <li><a className="social-btn" href="#"> <FaInstagram className='z-10' /> </a></li>
                                        <li><a className="social-btn" href="#"> <FaYoutube className='z-10' /> </a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>   
    );
};

export default Footer;