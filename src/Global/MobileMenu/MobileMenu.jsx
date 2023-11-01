import { useState } from 'react';
import { HiBars3BottomLeft, HiMiniXMark, HiOutlineShoppingCart } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import { IoHomeOutline, IoPersonOutline } from 'react-icons/io5';

const MobileMenu = () => {
    const {user} = useAuth()
    const {carts} = useCart();
    const [isToggle, setIsToggle] = useState(false);

    const handleToggleMenu = () => {
        setIsToggle(!isToggle)
    }
    
    return (
        <div className='lg:hidden relative'>
            <div className={`mobile-left ${isToggle ? 'fixed' : 'hidden'}`}>
                <ul>
                    <li className='border-b flex px-5 py-2 items-center justify-between border-gray-200'>
                        <div className='text-3xl  text-secondary font-bold'>STORE<span className='text-primary'>MUT</span></div>
                        <span onClick={ handleToggleMenu } className='flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-slate-100'><HiMiniXMark /></span>
                    </li>
                    <li><Link to={'/'} className='mobilemenu' >home</Link></li>
                    <li><Link to={'/dashboard/add-product'} className='mobilemenu' >Add Product</Link></li>
                    <li><Link to={'/my-cart'} className='mobilemenu' >My Cart</Link></li>
                    <li><a href="#" className='mobilemenu' >My Cart</a></li>
                    <li><a href="#" className='mobilemenu' >Login</a></li>
                </ul>
            </div>
            <div className='mobilembttom'>
                <ul className='flex items-center justify-around'>
                    <li><button onClick={ handleToggleMenu } className='mobilemenu-icon'> <HiBars3BottomLeft className='text-xl' /></button></li>
                    <li><Link to={'/'} className='mobilemenu-icon'> <IoHomeOutline className='text-xl' /></Link></li>
                    <li><Link to={'/my-cart'} className='mobilemenu-icon relative'> <HiOutlineShoppingCart className='text-xl' /> <span className='absolute -top-1 -right-2 w-5 h-5 text-xs text-white bg-primary rounded-full flex items-center justify-center'>{carts?.length}</span> </Link></li>
                    <li><Link to={ user ? '/dashboard' : '/login'} className='mobilemenu-icon'> <IoPersonOutline className='text-xl' /></Link></li>
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;