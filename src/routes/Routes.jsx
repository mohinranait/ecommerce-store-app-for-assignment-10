
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import BrandWishProduct from '../pages/BrandWish/BrandWishProduct';
import ProductDetails from '../pages/Details/ProductDetails';
import MyCart from '../pages/MyCart/MyCart';
import Dashboard from '../pages/user/Dashboard';
import Account from '../components/User/Account';
import AddProduct from '../components/User/AddProduct';
import AddBrand from '../components/User/AddBrand';
import ProtectRoute from './ProtectRoute';
import BrandLists from '../components/User/BrandLists';
import BrandUpdate from '../components/User/BrandUpdate';
import ProductLists from '../components/User/ProductLists';
import UpdateProduct from '../components/User/UpdateProduct';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import Shop from '../pages/Shop/Shop';

const myRoutes = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout />,
        errorElement : <NotFoundPage />,
        children : [
            {
                path : "/",
                loader : async () => await fetch('https://assignment-10-server-theta-ivory.vercel.app/products'),
                element : <Home />
            },
            {
                path : "/brand/:id",
                element : <BrandWishProduct />,
                loader : async ({params}) => await fetch(`https://assignment-10-server-theta-ivory.vercel.app/brands/${params.id}`), 
            },
            {
                path : "/shop",
                element : <Shop />,
                loader : async () => await fetch('https://assignment-10-server-theta-ivory.vercel.app/products'), 
            },
            {
                path : "/my-cart",
                element : <ProtectRoute> <MyCart /></ProtectRoute>
            },
            {
                path : "/products/:id",
                element : <ProtectRoute>  <ProductDetails /> </ProtectRoute>,
                loader : async ({params}) => await fetch(`https://assignment-10-server-theta-ivory.vercel.app/products/${params.id}`), 
            },
            {
                path : "/dashboard",
                element : <ProtectRoute><Dashboard /></ProtectRoute> ,
                children : [
                    {
                        path : "/dashboard",
                        element : <Account />
                    },
                    {
                        path : "/dashboard/add-product",
                        loader : async () => await fetch("https://assignment-10-server-theta-ivory.vercel.app/brands"),
                        element : <AddProduct />
                    },
                    {
                        path : "/dashboard/product-lists",
                        loader : async () => await fetch("https://assignment-10-server-theta-ivory.vercel.app/products"),
                        element : <ProductLists />
                    },
                    {
                        path : "/dashboard/products/:id",
                        loader : async ({params}) => await fetch(`https://assignment-10-server-theta-ivory.vercel.app/products/${params.id}`),
                        element : <UpdateProduct />
                    },
                    {
                        path : "/dashboard/add-brand",
                        element : <AddBrand />
                    },
                    {
                        path : "/dashboard/brands",
                        loader : async () => await fetch("https://assignment-10-server-theta-ivory.vercel.app/brands"),
                        element : <BrandLists />
                    },
                    {
                        path : "/dashboard/brands/:id",
                        loader : async ({params}) => await fetch(`https://assignment-10-server-theta-ivory.vercel.app/brands/${params.id}`),
                        element : <BrandUpdate />
                    }
                ]
            },
            {
                path : '/login',
                element : <Login />
            },
            {
                path : "/register",
                element : <Register />
            },
           
        ]
    }
]);

export default myRoutes;