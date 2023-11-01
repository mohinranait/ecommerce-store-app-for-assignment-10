import { useEffect, useState } from 'react';
import { IoCallOutline, IoHeartSharp, IoPersonSharp } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { HiMoon, HiShoppingCart, HiSun } from "react-icons/hi2";
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';
import useCart from '../../hooks/useCart';

const Header = () => {
    const [theme,setTheme] = useState('light')
    const {user,logout} = useAuth();
    const {carts} = useCart();
    const navigate = useNavigate();

    const totalPrice = carts?.reduce((total, current) => {
        return total + parseFloat(current?.price)
    },0)
    
    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
            toast.success("Logout Successfull");
        } catch (error) {
            toast.error(error.message);
        }
    }

    const handleTheme = () => {
        if( theme == 'dark' ){
            console.log('light');
            setTheme('light')
        }else{
            setTheme("dark")
            console.log('dark');
        }
    }

    useEffect(() => {
        const element = document.querySelector('html');
        if(theme === 'dark'){
            element.classList.add('dark');
        }else{
            element.classList.remove('dark');
        }
    },[theme]);

    return (
        <header className='hidden lg:block' >
            {/* Header Top */}
            <div className='border-b border-slate-200 bg-white dark:bg-[#0F172A] dark:border-black'>
                <div className='container px-5'>
                    <div className='flex items-center h-[45px] text-secondary justify-between dark:text-gray-200'>
                        <ul className='text-xs'>
                            <li className='flex items-center gap-1'> <IoCallOutline /> <span> Call us:  <a href="tel:1-888-345-6789" className='font-semibold'>1-888-345-6789</a> </span></li>
                        </ul>
                        <ul className='flex items-center justify-end gap-3 text-xs divide-x '>
                            {
                                user ? <li className=''>
                                        <a href="#" className='flex items-center gap-1'>  
                                        {
                                            user?.photoURL &&  <img src={user?.photoURL}  alt="" className='w-8 h-8 rounded-full' />
                                        }
                                            {user?.displayName}
                                        </a>
                                    </li> : 
                                    <li className=''>
                                        <Link to={'/login'} className='flex items-center gap-1'>
                                            <IoPersonSharp className='text-sm' />Login
                                        </Link>
                                    </li>
                            }
                            
                            <li className=' pl-3'><a href="#" className='flex items-center gap-1'><IoHeartSharp className='text-sm' /> Wishlist</a></li>
                            <li className=' pl-3'><a href="#" className='flex items-center gap-1'>USD</a></li>
                            <li className=' pl-3'>
                                <button onClick={handleTheme} className='flex items-center gap-1 text-xl'> {theme == 'dark' ? <HiSun /> : <HiMoon />  }  </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Header middle */}
            <div>
                <div className='container px-5 '>
                    <div className='grid grid-cols-12 gap-5'>
                        <div className='col-span-3 py-4 flex items-center'>
                            <h1 >
                                <Link to={'/'} className='text-4xl font-bold text-secondary dark:text-white'>STORE<span className='text-primary'>MUT</span> </Link>
                            </h1>
                        </div>
                        <div className='col-span-6 py-4'>
                            <form>
                                <div className='border-2 border-gray-300 rounded-3xl flex dark:border-gray-700'>
                                    <input type="search" className='header-input' placeholder='Search product...' />
                                    <button className='search-btn'>Search</button>
                                </div>
                            </form>
                        </div>
                        <div className='col-span-3 bg-[#DCDCDC] flex items-center justify-center py-4 dark:bg-black'>
                            <ul className='flex items-center gap-5'>
                                <li>
                                    <span className='relative'>
                                        <span className='count-cart'>{carts?.length}</span>
                                        <HiShoppingCart className='text-4xl text-secondary dark:text-white ' />
                                    </span>
                                </li>
                                <li>
                                    <p className='font-semibold uppercase text-sm text-secondary dark:text-white'>Shopping Cart</p>
                                    <p className='text-primary font-semibold text-lg'>${totalPrice}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header bottom */}
            <div className='border-t border-slate-200  bg-[#222222] dark:border-black '>
                <div className='container px-5 grid grid-cols-12 gap-5 '>
                    <div className='col-span-9'>
                        <ul className='flex '>
                            <li><Link to={'/'} className='header-link'>Home</Link></li>
                            <li><Link to={'/dashboard/add-product'} className='header-link'>Add Product</Link></li>
                            <li><Link to={'/my-cart'} className='header-link'>My Cart</Link></li>
                            <li className='ml-auto text-white'>
                                {
                                    user ? <>
                                        <button onClick={handleLogout} className=' header-menu '>Logout</button>
                                    </> : <>
                                        <Link to={'/login'} className=' header-menu '>Login</Link>|  
                                        <Link to={'/register'} className=' header-menu '> Register</Link>
                                    </>
                                }
                               
                            </li>
                        </ul>
                    </div>
                    <div className='bg-[#111111] col-span-3'>
                        <ul className='flex items-center justify-center gap-4 mt-[2px]'>
                            <li className='flex items-center'><a href="#" className='header-social'><FaFacebookF /></a></li>
                            <li className='flex items-center'><a href="#" className='header-social'><FaInstagram /></a></li>
                            <li className='flex items-center'><a href="#" className='header-social'><FaLinkedinIn /></a></li>
                            <li className='flex items-center'><a href="#" className='header-social'><FaGooglePlusG /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;