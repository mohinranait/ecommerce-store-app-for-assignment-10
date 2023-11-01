import { Outlet } from 'react-router-dom';
import Header from '../Global/Header/Header';
import Footer from '../Global/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MobileMenu from '../Global/MobileMenu/MobileMenu';

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <MobileMenu />
            <ToastContainer />
        </>
    );
};

export default MainLayout;