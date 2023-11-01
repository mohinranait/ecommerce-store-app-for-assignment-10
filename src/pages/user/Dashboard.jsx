
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import { IoAppsSharp, IoLogOutOutline } from 'react-icons/io5';
import { HiOutlineBookmark, HiOutlineShoppingBag, HiOutlineShoppingCart, HiOutlineSquares2X2 } from 'react-icons/hi2';

const Dashboard = () => {
    const {logout} = useAuth();
    const handleLogout = async () => {
        await logout();
    }
    return (
        <section className='pt-10 min-h-screen'>
            <div className="container px-2 lg:px-0">
                <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-12 md:col-span-3'>
                        <ul className='border divide-y divide-gray-200 border-gray-200 rounded-md '>
                            <li><NavLink to={'/dashboard'} className=' px-5 py-3 font-medium text-secondary flex items-center gap-2 dark:text-gray-400' > <IoAppsSharp></IoAppsSharp> Account</NavLink></li>
                            <li><NavLink to={'/dashboard/add-product'} className=' px-5 py-3 font-medium text-secondary flex items-center gap-2 dark:text-gray-400' > <HiOutlineShoppingCart />Add Product </NavLink></li>
                            <li><NavLink to={'/dashboard/product-lists'} className=' px-5 py-3 font-medium text-secondary flex items-center gap-2 dark:text-gray-400' > <HiOutlineSquares2X2 />All Products </NavLink></li>
                            <li><NavLink to={'/dashboard/brands'} className=' px-5 py-3 font-medium text-secondary flex items-center gap-2 dark:text-gray-400' > <HiOutlineBookmark></HiOutlineBookmark>Brand Lists </NavLink></li>
                           
                            <li><NavLink to={'/my-cart'} className=' px-5 py-3 font-medium text-secondary flex items-center gap-2 dark:text-gray-400' > <HiOutlineShoppingBag></HiOutlineShoppingBag> My Cart</NavLink></li>
                            <li onClick={handleLogout} ><a className=' px-5 py-3 font-medium text-secondary flex items-center gap-2 dark:text-gray-400' > <IoLogOutOutline></IoLogOutOutline> Logout</a></li>
                        </ul>
                    </div>
                    <div className='col-span-12 md:col-span-9'>
                        <div className='border border-gray-200 rounded-md p-8'>
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;